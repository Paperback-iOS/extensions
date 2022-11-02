import { ContentRating,
    DUIForm,
    PagedResults,
    SearchRequest,
    DUISection,
    SourceInfo,
    Request,
    Response,
    TrackerActionQueue, 
    MangaProviding,
    Searchable,
    MangaProgressProviding,
    SourceManga,
    MangaProgress,
    SourceIntents,
    Requestable} from '@paperback/types'
import { deleteMangaProgressMutation,
    getMangaProgressQuery,
    getMangaQuery,
    GraphQLQuery,
    saveMangaProgressMutation,
    searchMangaQuery,
    userProfileQuery } from './models/graphql-queries'
import * as AnilistUser from './models/anilist-user'
import * as AnilistPage from './models/anilist-page'
import * as AnilistManga from './models/anilist-manga'
import { AnilistResult } from './models/anilist-result'
import { getdefaultStatus,
    trackerSettings } from './AlSettings'
const ANILIST_GRAPHQL_ENDPOINT = 'https://graphql.anilist.co/'
const FALLBACK_IMAGE = 'https://via.placeholder.com/100x150'
export const AnilistInfo: SourceInfo = {
    name: 'Anilist',
    author: 'Faizan Durrani',
    contentRating: ContentRating.EVERYONE,
    icon: 'icon.png',
    version: '1.0.10',
    description: 'Anilist Tracker',
    authorWebsite: 'faizandurrani.github.io',
    websiteBaseURL: 'https://anilist.co',
    intents: SourceIntents.MANGA_TRACKING |
     SourceIntents.SETTINGS_UI
}

export class Anilist implements Searchable, MangaProgressProviding {
    requestManager = App.createRequestManager({
        requestsPerSecond: 2.5,
        requestTimeout: 20_000,
        interceptor: {
            // Authorization injector
            interceptRequest: async (request: Request): Promise<Request> => {
                const accessToken = await this.accessToken.get()
                request.headers = {
                    ...(request.headers ?? {}),
                    ...({
                        'content-type': 'application/json',
                        'accept': 'application/json'
                    }),
                    ...(accessToken != null ? {
                        'authorization': `Bearer ${accessToken}`
                    } : {})
                }
                return request
            },
            interceptResponse: async (response: Response): Promise<Response> => {
                return response
            }
        }
    });
    
    stateManager = App.createSourceStateManager();

    accessToken = {
        get: async (): Promise<string | undefined> => {
            return this.stateManager.keychain.retrieve('access_token') as Promise<string | undefined>
        },
        set: async (token: string | undefined): Promise<void> => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            await this.stateManager.keychain.store('access_token', token)
            await this.userInfo.refresh()
        },
        isValid: async (): Promise<boolean> => {
            return (await this.accessToken.get()) != null
        }
    };
    userInfo = {
        get: async (): Promise<AnilistUser.Viewer | undefined> => {
            return this.stateManager.retrieve('userInfo') as Promise<AnilistUser.Viewer | undefined>
        },
        isLoggedIn: async (): Promise<boolean> => {
            return (await this.userInfo.get()) != null
        },
        refresh: async (): Promise<void> => {
            const accessToken = await this.accessToken.get()
            if (accessToken == null) {
                return this.stateManager.store('userInfo', undefined)
            }
            const response = await this.requestManager.schedule(App.createRequest({
                url: ANILIST_GRAPHQL_ENDPOINT,
                method: 'POST',
                data: userProfileQuery()
            }), 0)
            const userInfo = AnilistResult<AnilistUser.Result>(response.data).data?.Viewer
            await this.stateManager.store('userInfo', userInfo)
        }
    };
    
    async getSearchResults(query: SearchRequest, metadata: unknown): Promise<PagedResults> {
        const pageInfo = metadata as AnilistPage.PageInfo | undefined
        // If there are no more results, we dont want to make extra calls to Anilist
        if (pageInfo?.hasNextPage === false) {
            return App.createPagedResults({ results: [], metadata: pageInfo })
        }
        const nextPage = (pageInfo?.currentPage ?? 0) + 1
        const response = await this.requestManager.schedule(App.createRequest({
            url: ANILIST_GRAPHQL_ENDPOINT,
            method: 'POST',
            data: searchMangaQuery(nextPage, query.title ?? '')
        }), 1)
        const anilistPage = AnilistResult<AnilistPage.Result>(response.data).data?.Page
        console.log(JSON.stringify(anilistPage, null, 2))
        return App.createPagedResults({
            results: anilistPage?.media.map(manga => App.createPartialSourceManga({
                image: manga.coverImage.large ?? '',
                title: manga.title.userPreferred,
                mangaId: manga.id.toString(),
                subtitle: undefined
            })) ?? [],
            metadata: anilistPage?.pageInfo
        })
    }

    async getMangaProgress(mangaId: string): Promise<MangaProgress | undefined> {
        const response = await this.requestManager.schedule(App.createRequest({
            url: ANILIST_GRAPHQL_ENDPOINT,
            method: 'POST',
            data: getMangaProgressQuery(parseInt(mangaId))
        }), 1)

        const anilistManga = AnilistResult<AnilistManga.Result>(response.data).data?.Media

        if (!anilistManga?.mediaListEntry) { return undefined }

        return App.createMangaProgress({
            mangaId: mangaId,

            lastReadChapterNumber: anilistManga.mediaListEntry.progress ?? 0,
            lastReadVolumeNumber: anilistManga.mediaListEntry.progressVolumes,

            trackedListName: anilistManga.mediaListEntry.status,
            userRating: anilistManga.mediaListEntry.score
        })
    }

    async getMangaProgressManagementForm(mangaId: string): Promise<DUIForm> {
        return App.createDUIForm({
            sections: async () => {
                const [response] = await Promise.all([
                    this.requestManager.schedule(App.createRequest({
                        url: ANILIST_GRAPHQL_ENDPOINT,
                        method: 'POST',
                        data: getMangaProgressQuery(parseInt(mangaId))
                    }), 1),
                    this.userInfo.refresh()
                ])

                const anilistManga = AnilistResult<AnilistManga.Result>(response.data).data?.Media
                const user = await this.userInfo.get()
                if (user == null) {
                    return [
                        App.createDUISection({
                            id: 'notLoggedInSection',
                            isHidden: false,
                            rows: async () => [
                                App.createDUILabel({
                                    id: 'notLoggedIn',
                                    label: 'Not Logged In'
                                })
                            ]
                        })
                    ]
                }
                
                if (anilistManga == null) {
                    throw new Error(`Unable to find Manga on Anilist with id ${mangaId}`)
                }

                return [
                    App.createDUISection({
                        id: 'userInfo',
                        isHidden: false,
                        rows: async () => [
                            App.createDUIHeader({
                                id: 'header',
                                imageUrl: user.avatar?.large ?? FALLBACK_IMAGE,
                                title: user.name ?? 'NOT LOGGED IN',
                                subtitle: ''
                            })
                        ]
                    }),
                    App.createDUISection({
                        id: 'information',
                        header: 'Information',
                        isHidden: false,
                        rows: async () => [
                            // This allows us to get the id when the form is submitted
                            ...(anilistManga.mediaListEntry != null ? [App.createDUILabel({
                                id: 'id',
                                label: 'Entry ID',
                                value: anilistManga.mediaListEntry?.id?.toString()
                            })] : []),
                            App.createDUILabel({
                                id: 'mediaId',
                                label: 'Manga ID',
                                value: anilistManga.id?.toString()
                            }),
                            App.createDUILabel({
                                id: 'mangaTitle',
                                label: 'Title',
                                value: anilistManga.title?.userPreferred ?? 'N/A'
                            }),
                            App.createDUILabel({
                                id: 'mangaPopularity',
                                value: anilistManga.popularity?.toString() ?? 'N/A',
                                label: 'Popularity'
                            }),
                            App.createDUILabel({
                                id: 'mangaRating',
                                value: anilistManga.averageScore?.toString() ?? 'N/A',
                                label: 'Rating'
                            }),
                            App.createDUILabel({
                                id: 'mangaStatus',
                                value: anilistManga.status ?? 'N/A',
                                label: 'Status'
                            }),
                            App.createDUILabel({
                                id: 'mangaIsAdult',
                                value: anilistManga.isAdult?.toString() ?? 'N/A',
                                label: 'Is Adult'
                            })
                        ]
                    }),
                    App.createDUISection({
                        id: 'trackStatus',
                        header: 'Manga Status',
                        footer: 'Warning: Setting this to NONE will delete the listing from Anilist',
                        isHidden: false,
                        rows: async () => [
                            App.createDUISelect({
                                id: 'status',
                                value: App.createDUIBinding({
                                    get: async () => anilistManga.mediaListEntry?.status
                                        ? [anilistManga.mediaListEntry.status]
                                        : (await getdefaultStatus(this.stateManager))
                                }),
                                allowsMultiselect: false,
                                label: 'Status',
                                labelResolver: async (value) => {
                                    switch (value) {
                                        case 'CURRENT': return 'Reading'
                                        case 'PLANNING': return 'Planned'
                                        case 'COMPLETED': return 'Completed'
                                        case 'DROPPED': return 'Dropped'
                                        case 'PAUSED': return 'On-Hold'
                                        case 'REPEATING': return 'Re-Reading'
                                        default: return 'None'
                                    }
                                },
                                options: [
                                    'NONE',
                                    'CURRENT',
                                    'PLANNING',
                                    'COMPLETED',
                                    'DROPPED',
                                    'PAUSED',
                                    'REPEATING'
                                ]
                            })
                        ]
                    }),
                    App.createDUISection({
                        id: 'manage',
                        header: 'Progress',
                        isHidden: false,
                        rows: async () => [
                            App.createDUIStepper({
                                id: 'progress',
                                label: 'Chapter',
                                value: App.createDUIBinding({
                                    get: async () => anilistManga.mediaListEntry?.progress ?? 0 
                                }),
                                min: 0,
                                step: 1
                            }),
                            App.createDUIStepper({
                                id: 'progressVolumes',
                                label: 'Volume',
                                value: App.createDUIBinding({
                                    get: async () => anilistManga.mediaListEntry?.progressVolumes ?? 0 
                                }),
                                min: 0,
                                step: 1
                            })
                        ]
                    }),
                    App.createDUISection({
                        id: 'rateSection',
                        header: 'Rating',
                        footer: 'This uses your rating preference set on AniList',
                        isHidden: false,
                        rows: async () => [
                            App.createDUIStepper({
                                id: 'score',
                                label: 'Score',
                                value: App.createDUIBinding({
                                    get: async () => anilistManga.mediaListEntry?.score ?? 0
                                }),
                                min: 0,
                                max: this.scoreFormatLimit(user.mediaListOptions?.scoreFormat ?? 'POINT_10'),
                                step: user.mediaListOptions?.scoreFormat?.includes('DECIMAL') === true ? 0.1 : 1
                            })
                        ]
                    }),
                    App.createDUISection({
                        id: 'mangaNotes',
                        header: 'Notes',
                        isHidden: false,
                        rows: async () => [
                            App.createDUIInputField({
                                id: 'notes',
                                label: 'Notes',
                                value: App.createDUIBinding({ get: async () => anilistManga.mediaListEntry?.notes ?? '' }),
                            })
                        ]
                    })
                ]
            },
            onSubmit: async (values) => {
                let mutation: GraphQLQuery
                const status = values['status']?.[0] ?? ''
                const id = values['id'] != null ? Number(values['id']) : undefined
                if (status == 'NONE' && id != null) {
                    mutation = deleteMangaProgressMutation(id)
                }
                else {
                    mutation = saveMangaProgressMutation({
                        id: id,
                        mediaId: Number(values['mediaId']),
                        status: status,
                        notes: values['notes'],
                        progress: values['progress'],
                        progressVolumes: values['progressVolumes'],
                        score: Number(values['score'])
                    })
                }
                console.log(JSON.stringify(mutation, null, 2))
                await this.requestManager.schedule(App.createRequest({
                    url: ANILIST_GRAPHQL_ENDPOINT,
                    method: 'POST',
                    data: mutation
                }), 1)
            }
        })
    }

    async getMangaDetails(mangaId: string): Promise<SourceManga> {
        const response = await this.requestManager.schedule(App.createRequest({
            url: ANILIST_GRAPHQL_ENDPOINT,
            method: 'POST',
            data: getMangaQuery(parseInt(mangaId))
        }), 1)
        const anilistManga = AnilistResult<AnilistManga.Result>(response.data).data?.Media
        if (anilistManga == null) {
            return Promise.reject()
        }
        return App.createSourceManga({
            id: mangaId,
            mangaInfo: App.createMangaInfo({
                image: anilistManga.coverImage?.extraLarge ?? '',
                titles: [
                    anilistManga.title?.romaji,
                    anilistManga.title?.english,
                    anilistManga.title?.native
                ].filter(x => x != null) as string[],
                artist: anilistManga.staff?.edges?.find(x => x?.role?.toLowerCase() == 'art')?.node?.name?.full ?? 'Unknown',
                author: anilistManga.staff?.edges?.find(x => x?.role?.toLowerCase() == 'story')?.node?.name?.full ?? 'Unknown',
                desc: anilistManga?.description || '',
                hentai: anilistManga.isAdult,
                rating: anilistManga.averageScore,
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                status: anilistManga.status,
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                banner: anilistManga.bannerImage
            })
        })
    }

    async getSourceMenu(): Promise<DUISection> {
        return App.createDUISection({
            id: 'sourceMenu',
            header: 'Source Menu',
            isHidden: false,
            rows: async () => {
                const isLoggedIn = await this.userInfo.isLoggedIn()
                if (isLoggedIn)
                    return [
                        trackerSettings(this.stateManager),
                        App.createDUILabel({
                            id: 'userInfo',
                            label: 'Logged-in as',
                            value: (await this.userInfo.get())?.name ?? 'ERROR'
                        }),
                        App.createDUIButton({
                            id: 'logout',
                            label: 'Logout',
                            onTap: async () => {
                                await this.accessToken.set(undefined)
                            }
                        })
                    ]
                else
                    return [
                        trackerSettings(this.stateManager),
                        App.createDUIOAuthButton({
                            id: 'anilistLogin',
                            authorizeEndpoint: 'https://anilist.co/api/v2/oauth/authorize',
                            clientId: '5459',
                            label: 'Login with Anilist',
                            responseType: {
                                type: 'token'
                            },
                            successHandler: async (token) => {
                                await this.accessToken.set(token)
                            }
                        })
                    ]
            }
        })
    }

    async processChapterReadActionQueue(actionQueue: TrackerActionQueue): Promise<void> {
        await this.userInfo.refresh()

        const chapterReadActions = await actionQueue.queuedChapterReadActions()
        
        for (const readAction of chapterReadActions) {
            try {
                const params = {
                    mediaId: readAction.mangaId,
                    progress: Math.floor(readAction.chapterNumber),
                    progressVolumes: readAction.volumeNumber ? Math.floor(readAction.volumeNumber) : undefined
                }
                const response = await this.requestManager.schedule(App.createRequest({
                    url: ANILIST_GRAPHQL_ENDPOINT,
                    method: 'POST',
                    data: saveMangaProgressMutation(params)
                }), 0)
                if (response.status < 400) {
                    await actionQueue.discardChapterReadAction(readAction)
                }
                else {
                    console.log(`action failed: ${response.data}`)
                    await actionQueue.retryChapterReadAction(readAction)
                }
            }
            catch (error) {
                console.log(error)
                await actionQueue.retryChapterReadAction(readAction)
            }
        }
    }

    scoreFormatLimit(format: AnilistUser.ScoreFormat): number | undefined {
        const extracted = /\d+/gi.exec(format)?.[0]
        return extracted != null ? Number(extracted) : undefined
    }
}
