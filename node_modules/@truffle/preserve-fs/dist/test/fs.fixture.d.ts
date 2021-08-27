import * as Preserve from "@truffle/preserve";
export interface File {
    path: string;
    content: string;
}
export interface Test {
    name: string;
    files: File[];
    targeted: string;
    expected: Preserve.Targets.Stringified.Target;
    events: (Preserve.Control.Event & any)[];
}
export declare const tests: Test[];
