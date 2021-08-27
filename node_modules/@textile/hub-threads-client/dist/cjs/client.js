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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const threads_client_1 = require("@textile/threads-client");
Object.defineProperty(exports, "Client", { enumerable: true, get: function () { return threads_client_1.Client; } });
const threads_id_1 = require("@textile/threads-id");
const usersd_pb_1 = require("@textile/users-grpc/api/usersd/pb/usersd_pb");
const usersd_pb_service_1 = require("@textile/users-grpc/api/usersd/pb/usersd_pb_service");
const loglevel_1 = __importDefault(require("loglevel"));
const logger = loglevel_1.default.getLogger('users');
threads_client_1.Client.prototype.getThread = function (name, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        logger.debug('get thread request');
        const client = new usersd_pb_service_1.APIServiceClient(this.serviceHost, {
            transport: this.rpcOptions.transport,
            debug: this.rpcOptions.debug,
        });
        return new Promise((resolve, reject) => {
            const req = new usersd_pb_1.GetThreadRequest();
            req.setName(name);
            this.context
                .toMetadata(ctx)
                .then((meta) => {
                client.getThread(req, meta, (err, message) => {
                    if (err)
                        reject(err);
                    if (message) {
                        const res = {
                            name: message.getName(),
                            id: threads_id_1.ThreadID.fromBytes(message.getId_asU8()).toString(),
                        };
                        resolve(res);
                    }
                    else {
                        reject(new Error('No result'));
                    }
                });
            })
                .catch((err) => {
                reject(err);
            });
        });
    });
};
// Private listDBs method
const oldListDBs = threads_client_1.Client.prototype.listDBs;
/**
 * Lists all known DBs.
 */
threads_client_1.Client.prototype.listDBs = function (ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        if (this.context.withContext(ctx).get('x-textile-api-sig')) {
            // We're probably on the Hub
            return this.listThreads(ctx);
        }
        return oldListDBs
            .bind(this)()
            .catch((err) => {
            if (err.message.includes('Method is not accessible')) {
                // We might be unauthenticated _or_ not on hub.
                throw new Error(`${err.message}. If using Hub, ensure you are using a valid API signature.`);
            }
            throw err;
        });
    });
};
/**
 * Returns a list of available Threads.
 * @param ctx Context containing gRPC headers and settings.
 * These will be merged with any internal credentials.
 * @note Threads can be created using the threads or threads network clients.
 */
threads_client_1.Client.prototype.listThreads = function (ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        logger.debug('list threads request');
        const client = new usersd_pb_service_1.APIServiceClient(this.serviceHost, {
            transport: this.rpcOptions.transport,
            debug: this.rpcOptions.debug,
        });
        return new Promise((resolve, reject) => {
            const req = new usersd_pb_1.ListThreadsRequest();
            this.context
                .toMetadata(ctx)
                .then((meta) => {
                client.listThreads(req, meta, (err, message) => {
                    if (err)
                        return reject(err);
                    const lst = message === null || message === void 0 ? void 0 : message.getListList();
                    let results = [];
                    if (!lst)
                        return resolve(results);
                    results = lst.map((thrd) => {
                        return {
                            name: thrd.getName(),
                            id: threads_id_1.ThreadID.fromBytes(thrd.getId_asU8()).toString(),
                        };
                    });
                    return resolve(results);
                });
            })
                .catch((err) => {
                return reject(err);
            });
        });
    });
};
//# sourceMappingURL=client.js.map