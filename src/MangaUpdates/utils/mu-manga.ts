import type { MUSeriesModelV1 } from '../models/mu-api'

export type MangaInfoInput = Parameters<typeof App.createMangaInfo>[0]

const HTML_ENTITIES = {
    '&nbsp;': ' ',
    '&cent;': '¢',
    '&pound;': '£',
    '&yen;': '¥',
    '&euro;': '€',
    '&copy;': '©',
    '&reg;': '®',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&amp;': '&',
    '&apos;': '\'',
}

const IS_HENTAI_GENRE: Record<string, boolean> = {
    Adult: true,
    Hentai: true,
    Smut: true,
}

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
    const statusMatches =
        /\(([a-zA-Z]+)\)/g
            .exec(status)
            ?.slice(1)
            .map((match) => match.toLowerCase()) || []

    if (statusMatches.some((match) => match.includes('ongoing'))) {
        return 'ONGOING'
    }

    if (statusMatches.some((match) => match.includes('hiatus'))) {
        return 'HIATUS'
    }

    if (statusMatches.some((match) => match.includes('incomplete') || match.includes('discontinued'))) {
        return 'ABANDONED'
    }

    if (statusMatches.some((match) => match.includes('complete'))) {
        return 'COMPLETED'
    }

    return 'UNKNOWN'
}

function isHentai(manga: MUSeriesModelV1): boolean {
    return manga.genres?.some((genre) => IS_HENTAI_GENRE[genre?.genre || '']) || false
}

export function sanitiseString(str: string): string {
    return str
        .replace(/&[^;]+;/g, (entity) => {
            if (entity in HTML_ENTITIES) {
                return HTML_ENTITIES[entity as keyof typeof HTML_ENTITIES]
            }

            const hexMatch = entity.match(/^&#x([\da-fA-F]+);$/)
            const hexCode = hexMatch != null ? hexMatch[1] : undefined
            if (hexCode != null) {
                return String.fromCharCode(parseInt(hexCode, 16))
            }

            const decimalMatch = entity.match(/^&#(\d+);$/)
            const decimalCode = decimalMatch != null ? decimalMatch[1] : undefined
            if (decimalCode != null) {
                return String.fromCharCode(parseInt(decimalCode, 10))
            }

            return entity
        })
        .replace(/<br>/gi, '\n')
        .replace(/<\/?(i|u|b|em|a|span|div|!--)[^>]*>/gi, '')
}

export function parseMangaInfo(series: MUSeriesModelV1): MangaInfoInput {
    return {
        titles: [series.title, ...(series.associated || []).map((associated) => associated?.title)]
            .filter((title): title is string => !!title)
            .map(sanitiseString),
        desc: sanitiseString(series.description || ''),
        image: series.image?.url?.original || '',
        author:
            series.authors
                ?.filter((author) => author?.type === 'Author' && author.name)
                .map((author) => author.name)
                .join(', ') || 'Unknown',
        artist:
            series.authors
                ?.filter((author) => author?.type === 'Artist' && author.name)
                .map((author) => author.name)
                .join(', ') || 'Unknown',
        // The type for `status` is lies - it actually expects the string name of the enum value
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        status: parseStatus(series.status || '') as any,
        rating: series?.bayesian_rating,
        hentai: isHentai(series),
    }
}

export function assertNotLegacyMangaId(mangaId: string): void {
    // The shortest new ID I could find was 8 decimal digits, but all old
    // IDs are definitely <=6 decimal digits.
    if (mangaId.length <= 6) {
        throw new Error('This manga is tracked using a legacy ID. Please un-track and re-track it')
    }
}
