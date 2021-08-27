import type * as Preserve from "@truffle/preserve";
import { Buckets } from "@textile/hub";
export interface ConnectOptions {
    controls: Preserve.Controls;
    key: string;
    secret: string;
    bucketName: string;
}
export interface ConnectResult {
    buckets: Buckets;
    bucketKey: string;
}
export declare function connect(options: ConnectOptions): Preserve.Process<ConnectResult>;
