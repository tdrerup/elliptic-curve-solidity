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
exports.ReadTransaction = void 0;
const threads_pb_1 = require("@textile/threads-client-grpc/threads_pb");
const Transaction_1 = require("./Transaction");
const decoder = new TextDecoder();
const encoder = new TextEncoder();
/**
 * ReadTransaction performs a read-only bulk transaction on the underlying store.
 * {@inheritDoc @textile/threads-client#Transaction}
 * @example
 * Create a new entry and check for it within a transaction
 * ```typescript
 * import {Client, ThreadID} from '@textile/threads'
 *
 * interface Astronaut {
 *   name: string
 *   missions: number
 *   _id: string
 * }
 *
 * async function createAndCheck (client: Client, threadID: ThreadID) {
 *   const buzz: Astronaut = {
 *     name: 'Buzz',
 *     missions: 2,
 *     _id: '',
 *   }
 *
 *   const ids = await client.create(threadID, 'astronauts', [buzz])
 *   // Create and start transaction
 *   const t = client.readTransaction(threadID, 'astronauts')
 *   await t.start()
 *   const has = await t.has(ids)
 *   console.log(has) // true
 *   await t.end() // Finish
 * }
 * ```
 */
class ReadTransaction extends Transaction_1.Transaction {
    constructor(context, client, threadID, modelName) {
        super(client, threadID, modelName);
        this.context = context;
        this.client = client;
        this.threadID = threadID;
        this.modelName = modelName;
    }
    /**
     * start begins the transaction. All operations between start and end will be applied as a single transaction upon a call to end.
     */
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            const startReq = new threads_pb_1.StartTransactionRequest();
            startReq.setDbid(this.threadID.toBytes());
            startReq.setCollectionname(this.modelName);
            const req = new threads_pb_1.ReadTransactionRequest();
            req.setStarttransactionrequest(startReq);
            const metadata = JSON.parse(JSON.stringify(this.context));
            this.client.start(metadata);
            this.client.send(req);
        });
    }
    /**
     * has checks whether a given instance exists in the given store.
     * @param IDs An array of instance ids to check for.
     */
    has(IDs) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const hasReq = new threads_pb_1.HasRequest();
                hasReq.setInstanceidsList(IDs);
                const req = new threads_pb_1.ReadTransactionRequest();
                req.setHasrequest(hasReq);
                this.client.onMessage((message) => {
                    const reply = message.getHasreply();
                    const err = reply === null || reply === void 0 ? void 0 : reply.getTransactionerror();
                    if (err) {
                        reject(new Error(err));
                    }
                    resolve(reply ? reply.getExists() : false);
                });
                this.setReject(reject);
                this.client.send(req);
            });
        });
    }
    /**
     * find queries the store for entities matching the given query parameters. See Query for options.
     * @param query The object that describes the query. See Query for options. Alternatively, see QueryJSON for the basic interface.
     */
    find(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const findReq = new threads_pb_1.FindRequest();
                findReq.setQueryjson(encoder.encode(JSON.stringify(query)));
                const req = new threads_pb_1.ReadTransactionRequest();
                req.setFindrequest(findReq);
                this.client.onMessage((message) => {
                    const reply = message.getFindreply();
                    const err = reply === null || reply === void 0 ? void 0 : reply.getTransactionerror();
                    if (err) {
                        reject(new Error(err));
                    }
                    if (reply === undefined) {
                        resolve([]);
                    }
                    else {
                        const ret = reply
                            .getInstancesList_asU8()
                            .map((instance) => JSON.parse(decoder.decode(instance)));
                        resolve(ret);
                    }
                });
                this.setReject(reject);
                this.client.send(req);
            });
        });
    }
    /**
     * findByID queries the store for the id of an instance.
     * @param ID The id of the instance to search for.
     */
    findByID(ID) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const findReq = new threads_pb_1.FindByIDRequest();
                findReq.setInstanceid(ID);
                const req = new threads_pb_1.ReadTransactionRequest();
                req.setFindbyidrequest(findReq);
                this.client.onMessage((message) => {
                    const reply = message.getFindbyidreply();
                    const err = reply === null || reply === void 0 ? void 0 : reply.getTransactionerror();
                    if (err) {
                        reject(new Error(err));
                    }
                    if (reply === undefined) {
                        resolve(undefined);
                    }
                    else {
                        resolve(JSON.parse(decoder.decode(reply.getInstance_asU8())));
                    }
                });
                this.setReject(reject);
                this.client.send(req);
            });
        });
    }
}
exports.ReadTransaction = ReadTransaction;
//# sourceMappingURL=ReadTransaction.js.map