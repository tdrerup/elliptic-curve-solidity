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
exports.WriteTransaction = void 0;
const threads_pb_1 = require("@textile/threads-client-grpc/threads_pb");
const Transaction_1 = require("./Transaction");
const decoder = new TextDecoder();
const encoder = new TextEncoder();
/**
 * WriteTransaction performs a mutating bulk transaction on the underlying store.
 * {@inheritDoc @textile/threads-client#Transaction}
 * @example
 * Create a new entry in our collection
 * ```typescript
 * import {Client, ThreadID} from '@textile/threads'
 *
 * interface Astronaut {
 *   name: string
 *   missions: number
 *   _id: string
 * }
 *
 * async function createBuzz (client: Client, threadID: ThreadID) {
 *   const buzz: Astronaut = {
 *     name: 'Buzz',
 *     missions: 2,
 *     _id: '',
 *   }
 *
 *   const t = client.writeTransaction(threadID, 'astronauts')
 *   await t.start()
 *   await t.create([buzz])
 *   await t.end() // Commit
 * }
 * ```
 *
 * @example
 * Abort an in-flight transaction
 * ```typescript
 * import {Client, ThreadID} from '@textile/threads'
 *
 * interface Astronaut {
 *   name: string
 *   missions: number
 *   _id: string
 * }
 *
 * async function createBuzz (client: Client, threadID: ThreadID) {
 *   const buzz: Astronaut = {
 *     name: 'Buzz',
 *     missions: 2,
 *     _id: '',
 *   }
 *
 *   const t = client.writeTransaction(threadID, 'astronauts')
 *   await t.start()
 *   await t.create([buzz])
 *   await t.discard() // Abort
 *   await t.end()
 * }
 * ```
 */
class WriteTransaction extends Transaction_1.Transaction {
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
            const req = new threads_pb_1.WriteTransactionRequest();
            req.setStarttransactionrequest(startReq);
            const metadata = JSON.parse(JSON.stringify(this.context));
            this.client.start(metadata);
            this.client.send(req);
        });
    }
    /**
     * create creates a new model instance in the given store.
     * @param values An array of model instances as JSON/JS objects.
     */
    create(values) {
        const _super = Object.create(null, {
            setReject: { get: () => super.setReject }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const createReq = new threads_pb_1.CreateRequest();
                const list = [];
                values.forEach((v) => {
                    list.push(encoder.encode(JSON.stringify(v)));
                });
                createReq.setInstancesList(list);
                const req = new threads_pb_1.WriteTransactionRequest();
                req.setCreaterequest(createReq);
                this.client.onMessage((message) => {
                    const reply = message.getCreatereply();
                    const err = reply === null || reply === void 0 ? void 0 : reply.getTransactionerror();
                    if (err) {
                        reject(new Error(err));
                    }
                    if (reply === undefined) {
                        resolve([]);
                    }
                    else {
                        resolve(reply.toObject().instanceidsList);
                    }
                });
                _super.setReject.call(this, reject);
                this.client.send(req);
            });
        });
    }
    /**
     * verify verifies existing instance changes.
     * @param values An array of instances as JSON/JS objects.
     */
    verify(values) {
        const _super = Object.create(null, {
            setReject: { get: () => super.setReject }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const innerRequest = new threads_pb_1.VerifyRequest();
                const list = values.map((v) => encoder.encode(JSON.stringify(v)));
                innerRequest.setInstancesList(list);
                const req = new threads_pb_1.WriteTransactionRequest();
                req.setVerifyrequest(innerRequest);
                this.client.onMessage((message) => {
                    const reply = message.getVerifyreply();
                    const err = reply === null || reply === void 0 ? void 0 : reply.getTransactionerror();
                    if (err) {
                        reject(new Error(err));
                    }
                    resolve();
                });
                _super.setReject.call(this, reject);
                this.client.send(req);
            });
        });
    }
    /**
     * save saves changes to an existing model instance in the given store.
     * @param values An array of model instances as JSON/JS objects. Each model instance must have a valid existing `ID` property.
     */
    save(values) {
        const _super = Object.create(null, {
            setReject: { get: () => super.setReject }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const saveReq = new threads_pb_1.SaveRequest();
                const list = [];
                values.forEach((v) => {
                    if (!('_id' in v)) {
                        ;
                        v._id = ''; // The server will add an _id if empty.
                    }
                    list.push(encoder.encode(JSON.stringify(v)));
                });
                saveReq.setInstancesList(list);
                const req = new threads_pb_1.WriteTransactionRequest();
                req.setSaverequest(saveReq);
                this.client.onMessage((message) => {
                    const reply = message.getSavereply();
                    const err = reply === null || reply === void 0 ? void 0 : reply.getTransactionerror();
                    if (err) {
                        reject(new Error(err));
                    }
                    resolve();
                });
                _super.setReject.call(this, reject);
                this.client.send(req);
            });
        });
    }
    /**
     * delete deletes an existing model instance from the given store.
     * @param IDs An array of instance ids to delete.
     */
    delete(IDs) {
        const _super = Object.create(null, {
            setReject: { get: () => super.setReject }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const deleteReq = new threads_pb_1.DeleteRequest();
                deleteReq.setInstanceidsList(IDs);
                const req = new threads_pb_1.WriteTransactionRequest();
                req.setDeleterequest(deleteReq);
                this.client.onMessage((message) => {
                    const reply = message.getDeletereply();
                    const err = reply === null || reply === void 0 ? void 0 : reply.getTransactionerror();
                    if (err) {
                        reject(new Error(err));
                    }
                    resolve();
                });
                _super.setReject.call(this, reject);
                this.client.send(req);
            });
        });
    }
    /**
     * has checks whether a given instance exists in the given store.
     * @param IDs An array of instance ids to check for.
     */
    has(IDs) {
        const _super = Object.create(null, {
            setReject: { get: () => super.setReject }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const hasReq = new threads_pb_1.HasRequest();
                hasReq.setInstanceidsList(IDs);
                const req = new threads_pb_1.WriteTransactionRequest();
                req.setHasrequest(hasReq);
                this.client.onMessage((message) => {
                    const reply = message.getHasreply();
                    const err = reply === null || reply === void 0 ? void 0 : reply.getTransactionerror();
                    if (err) {
                        reject(new Error(err));
                    }
                    resolve(reply ? reply.getExists() : false);
                });
                _super.setReject.call(this, reject);
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
                const req = new threads_pb_1.WriteTransactionRequest();
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
                const req = new threads_pb_1.WriteTransactionRequest();
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
    /**
     * Discard drops all active transaction changes.
     * It also invalidates the transaction, so it will fail upon calling end.
     * @example
     * Abort an in-flight transaction
     * ```typescript
     * import {Client, ThreadID} from '@textile/threads'
     *
     * interface Astronaut {
     *   name: string
     *   missions: number
     *   _id: string
     * }
     *
     * async function example (client: Client, threadID: ThreadID) {
     *   const buzz: Astronaut = {
     *     name: 'Buzz',
     *     missions: 2,
     *     _id: '',
     *   }
     *
     *   const t = client.writeTransaction(threadID, 'astronauts')
     *   await t.start()
     *   await t.create([buzz])
     *   await t.discard() // Abort
     *   await t.end()
     * }
     * ```
     */
    discard() {
        const _super = Object.create(null, {
            setReject: { get: () => super.setReject }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const req = new threads_pb_1.WriteTransactionRequest();
                req.setDiscardrequest(new threads_pb_1.DiscardRequest());
                this.client.onMessage((message) => {
                    const reply = message.getDiscardreply();
                    if (reply) {
                        resolve();
                    }
                    else {
                        reject(new Error('unexpected response type'));
                    }
                });
                _super.setReject.call(this, reject);
                this.client.send(req);
            });
        });
    }
}
exports.WriteTransaction = WriteTransaction;
//# sourceMappingURL=WriteTransaction.js.map