import type { MUSeriesSearchResponseV1 } from '../models/mu-api'

type ApiResult = Exclude<MUSeriesSearchResponseV1['results'], undefined>[0]

export interface ResultInfo {
    id: string;
    title: string;
    image: string;
}

export function parseSearchResults(results: ApiResult[]): ResultInfo[] {
    return results
        .map<ResultInfo | null>(result => {
        const id = result.record?.series_id
        const title = result.hit_title
        const image = result.record?.image?.url?.original ?? ''

        if (!id || !title) {
            console.log(`[parseSearchResults] ignoring invalid search result: ${JSON.stringify(result)}`)
            return null
        }

        return { id: String(id), title, image }
    })
        .filter((info): info is ResultInfo => info !== null)
}
