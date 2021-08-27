export declare interface WindowHeaders {
    get(key: string): string[];
    getAll(key: string): string[];
    has(key: string): boolean;
    delete(key: string): void;
    keys(): any;
    entries(): any;
    forEach(callback: (value: string, key: string) => void): any;
    append(key: string, value: string): void;
    set(key: string, value: string): void;
}
