import * as Preserve from "@truffle/preserve";
import type { FileObject } from "./ipfs-adapter";
export declare type SearchOptions = {
    source: Preserve.Targets.Normalized.Source;
    path?: string;
};
export declare const search: ({ source, path }: SearchOptions) => AsyncIterable<FileObject>;
