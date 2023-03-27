export interface Result {
    id?: number;
    synopsis?: string;
    title?: string;
    main_picture?: Image;
    mean?: number;
    alternative_titles?: Titles;
    nsfw?: 'white' | 'gray' | 'black' | null;
    popularity?: number;
    rank?: number;
    authors?: Authors[];
    status?: string;
    media_type?: 'unknown' | 'manga' | 'novel' | 'one_shot' | 'doujinshi' | 'manhwa' | 'manhua' | 'oel';
    my_list_status?: ListItem;
}

export interface ListItem {
    status?: string | null;
    score?: number;
    num_volumes_read?: number;
    num_chapters_read?: number;
    is_rereading?: boolean;
    start_date?: string | null;
    finish_date?: string | null;
    priority?: number;
    num_times_reread?: number;
    reread_value?: number;
    updated_at?: number;
    comments: string;
}

export interface Image {
    large?: string;
    medium?: string;
}

export interface Authors {
    node?: AuthorNode;
    role?: string;
}

export interface AuthorNode {
    id?: number;
    first_name?: string;
    last_name?: string;
}

export interface Titles {
    synonyms?: string[];
    en?: string;
    ja?: string;
}
