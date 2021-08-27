import CID from "cids";
import type * as Preserve from "@truffle/preserve";
import type { LotusClient } from "filecoin.js";
export interface StorageDealOptions {
    walletAddress?: string;
    epochPrice?: string;
    duration?: number;
}
export interface ProposeStorageDealOptions {
    cid: CID;
    client: LotusClient;
    miners: string[];
    storageDealOptions: StorageDealOptions;
    controls: Preserve.Controls;
}
export interface StorageProposalResult {
    dealCid: CID;
}
export declare function proposeStorageDeal(options: ProposeStorageDealOptions): Preserve.Process<StorageProposalResult>;
