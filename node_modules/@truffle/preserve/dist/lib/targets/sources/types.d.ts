import type { Content } from "./contents";
export interface Entry {
    path: string;
    source: Source;
}
export interface Container {
    entries: Iterable<Entry> | AsyncIterable<Entry>;
}
export declare type Source = Content | Container;
export declare const isContainer: (source: Source) => source is Container;
export declare const isContent: (source: Source) => source is Content;
