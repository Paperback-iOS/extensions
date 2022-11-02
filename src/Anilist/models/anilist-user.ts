export interface Result {
    Viewer: Viewer
}

export interface Viewer {
    id?:               number;
    name?:             string;
    options?:          Options;
    mediaListOptions?: MediaListOptions;
    avatar?:           Avatar;
}

export interface Avatar {
    large?: string;
}

export interface MediaListOptions {
    mangaList?:   MangaList;
    scoreFormat?: ScoreFormat;
}

export type ScoreFormat = 'POINT_100'
| 'POINT_10_DECIMAL' 
| 'POINT_10'
| 'POINT_5'
| 'POINT_3'

export interface MangaList {
    advancedScoringEnabled?: boolean;
}

export interface Options {
    displayAdultContent?: boolean;
}
