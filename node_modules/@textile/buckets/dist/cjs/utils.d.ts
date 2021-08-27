import { GrpcConnection } from '@textile/grpc-connection';
import { Path } from './types';
/**
 * bytesToArray converts a buffer into <4mb chunks for use with grpc API
 * @param chunk an input Buffer or Uint8Array
 */
export declare function bytesToArray(chunk: Uint8Array, size?: number): Uint8Array[];
/**
 * listPathRecursive returns a nested object of all paths (and info) in a bucket
 */
export declare function listPathRecursive(grpc: GrpcConnection, bucketKey: string, path: string, depth: number, currentDepth?: number): Promise<Path>;
/**
 * listPathFlat returns a string array of all paths in a bucket
 */
export declare function listPathFlat(grpc: GrpcConnection, bucketKey: string, path: string, dirs: boolean, depth: number): Promise<Array<string>>;
