import * as Preserve from "@truffle/preserve";
export interface Test {
    name: string;
    target: Preserve.Target;
    events: (Preserve.Control.Event & any)[];
}
export declare const tests: Test[];
