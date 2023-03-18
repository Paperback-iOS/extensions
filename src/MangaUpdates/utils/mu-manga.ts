import type {
    MangaInfo
} from '@paperback/types'

import type {
    MUSeriesModelV1
} from '../models/mu-api'

const MANGA_CANONICAL_URL = 'link[rel="canonical"]'
const IS_HENTAI_GENRE: Record<string, boolean> = {
    Adult: true,
    Hentai: true,
    Smut: true
}

export type CheerioAPI = Tracker['cheerio'];

function parseStatus(status: string): 'ONGOING' | 'ABANDONED' | 'HIATUS' | 'COMPLETED' | 'UNKNOWN' {
    // NOTE: There can be a decent amount of variation in the format here.
    //
    // Series with multiple seasons (e.g. manhwa) may have something like:
    //
    //   > 38 Chapters (Ongoing)
    //   >
    //   > S1: 38 Chapters (Complete) 1~38
    //   > S2: (TBA)
    //
    // It might also be in reverse order (with the most recent season first)
    //
    // Cancelled series can have something like:
    //
    //   > 4 Volumes (Incomplete due to the artist's death)
    //
    // Make sure to handle everything we reasonably can.
    const statusMatches = /\(([a-zA-Z]+)\)/g.exec(status)?.slice(1).map(match => match.toLowerCase()) || []
    if (statusMatches.some(match => match.includes('ongoing'))) {
        return 'ONGOING'
    }
    if (statusMatches.some(match => match.includes('hiatus'))) {
        return 'HIATUS'
    }
    if (statusMatches.some(match => match.includes('incomplete') || match.includes('discontinued'))) {
        return 'ABANDONED'
    }
    if (statusMatches.some(match => match.includes('complete'))) {
        return 'COMPLETED'
    }
    return 'UNKNOWN'
}
function isHentai(manga: MUSeriesModelV1): boolean {
    return manga.genres?.some(genre => IS_HENTAI_GENRE[genre?.genre || '']) || false
}
export function parseMangaInfo(series: MUSeriesModelV1): MangaInfo {
    return {
        titles: [
            series.title,
            ...(series.associated || []).map(associated => associated?.title)
        ].filter((title): title is string => !!title),
        desc: series.description || '',
        image: series.image?.url?.original || '',
        author: series.authors?.filter(author => author?.type === 'Author' && author.name).map(author => author.name).join(', ') ?? 'Unknown',
        artist: series.authors?.filter(author => author?.type === 'Artist' && author.name).map(author => author.name).join(', ') ?? 'Unknown',
        // The type for `status` is lies - it actually expects the string name of the enum value
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        status: parseStatus(series.status || '') as any,
        rating: series?.bayesian_rating,
        hentai: isHentai(series),
        tags: [],
        covers: [],
        avgRating: 0,
        follows: 0,
        langFlag: 'Unknown',
        langName: 'unknown',
        users: 0,
        views: 0
    }
}
export function getIdFromPage($: CheerioAPI, html: string): string {
    const canonicalUrl = $(MANGA_CANONICAL_URL, html).attr('href')
    if (!canonicalUrl) {
        throw new Error('unable to find canonical URL')
    }
    const parsedUrl = /series\/([A-Za-z0-9]+)\//.exec(canonicalUrl)
    if (!parsedUrl) {
        throw new Error('unable to parse canonical URL')
    }
    const base36Id = parsedUrl[1] || ''
    const id = parseInt(base36Id, 36)
    if (!base36Id || isNaN(id)) {
        throw new Error('invalid canonical ID')
    }
    return String(id)
}
