import type CID from "cids";
import * as Preserve from "@truffle/preserve";
import type { IpfsClient } from "./ipfs-adapter";
export interface UploadOptions {
    controls: Preserve.Controls;
    source: Preserve.Targets.Normalized.Source;
    ipfs: IpfsClient;
}
export interface UploadResult {
    cid: CID;
}
export declare function upload(options: UploadOptions): Preserve.Process<UploadResult>;
