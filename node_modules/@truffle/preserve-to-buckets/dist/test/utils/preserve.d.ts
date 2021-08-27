import * as Preserve from "@truffle/preserve";
import { ConstructorOptions } from "../../lib";
export declare const preserveToBuckets: (target: Preserve.Target, environment: ConstructorOptions) => Promise<unknown>;
export declare const preserveToBucketsWithEvents: (target: Preserve.Target, environment: ConstructorOptions) => Promise<Preserve.Control.Event[]>;
