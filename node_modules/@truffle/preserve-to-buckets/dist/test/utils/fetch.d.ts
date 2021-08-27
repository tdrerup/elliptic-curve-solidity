import CID from "cids";
import * as Preserve from "@truffle/preserve";
import { IpfsClient, IpfsGetResults } from "../../lib/ipfs-adapter";
export interface FetchOptions {
    cid: CID;
    ipfs: IpfsClient;
}
export declare const fetch: ({ cid, ipfs }: FetchOptions) => Promise<Preserve.Target>;
declare type Collection = Map<string, CollectionNode>;
declare type CollectionNode = string | Collection;
export declare const convertResultsToTarget: (results: IpfsGetResults) => Promise<Preserve.Target>;
export declare const convertCollectionToSource: (collectionNode: CollectionNode) => Promise<Preserve.Targets.Source>;
export {};
