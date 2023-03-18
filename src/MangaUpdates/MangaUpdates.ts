import {
    SourceIntents,
    ContentRating,
    SourceInfo,
    SourceManga,
    SearchRequest,
    PagedResults,
    TrackerActionQueue,
    TrackedMangaChapterReadAction,
    Searchable,
    MangaProgressProviding,
    MangaInfo
} from '@paperback/types'

import {
    Credentials,
    validateCredentials,
    getUserCredentials,
    setUserCredentials,
    clearUserCredentials,
    getSessionToken,
    setSessionToken,
    clearSessionToken,
    getLoginTime,
    loggableRequest,
    loggableResponse
} from './utils/mu-session'
import {
    parseMangaInfo,
    getIdFromPage
} from './utils/mu-manga'
import {
    parseSearchResults
} from './utils/mu-search'

import type {
    Endpoint,
    Verb,
    Request,
    Response,
    BaseRequest
} from './models/index'
import type {
    MUListsSeriesModelUpdateV1
} from './models/mu-api'

interface MangaFormValues {
    mangaId: string;
    mangaTitle: string;
    mangaRating: string;
    mangaStatus: string;
    mangaIsAdult: string;
    isInList: 'Yes' | 'No';
    listId: [
        string
    ];
    chapterProgress: number;
    volumeProgress: number;
    userRating: number;
}
interface ParsedAction {
    action: TrackedMangaChapterReadAction;
    isUpdate: boolean;
    payload: MUListsSeriesModelUpdateV1;
}

const FALLBACK_PROFILE_IMAGE = 'https://cdn.mangaupdates.com/avatar/a0.gif'
const DEFAULT_LIST_ID = 0 // Reading List

export const MangaUpdatesInfo: SourceInfo = {
    name: 'MangaUpdates',
    author: 'IntermittentlyRupert',
    contentRating: ContentRating.EVERYONE,
    icon: 'icon.png',
    version: '2.0.2',
    description: 'MangaUpdates Tracker',
    websiteBaseURL: 'https://www.mangaupdates.com',
    intents: SourceIntents.MANGA_TRACKING |
     SourceIntents.SETTINGS_UI
}

export class MangaUpdates implements Searchable, MangaProgressProviding {
    stateManager = App.createSourceStateManager();

    requestManager = App.createRequestManager({
        requestsPerSecond: 5,
        requestTimeout: 10000
    });

    ////////////////////
    // Public API
    ////////////////////
    async getTrackedManga(mangaId: string): Promise<SourceManga> {
        const logPrefix = '[getTrackedManga]'
        console.log(`${logPrefix} starts`)
        try {
            console.log(`${logPrefix} loading id=${mangaId}`)
            const mangaInfo = await this.getMangaInfo(mangaId)
            const trackedManga = App.createSourceManga({
                id: mangaId,
                mangaInfo: App.createMangaInfo(mangaInfo)
            })
            console.log(`${logPrefix} complete`)
            return trackedManga
        }
        catch (e) {
            console.log(`${logPrefix} error`)
            console.log(e)
            throw e
        }
    }

    getMangaForm(mangaId: string): Form {
        return App.createForm({
            sections: async () => {
                try {
                    const username = (await getUserCredentials(this.stateManager))?.username
                    if (!username) {
                        return [
                            App.createSection({
                                id: 'notLoggedInSection',
                                rows: () => Promise.resolve([
                                    App.createLabel({
                                        id: 'notLoggedIn',
                                        label: 'Not Logged In',
                                        value: undefined
                                    })
                                ])
                            })
                        ]
                    }
                    const canonicalId = await this.getCanonicalId(mangaId)
                    const [userProfile, mangaInfo, mangaLists, progressInfo, ratingInfo] = await Promise.all([
                        this.request('/v1/account/profile', 'GET', {}),
                        this.getMangaInfo(canonicalId),
                        this.request('/v1/lists', 'GET', {}),
                        this.request('/v1/lists/series/{seriesId}', 'GET', {
                            params: { seriesId: canonicalId },
                            query: {}
                        }, false),
                        this.request('/v1/series/{id}/rating', 'GET', {
                            params: { id: canonicalId }
                        }, false)
                    ])
                    const oldIdWarning: FormRow[] = []
                    if (mangaId !== canonicalId) {
                        oldIdWarning.push(App.createLabel({
                            id: 'legacyMangaId',
                            label: 'Legacy Manga ID',
                            value: mangaId
                        }), App.createLabel({
                            id: 'oldIdWarning',
                            label: 'WARNING',
                            value: 'This manga is tracked using a legacy MangaUpdates ID. Un-track and re-track this manga to improve tracking performance and reliability!'
                        }))
                    }
                    const listNamesById = Object.fromEntries([
                        ...mangaLists
                            .filter(list => list.list_id != undefined && list.title != undefined)
                            .map(list => [String(list.list_id), list.title || '']),
                        ['-1', 'None']
                    ])
                    const listOptions = Object.keys(listNamesById)
                    const listId = String(progressInfo?.list_id ?? -1)
                    const chapterProgress = progressInfo?.status?.chapter ?? 0
                    const volumeProgress = progressInfo?.status?.volume ?? 0
                    const userRating = ratingInfo?.rating ?? 0
                    return [
                        App.createSection({
                            id: 'userInfo',
                            rows: () => Promise.resolve([
                                App.createHeader({
                                    id: 'header',
                                    imageUrl: userProfile.avatar?.url || FALLBACK_PROFILE_IMAGE,
                                    title: username,
                                    subtitle: '',
                                    value: undefined
                                })
                            ])
                        }),
                        App.createSection({
                            id: 'information',
                            header: 'Information',
                            rows: () => Promise.resolve([
                                App.createLabel({
                                    id: 'mangaId',
                                    label: 'Manga ID',
                                    value: canonicalId
                                }),
                                ...oldIdWarning,
                                App.createLabel({
                                    id: 'mangaTitle',
                                    label: 'Title',
                                    value: mangaInfo.titles[0]
                                }),
                                App.createLabel({
                                    id: 'mangaRating',
                                    value: mangaInfo.rating?.toString() ?? 'N/A',
                                    label: 'Rating'
                                }),
                                App.createLabel({
                                    id: 'mangaStatus',
                                    value: mangaInfo.status.toString(),
                                    label: 'Status'
                                }),
                                App.createLabel({
                                    id: 'mangaIsAdult',
                                    value: mangaInfo.hentai?.toString() ?? 'N/A',
                                    label: 'Is Adult'
                                })
                            ])
                        }),
                        App.createSection({
                            id: 'trackList',
                            header: 'Manga List',
                            footer: 'Warning: Setting this to "None" will delete the listing from MangaUpdates',
                            rows: () => Promise.resolve([
                                App.createLabel({
                                    id: 'isInList',
                                    value: progressInfo ? 'Yes' : 'No',
                                    label: 'Tracked on MangaUpdates?'
                                }),
                                App.createSelect({
                                    id: 'listId',
                                    value: [listId],
                                    allowsMultiselect: false,
                                    label: 'List',
                                    displayLabel: (value) => listNamesById[value] || '<unknown list>',
                                    options: listOptions
                                })
                            ])
                        }),
                        App.createSection({
                            id: 'manage',
                            header: 'Progress',
                            rows: () => Promise.resolve([
                                App.createStepper({
                                    id: 'chapterProgress',
                                    label: 'Chapter',
                                    value: chapterProgress,
                                    min: 0,
                                    step: 1
                                }),
                                App.createStepper({
                                    id: 'volumeProgress',
                                    label: 'Volume',
                                    value: volumeProgress,
                                    min: 0,
                                    step: 1
                                })
                            ])
                        }),
                        App.createSection({
                            id: 'rating',
                            header: 'User Rating',
                            footer: 'Warning: Setting this to 0 will delete the rating from MangaUpdates',
                            rows: () => Promise.resolve([
                                App.createStepper({
                                    id: 'userRating',
                                    label: 'My Rating',
                                    value: Math.round(userRating),
                                    min: 0,
                                    max: 10,
                                    step: 1
                                }),
                            ])
                        }),
                    ]
                }
                catch (e) {
                    console.log('[getMangaForm] failed to render manga form')
                    console.log(e)
                    return [
                        App.createSection({
                            id: 'errorInfo',
                            rows: () => Promise.resolve([
                                App.createLabel({
                                    id: 'errorMessage',
                                    label: String(e),
                                    value: undefined
                                })
                            ])
                        }),
                    ]
                }
            },
            onSubmit: (values) => this.handleMangaFormChanges(values),
            validate: () => Promise.resolve(true)
        })
    }

    async getSourceMenu(): Promise<Section> {
        return App.createSection({
            id: 'sourceMenu',
            header: 'Source Menu',
            rows: async () => {
                const [credentials, sessionToken] = await Promise.all([
                    getUserCredentials(this.stateManager),
                    getSessionToken(this.stateManager)
                ])
                if (credentials?.username) {
                    return [
                        App.createLabel({
                            id: 'userInfo',
                            label: 'Logged-in as',
                            value: credentials.username
                        }),
                        App.createLabel({
                            id: 'loginTime',
                            label: 'Session started at',
                            value: getLoginTime(sessionToken)
                        }),
                        App.createButton({
                            id: 'refresh',
                            label: 'Refresh session',
                            value: undefined,
                            onTap: () => this.refreshSession()
                        }),
                        App.createButton({
                            id: 'logout',
                            label: 'Logout',
                            value: undefined,
                            onTap: () => this.logout()
                        })
                    ]
                }
                return [
                    App.createNavigationButton({
                        id: 'loginButton',
                        label: 'Login',
                        value: undefined,
                        form: App.createForm({
                            sections: () => Promise.resolve([
                                App.createSection({
                                    id: 'username_section',
                                    header: 'Username',
                                    footer: 'Enter your MangaUpdates account username',
                                    rows: () => Promise.resolve([
                                        App.createInputField({
                                            id: 'username',
                                            placeholder: 'Username',
                                            value: '',
                                            maskInput: false
                                        }),
                                    ])
                                }),
                                App.createSection({
                                    id: 'password_section',
                                    header: 'Password',
                                    footer: 'Enter the password associated with your MangaUpdates account Username',
                                    rows: () => Promise.resolve([
                                        App.createInputField({
                                            id: 'password',
                                            placeholder: 'Password',
                                            value: '',
                                            maskInput: true
                                        }),
                                    ])
                                }),
                            ]),
                            onSubmit: (values) => this.login(values),
                            validate: () => Promise.resolve(true)
                        })
                    }),
                ]
            }
        })
    }

    async getSearchResults(query: SearchRequest, metadata?: {
        nextPage?: number;
    }): Promise<PagedResults> {
        const logPrefix = '[getSearchResults]'
        console.log(`${logPrefix} starts`)
        try {
            const search = query.title || ''
            const page = metadata?.nextPage ?? 1
            const perpage = 25
            // MangaUpdates will return an error for empty search strings
            if (!search || page < 1) {
                console.log(`${logPrefix} no need to search: ${JSON.stringify({ search, page })}`)
                return App.createPagedResults({ results: [], metadata: { nextPage: -1 } })
            }
            console.log(`${logPrefix} searching for "${search}" (page=${page})`)
            const response = await this.request('/v1/series/search', 'POST', {
                body: {
                    search,
                    page,
                    perpage
                }
            })
            const results = parseSearchResults(response.results || [])
            const hasNextPage = page * perpage < (response.total_hits ?? 0)
            const nextPage = hasNextPage ? page + 1 : -1
            console.log(`${logPrefix} got results: ${JSON.stringify({ results, nextPage })}`)
            const pagedResults = App.createPagedResults({
                results: results.map(result => App.createPartialSourceManga({
                    ...result,
                    title: result.title,
                    mangaId: undefined,
                    subtitle: undefined
                })),
                metadata: { nextPage }
            })
            console.log(`${logPrefix} complete`)
            return pagedResults
        }
        catch (e) {
            console.log(`${logPrefix} error`)
            console.log(e)
            throw e
        }
    }

    async processActionQueue(actionQueue: TrackerActionQueue): Promise<void> {
        const logPrefix = '[processActionQueue]'
        console.log(`${logPrefix} starts`)
        const chapterReadActions = await actionQueue.queuedChapterReadActions()
        console.log(`${logPrefix} found ${chapterReadActions.length} action(s)`)
        const operations = await Promise.all(chapterReadActions.map(action => this.parseAction(action)))
        // Apply the operations in bulk (MU has a ~5 second rate limit for these
        // APIs).
        //
        // There will almost always be 0 or 1 queued action so I'm not super
        // fussed about maximally parallelising this.
        const listUpdates = operations.filter(operation => operation.isUpdate)
        if (listUpdates.length > 0) {
            try {
                const updateBody = listUpdates.map(({ payload }) => payload)
                console.log(`${logPrefix} applying list updates: ${JSON.stringify(updateBody)}`)
                await this.request('/v1/lists/series/update', 'POST', { body: updateBody })
                await Promise.all(listUpdates.map(({ action }) => actionQueue.discardChapterReadAction(action)))
            }
            catch (e) {
                console.log(`${logPrefix} list updates failed`)
                console.log(e)
                await Promise.all(listUpdates.map(({ action }) => actionQueue.retryChapterReadAction(action)))
            }
        }
        const listAdditions = operations.filter(operation => !operation.isUpdate)
        if (listAdditions.length > 0) {
            try {
                const additionBody = listAdditions.map(({ payload }) => payload)
                console.log(`${logPrefix} applying list additions: ${JSON.stringify(additionBody)}`)
                await this.request('/v1/lists/series', 'POST', { body: additionBody })
                await Promise.all(listAdditions.map(({ action }) => actionQueue.discardChapterReadAction(action)))
            }
            catch (e) {
                console.log(`${logPrefix} list additions failed`)
                console.log(e)
                await Promise.all(listAdditions.map(({ action }) => actionQueue.retryChapterReadAction(action)))
            }
        }
        console.log(`${logPrefix} complete`)
    }

    ////////////////////
    // Session Management
    ////////////////////
    private async login(credentials: Credentials): Promise<void> {
        const logPrefix = '[login]'
        console.log(`${logPrefix} starts`)
        if (!validateCredentials(credentials)) {
            console.error(`${logPrefix} login called with invalid credentials: ${JSON.stringify(credentials)}`)
            throw new Error('Must provide a username and password!')
        }
        try {
            const result = await this.request('/v1/account/login', 'PUT', {
                body: credentials
            })
            const sessionToken = result.context?.session_token
            if (!sessionToken) {
                console.log(`${logPrefix} no session token on response: ${JSON.stringify(result)}`)
                throw new Error('no session token on response')
            }
            await Promise.all([
                setUserCredentials(this.stateManager, credentials),
                setSessionToken(this.stateManager, sessionToken)
            ])
            console.log(`${logPrefix} complete`)
        }
        catch (e) {
            console.log(`${logPrefix} failed to log in`)
            console.log(e)
            throw new Error('Login failed!')
        }
    }

    private async refreshSession(): Promise<void> {
        const logPrefix = '[refreshSession]'
        console.log(`${logPrefix} starts`)
        const credentials = await getUserCredentials(this.stateManager)
        if (!credentials) {
            console.log(`${logPrefix} no credentials available, unable to refresh`)
            throw new Error('Could not find login credentials!')
        }
        await this.logout()
        await this.login(credentials)
        console.log(`${logPrefix} complete`)
    }

    private async logout(): Promise<void> {
        try {
            await this.request('/v1/account/logout', 'POST', {})
        }
        catch (e) {
            console.log('[logout] failed to delete session token')
            console.log(e)
        }
        await Promise.all([
            clearUserCredentials(this.stateManager),
            clearSessionToken(this.stateManager),
        ])
    }

    ////////////////////
    // Request Handlers
    ////////////////////
    private async getCanonicalId(mangaId: string): Promise<string> {
        const logPrefix = '[getCanonicalId]'
        // The shortest new ID I could find was 8 decimal digits, but all old
        // IDs are definitely <=6 decimal digits.
        if (mangaId.length > 6) {
            return mangaId
        }
        console.log(`${logPrefix} legacy ID detected: ${mangaId}`)
        const response = await this.requestManager.schedule(App.createRequest({
            url: `https://www.mangaupdates.com/series.html?id=${mangaId}`,
            method: 'GET'
        }), 1)
        if (response.status > 299) {
            console.log(`[${logPrefix}] failed to load page (${response.status}): ${response.data}`)
            throw new Error('failed to load canonical ID for ${mangaId}')
        }
        const canonicalId = getIdFromPage(this.cheerio, response.data)
        console.log(`${logPrefix} mapped to canonical ID: ${mangaId} --> ${canonicalId}`)
        return canonicalId
    }

    private async getMangaInfo(canonicalId: string): Promise<MangaInfo> {
        const logPrefix = '[getMangaInfo]'
        console.log(`${logPrefix} start: ${canonicalId}`)
        const series = await this.request('/v1/series/{id}', 'GET', {
            params: { id: canonicalId },
            query: {}
        })
        const mangaInfo = parseMangaInfo(series)
        console.log(`${logPrefix} complete: ${JSON.stringify(mangaInfo)}`)
        return mangaInfo
    }

    private async handleMangaFormChanges(values: MangaFormValues): Promise<void> {
        const logPrefix = '[handleMangaFormChanges]'
        console.log(`${logPrefix} starts: ${JSON.stringify(values)}`)
        try {
            const numericId = parseInt(values.mangaId)
            const isInList = values.isInList === 'Yes'
            const shouldDelete = values.listId[0] === '-1'
            const actions: Promise<unknown>[] = []
            if (shouldDelete) {
                console.log(`${logPrefix} deleting from list`)
                actions.push(this.request('/v1/lists/series/delete', 'POST', {
                    body: [numericId]
                }))
            }
            else {
                console.log(`${logPrefix} updating in list`)
                actions.push(this.request(isInList ? '/v1/lists/series/update' : '/v1/lists/series', 'POST', {
                    body: [{
                        series: { id: numericId },
                        list_id: parseInt(values.listId[0]),
                        status: {
                            volume: values.volumeProgress,
                            chapter: values.chapterProgress
                        }
                    }]
                }))
            }
            if (values.userRating > 0) {
                actions.push(this.request('/v1/series/{id}/rating', 'PUT', {
                    params: { id: values.mangaId },
                    body: { rating: values.userRating }
                }))
            }
            else {
                actions.push(this.request('/v1/series/{id}/rating', 'DELETE', {
                    params: { id: values.mangaId }
                }))
            }
            await Promise.all(actions)
            console.log(`${logPrefix} complete`)
        }
        catch (e) {
            console.log(`${logPrefix} failed`)
            console.log(e)
            throw e
        }
    }

    private async parseAction(action: TrackedMangaChapterReadAction): Promise<ParsedAction> {
        const canonicalId = await this.getCanonicalId(action.mangaId)
        const listInfo = await this.request('/v1/lists/series/{seriesId}', 'GET', {
            params: { seriesId: canonicalId },
            query: {}
        }, false)
        return {
            action,
            isUpdate: !!listInfo,
            payload: {
                series: { id: parseInt(canonicalId) },
                list_id: listInfo?.list_id ?? DEFAULT_LIST_ID,
                status: {
                    volume: Math.floor(action.volumeNumber) || 1,
                    chapter: Math.floor(action.chapterNumber) || 1
                }
            }
        }
    }

    ////////////////////
    // API Request
    ////////////////////
    private async getAuthHeader(): Promise<string> {
        const existingSessionToken = await getSessionToken(this.stateManager)
        if (existingSessionToken) {
            return `Bearer ${existingSessionToken}`
        }
        // If this is the user's first request after upgrading to v2 they may
        // have credentials but no API session token.
        const credentials = await getUserCredentials(this.stateManager)
        if (credentials) {
            await this.login(credentials)
            const newSessionToken = await getSessionToken(this.stateManager)
            if (newSessionToken) {
                return `Bearer ${newSessionToken}`
            }
        }
        throw new Error('You must be logged in!')
    }

    /** Will **resolve to undefined** if the response has a non-2xx status. */
    private async request<E extends Endpoint, V extends Verb<E>>(endpoint: E, verb: V, request: Request<E, V>, failOnErrorStatus: false, retryCount?: number): Promise<Response<E, V> | undefined>;
    
    /** Will **reject** if the response has a non-2xx status. */
    private async request<E extends Endpoint, V extends Verb<E>>(endpoint: E, verb: V, request: Request<E, V>, failOnErrorStatus?: boolean, retryCount?: number): Promise<Response<E, V>>;
    
    /** Will **reject** if the response has a non-2xx status. */
    private async request<E extends Endpoint, V extends Verb<E>>(endpoint: E, verb: V, request: Request<E, V>, failOnErrorStatus = true, retryCount = 1): Promise<Response<E, V>> {
        const logPrefix = `[request] ${verb} ${endpoint}`
        const isLogin = endpoint === '/v1/account/login'
        const baseRequest: Partial<BaseRequest> = request
        console.log(`${logPrefix} starts (failOnErrorStatus=${failOnErrorStatus}, retryCount=${retryCount}): ${loggableRequest(baseRequest)}`)
        const path = Object.entries(baseRequest.params || {})
            .filter((entry) => entry[1] != undefined)
            .map(([name, value]) => [`{${name}}`, String(value)] as const)
            .reduce((partialPath, [token, value]) => {
                if (!partialPath.includes(token)) {
                    console.log(`${logPrefix} endpoint '${endpoint}' does not contain ${token}!`)
                    throw new Error('endpoint is missing path parameter')
                }
                return endpoint.replace(token, String(value))
            }, endpoint as string)
        const query = Object.entries(baseRequest.query || {})
            .filter((entry) => entry[1] != undefined)
            .map(([name, value]) => `${name}=${encodeURIComponent(String(value))}`)
            .join('&')
        const headers: Record<string, string> = {
            'accept': 'application/json'
        }
        if (baseRequest.body) {
            headers['content-type'] = 'application/json'
        }
        if (!isLogin) {
            headers.authorization = await this.getAuthHeader()
        }
        const start = Date.now()
        const response = await this.requestManager.schedule(App.createRequest({
            url: `https://api.mangaupdates.com${path}`,
            method: verb,
            param: query,
            data: baseRequest.body ? JSON.stringify(baseRequest.body) : undefined,
            headers
        }), retryCount)
        const duration = Date.now() - start
        const responseBody = response.data ? JSON.parse(response.data) : undefined
        console.log(`${logPrefix} response: (HTTP ${response.status}, ${duration}ms): ${loggableResponse(responseBody)}`)
        const ok = response.status >= 200 && response.status < 300
        if (failOnErrorStatus && !ok) {
            console.log(`${logPrefix} failed`)
            throw new Error('Request failed!')
        }
        console.log(`${logPrefix} complete`)
        return responseBody
    }
}
