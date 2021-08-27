import { grpc } from '@improbable-eng/grpc-web';
import { ContextInterface } from '@textile/context';
export interface ServiceError {
    message: string;
    code: number;
    metadata: grpc.Metadata;
}
export declare class GrpcConnection {
    context: ContextInterface;
    serviceHost: string;
    rpcOptions: grpc.RpcOptions;
    /**
     * Creates a new gRPC client instance for accessing the Textile Buckets API.
     * @param context The context to use for interacting with the APIs. Can be modified later.
     */
    constructor(context?: ContextInterface, debug?: boolean);
    unary<R extends grpc.ProtobufMessage, T extends grpc.ProtobufMessage, M extends grpc.UnaryMethodDefinition<R, T>>(methodDescriptor: M, req: R, ctx?: ContextInterface): Promise<T>;
}
