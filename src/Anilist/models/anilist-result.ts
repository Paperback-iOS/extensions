export function AnilistResult<Data>(json: string | unknown): AnilistResult<Data> {
    const result: AnilistResult<Data> = typeof json == 'string' ? JSON.parse(json) : json

    if (result.errors?.length ?? 0 > 0) {
        result.errors?.map(error => {
            console.log(`[ANILIST-ERROR(${error.status})] ${error.message}`)
        })
        throw new Error('Error while fetching data from Anilist, check logs for more info')
    }

    return result
}

interface AnilistResult<Data> {
    data?: Data;
    errors?: AnilistError[];
}
interface AnilistError {
    message: string;
    status: number;
}
