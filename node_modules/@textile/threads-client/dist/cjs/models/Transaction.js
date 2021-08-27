"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
/**
 * @packageDocumentation
 * @module @textile/threads-client
 */
const grpc_web_1 = require("@improbable-eng/grpc-web");
/**
 * Transaction represents a bulk transaction on a store.
 * @hidden
 */
class Transaction {
    /**
     * Transaction creates a new transaction for the given store using the given model.
     * @param client The gRPC client to use for the transaction.
     * @param threadID the ID of the database
     * @param modelName The human-readable name for the model.
     */
    constructor(client, threadID, modelName) {
        this.client = client;
        this.threadID = threadID;
        this.modelName = modelName;
    }
    /**
     * end completes (flushes) the transaction. All operations between start and end will be applied as a single transaction upon a call to end.
     */
    end() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.client.onEnd((status, message) => {
                    if (status !== grpc_web_1.grpc.Code.OK) {
                        reject(new Error(message));
                    }
                    else {
                        resolve();
                    }
                });
                this.client.finishSend();
            });
        });
    }
    /**
     * setReject rejects the current transaction, rather than flushing the results to the remote store via end.
     * @param reject A function which accepts a reason for rejecting the transaction.
     */
    setReject(reject) {
        this.client.onEnd((status, message) => {
            if (status !== grpc_web_1.grpc.Code.OK) {
                reject(new Error(message));
            }
        });
    }
}
exports.Transaction = Transaction;
//# sourceMappingURL=Transaction.js.map