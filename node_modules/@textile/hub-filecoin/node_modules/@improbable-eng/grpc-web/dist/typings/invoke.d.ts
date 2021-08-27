import { Code } from "./Code";
import { MethodDefinition } from "./service";
import { Metadata } from "./metadata";
import { RpcOptions } from "./client";
import { ProtobufMessage } from "./message";
export interface Request {
    close: () => void;
}
export interface InvokeRpcOptions<TRequest extends ProtobufMessage, TResponse extends ProtobufMessage> extends RpcOptions {
    host: string;
    request: TRequest;
    metadata?: Metadata.ConstructorArg;
    onHeaders?: (headers: Metadata) => void;
    onMessage?: (res: TResponse) => void;
    onEnd: (code: Code, message: string, trailers: Metadata) => void;
}
export declare function invoke<TRequest extends ProtobufMessage, TResponse extends ProtobufMessage, M extends MethodDefinition<TRequest, TResponse>>(methodDescriptor: M, props: InvokeRpcOptions<TRequest, TResponse>): Request;
