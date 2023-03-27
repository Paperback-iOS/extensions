import { Response } from '@paperback/types'

export function MalResult<MalResult>(response: Response): MalResult {
    if (response.status !== 200) {
        console.log(`[MAL-ERROR(${response.status})] ${JSON.stringify(response, null, 2)}`)
        throw new Error('Error while fetching data from MyAnimeList, check logs for more info')
    }

    const result: MalResult = typeof response.data == 'string' ? JSON.parse(response.data) : response.data
    return result
}

interface MalResult {
    data?: string;
}