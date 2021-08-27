import * as Preserve from "@truffle/preserve";
export declare const preserveToIpfs: (target: Preserve.Target, address: string) => Promise<import("cids")>;
export declare const preserveToIpfsWithEvents: (target: Preserve.Target, address: string) => Promise<Preserve.Control.Event[]>;
