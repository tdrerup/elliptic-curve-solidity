/**
 * @packageDocumentation
 * @module @textile/threads-client
 */
import { grpc } from '@improbable-eng/grpc-web';
import { ThreadID } from '@textile/threads-id';
/**
 * Transaction represents a bulk transaction on a store.
 * @hidden
 */
export declare class Transaction<TRequest extends grpc.ProtobufMessage, TResponse extends grpc.ProtobufMessage> {
    protected readonly client: grpc.Client<TRequest, TResponse>;
    protected readonly threadID: ThreadID;
    protected readonly modelName: string;
    /**
     * Transaction creates a new transaction for the given store using the given model.
     * @param client The gRPC client to use for the transaction.
     * @param threadID the ID of the database
     * @param modelName The human-readable name for the model.
     */
    constructor(client: grpc.Client<TRequest, TResponse>, threadID: ThreadID, modelName: string);
    /**
     * end completes (flushes) the transaction. All operations between start and end will be applied as a single transaction upon a call to end.
     */
    end(): Promise<void>;
    /**
     * setReject rejects the current transaction, rather than flushing the results to the remote store via end.
     * @param reject A function which accepts a reason for rejecting the transaction.
     */
    protected setReject(reject: (reason?: any) => void): void;
}
