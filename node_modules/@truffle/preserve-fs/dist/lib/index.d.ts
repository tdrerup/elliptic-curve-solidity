/**
 * @module @truffle/preserve-fs
 */ /** */
import type * as Preserve from "@truffle/preserve";
export interface ExecuteOptions extends Preserve.Recipes.ExecuteOptions {
    inputs: {
        path: string;
    };
    settings: {
        verbose?: boolean;
    };
}
export interface ExecuteResult {
    "fs-target": Preserve.Target;
}
export declare class Recipe implements Preserve.Recipe {
    name: string;
    inputLabels: string[];
    outputLabels: string[];
    execute(options: ExecuteOptions): Preserve.Process<ExecuteResult>;
}
