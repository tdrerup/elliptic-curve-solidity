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
exports.getUsage = exports.watchMailbox = exports.deleteSentboxMessage = exports.deleteInboxMessage = exports.readInboxMessage = exports.listSentboxMessages = exports.listInboxMessages = exports.sendMessage = exports.getMailboxID = exports.setupMailbox = exports.getThread = exports.listThreads = exports.MailboxEventType = exports.Status = exports.MailConfig = void 0;
const hub_threads_client_1 = require("@textile/hub-threads-client");
const threads_id_1 = require("@textile/threads-id");
const usersd_pb_1 = require("@textile/users-grpc/api/usersd/pb/usersd_pb");
const usersd_pb_service_1 = require("@textile/users-grpc/api/usersd/pb/usersd_pb_service");
const loglevel_1 = __importDefault(require("loglevel"));
const logger = loglevel_1.default.getLogger('users-api');
/**
 * Global settings for mailboxes
 */
exports.MailConfig = {
    ThreadName: 'hubmail',
    InboxCollectionName: 'inbox',
    SentboxCollectionName: 'sentbox',
};
/**
 * The status query filter of an inbox message.
 */
var Status;
(function (Status) {
    Status[Status["ALL"] = 0] = "ALL";
    Status[Status["READ"] = 1] = "READ";
    Status[Status["UNREAD"] = 2] = "UNREAD";
})(Status = exports.Status || (exports.Status = {}));
/**
 * The mailbox event type. CREATE, SAVE, or DELETE
 */
var MailboxEventType;
(function (MailboxEventType) {
    MailboxEventType[MailboxEventType["CREATE"] = 0] = "CREATE";
    MailboxEventType[MailboxEventType["SAVE"] = 1] = "SAVE";
    MailboxEventType[MailboxEventType["DELETE"] = 2] = "DELETE";
})(MailboxEventType = exports.MailboxEventType || (exports.MailboxEventType = {}));
function convertMessageObj(input) {
    return {
        body: input.getBody_asU8(),
        signature: input.getSignature_asU8(),
        from: input.getFrom(),
        id: input.getId(),
        to: input.getTo(),
        createdAt: input.getCreatedAt(),
        readAt: input.getReadAt(),
    };
}
/**
 * @internal
 */
function listThreads(api, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        logger.debug('list threads request');
        const req = new usersd_pb_1.ListThreadsRequest();
        const res = yield api.unary(usersd_pb_service_1.APIService.ListThreads, req, ctx);
        return res.getListList().map((value) => {
            return {
                isDb: value.getIsDb(),
                name: value.getName(),
                id: threads_id_1.ThreadID.fromBytes(value.getId_asU8()).toString(),
            };
        });
    });
}
exports.listThreads = listThreads;
/**
 * @internal
 */
function getThread(api, name, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        logger.debug('get thread request');
        const req = new usersd_pb_1.GetThreadRequest();
        req.setName(name);
        const res = yield api.unary(usersd_pb_service_1.APIService.GetThread, req, ctx);
        return {
            name: res.getName(),
            id: threads_id_1.ThreadID.fromBytes(res.getId_asU8()).toString(),
        };
    });
}
exports.getThread = getThread;
/**
 * @internal
 */
function setupMailbox(api, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        logger.debug('setup mailbox request');
        const req = new usersd_pb_1.SetupMailboxRequest();
        const res = yield api.unary(usersd_pb_service_1.APIService.SetupMailbox, req, ctx);
        const mailboxID = threads_id_1.ThreadID.fromBytes(res.getMailboxId_asU8());
        return mailboxID.toString();
    });
}
exports.setupMailbox = setupMailbox;
/**
 * @internal
 */
function getMailboxID(api, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        logger.debug('setup mailbox request');
        const thread = yield getThread(api, exports.MailConfig.ThreadName, ctx);
        return thread.id.toString();
    });
}
exports.getMailboxID = getMailboxID;
/**
 * @internal
 */
function sendMessage(api, from, to, toBody, toSignature, fromBody, fromSignature, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        logger.debug('send message request');
        const req = new usersd_pb_1.SendMessageRequest();
        req.setTo(to);
        req.setToBody(toBody);
        req.setToSignature(toSignature);
        req.setFromBody(fromBody);
        req.setFromSignature(fromSignature);
        const res = yield api.unary(usersd_pb_service_1.APIService.SendMessage, req, ctx);
        return {
            id: res.getId(),
            createdAt: res.getCreatedAt(),
            body: fromBody,
            signature: fromSignature,
            to,
            from,
        };
    });
}
exports.sendMessage = sendMessage;
/**
 * @internal
 */
function listInboxMessages(api, opts, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        logger.debug('list inbox message request');
        const req = new usersd_pb_1.ListInboxMessagesRequest();
        if (opts && opts.seek)
            req.setSeek(opts.seek);
        if (opts && opts.limit)
            req.setLimit(opts.limit);
        if (opts && opts.ascending)
            req.setAscending(opts.ascending);
        if (opts && opts.status) {
            switch (opts.status) {
                case Status.READ:
                    req.setStatus(usersd_pb_1.ListInboxMessagesRequest.Status.STATUS_READ);
                case Status.UNREAD:
                    req.setStatus(usersd_pb_1.ListInboxMessagesRequest.Status.STATUS_UNREAD);
            }
        }
        const res = yield api.unary(usersd_pb_service_1.APIService.ListInboxMessages, req, ctx);
        return res.getMessagesList().map(convertMessageObj);
    });
}
exports.listInboxMessages = listInboxMessages;
/**
 * @internal
 */
function listSentboxMessages(api, opts, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        logger.debug('list sentbox message request');
        const req = new usersd_pb_1.ListSentboxMessagesRequest();
        if (opts && opts.seek)
            req.setSeek(opts.seek);
        if (opts && opts.limit)
            req.setLimit(opts.limit);
        if (opts && opts.ascending)
            req.setAscending(opts.ascending);
        const res = yield api.unary(usersd_pb_service_1.APIService.ListSentboxMessages, req, ctx);
        return res.getMessagesList().map(convertMessageObj);
    });
}
exports.listSentboxMessages = listSentboxMessages;
/**
 * @internal
 */
function readInboxMessage(api, id, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        logger.debug('read inbox message request');
        const req = new usersd_pb_1.ReadInboxMessageRequest();
        req.setId(id);
        const res = yield api.unary(usersd_pb_service_1.APIService.ReadInboxMessage, req, ctx);
        return { readAt: res.toObject().readAt };
    });
}
exports.readInboxMessage = readInboxMessage;
/**
 * @internal
 */
function deleteInboxMessage(api, id, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        logger.debug('delete inbox message request');
        const req = new usersd_pb_1.DeleteInboxMessageRequest();
        req.setId(id);
        yield api.unary(usersd_pb_service_1.APIService.DeleteInboxMessage, req, ctx);
        return;
    });
}
exports.deleteInboxMessage = deleteInboxMessage;
/**
 * @internal
 */
function deleteSentboxMessage(api, id, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        logger.debug('delete sentbox message request');
        const req = new usersd_pb_1.DeleteSentboxMessageRequest();
        req.setId(id);
        yield api.unary(usersd_pb_service_1.APIService.DeleteSentboxMessage, req, ctx);
        return;
    });
}
exports.deleteSentboxMessage = deleteSentboxMessage;
/**
 * @internal
 */
function watchMailbox(api, id, box, callback, ctx) {
    logger.debug('new watch inbox request');
    const client = new hub_threads_client_1.Client(ctx || api.context);
    const threadID = threads_id_1.ThreadID.fromString(id);
    const retype = (reply, err) => {
        if (!reply) {
            callback(reply, err);
        }
        else {
            const type = reply.action;
            const result = {
                type,
                messageID: reply.instanceID,
            };
            const instance = reply.instance;
            if (instance) {
                result.message = {
                    id: reply.instanceID,
                    from: instance.from,
                    to: instance.to,
                    body: new Uint8Array(Buffer.from(instance.body, 'base64')),
                    signature: new Uint8Array(Buffer.from(instance.signature, 'base64')),
                    createdAt: instance.created_at,
                    readAt: instance.read_at,
                };
            }
            callback(result);
        }
    };
    const collectionName = box === 'inbox'
        ? exports.MailConfig.InboxCollectionName
        : exports.MailConfig.SentboxCollectionName;
    return client.listen(threadID, [{ collectionName }], retype);
}
exports.watchMailbox = watchMailbox;
/**
 * @internal
 */
function getUsage(api, options, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        logger.debug('get usage request');
        const req = new usersd_pb_1.GetUsageRequest();
        if (options && options.dependentUserKey) {
            req.setKey(options.dependentUserKey);
        }
        const res = yield api.unary(usersd_pb_service_1.APIService.GetUsage, req, ctx);
        const usage = res.toObject();
        return {
            customer: usage.customer,
            usage: usage.usage,
        };
    });
}
exports.getUsage = getUsage;
//# sourceMappingURL=index.js.map