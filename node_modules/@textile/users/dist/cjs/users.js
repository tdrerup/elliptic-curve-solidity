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
exports.Users = void 0;
const crypto_1 = require("@textile/crypto");
const grpc_authentication_1 = require("@textile/grpc-authentication");
const api_1 = require("./api");
/**
 * Users a client wrapper for interacting with the Textile Users API.
 *
 * This API has the ability to:
 *
 *   - Register new users with a User Group key and obtain a new API Token
 *
 *   - Get and List all Threads created for/by the user in your app.
 *
 *   - Create an inbox for the user or send message to another user's inbox.
 *
 *   - Check, read, and delete messages in a user's inbox.
 *
 * @example
 * Initialize a the User API and list their threads.
 * ```typescript
 * import { Users, UserAuth } from '@textile/hub'
 *
 * const example = async (auth: UserAuth) => {
 *   const api = Users.withUserAuth(auth)
 *   const list = api.listThreads()
 *   return list
 * }
 * ```
 *
 * @example
 * Create a new inbox for the user
 * ```typescript
 * import { Users } from '@textile/hub'
 *
 * // This method requires you already authenticate the Users object.
 * async function setupMailbox (users: Users) {
 *   await users.setupMailbox()
 * }
 * ```
 *
 * @example
 * Send a message to a public key
 * ```typescript
 * import { Users, Identity, PublicKey  } from "@textile/hub"
 *
 * // This method requires you already authenticate the Users object.
 *
 * async function example(users: Users, from: Identity, to: PublicKey, message: string) {
 *   const encoder = new TextEncoder()
 *   const body = encoder.encode(message)
 *   return await users.sendMessage(from, to, body)
 * }
 * ```
 */
class Users extends grpc_authentication_1.GrpcAuthentication {
    /**
     * {@inheritDoc @textile/hub#GrpcAuthentication.copyAuth}
     *
     * @example
     * Copy an authenticated Users api instance to Buckets.
     * ```typescript
     * import { Buckets, Users } from '@textile/hub'
     *
     * const usersToBuckets = async (user: Users) => {
     *   const buckets = Buckets.copyAuth(user)
     *   return buckets
     * }
     * ```
     *
     * @example
     * Copy an authenticated Buckets api instance to Users.
     * ```typescript
     * import { Buckets, Users } from '@textile/hub'
     *
     * const bucketsToUsers = async (buckets: Buckets) => {
     *   const user = Users.copyAuth(buckets)
     *   return user
     * }
     * ```
     */
    static copyAuth(auth, options) {
        return new Users(auth.context, options === null || options === void 0 ? void 0 : options.debug);
    }
    /**
     * {@inheritDoc @textile/hub#GrpcAuthentication.withUserAuth}
     *
     * @example
     * ```@typescript
     * import { Users, UserAuth } from '@textile/hub'
     *
     * async function example (userAuth: UserAuth) {
     *   const users = await Users.withUserAuth(userAuth)
     * }
     * ```
     */
    static withUserAuth(auth, options) {
        const res = super.withUserAuth(auth, options);
        return this.copyAuth(res, options);
    }
    /**
     * {@inheritDoc @textile/hub#GrpcAuthentication.withKeyInfo}
     *
     * @example
     * ```@typescript
     * import { Users, KeyInfo } from '@textile/hub'
     *
     * async function start () {
     *   const keyInfo: KeyInfo = {
     *     key: '<api key>',
     *     secret: '<api secret>'
     *   }
     *   const users = await Users.withKeyInfo(keyInfo)
     * }
     * ```
     */
    static withKeyInfo(key, options) {
        const _super = Object.create(null, {
            withKeyInfo: { get: () => super.withKeyInfo }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const auth = yield _super.withKeyInfo.call(this, key, options);
            return this.copyAuth(auth, options);
        });
    }
    /**
     * {@inheritDoc @textile/hub#GrpcAuthentication.withThread}
     *
     * @example
     * ```@typescript
     * import { Client, ThreadID } from '@textile/hub'
     *
     * async function example (threadID: ThreadID) {
     *   const id = threadID.toString()
     *   const users = await Users.withThread(id)
     * }
     * ```
     */
    withThread(threadID) {
        return super.withThread(threadID);
    }
    /**
     * {@inheritDoc @textile/hub#GrpcAuthentication.getToken}
     *
     * @example
     * ```@typescript
     * import { Users, PrivateKey } from '@textile/hub'
     *
     * async function example (users: Users, identity: PrivateKey) {
     *   const token = await users.getToken(identity)
     *   return token // already added to `users` scope
     * }
     * ```
     */
    getToken(identity) {
        const _super = Object.create(null, {
            getToken: { get: () => super.getToken }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.getToken.call(this, identity);
        });
    }
    /**
     * {@inheritDoc @textile/hub#GrpcAuthentication.getToken}
     */
    setToken(token) {
        return super.setToken(token);
    }
    /**
     * {@inheritDoc @textile/hub#GrpcAuthentication.getTokenChallenge}
     *
     * @example
     * ```typescript
     * import { Users, PrivateKey } from '@textile/hub'
     *
     * async function example (users: Users, identity: PrivateKey) {
     *   const token = await users.getTokenChallenge(
     *     identity.public.toString(),
     *     (challenge: Uint8Array) => {
     *       return new Promise((resolve, reject) => {
     *         // This is where you should program PrivateKey to respond to challenge
     *         // Read more here: https://docs.textile.io/tutorials/hub/production-auth/
     *       })
     *     }
     *   )
     *   return token
     * }
     * ```
     */
    getTokenChallenge(publicKey, callback) {
        const _super = Object.create(null, {
            getTokenChallenge: { get: () => super.getTokenChallenge }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.getTokenChallenge.call(this, publicKey, callback);
        });
    }
    /**
     * GetUsage returns current billing and usage information.
     *
     * @example
     * ```typescript
     * import { Users } from "@textile/hub"
     *
     * async function example(users: Users) {
     *    const usage = await users.getUsage()
     * }
     * ```
     */
    getUsage(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return api_1.getUsage(this, options);
        });
    }
    /**
     * Lists a users existing threads. This method
     * requires a valid user, token, and session.
     *
     * @example
     * ```typescript
     * import { Users } from "@textile/hub"
     *
     * async function example(users: Users) {
     *    const list = await users.listThreads()
     * }
     * ```
     */
    listThreads() {
        return __awaiter(this, void 0, void 0, function* () {
            return api_1.listThreads(this);
        });
    }
    /**
     * Gets a users existing thread by name.
     *
     * @example
     * ```typescript
     * import { Users } from "@textile/hub"
     *
     * async function example(users: Users) {
     *    const thread = await users.getThread('thread-name')
     *    return thread
     * }
     * ```
     */
    getThread(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return api_1.getThread(this, name);
        });
    }
    /**
     * Setup a user's inbox. This is required for each new user.
     * An inbox must be setup by the inbox owner (keys) before
     * messages can be sent to it.
     *
     * @returns mailboxID
     *
     * @example
     * ```typescript
     * import { Users } from "@textile/hub"
     *
     * async function example(users: Users) {
     *    return await users.setupMailbox()
     * }
     * ```
     */
    setupMailbox() {
        return __awaiter(this, void 0, void 0, function* () {
            return api_1.setupMailbox(this);
        });
    }
    /**
     * Returns the mailboxID of the current user if it exists.
     *
     * @returns {string} mailboxID
     */
    getMailboxID() {
        return __awaiter(this, void 0, void 0, function* () {
            return api_1.getMailboxID(this);
        });
    }
    /**
     * A local user can author messages to remote user through their public-key
     *
     * @param from defines the local, sending, user. Any object that conforms to the Identity interface.
     * @param to defines the remote, receiving user. Any object that conforms to the Public interface.
     * @param body is the message body bytes in UInt8Array format.
     *
     * @example
     * ```typescript
     * import { Users, Identity, PublicKey  } from "@textile/hub"
     *
     * async function example(users: Users, from: Identity, to: PublicKey, message: string) {
     *   const encoder = new TextEncoder()
     *   const body = encoder.encode(message)
     *   return await users.sendMessage(from, to, body)
     * }
     * ```
     */
    sendMessage(from, to, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const toBytes = crypto_1.extractPublicKeyBytes(to);
            const fromBytes = crypto_1.extractPublicKeyBytes(from.public);
            const fromBody = yield crypto_1.encrypt(body, fromBytes);
            const fromSig = yield from.sign(fromBody);
            const toBody = yield crypto_1.encrypt(body, toBytes);
            const toSig = yield from.sign(toBody);
            return api_1.sendMessage(this, from.public.toString(), to.toString(), toBody, toSig, fromBody, fromSig);
        });
    }
    /**
     * List the inbox of the local user
     *
     * @example
     * ```typescript
     * import { Users, Status } from "@textile/hub"
     *
     * async function example(users: Users) {
     *    return await users.listInboxMessages({
     *      limit: 5,
     *      ascending: true,
     *      status: Status.UNREAD,
     *    })
     * }
     * ```
     */
    listInboxMessages(opts) {
        return __awaiter(this, void 0, void 0, function* () {
            return api_1.listInboxMessages(this, opts);
        });
    }
    /**
     * List the sent messages of the local user
     *
     * @example
     * ```typescript
     * import { Users } from "@textile/hub"
     *
     * async function example(users: Users) {
     *    return await users.listSentboxMessages({
     *      limit: 5,
     *      ascending: true,
     *    })
     * }
     * ```
     */
    listSentboxMessages(opts) {
        return __awaiter(this, void 0, void 0, function* () {
            return api_1.listSentboxMessages(this, opts);
        });
    }
    /**
     * Mark a message as read
     *
     * @example
     * ```typescript
     * import { Users } from "@textile/hub"
     *
     * async function example(users: Users) {
     *    const res = await users.listInboxMessages({
     *      limit: 1,
     *      ascending: true,
     *    })
     *    if (res.length === 1) users.readInboxMessage(res[0].id)
     * }
     * ```
     */
    readInboxMessage(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return api_1.readInboxMessage(this, id);
        });
    }
    /**
     * Mark a message as read
     *
     * @example
     * ```typescript
     * import { Users } from "@textile/hub"
     *
     * async function example(users: Users) {
     *    const res = await users.listInboxMessages({
     *      limit: 1,
     *      ascending: true,
     *    })
     *    if (res.length === 1) users.deleteInboxMessage(res[0].id)
     * }
     * ```
     */
    deleteInboxMessage(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return api_1.deleteInboxMessage(this, id);
        });
    }
    /**
     * Mark a message as read
     *
     * @example
     * ```typescript
     * import { Users } from "@textile/hub"
     *
     * async function example(users: Users) {
     *    const res = await users.listSentboxMessages({
     *      limit: 1,
     *      ascending: true,
     *    })
     *    if (res.length === 1) users.deleteInboxMessage(res[0].id)
     * }
     * ```
     */
    deleteSentboxMessage(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return api_1.deleteSentboxMessage(this, id);
        });
    }
    /**
     * watchInbox watches the inbox for new mailbox events.
     * Returns a listener of watch connectivity states.
     * @returns listener. listener.close will stop watching.
     * @param id the mailbox id
     * @param callback handles each new mailbox event
     *
     * @example
     * Listen and log all new inbox events
     *
     * ```typescript
     * import { Users, MailboxEvent } from '@textile/hub'
     *
     * const callback = async (reply?: MailboxEvent, err?: Error) => {
     *   if (!reply || !reply.message) return console.log('no message')
     *   console.log(reply.type)
     * }
     *
     * async function example (users: Users) {
     *   const mailboxID = await users.getMailboxID()
     *   const closer = await users.watchInbox(mailboxID, callback)
     *   return closer
     * }
     * ```
     *
     * @example
     * Decrypt a new message in local user's inbox sent by listener callback
     *
     * ```typescript
     * import { Users, MailboxEvent, PrivateKey } from '@textile/hub'
     *
     * const userID = PrivateKey.fromRandom()
     *
     * const callback = async (reply?: MailboxEvent, err?: Error) => {
     *   if (!reply || !reply.message) return console.log('no message')
     *   const bodyBytes = await userID.decrypt(reply.message.body)
     *
     *   const decoder = new TextDecoder()
     *   const body = decoder.decode(bodyBytes)
     *
     *   console.log(body)
     * }
     *
     * // Requires userID already be authenticated to the Users API
     * async function startListener(users: Users) {
     *   const mailboxID = await users.getMailboxID()
     *   const closer = await users.watchInbox(mailboxID, callback)
     * }
     * ```
     */
    watchInbox(id, callback) {
        return api_1.watchMailbox(this, id, 'inbox', callback);
    }
    /**
     * watchSentbox watches the sentbox for new mailbox events.
     * Returns a listener of watch connectivity states.
     * @returns listener. listener.close will stop watching.
     * @param id the mailbox id
     * @param callback handles each new mailbox event.
     *
     * @example
     * The local user's own sentbox can be decrypted with their private key
     *
     * ```typescript
     * import { Users, MailboxEvent, PrivateKey } from '@textile/hub'
     *
     * const userID = PrivateKey.fromRandom()
     *
     * const callback = async (reply?: MailboxEvent, err?: Error) => {
     *   if (!reply || !reply.message) return console.log('no message')
     *   const bodyBytes = await userID.decrypt(reply.message.body)
     *
     *   const decoder = new TextDecoder()
     *   const body = decoder.decode(bodyBytes)
     *
     *   console.log(body)
     * }
     *
     * // Requires userID already be authenticated to the Users API
     * async function startListener(users: Users) {
     *   const mailboxID = await users.getMailboxID()
     *   const closer = await users.watchInbox(mailboxID, callback)
     * }
     * ```
     */
    watchSentbox(id, callback) {
        return api_1.watchMailbox(this, id, 'sentbox', callback);
    }
}
exports.Users = Users;
//# sourceMappingURL=users.js.map