import type * as Preserve from "@truffle/preserve";
import type { Buckets } from "@textile/hub";
export interface ClearOptions {
    controls: Preserve.Controls;
    buckets: Buckets;
    bucketKey: string;
}
export interface ConnectResult {
    buckets: Buckets;
    bucketKey: string;
}
export declare function clear(options: ClearOptions): Preserve.Process<void>;
