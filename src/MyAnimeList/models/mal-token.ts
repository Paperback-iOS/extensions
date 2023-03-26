export interface Data {
    split(arg0: string): unknown;
    token_type?: string;
    expires_in?: number;
    access_token?: string;
    refresh_token?: string;
}

export interface Tokens {
    expires_in: number;
    access_token: string;
    refresh_token?: string;
}