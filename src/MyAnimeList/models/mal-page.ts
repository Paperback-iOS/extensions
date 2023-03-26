export interface Results {
    data: Result[]
    paging: PageInfo
}

export interface Result {
    node: Media
}

export interface Media {
    id: number;
    title: string;
    main_picture?: Image;
}

export interface Image {
    large?: string;
    medium?: string;
}

export interface PageInfo {
    previous?: string;
    next?: string;
}