/**
 * @module @truffle/preserve-to-filecoin
 */ /** */
import type CID from "cids";
import * as Preserve from "@truffle/preserve";
import { StorageDealOptions } from "./storage";
export declare const defaultAddress = "http://localhost:7777/rpc/v0";
export declare const defaultStorageDealOptions: {
    epochPrice: string;
    duration: number;
};
export interface ConstructorOptions extends Preserve.Recipes.ConstructorOptions {
    address: string;
    token?: string;
    storageDealOptions?: StorageDealOptions;
}
export interface PreserveOptions extends Preserve.Recipes.ExecuteOptions {
    inputs: {
        "fs-target": Preserve.Target;
        "ipfs-cid": CID;
    };
}
export interface Result {
    "filecoin-deal-cid": CID;
}
export declare class Recipe implements Preserve.Recipe {
    name: string;
    static help: string;
    inputLabels: string[];
    outputLabels: string[];
    private address;
    private token?;
    private storageDealOptions?;
    constructor(options: ConstructorOptions);
    execute(options: PreserveOptions): Preserve.Process<Result>;
}
