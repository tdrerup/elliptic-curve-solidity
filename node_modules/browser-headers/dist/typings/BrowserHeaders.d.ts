export interface Map<K, V> {
    clear(): void;
    delete(key: K): boolean;
    forEach(callbackfn: (value: V, index: K, map: Map<K, V>) => void, thisArg?: any): void;
    get(key: K): V | undefined;
    has(key: K): boolean;
    set(key: K, value?: V): this;
    readonly size: number;
}
export declare class BrowserHeaders {
    headersMap: {
        [key: string]: string[];
    };
    constructor(init?: BrowserHeaders.ConstructorArg, options?: {
        splitValues: boolean;
    });
    appendFromString(str: string): void;
    delete(key: string, value?: string): void;
    append(key: string, value: string | string[]): void;
    set(key: string, value: string | string[]): void;
    has(key: string, value?: string): boolean;
    get(key: string): string[];
    forEach(callback: (key: string, values: string[]) => void): void;
    toHeaders(): Headers;
}
export declare namespace BrowserHeaders {
    type HeaderObject = {
        [key: string]: string | string[];
    };
    type HeaderMap = Map<string, string | string[]>;
    type ConstructorArg = HeaderObject | HeaderMap | BrowserHeaders | Headers | string;
}
