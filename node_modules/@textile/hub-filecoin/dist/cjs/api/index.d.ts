import { ContextInterface } from '@textile/context';
import { GrpcConnection } from '@textile/grpc-connection';
import { AddressInfo, CidInfo, CidSummary, DealRecordsConfig, RetrievalDealRecord, StorageDealRecord } from '../types';
/**
 * @internal
 */
export declare function addresses(api: GrpcConnection, ctx?: ContextInterface): Promise<AddressInfo[]>;
/**
 * @internal
 */
export declare function balance(api: GrpcConnection, address: string, ctx?: ContextInterface): Promise<bigint>;
/**
 * @internal
 */
export declare function cidSummary(api: GrpcConnection, ctx?: ContextInterface, ...cids: string[]): Promise<CidSummary[]>;
/**
 * @internal
 */
export declare function cidInfo(api: GrpcConnection, ctx?: ContextInterface, cid?: string): Promise<CidInfo>;
/**
 * @internal
 */
export declare function storageDealRecords(api: GrpcConnection, config: DealRecordsConfig, ctx?: ContextInterface): Promise<StorageDealRecord[]>;
/**
 * @internal
 */
export declare function retrievalDealRecords(api: GrpcConnection, config: DealRecordsConfig, ctx?: ContextInterface): Promise<RetrievalDealRecord[]>;
