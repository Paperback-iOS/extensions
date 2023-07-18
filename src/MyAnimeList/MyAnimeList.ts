import {
    ContentRating,
    DUIForm,
    PagedResults,
    SearchRequest,
    DUISection,
    SourceInfo,
    Request,
    Response,
    TrackerActionQueue,
    Searchable,
    MangaProgressProviding,
    SourceManga,
    MangaProgress,
    SourceIntents
} from '@paperback/types'

import * as MalUser from './models/mal-user'
import * as MalManga from './models/mal-manga'
import * as MalPage from './models/mal-page'
import * as MalToken from './models/mal-token'
import { MalResult } from './models/mal-result'

import { stringify } from 'querystring'

import {
    getDefaultStatus,
    trackerSettings
} from './MALSettings'

const MYANIMELIST_API = 'https://api.myanimelist.net/v2'

export const MyAnimeListInfo: SourceInfo = {
    name: 'MyAnimeList',
    author: 'Netsky',
    contentRating: ContentRating.EVERYONE,
    icon: 'icon.png',
    version: '1.0.1',
    description: 'MyAnimeList Tracker',
    websiteBaseURL: 'https://myanimelist.net',
    intents: SourceIntents.MANGA_TRACKING | SourceIntents.SETTINGS_UI
}

export class MyAnimeList implements Searchable, MangaProgressProviding {
    stateManager = App.createSourceStateManager();

    requestManager = App.createRequestManager({
        requestsPerSecond: 2.5,
        requestTimeout: 20_000,
        interceptor: {
            // Authorization injector
            interceptRequest: async (request: Request): Promise<Request> => {
                const tokenData = await this.tokenData.get()

                if (tokenData?.expires_in && (tokenData.expires_in - 1296000) < (Date.now() / 1000)) {
                    console.log('Access token has expired, refreshing the access token!')
                    await this.tokenData.refresh()
                }

                request.headers = {
                    ...(request.headers ?? {}),
                    ...({
                        'accept': 'application/json'
                    }),
                    ...(tokenData != null ? {
                        'authorization': `Bearer ${tokenData.access_token}`
                    } : {})
                }
                return request
            },
            interceptResponse: async (response: Response): Promise<Response> => {
                return response
            }
        }
    });

    tokenData = {
        get: async (): Promise<MalToken.Data | undefined> => {
            return this.stateManager.keychain.retrieve('token_data') as Promise<MalToken.Data | undefined>
        },
        set: async (tokenData: MalToken.Data | undefined): Promise<void> => {
            await this.stateManager.keychain.store('token_data', tokenData)
            await this.userInfo.refresh()
        },
        isValid: async (): Promise<boolean> => {
            return (await this.tokenData.get()) != null
        },
        refresh: async (): Promise<void> => {
            await this.refreshAccessToken()
        }
    };

    userInfo = {
        get: async (): Promise<any | undefined> => {
            return this.stateManager.retrieve('userInfo') as Promise<any | undefined>
        },
        isLoggedIn: async (): Promise<boolean> => {
            return (await this.userInfo.get()) != null
        },
        refresh: async (): Promise<void> => {
            const tokenData = await this.tokenData.get()
            if (tokenData == null) {
                return this.stateManager.store('userInfo', undefined)
            }
            const response = await this.requestManager.schedule(App.createRequest({
                url: `${MYANIMELIST_API}/users/@me`,
                method: 'GET'
            }), 0)

            const userInfo = MalResult<MalUser.User>(response)
            await this.stateManager.store('userInfo', userInfo)
        }
    };


    async getSearchResults(query: SearchRequest, metadata: unknown): Promise<PagedResults> {
        const pageURL = metadata as string

        const response = await this.requestManager.schedule(App.createRequest({
            url: pageURL ?? `${MYANIMELIST_API}/manga?q=${encodeURI(query.title ?? '')}&nsfw=true`,
            method: 'GET'
        }), 1)

        const malPage = MalResult<MalPage.Results>(response)

        //console.log(JSON.stringify(malPage, null, 2)) // Log request data

        if (!malPage || malPage.data.length == 0) {
            return App.createPagedResults({ results: [], metadata: undefined })
        }

        return App.createPagedResults({
            results: malPage.data?.map(manga => App.createPartialSourceManga({
                image: manga.node.main_picture?.large ?? '',
                title: manga.node.title,
                mangaId: manga.node.id.toString(),
                subtitle: undefined
            })) ?? [],
            metadata: malPage.paging?.next
        })

    }

    async getMangaDetails(mangaId: string): Promise<SourceManga> {
        const response = await this.requestManager.schedule(App.createRequest({
            url: encodeURI(`${MYANIMELIST_API}/manga/${parseInt(mangaId)}?fields=id,title,main_picture,alternative_titles,synopsis,mean,rank,popularity,nsfw,media_type,status,my_list_status,num_volumes,num_chapters,authors{first_name,last_name}&nsfw=true`),
            method: 'GET'
        }), 1)

        const malManga = MalResult<MalManga.Result>(response)

        //console.log(JSON.stringify(malManga, null, 2)) // Log request data

        if (malManga == null) {
            return Promise.reject()
        }

        return App.createSourceManga({
            id: mangaId,
            mangaInfo: App.createMangaInfo({
                image: malManga.main_picture?.large ?? '',
                titles: [
                    malManga.title,
                    malManga.alternative_titles?.en,
                    malManga.alternative_titles?.ja
                ].filter(x => x != null) as string[],
                artist: this.formatStaffName(malManga.authors?.find(x => x?.role?.toLowerCase().includes('art'))?.node),
                author: this.formatStaffName(malManga.authors?.find(x => x?.role?.toLowerCase().includes('story'))?.node),
                desc: malManga?.synopsis || '',
                hentai: this.formatNSFW(malManga?.nsfw ?? ''),
                rating: malManga.mean,
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                status: this.formatStatus(malManga.status)
            })
        })
    }

    async getMangaProgress(mangaId: string): Promise<MangaProgress | undefined> {
        const response = await this.requestManager.schedule(App.createRequest({
            url: encodeURI(`${MYANIMELIST_API}/manga/${parseInt(mangaId)}?fields=my_list_status&nsfw=true`),
            method: 'GET'
        }), 1)

        const malManga = MalResult<MalManga.Result>(response)

        //console.log(JSON.stringify(malManga, null, 2)) // Log request data

        if (!malManga?.my_list_status) { return undefined }

        return App.createMangaProgress({
            mangaId: mangaId,

            lastReadChapterNumber: malManga?.my_list_status.num_chapters_read ?? 0,
            lastReadVolumeNumber: malManga?.my_list_status.num_volumes_read,

            trackedListName: malManga?.my_list_status.status ?? undefined,
            userRating: malManga?.my_list_status.score
        })
    }

    async getMangaProgressManagementForm(mangaId: string): Promise<DUIForm> {
        return App.createDUIForm({
            sections: async () => {
                const [response] = await Promise.all([
                    this.requestManager.schedule(App.createRequest({
                        url: encodeURI(`${MYANIMELIST_API}/manga/${parseInt(mangaId)}?fields=id,title,main_picture,alternative_titles,synopsis,mean,rank,popularity,nsfw,media_type,status,my_list_status,num_volumes,num_chapters,authors{first_name,last_name}&nsfw=true`),
                        method: 'GET'
                    }), 1),

                    this.userInfo.refresh()
                ])

                const malManga = MalResult<MalManga.Result>(response)

                //console.log(JSON.stringify(malManga, null, 2)) // Log request data

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

                if (malManga == null) {
                    throw new Error(`Unable to find Manga on MyAnimeList with id ${mangaId}`)
                }

                return [
                    App.createDUISection({
                        id: 'userInfo',
                        isHidden: false,
                        rows: async () => [
                            App.createDUIHeader({
                                id: 'header',
                                imageUrl: user.picture || '',
                                title: user.name ?? 'NOT LOGGED IN',
                                subtitle: ''
                            })
                        ]
                    }),
                    // Static items
                    App.createDUISection({
                        id: 'information',
                        header: 'Information',
                        isHidden: false,
                        rows: async () => [
                            App.createDUILabel({
                                id: 'mediaId',
                                label: 'Manga ID',
                                value: malManga.id?.toString()
                            }),
                            App.createDUILabel({
                                id: 'mangaTitle',
                                label: 'Title',
                                value: malManga.title ?? 'N/A'
                            }),
                            App.createDUILabel({
                                id: 'mangaRank',
                                value: malManga.rank?.toString() ?? 'N/A',
                                label: 'Rank'
                            }),
                            App.createDUILabel({
                                id: 'mangaPopularity',
                                value: malManga.popularity?.toString() ?? 'N/A',
                                label: 'Popularity'
                            }),
                            App.createDUILabel({
                                id: 'mangaRating',
                                value: malManga.mean?.toString() ?? 'N/A',
                                label: 'Rating'
                            }),
                            App.createDUILabel({
                                id: 'mangaStatus',
                                value: this.formatStatus(malManga.status),
                                label: 'Status'
                            }),
                            App.createDUILabel({
                                id: 'mangaIsAdult',
                                value: this.formatNSFW(malManga.nsfw ?? '') ? 'Yes' : 'No',
                                label: 'Is Adult'
                            })
                        ]
                    }),
                    // User interactive items
                    // Status
                    App.createDUISection({
                        id: 'trackStatus',
                        header: 'Manga Status',
                        footer: 'Warning: Setting this to NONE will delete the listing from MyAnimeList!',
                        isHidden: false,
                        rows: async () => [
                            App.createDUISelect({
                                id: 'status',
                                //@ts-ignore
                                value: malManga.my_list_status?.status ? [malManga.my_list_status.status] : await getDefaultStatus(this.stateManager),
                                allowsMultiselect: false,
                                label: 'Status',
                                labelResolver: async (value) => {
                                    return this.formatStatus(value)
                                },
                                options: [
                                    'NONE',
                                    'reading',
                                    'plan_to_read',
                                    'completed',
                                    'dropped',
                                    'on_hold'
                                ]
                            })
                        ]
                    }),
                    // Progress
                    App.createDUISection({
                        id: 'manage',
                        header: 'Progress',
                        isHidden: false,
                        rows: async () => [
                            App.createDUIStepper({
                                id: 'num_chapters_read',
                                label: 'Chapter',
                                //@ts-ignore
                                value: malManga.my_list_status?.num_chapters_read ?? 0,
                                min: 0,
                                step: 1
                            }),
                            App.createDUIStepper({
                                id: 'num_volumes_read',
                                label: 'Volume',
                                //@ts-ignore
                                value: malManga.my_list_status?.num_volumes_read ?? 0,
                                min: 0,
                                step: 1
                            })
                        ]
                    }),
                    // Rating
                    App.createDUISection({
                        id: 'rateSection',
                        header: 'Rating',
                        isHidden: false,
                        rows: async () => [
                            App.createDUIStepper({
                                id: 'score',
                                label: 'Score',
                                //@ts-ignore
                                value: malManga.my_list_status?.score ?? 0,
                                min: 0,
                                max: 10,
                                step: 1
                            })
                        ]
                    }),
                    // Re-read
                    App.createDUISection({
                        id: 'mangaReread',
                        header: 'Times Re-read',
                        isHidden: false,
                        rows: async () => [
                            App.createDUIStepper({
                                id: 'num_times_reread',
                                label: 'Re-read Amount',
                                //@ts-ignore
                                value: malManga.my_list_status?.reread_value ?? 0,
                                min: 0,
                                max: 100,
                                step: 1
                            })
                        ]
                    }),
                    // Notes
                    App.createDUISection({
                        id: 'mangaNotes',
                        header: 'Notes',
                        isHidden: false,
                        rows: async () => [
                            App.createDUIInputField({
                                id: 'notes',
                                label: 'Notes',
                                //@ts-ignore
                                value: malManga.my_list_status?.comments ?? ''
                            })
                        ]
                    })
                ]
            },
            onSubmit: async (values) => {
                const status = values['status']?.[0] ?? ''

                if (status == 'NONE' && mangaId != null) {
                    await this.requestManager.schedule(App.createRequest({
                        url: `${MYANIMELIST_API}/manga/${parseInt(mangaId)}/my_list_status&nsfw=true`,
                        method: 'DELETE'
                    }), 1)

                } else {
                    await this.requestManager.schedule(App.createRequest({
                        url: `${MYANIMELIST_API}/manga/${parseInt(mangaId)}/my_list_status`,
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/x-www-form-urlencoded'
                        },
                        data: stringify({
                            status: status,
                            num_chapters_read: Number(values['num_chapters_read']),
                            num_volumes_read: Number(values['num_volumes_read']),
                            score: Number(values['score']),
                            num_times_reread: Number(values['num_times_reread']),
                            comments: values['notes']
                        })
                    }), 1)
                }
            }
        })
    }

    async processChapterReadActionQueue(actionQueue: TrackerActionQueue): Promise<void> {
        await this.userInfo.refresh()

        const chapterReadActions = await actionQueue.queuedChapterReadActions()

        for (const readAction of chapterReadActions) {
            const mangaId = readAction.mangaId

            try {
                let params = {}

                if (Math.floor(readAction.chapterNumber) == 1 && !readAction.volumeNumber) {
                    params = {
                        status: 'reading', // Required for API the work properly
                        num_chapters_read: 1,
                        num_volumes_read: 1
                    }
                } else {
                    params = {
                        status: 'reading', // Required for API the work properly
                        num_chapters_read: Math.floor(readAction.chapterNumber),
                        num_volumes_read: readAction.volumeNumber ? Math.floor(readAction.volumeNumber) : undefined
                    }
                }

                const response = await this.requestManager.schedule(App.createRequest({
                    url: `${MYANIMELIST_API}/manga/${parseInt(mangaId)}/my_list_status&nsfw=true`,
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    data: stringify(params)
                }), 0)

                if (response.status < 400) {
                    await actionQueue.discardChapterReadAction(readAction)
                } else {
                    console.log(`Action failed: ${response.data}`)
                    await actionQueue.retryChapterReadAction(readAction)
                }

            } catch (error) {
                console.log(error)
                await actionQueue.retryChapterReadAction(readAction)
            }
        }
    }

    async getSourceMenu(): Promise<DUISection> {
        return App.createDUISection({
            id: 'sourceMenu',
            header: 'Source Menu',
            isHidden: false,
            rows: async () => {
                const isLoggedIn = await this.userInfo.isLoggedIn()
                if (isLoggedIn) {
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
                                await this.tokenData.set(undefined)
                            }
                        })
                    ]
                } else {
                    return [
                        App.createDUIOAuthButton({
                            id: 'malLogin',
                            authorizeEndpoint: 'https://myanimelist.net/v1/oauth2/authorize',
                            clientId: '004e72f9c4d8f5e6e8737d320246c0e3',
                            label: 'Login with MyAnimeList',
                            redirectUri: 'paperback://malAuth',
                            responseType: {
                                type: 'pkce',
                                pkceCodeLength: 64,
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore
                                pkceCodeMethod: 'plain',
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore
                                formEncodeGrant: true,
                                tokenEndpoint: 'https://myanimelist.net/v1/oauth2/token',
                            },
                            successHandler: async (accessToken: string, refreshToken?: string): Promise<void> => {
                                //eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                //@ts-ignore
                                const tokenBody = JSON.parse(Buffer.from(accessToken?.split('.')[1], 'base64'))

                                await this.tokenData.set({
                                    expires_in: tokenBody['exp'],
                                    access_token: accessToken,
                                    refresh_token: refreshToken
                                })
                            }
                        })
                    ]
                }
            }
        })
    }

    // Utility
    formatNSFW(label: string | null): boolean {
        switch (label) {
            case 'white':
                return false
            case 'gray':
                return false
            case 'black':
                return true
            default:
                return false
        }
    }

    formatStaffName(authorNode: MalManga.AuthorNode | undefined): string {
        if (!authorNode) {
            return 'Unknown'
        }

        return `${authorNode.first_name} ${authorNode.last_name}`
    }

    formatStatus(value: string | undefined): string {
        switch (value) {
            case 'reading': return 'Reading'
            case 'plan_to_read': return 'Planned'
            case 'completed': return 'Completed'
            case 'dropped': return 'Dropped'
            case 'on_hold': return 'On-Hold'

            case 'finished': return 'Finished'
            case 'currently_publishing': return 'Releasing'
            case 'not_yet_published': return 'Not Yet Released'

            case 'NONE': return 'None'

            default: return 'N/A'
        }
    }

    async refreshAccessToken(): Promise<void> {
        try {
            const tokenData = await this.tokenData.get()

            //console.log(JSON.stringify(tokenData, null, 2)) // Log request data

            const response = await this.requestManager.schedule(App.createRequest({
                url: 'https://myanimelist.net/v1/oauth2/token',
                method: 'POST',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                data: {
                    grant_type: 'refresh_token',
                    refresh_token: tokenData?.refresh_token,
                    client_id: '004e72f9c4d8f5e6e8737d320246c0e3'
                }
            }), 1)

            const newTokenData = MalResult<MalToken.Data>(response)
            if (newTokenData.access_token == null) {
                throw new Error('Unable to request new "access token", try logging out and back in!')
            }
            if (newTokenData.refresh_token == null) {
                throw new Error('Unable to request new "refresh token", try logging out and back in!')
            }

            //eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            const tokenBody = JSON.parse(Buffer.from(newTokenData.split('.')[1], 'base64'))

            // Set the new token data
            await this.tokenData.set({
                expires_in: tokenBody['exp'],
                access_token: newTokenData.access_token,
                refresh_token: newTokenData.refresh_token
            })

        } catch (error) {
            throw new Error(error as string)
        }
    }
}
