import type * as Preserve from "@truffle/preserve";
import type { LotusClient } from "filecoin.js";
export interface GetMinersOptions {
    client: LotusClient;
    controls: Preserve.Controls;
}
export declare function getMiners(options: GetMinersOptions): Preserve.Process<string[]>;
