import { LotusClient } from "filecoin.js";
import type * as Preserve from "@truffle/preserve";
export interface ConnectOptions {
    url: string;
    token?: string;
    controls: Preserve.Controls;
}
export declare function connect(options: ConnectOptions): Preserve.Process<LotusClient>;
interface CreateLotusClientOptions {
    url: string;
    token?: string;
}
export declare const createLotusClient: (options: CreateLotusClientOptions) => LotusClient;
export {};
