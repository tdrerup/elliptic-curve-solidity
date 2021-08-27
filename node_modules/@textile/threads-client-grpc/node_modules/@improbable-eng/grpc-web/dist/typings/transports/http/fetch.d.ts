import { TransportFactory } from "../Transport";
declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export declare type FetchTransportInit = Omit<RequestInit, "headers" | "method" | "body" | "signal">;
export declare function FetchReadableStreamTransport(init: FetchTransportInit): TransportFactory;
export declare function detectFetchSupport(): boolean;
export {};
