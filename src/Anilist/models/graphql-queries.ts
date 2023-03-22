export interface GraphQLQuery {
    query: string
    variables?: unknown
}

export const userProfileQuery = (): GraphQLQuery => ({
    query: `{
        Viewer {
            id
            name
            avatar {
                large
            }
            mediaListOptions {
                scoreFormat
            }
            siteUrl
        }
    }`
})

export const searchMangaQuery = (page: number, search: string): GraphQLQuery => ({
    query: `query($page: Int, $search: String) {
        Page(page: $page) {
            pageInfo {
                currentPage
                hasNextPage
            }
            media(type: MANGA, search: $search, format_not: NOVEL) {
                id
                title {
                    userPreferred
                }
                coverImage {
                    large
                }
            }
        }
    }`,
    variables: {
        page,
        search
    }
})

export const getMangaQuery = (id: number): GraphQLQuery => ({
    query: `query($id: Int){
        Media(id: $id){
            id
            description(asHtml: false)
            title {
                romaji
                english
                native
            }
            coverImage{
                extraLarge
            }
            bannerImage
            averageScore
            isAdult
            popularity
            characters(sort: RELEVANCE, perPage: 25) {
                edges {
                    node {
                        image {
                            large
                        }
                        age
                    }
                    name
                    role
                }
            }
            staff {
                edges {
                    node {
                        name {
                            full
                        }
                        image {
                            large
                        }
                    }
                    role
                }
            }
            status
        }
    }`,
    variables: {
        id
    }
})

export const getMangaProgressQuery = (id: number): GraphQLQuery => ({
    query: `query($id: Int) {
        Media(id: $id) {
            id
            mediaListEntry {
                id
                status
                progress
                progressVolumes
                private
                score
                notes
                advancedScores
            }
            title {
                romaji
                english
                native
                userPreferred
            }
            coverImage {
                extraLarge
            }
            bannerImage
            averageScore
            isAdult
            popularity
            status
        }
    }`,
    variables: {
        id
    }
})

export interface SaveMangaProgressVariables {
    id?: number;
    mediaId?: number | string;
    status?: string;
    score?: number;
    private?: boolean;
    hiddenFromStatusLists?: boolean;
    progress?: number;
    progressVolumes?: number;
    notes?: string;
}

export const saveMangaProgressMutation = (variables: SaveMangaProgressVariables): GraphQLQuery => ({
    query: `mutation($id: Int, $mediaId: Int, $status: MediaListStatus, $score: Float, $progress: Int, $progressVolumes: Int, $notes: String, $private: Boolean, $hiddenFromStatusLists: Boolean) {
        SaveMediaListEntry(id: $id, mediaId: $mediaId, status: $status, score: $score, progress: $progress, progressVolumes: $progressVolumes, notes: $notes, private: $private, hiddenFromStatusLists: $hiddenFromStatusLists){
            id
        }
    }`,
    variables: variables
})

export const deleteMangaProgressMutation = (id: number): GraphQLQuery => ({
    query: `mutation($id: Int) {
        DeleteMediaListEntry(id: $id){
            deleted
        }
    }`,
    variables: {
        id
    }
})
