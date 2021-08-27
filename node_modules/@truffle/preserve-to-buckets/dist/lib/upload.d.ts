import CID from "cids";
import type * as Preserve from "@truffle/preserve";
import type { Buckets, Root } from "@textile/hub";
export interface UploadOptions {
    controls: Preserve.Controls;
    target: Preserve.Targets.Normalized.Target;
    buckets: Buckets;
    bucketKey: string;
}
export interface UploadResult extends Root {
    cid: CID;
}
export declare function upload(options: UploadOptions): Preserve.Process<UploadResult>;
