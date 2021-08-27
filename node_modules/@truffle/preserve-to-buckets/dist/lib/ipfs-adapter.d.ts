import type * as Preserve from "@truffle/preserve";
import createIpfsHttpClient from "ipfs-http-client";
export declare type IpfsClient = ReturnType<typeof createIpfsHttpClient>;
export interface FileObject {
    path: string;
    content: Preserve.Targets.Normalized.Sources.Content;
}
export declare type IpfsAddAllResults = ReturnType<IpfsClient["addAll"]>;
export interface IpfsGetResult {
    path: string;
    content?: AsyncIterable<Uint8Array>;
}
export declare type IpfsGetResults = AsyncIterable<IpfsGetResult>;
