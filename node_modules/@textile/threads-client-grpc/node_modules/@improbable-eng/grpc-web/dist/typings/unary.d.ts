import { Metadata } from "./metadata";
import { Code } from "./Code";
import { UnaryMethodDefinition } from "./service";
import { Request } from "./invoke";
import { RpcOptions } from "./client";
import { ProtobufMessage } from "./message";
export interface UnaryOutput<TResponse> {
    status: Code;
    statusMessage: string;
    headers: Metadata;
    message: TResponse | null;
    trailers: Metadata;
}
export interface UnaryRpcOptions<TRequest extends ProtobufMessage, TResponse extends ProtobufMessage> extends RpcOptions {
    host: string;
    request: TRequest;
    metadata?: Metadata.ConstructorArg;
    onEnd: (output: UnaryOutput<TResponse>) => void;
}
export declare function unary<TRequest extends ProtobufMessage, TResponse extends ProtobufMessage, M extends UnaryMethodDefinition<TRequest, TResponse>>(methodDescriptor: M, props: UnaryRpcOptions<TRequest, TResponse>): Request;
