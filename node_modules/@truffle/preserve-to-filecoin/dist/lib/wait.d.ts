import type CID from "cids";
import type * as Preserve from "@truffle/preserve";
import { DealState } from "./dealstates";
import type { LotusClient } from "filecoin.js";
import type { DealInfo } from "filecoin.js/builds/dist/providers/Types";
export interface WaitOptions {
    client: LotusClient;
    dealCid: CID;
    controls: Preserve.Controls;
}
export declare function wait(options: WaitOptions): Preserve.Process<void>;
export declare function getDealInfo(dealCid: CID, client: LotusClient): Promise<DealInfo>;
export declare function getDealState(dealInfo: DealInfo, client: LotusClient): Promise<DealState>;
