/**
 * @module @truffle/preserve-to-ipfs
 */ /** */
import type CID from "cids";
import * as Preserve from "@truffle/preserve";
export interface ExecuteOptions extends Preserve.Recipes.ExecuteOptions {
    inputs: {
        "fs-target": Preserve.Target;
    };
}
export interface Result {
    "ipfs-cid": CID;
}
export interface ConstructorOptions extends Preserve.Recipes.ConstructorOptions {
    address: string;
}
export declare const defaultAddress = "http://localhost:5001";
export declare class Recipe implements Preserve.Recipe {
    name: string;
    static help: string;
    inputLabels: string[];
    outputLabels: string[];
    private address;
    constructor(options: ConstructorOptions);
    execute(options: Preserve.Recipes.ExecuteOptions): Preserve.Process<Result>;
}
