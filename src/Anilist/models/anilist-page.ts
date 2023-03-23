export interface Result {
    Page: Page;
}

export interface Page {
    pageInfo: PageInfo;
    media: Media[];
}

export interface Media {
    id: number;
    title: Title;
    coverImage: CoverImage;
}

export interface CoverImage {
    large: string;
}

export interface Title {
    userPreferred: string;
}

export interface PageInfo {
    total: number;
    currentPage: number;
    lastPage: number;
    hasNextPage: boolean;
    perPage: number;
}
