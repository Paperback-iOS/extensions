export interface Result {
    Media: Media;
}

export interface Media {
    id?: number;
    description?: string;
    title?: Title;
    coverImage?: CoverImage;
    bannerImage?: string;
    averageScore?: number;
    isAdult?: boolean;
    popularity?: number;
    characters?: Characters;
    staff?: Staff;
    status?: string;
    mediaListEntry?: MediaListEntry;
}

export interface Characters {
    edges?: CharactersEdge[];
}

export interface CharactersEdge {
    node?: CharacterNode;
    name?: null;
    role?: Role;
}

export interface CharacterNode {
    image?: Image;
    age?: null | string;
}

export interface Image {
    large?: string;
}

export enum Role {
    Background = 'BACKGROUND',
    Main = 'MAIN',
    Supporting = 'SUPPORTING'
}

export interface CoverImage {
    extraLarge?: string;
}

export interface MediaListEntry {
    id?: number;
    status?: string;
    progress?: number;
    progressVolumes?: number;
    private?: boolean;
    score?: number;
    notes?: null;
    advancedScores?: AdvancedScores;
}

export interface AdvancedScores {
    Story?: number;
    Characters?: number;
    Visuals?: number;
    Audio?: number;
    Enjoyment?: number;
}

export interface Staff {
    edges?: StaffEdge[];
}

export interface StaffEdge {
    node?: StaffNode;
    role?: string;
}

export interface StaffNode {
    name?: Name;
    image?: Image;
}

export interface Name {
    full?: string;
}

export interface Title {
    romaji?: string;
    english?: string;
    native?: string;
    userPreferred?: string;
}
