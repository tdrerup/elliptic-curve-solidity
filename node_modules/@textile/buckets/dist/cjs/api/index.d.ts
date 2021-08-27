import { grpc } from '@improbable-eng/grpc-web';
import { ContextInterface } from '@textile/context';
import { GrpcConnection } from '@textile/grpc-connection';
import { ArchiveConfig, ArchiveOptions, Archives, CreateResponse, Links, Path, PathAccessRole, PathItem, PushOptions, PushPathResult, PushPathsResult, RemovePathOptions, RemovePathResponse, Root } from '../types';
import { File } from './normalize';
export { File };
export declare const CHUNK_SIZE = 1024;
export declare function genChunks(value: Uint8Array, size: number): Generator<Uint8Array, any, undefined>;
/**
 * Creates a new bucket.
 * @public
 * @param name Human-readable bucket name. It is only meant to help identify a bucket in a UI and is not unique.
 * @param isPrivate encrypt the bucket contents (default `false`)
 * @param cid (optional) Bootstrap the bucket with a UnixFS Cid from the IPFS network
 * @example
 * Creates a Bucket called "app-name-files"
 * ```typescript
 * import { Buckets } from '@textile/hub'
 *
 * const create = async (buckets: Buckets) => {
 *     return buckets.create("app-name-files")
 * }
 * ```
 *
 * @internal
 */
export declare function bucketsCreate(api: GrpcConnection, name: string, isPrivate?: boolean, cid?: string, ctx?: ContextInterface): Promise<CreateResponse>;
/**
 * Returns the bucket root CID
 * @param key Unique (IPNS compatible) identifier key for a bucket.
 *
 * @internal
 */
export declare function bucketsRoot(api: GrpcConnection, key: string, ctx?: ContextInterface): Promise<Root | undefined>;
/**
 * Returns a list of bucket links.
 * @param key Unique (IPNS compatible) identifier key for a bucket.
 * @example
 * Generate the HTTP, IPNS, and IPFS links for a Bucket
 * ```typescript
 * import { Buckets } from '@textile/hub'
 *
 * const getLinks = async (buckets: Buckets) => {
 *    const links = buckets.links(bucketKey)
 *    return links.ipfs
 * }
 *
 * const getIpfs = async (buckets: Buckets) => {
 *    const links = buckets.links(bucketKey)
 *    return links.ipfs
 * }
 * ```
 *
 * @internal
 */
export declare function bucketsLinks(api: GrpcConnection, key: string, path: string, ctx?: ContextInterface): Promise<Links>;
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
 * ```
 *
 * @internal
 */
export declare function bucketsList(api: GrpcConnection, ctx?: ContextInterface): Promise<Array<Root>>;
/**
 * Returns information about a bucket path.
 * @param key Unique (IPNS compatible) identifier key for a bucket.
 * @param path A file/object (sub)-path within a bucket.
 *
 * @internal
 */
export declare function bucketsListPath(api: GrpcConnection, key: string, path: string, ctx?: ContextInterface): Promise<Path>;
/**
 * listIpfsPath returns items at a particular path in a UnixFS path living in the IPFS network.
 * @param path UnixFS path
 *
 * @internal
 */
export declare function bucketsListIpfsPath(api: GrpcConnection, path: string, ctx?: ContextInterface): Promise<PathItem | undefined>;
/**
 * Move a file or subpath to a new path.
 * @internal
 */
export declare function bucketsMovePath(api: GrpcConnection, key: string, fromPath: string, toPath: string, ctx?: ContextInterface): Promise<void>;
/**
 * Pushes a file to a bucket path.
 * @param key Unique (IPNS compatible) identifier key for a bucket.
 * @param path A file/object (sub)-path within a bucket.
 * @param input The input file/stream/object.
 * @param opts Options to control response stream.
 * @remarks
 * This will return the resolved path and the bucket's new root path.
 * @example
 * Push a file to the root of a bucket
 * ```typescript
 * import { Buckets } from '@textile/hub'
 *
 * const pushFile = async (content: string, bucketKey: string) => {
 *    const file = { path: '/index.html', content: Buffer.from(content) }
 *    return await buckets.pushPath(bucketKey!, 'index.html', file)
 * }
 * ```
 * @internal
 */
export declare function bucketsPushPath(api: GrpcConnection, key: string, path: string, input: any, opts?: PushOptions, ctx?: ContextInterface): Promise<PushPathResult>;
/**
 * Pushes an iterable of files to a bucket.
 * @param key Unique (IPNS compatible) identifier key for a bucket.
 * @param input The input array of file/stream/objects.
 * @param opts Options to control response stream.
 * @internal
 */
export declare function bucketsPushPaths(api: GrpcConnection, key: string, input: any, opts?: Omit<PushOptions, 'progress'>, ctx?: ContextInterface): AsyncIterableIterator<PushPathsResult>;
/**
 * Sets a file at a given bucket path.
 * @internal
 */
export declare function bucketsSetPath(api: GrpcConnection, key: string, path: string, cid: string, ctx?: ContextInterface): Promise<void>;
/**
 * Pulls the bucket path, returning the bytes of the given file.
 * @param key Unique (IPNS compatible) identifier key for a bucket.
 * @param path A file/object (sub)-path within a bucket.
 * @param opts Options to control response stream. Currently only supports a progress function.
 *
 * @internal
 */
export declare function bucketsPullPath(api: GrpcConnection, key: string, path: string, opts?: {
    progress?: (num?: number) => void;
}, ctx?: ContextInterface): AsyncIterableIterator<Uint8Array>;
/**
 * pullIpfsPath pulls the path from a remote UnixFS dag, writing it to writer if it's a file.
 * @param path A file/object (sub)-path within a bucket.
 * @param opts Options to control response stream. Currently only supports a progress function.
 *
 * @internal
 */
export declare function bucketsPullIpfsPath(api: GrpcConnection, path: string, opts?: {
    progress?: (num?: number) => void;
}, ctx?: ContextInterface): AsyncIterableIterator<Uint8Array>;
/**
 * Removes an entire bucket. Files and directories will be unpinned.
 * @param key Unique (IPNS compatible) identifier key for a bucket.
 *
 * @internal
 */
export declare function bucketsRemove(api: GrpcConnection, key: string, ctx?: ContextInterface): Promise<void>;
/**
 * Returns information about a bucket path.
 * @param key Unique (IPNS compatible) identifier key for a bucket.
 * @param path A file/object (sub)-path within a bucket.
 * @param root optional to specify a root
 *
 * @internal
 */
export declare function bucketsRemovePath(api: GrpcConnection, key: string, path: string, opts?: RemovePathOptions, ctx?: ContextInterface): Promise<RemovePathResponse>;
export declare function bucketsPushPathAccessRoles(api: GrpcConnection, key: string, path: string, roles: Map<string, PathAccessRole>, ctx?: ContextInterface): Promise<void>;
export declare function bucketsPullPathAccessRoles(api: GrpcConnection, key: string, path?: string, ctx?: ContextInterface): Promise<Map<string, 0 | 1 | 2 | 3>>;
/**
 * @internal
 */
export declare function bucketsDefaultArchiveConfig(api: GrpcConnection, key: string, ctx?: ContextInterface): Promise<ArchiveConfig>;
/**
 * @internal
 */
export declare function bucketsSetDefaultArchiveConfig(api: GrpcConnection, key: string, config: ArchiveConfig, ctx?: ContextInterface): Promise<void>;
/**
 * archive creates a Filecoin bucket archive.
 * @internal
 * @param key Unique (IPNS compatible) identifier key for a bucket.
 * @param options Options that control the behavior of the bucket archive
 * @param skipAutomaticVerifiedDeal skips logic that automatically uses available datacap to make a verified deal for the archive.
 */
export declare function bucketsArchive(api: GrpcConnection, key: string, options?: ArchiveOptions, skipAutomaticVerifiedDeal?: boolean, ctx?: ContextInterface): Promise<void>;
/**
 * @internal
 */
export declare function bucketsArchives(api: GrpcConnection, key: string, ctx?: ContextInterface): Promise<Archives>;
/**
 * archiveWatch watches status events from a Filecoin bucket archive.
 * @internal
 * @param key Unique (IPNS compatible) identifier key for a bucket.
 */
export declare function bucketsArchiveWatch(api: GrpcConnection, key: string, callback: (reply?: {
    id: string | undefined;
    msg: string;
}, err?: Error) => void, ctx?: ContextInterface): Promise<() => void>;
/**
 * Raw API connected needed by Buckets CI code (compile friendly)
 * see more https://github.com/textileio/github-action-buckets
 */
export declare class BucketsGrpcClient {
    context: ContextInterface;
    serviceHost: string;
    rpcOptions: grpc.RpcOptions;
    /**
     * Creates a new gRPC client instance for accessing the Textile Buckets API.
     * @param context The context to use for interacting with the APIs. Can be modified later.
     */
    constructor(context?: ContextInterface, debug?: boolean);
    unary<R extends grpc.ProtobufMessage, T extends grpc.ProtobufMessage, M extends grpc.UnaryMethodDefinition<R, T>>(methodDescriptor: M, req: R, ctx?: ContextInterface): Promise<T | void>;
}
