import { Metadata } from "../metadata";
import { MethodDefinition } from "../service";
import { ProtobufMessage } from "../message";
export interface Transport {
    sendMessage(msgBytes: Uint8Array): void;
    finishSend(): void;
    cancel(): void;
    start(metadata: Metadata): void;
}
export declare function setDefaultTransportFactory(t: TransportFactory): void;
export declare function makeDefaultTransport(options: TransportOptions): Transport;
export interface TransportOptions {
    methodDefinition: MethodDefinition<ProtobufMessage, ProtobufMessage>;
    debug: boolean;
    url: string;
    onHeaders: (headers: Metadata, status: number) => void;
    onChunk: (chunkBytes: Uint8Array, flush?: boolean) => void;
    onEnd: (err?: Error) => void;
}
export interface TransportFactory {
    (options: TransportOptions): Transport;
}
