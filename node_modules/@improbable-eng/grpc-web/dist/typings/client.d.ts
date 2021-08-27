import { Metadata } from "./metadata";
import { Code } from "./Code";
import { TransportFactory } from "./transports/Transport";
import { MethodDefinition } from "./service";
import { ProtobufMessage } from "./message";
export interface RpcOptions {
    transport?: TransportFactory;
    debug?: boolean;
}
export interface ClientRpcOptions extends RpcOptions {
    host: string;
}
export interface Client<TRequest extends ProtobufMessage, TResponse extends ProtobufMessage> {
    start(metadata?: Metadata.ConstructorArg): void;
    send(message: TRequest): void;
    finishSend(): void;
    close(): void;
    onHeaders(callback: (headers: Metadata) => void): void;
    onMessage(callback: (message: TResponse) => void): void;
    onEnd(callback: (code: Code, message: string, trailers: Metadata) => void): void;
}
export declare function client<TRequest extends ProtobufMessage, TResponse extends ProtobufMessage, M extends MethodDefinition<TRequest, TResponse>>(methodDescriptor: M, props: ClientRpcOptions): Client<TRequest, TResponse>;
