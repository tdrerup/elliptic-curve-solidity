/**
 * @module @truffle/preserve-to-buckets
 */ /** */
import * as Preserve from "@truffle/preserve";
import type CID from "cids";
export interface ExecuteOptions {
    "fs-target": Preserve.Target;
}
export interface Result {
    "ipfs-cid": CID;
}
export interface ConstructorOptions extends Preserve.Recipes.ConstructorOptions {
    key: string;
    secret: string;
    bucketName: string;
}
export declare class Recipe implements Preserve.Recipe {
    name: string;
    static help: string;
    inputLabels: string[];
    outputLabels: string[];
    private key;
    private secret;
    private bucketName;
    constructor(options: ConstructorOptions);
    execute(options: Preserve.Recipes.ExecuteOptions): Preserve.Process<Result>;
}
