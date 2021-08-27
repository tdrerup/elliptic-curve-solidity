import { Normalized, Stringified } from "../../lib/targets";
import { Target } from "../../lib";
export interface Test {
    name: string;
    raw: Target;
    normalized: Normalized.Target;
    stringified: Stringified.Target;
}
export declare const tests: Test[];
