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
exports.Buckets = void 0;
const grpc_authentication_1 = require("@textile/grpc-authentication");
const hub_threads_client_1 = require("@textile/hub-threads-client");
const threads_id_1 = require("@textile/threads-id");
const loglevel_1 = __importDefault(require("loglevel"));
const api_1 = require("./api");
const utils_1 = require("./utils");
const logger = loglevel_1.default.getLogger('buckets');
/**
 * Buckets a client wrapper for interacting with the Textile Buckets API.
 * @example
 * Initialize the Bucket API and open an existing bucket (or create if new).
 * ```typescript
 * import { Buckets, UserAuth } from '@textile/hub'
 *
 * const getOrCreate = async (auth: UserAuth, bucketName: string) => {
 *   const buckets = Buckets.withUserAuth(auth)
 *   // Automatically scopes future calls on `buckets` to the Thread containing the bucket
 *   const { root, threadID } = await buckets.getOrCreate(bucketName)
 *   if (!root) throw new Error('bucket not created')
 *   const bucketKey = root.key
 *   return { buckets, bucketKey }
 * }
 * ```
 *
 * @example
 * Print the links for the bucket
 * ```typescript
 * import { Buckets } from '@textile/hub'
 *
 * // This method requires that you run "getOrCreate" or have specified "withThread"
 * async function logLinks (buckets: Buckets, bucketKey: string) {
 *   const links = await buckets.links(bucketKey)
 *   console.log(links)
 * }
 * ```
 *
 * @example
 * Find an existing Bucket
 * ```typescript
 * import { Buckets } from '@textile/hub'
 *
 * // This method requires that you already specify the Thread containing
 * // the bucket with buckets.withThread(<thread name>).
 * const exists = async (buckets: Buckets, bucketName: string) => {
 *     const roots = await buckets.list();
 *     return roots.find((bucket) => bucket.name === bucketName)
 * }
 * ```
 *
 * @example
 * Push an folder in node.js
 * ```typescript
 * import fs from 'fs'
 * import util from 'util'
 * import glob from 'glob'
 * import { Buckets } from '@textile/hub'
 *
 * const globDir = util.promisify(glob)
 *
 * // expects an already setup buckets session using getOrCreate or withThread
 * const exists = async (buckets: Buckets, bucketKey: string, dir: string) => {
 *   const files = await globDir('<dir glob options>')
 *   return await Promise.all(files.map(async (file) => {
 *     const filePath = dir + '/' + file
 *     var content = fs.createReadStream(filePath, { highWaterMark: 1024 * 1024 * 3 });
 *     const upload = {
 *       path: file,
 *       content
 *     }
 *     return await buckets.pushPath(bucketKey, file, upload)
 *   }))
 * }
 * ```
 */
class Buckets extends grpc_authentication_1.GrpcAuthentication {
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
        return new Buckets(auth.context, options === null || options === void 0 ? void 0 : options.debug);
    }
    /**
     * {@inheritDoc @textile/hub#GrpcAuthentication.withUserAuth}
     *
     * @example
     * ```@typescript
     * import { Buckets, UserAuth } from '@textile/hub'
     *
     * async function example (userAuth: UserAuth) {
     *   const buckets = await Buckets.withUserAuth(userAuth)
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
     * import { Buckets, KeyInfo } from '@textile/hub'
     *
     * async function start () {
     *   const keyInfo: KeyInfo = {
     *     key: '<api key>',
     *     secret: '<api secret>'
     *   }
     *   const buckets = await Buckets.withKeyInfo(keyInfo)
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
     * import { Buckets, ThreadID } from '@textile/hub'
     *
     * async function example (threadID: ThreadID) {
     *   const id = threadID.toString()
     *   const buckets = await Buckets.withThread(id)
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
     * import { Buckets, PrivateKey } from '@textile/hub'
     *
     * async function example (buckets: Buckets, identity: PrivateKey) {
     *   const token = await buckets.getToken(identity)
     *   return token // already added to `buckets` scope
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
     * import { Buckets, PrivateKey } from '@textile/hub'
     *
     * async function example (buckets: Buckets, identity: PrivateKey) {
     *   const token = await buckets.getTokenChallenge(
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
     * (Deprecated) Open a new / existing bucket by bucket name and ThreadID (create not required)
     * @param name name of bucket
     * @param threadName the name of the thread where the bucket is stored (default `buckets`)
     * @param encrypted encrypt the bucket contents (default `false`)
     * @param threadID id of thread where bucket is stored
     * @deprecated Open has been replaced with getOrCreate
     */
    open(name, threadName = 'buckets', encrypted = false, threadID) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = {
                threadName: threadName && threadName !== '' ? threadName : 'buckets',
                encrypted: !!encrypted,
                threadID,
            };
            return this.getOrCreate(name, options);
        });
    }
    /**
     * (Deprecated) Open a new / existing bucket by bucket name and ThreadID (create not required)
     * @param name name of bucket
     * @param threadName the name of the thread where the bucket is stored (default `buckets`)
     * @param encrypted encrypt the bucket contents (default `false`)
     * @param threadID id of thread where bucket is stored
     * @deprecated getOrInit has been replaced with getOrCreate
     */
    getOrInit(name, threadName = 'buckets', encrypted = false, threadID) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = {
                threadName: threadName && threadName !== '' ? threadName : 'buckets',
                encrypted: !!encrypted,
                threadID,
            };
            return this.getOrCreate(name, options);
        });
    }
    getOrCreate(name, options, encrypted, cid, threadID) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!options && (encrypted || cid || threadID)) {
                // Case where threadName passed as undefined using old signature
                console.warn('Update Buckets.getOrCreate to use GetOrCreateOptions input.');
                return this._getOrCreate(name, 'buckets', !!encrypted, cid, threadID);
            }
            else if (!options) {
                return this._getOrCreate(name);
            }
            else if (typeof options !== 'object') {
                // Case where using old signature
                console.warn('Update Buckets.getOrCreate to use GetOrCreateOptions input.');
                return this._getOrCreate(name, options, !!encrypted, cid, threadID);
            }
            else {
                // Using new signature
                const threadName = options.threadName && options.threadName !== ''
                    ? options.threadName
                    : 'buckets';
                const encrypted = !!options.encrypted;
                return this._getOrCreate(name, threadName, encrypted, options.cid, options.threadID);
            }
        });
    }
    /**
     * @internal
     */
    _getOrCreate(name, threadName = 'buckets', encrypted = false, cid, threadID) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = new hub_threads_client_1.Client(this.context);
            if (threadID) {
                const id = threadID;
                const res = yield client.listThreads();
                const exists = res.find((thread) => thread.id === id);
                if (!exists) {
                    const id = threads_id_1.ThreadID.fromString(threadID);
                    yield client.newDB(id, threadName);
                }
                this.withThread(threadID);
            }
            else {
                try {
                    const res = yield client.getThread(threadName);
                    threadID =
                        typeof res.id === 'string'
                            ? res.id
                            : threads_id_1.ThreadID.fromBytes(res.id).toString();
                    this.withThread(threadID);
                }
                catch (error) {
                    if (error.message !== 'Thread not found' &&
                        !error.message.includes('mongo: no documents in result')) {
                        throw new Error(error.message);
                    }
                    const newId = threads_id_1.ThreadID.fromRandom();
                    yield client.newDB(newId, threadName);
                    threadID = newId.toString();
                    this.withThread(threadID);
                }
            }
            const roots = yield this.list();
            const existing = roots.find((bucket) => bucket.name === name);
            if (existing) {
                return { root: existing, threadID };
            }
            const created = yield this.create(name, { encrypted, cid });
            return { root: created.root, threadID };
        });
    }
    /**
     * Existing lists all remote buckets in the thread or in all threads.
     * @param threadID (optional) if threadID is not defined, this will return buckets from all threads.
     */
    existing(threadID) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = new hub_threads_client_1.Client(this.context);
            const threads = [];
            if (threadID) {
                threads.push(threadID);
            }
            else {
                const res = yield client.listThreads();
                for (const thread of res) {
                    if (thread.id)
                        threads.push(thread.id);
                }
            }
            const bucketList = [];
            for (const id of threads) {
                this.withThread(id);
                for (const root of yield this.list()) {
                    bucketList.push(root);
                }
            }
            // Clear the currently used thread
            this.withThread(undefined);
            return bucketList;
        });
    }
    /**
     * (Deprecated) Creates a new bucket.
     * @param name Human-readable bucket name. It is only meant to help identify a bucket in a UI and is not unique.
     * @param encrypted encrypt the bucket contents (default `false`)
     * @deprecated Init has been replaced by create
     */
    init(name, encrypted = false) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.create(name, { encrypted });
        });
    }
    create(name, options, cid) {
        return __awaiter(this, void 0, void 0, function* () {
            logger.debug('create request');
            if (typeof options == 'object') {
                return api_1.bucketsCreate(this, name, !!options.encrypted, options.cid);
            }
            else {
                if (options !== undefined || cid !== undefined) {
                    console.warn('Update Buckets.create to use CreateOptions input.');
                }
                const encrypted = !!options;
                return api_1.bucketsCreate(this, name, encrypted, cid);
            }
        });
    }
    /**
     * Returns the bucket root CID
     * @param key Unique (IPNS compatible) identifier key for a bucket.
     */
    root(key) {
        return __awaiter(this, void 0, void 0, function* () {
            logger.debug('root request');
            return api_1.bucketsRoot(this, key);
        });
    }
    /**
     * Returns a list of bucket links.
     * @param key Unique (IPNS compatible) identifier key for a bucket.
     * @param path path within the bucket for links (default '/').
     * @example
     * Generate the HTTP, IPNS, and IPFS links for a Bucket
     * ```typescript
     * import { Buckets } from '@textile/hub'
     *
     * const getIpnsLink = async (buckets: Buckets, bucketKey: string) => {
     *    const links = await buckets.links(bucketKey)
     *    return links.ipns
     * }
     *
     * const getWwwLink = async (buckets: Buckets, bucketKey: string) => {
     *    const links = await buckets.links(bucketKey)
     *    return links.www
     * }
     * ```
     */
    links(key, path = '/') {
        return __awaiter(this, void 0, void 0, function* () {
            logger.debug('link request');
            return api_1.bucketsLinks(this, key, path);
        });
    }
    /**
     * Returns a list of all bucket roots.
     * @example
     * Find an existing Bucket named "app-name-files"
     * ```typescript
     * import { Buckets } from '@textile/hub'
     *
     * const exists = async (buckets: Buckets) => {
     *     const roots = await buckets.list();
     *     return roots.find((bucket) => bucket.name ===  "app-name-files")
     * }
     * ````
     */
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            logger.debug('list request');
            return api_1.bucketsList(this);
        });
    }
    /**
     * Returns information about a bucket path.
     * @param key Unique (IPNS compatible) identifier key for a bucket.
     * @param path A file/object (sub)-path within a bucket.
     * @param depth (optional) will walk the entire bucket to target depth (default = 1)
     */
    listPath(key, path, depth = 1) {
        return __awaiter(this, void 0, void 0, function* () {
            logger.debug('list path request');
            return yield utils_1.listPathRecursive(this, key, path, depth);
        });
    }
    /**
     * listPathRecursive returns a nested object of all paths (and info) in a bucket
     * @param key Unique (IPNS compatible) identifier key for a bucket.
     * @param path A file/object (sub)-path within a bucket.
     * @param dirs (optional) if false will include only file paths
     * @param depth (optional) will walk the entire bucket to target depth (default = 1)
     *
     * @example
     * ```typescript
     * import { Buckets } from '@textile/hub'
     *
     * async function printPaths(buckets: Buckets, bucketKey: string) {
     *   const list = await buckets.listPathFlat(bucketKey, '')
     *   console.log(list)
     * }
     * // [
     * //   '.textileseed',
     * //   'dir1',
     * //   'dir1/file1.jpg',
     * //   'path',
     * //   'path/to',
     * //   'path/to/file2.jpg'
     * // ]
     * ```
     */
    listPathFlat(key, path, dirs = true, depth = 5) {
        return __awaiter(this, void 0, void 0, function* () {
            logger.debug('list path recursive request');
            return yield utils_1.listPathFlat(this, key, path, dirs, depth);
        });
    }
    /**
     * listIpfsPath returns items at a particular path in a UnixFS path living in the IPFS network.
     * @param path UnixFS path
     */
    listIpfsPath(path) {
        return __awaiter(this, void 0, void 0, function* () {
            logger.debug('list path request');
            return api_1.bucketsListIpfsPath(this, path);
        });
    }
    /**
     * Move a file or subpath to a new path.
     * @param key Unique (IPNS compatible) identifier key for a bucket.
     * @param fromPath A file/object or subpath within a bucket.
     * @param toPath The path within a bucket to move fromPath to.
     *
     * @example
     * Push a file to the root of a bucket
     * ```typescript
     * import { Buckets } from '@textile/hub'
     *
     * const moveToRoot = async (buckets: Buckets, key: string, fromPath: string) => {
     *    return await buckets.movePath(key, fromPath, "")
     * }
     * ```
     */
    movePath(key, fromPath, toPath) {
        return __awaiter(this, void 0, void 0, function* () {
            return api_1.bucketsMovePath(this, key, fromPath, toPath);
        });
    }
    /**
     * Pushes a file to a bucket path.
     * @param key Unique (IPNS compatible) identifier key for a bucket.
     * @param path A file/object (sub)-path within a bucket.
     * @param input The input file/stream/object.
     * @param opts Options to control response stream.
     * @remarks
     * - This will return the resolved path and the bucket's new root path.
     * - If pushing NodeJS streams, ensure you set your highwatermark to an appropriate size
     * (i.e., ~1024 bytes) for optimal behavior on slow or intermittent connections. See example
     * below or use `utils.createReadStream`.
     * @example
     * Push a file to the root of a bucket
     * ```typescript
     * import { Buckets } from '@textile/hub'
     *
     * const pushFile = async (buckets: Buckets, content: string, bucketKey: string) => {
     *    const file = { path: '/index.html', content: Buffer.from(content) }
     *    return await buckets.pushPath(bucketKey!, 'index.html', file)
     * }
     * ```
     *
     * @example
     * Push an folder in node.js
     * ```typescript
     * import fs from 'fs'
     * import util from 'util'
     * import glob from 'glob'
     * import { Buckets } from '@textile/hub'
     *
     * const globDir = util.promisify(glob)
     *
     * // expects an already setup buckets session using getOrCreate or withThread
     * const exists = async (buckets: Buckets, bucketKey: string, dir: string) => {
     *   const files = await globDir('<dir glob options>')
     *   return await Promise.all(files.map(async (file) => {
     *     const filePath = dir + '/' + file
     *     var content = fs.createReadStream(filePath, { highWaterMark: 1024 });
     *     const upload = {
     *       path: file,
     *       content
     *     }
     *     return await buckets.pushPath(bucketKey, file, upload)
     *   }))
     * }
     * ```
     */
    pushPath(key, path, input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return api_1.bucketsPushPath(this, key, path, input, options);
        });
    }
    /**
     * Pushes an iterable of files to a bucket.
     * @param key Unique (IPNS compatible) identifier key for a bucket.
     * @param input The input array of file/stream/objects.
     * @param options PushOptions to control response stream.
     * @example
     * Push all files in a directory to the root of a bucket
     * ```typescript
     * import fs from 'fs'
     * import path from 'path'
     * import util from 'util'
     * import glob from 'glob'
     * import { Buckets } from '@textile/hub'
     *
     * const globDir = util.promisify(glob)
     *
     * const pushMultipleFiles = async (buckets: Buckets, bucketKey: string, directory: string, globPattern: string) => {
     *   const options = {
     *     directory,
     *     nodir: true,
     *   }
     *   const files = await globDir(globPattern, options)
     *   if (files.length === 0) {
     *     throw Error(`No files found: ${directory}`)
     *   }
     *
     *   let streams = []
     *   for (const file of files) {
     *       const stream = fs.createReadStream(
     *         path.join(directory, file), {
     *           highWaterMark: 1024,
     *         }
     *       )
     *       streams.push({
     *         path: file,
     *         content: stream,
     *       })
     *   }
     *   return await buckets.pushPaths(bucketKey, streams)
     * }
     * ```
     */
    pushPaths(key, input, options) {
        return api_1.bucketsPushPaths(this, key, input, options);
    }
    /**
     * Pulls the bucket path, returning the bytes of the given file.
     * @param key Unique (IPNS compatible) identifier key for a bucket.
     * @param path A file/object (sub)-path within a bucket.
     * @param opts Options to control response stream. Currently only supports a progress function.
     *
     * @example
     * Pull a file by its relative path and console.log the progress.
     * ```typescript
     * import { Buckets } from '@textile/hub'
     *
     * const pullFile = async (buckets: Buckets, key: string, path: string) => {
     *    const display = (num?: number) => {
     *      console.log('Progress:', num)
     *    }
     *    buckets.pullPath(key, path, {progress: display})
     * }
     * ```
     */
    pullPath(key, path, options) {
        return api_1.bucketsPullPath(this, key, path, options);
    }
    /**
     * Pushes a file to a bucket path.
     * @param key Unique (IPNS compatible) identifier key for a bucket.
     * @param path A file/object (sub)-path within a bucket.
     * @param cid The IPFS cid of the dag to set at the path.
     *
     * @example
     * Push a file to the root of a bucket
     * ```typescript
     * import { Buckets } from '@textile/hub'
     *
     * const pushRoot = async (buckets: Buckets, key: string, cid: string) => {
     *    return await buckets.setPath(key, '/', cid)
     * }
     * ```
     */
    setPath(key, path, cid) {
        return __awaiter(this, void 0, void 0, function* () {
            return api_1.bucketsSetPath(this, key, path, cid);
        });
    }
    /**
     * pullIpfsPath pulls the path from a remote UnixFS dag, writing it to writer if it's a file.
     * @param path A file/object (sub)-path within a bucket.
     * @param opts Options to control response stream. Currently only supports a progress function.
     *
     * @example
     * Pull a file by its IPFS path and console.log the progress.
     * ```typescript
     * import { Buckets } from '@textile/hub'
     *
     * const pullFile = async (buckets: Buckets, path: string) => {
     *    const display = (num?: number) => {
     *      console.log('Progress:', num)
     *    }
     *    buckets.pullIpfsPath(path, {progress: display})
     * }
     * ```
     */
    pullIpfsPath(path, options) {
        return api_1.bucketsPullIpfsPath(this, path, options);
    }
    /**
     * Removes an entire bucket. Files and directories will be unpinned (cannot be undone).
     * @param key Unique (IPNS compatible) identifier key for a bucket.
     *
     * @example
     * Remove a Bucket
     * ```typescript
     * import { Buckets } from '@textile/hub'
     *
     * const remove = async (buckets: Buckets, key: string) => {
     *    buckets.remove(key)
     * }
     * ```
     */
    remove(key) {
        return __awaiter(this, void 0, void 0, function* () {
            logger.debug('remove request');
            return api_1.bucketsRemove(this, key);
        });
    }
    /**
     * Returns information about a bucket path (cannot be undone).
     *
     * @param key Unique (IPNS compatible) identifier key for a bucket.
     * @param path A relative path within a bucket.
     * @param root optional to specify a root.
     *
     * @example
     * Remove a file by its relative path
     * ```typescript
     * import { Buckets } from '@textile/hub'
     *
     * const remove = async (buckets: Buckets, key: string) => {
     *    buckets.remove(key)
     * }
     * ```
     */
    removePath(key, path, options) {
        return __awaiter(this, void 0, void 0, function* () {
            logger.debug('remove path request');
            return api_1.bucketsRemovePath(this, key, path, options);
        });
    }
    /**
     * Push new access roles per path in a Bucket
     *
     * @param key Unique (IPNS compatible) identifier key for a bucket.
     * @param path A relative path within a bucket.
     * @param roles Each user public key and the roles they will receive.
     *
     * @example
     * ```typescript
     * import { Buckets, PublicKey } from '@textile/hub'
     *
     * const grant = async (buckets: Buckets, key: string, peer: PublicKey) => {
     *    const roles = new Map()
     *    // NA = 0, Reader = 1, Writer = 2, Admin = 3
     *    roles.set(peer.toString(), 2)
     *    buckets.pushPathAccessRoles(key, '/', roles)
     * }
     * ```
     * @example
     * Grant read access to everyone at a path (in an encrypted bucket)
     * ```typescript
     * import { Buckets } from '@textile/hub'
     *
     * const grant = async (buckets: Buckets, key: string) => {
     *    const roles = new Map()
     *    // NA = 0, Reader = 1, Writer = 2, Admin = 3
     *    roles.set('*', 1)
     *    buckets.pushPathAccessRoles(key, '/folder/containing/shared/things', roles)
     * }
     * ```
     */
    pushPathAccessRoles(key, path, roles) {
        return __awaiter(this, void 0, void 0, function* () {
            logger.debug('push path access roles request');
            return api_1.bucketsPushPathAccessRoles(this, key, path, roles);
        });
    }
    /**
     * List the access roles per path in a Bucket
     *
     * @param key Unique (IPNS compatible) identifier key for a bucket.
     * @param path A relative path within a bucket.
     *
     * @example
     * ```typescript
     * import { Buckets } from '@textile/hub'
     *
     * const viewRoot = async (buckets: Buckets, key: string) => {
     *    const list = buckets.pullPathAccessRoles(key, '/')
     *    console.log(list)
     * }
     * ```
     */
    pullPathAccessRoles(key, path) {
        return __awaiter(this, void 0, void 0, function* () {
            logger.debug('pull path access roles request');
            return api_1.bucketsPullPathAccessRoles(this, key, path);
        });
    }
    /**
     * (Experimental) Get the current default ArchiveConfig for the specified Bucket.
     *
     * @beta
     * @param key Unique (IPNS compatible) identifier key for a bucket.
     * @returns The default ArchiveConfig for the specified Bucket.
     *
     * @example
     * Get the default ArchiveConfig
     * ```typescript
     * import { Buckets } from '@textile/hub'
     *
     * async function getDefaultConfig (buckets: Buckets, key: string) {
     *    const defaultConfig = await buckets.defaultArchiveConfig(key)
     * }
     * ```
     */
    defaultArchiveConfig(key) {
        return __awaiter(this, void 0, void 0, function* () {
            logger.debug('default archive config request');
            return api_1.bucketsDefaultArchiveConfig(this, key);
        });
    }
    /**
     * (Experimental) Set the default ArchiveConfig for the specified Bucket.
     *
     * @beta
     * @param key Unique (IPNS compatible) identifier key for a bucket.
     * @param config The ArchiveConfig to set as the new default.
     *
     * @example
     * Set the default ArchiveConfig
     * ```typescript
     * import { Buckets, ArchiveConfig } from '@textile/hub'
     *
     * async function setDefaultConfig (buckets: Buckets, key: string, config: ArchiveConfig) {
     *    await buckets.setDefaultArchiveConfig(key, config)
     * }
     * ```
     */
    setDefaultArchiveConfig(key, config) {
        return __awaiter(this, void 0, void 0, function* () {
            logger.debug('set default archive config request');
            return api_1.bucketsSetDefaultArchiveConfig(this, key, config);
        });
    }
    /**
     * (Experimental) Store a snapshot of the bucket on Filecoin.
     * @remarks
     * Filecoin support is experimental. By using Textile, you
     * are acknowledging that you understand there may be risks to
     * storing your content on or using decentralized storage
     * services.
     *
     * @beta
     * @param key Unique (IPNS compatible) identifier key for a bucket.
     * @param options An object to set options that control the behavor of archive.
     * @param skipAutomaticVerifiedDeal skips logic that automatically uses available datacap to make a verified deal for the archive.
     *
     * @example
     * Archive a Bucket.
     * ```typescript
     * import { Buckets } from '@textile/hub'
     *
     * async function archive (buckets: Buckets, key: string) {
     *    await buckets.archive(key)
     * }
     * ```
     */
    archive(key, options, skipAutomaticVerifiedDeal) {
        return __awaiter(this, void 0, void 0, function* () {
            logger.debug('archive request');
            return api_1.bucketsArchive(this, key, options, skipAutomaticVerifiedDeal);
        });
    }
    /**
     * archives returns the curent and historical archives for a Bucket.
     * @beta
     * @param key Unique (IPNS compatible) identifier key for a bucket.
     *
     * @example
     * Get current and historical archives
     * ```typescript
     * import { Buckets } from '@textile/hub'
     *
     * async function status (buckets: Buckets, key: string) {
     *    const { current, history } = await buckets.archives(key)
     * }
     * ```
     */
    archives(key) {
        return __awaiter(this, void 0, void 0, function* () {
            logger.debug('archives request');
            return api_1.bucketsArchives(this, key);
        });
    }
    /**
     * archiveWatch watches status events from a Filecoin bucket archive.
     * @beta
     * @param key Unique (IPNS compatible) identifier key for a bucket.
     *
     * @example
     * Watch deal state changes for a active bucket archive request.
     * ```typescript
     * import { Buckets } from '@textile/hub'
     *
     * async function logChanges (buckets: Buckets, key: string) {
     *    const log = (reply?: {id?: string, msg: string}, err?: Error | undefined) => {
     *        if (err || !reply) return console.log(err)
     *        console.log(reply.id, reply.msg)
     *    }
     *    buckets.archiveWatch(key, log)
     * }
     * ```
     */
    archiveWatch(key, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            logger.debug('archive watch request');
            return api_1.bucketsArchiveWatch(this, key, callback);
        });
    }
}
exports.Buckets = Buckets;
//# sourceMappingURL=buckets.js.map