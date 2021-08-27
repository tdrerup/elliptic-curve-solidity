import type * as Preserve from "@truffle/preserve";
import type { IpfsClient } from "./ipfs-adapter";
export interface ConnectOptions {
    controls: Preserve.Controls;
    address: string;
}
export declare function connect(options: ConnectOptions): Preserve.Process<IpfsClient>;
