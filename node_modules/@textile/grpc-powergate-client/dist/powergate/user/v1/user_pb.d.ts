// package: powergate.user.v1
// file: powergate/user/v1/user.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class BuildInfoRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BuildInfoRequest): BuildInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildInfoRequest;
  static deserializeBinaryFromReader(message: BuildInfoRequest, reader: jspb.BinaryReader): BuildInfoRequest;
}

export namespace BuildInfoRequest {
  export type AsObject = {
  }
}

export class BuildInfoResponse extends jspb.Message {
  getGitCommit(): string;
  setGitCommit(value: string): void;

  getGitBranch(): string;
  setGitBranch(value: string): void;

  getGitState(): string;
  setGitState(value: string): void;

  getGitSummary(): string;
  setGitSummary(value: string): void;

  getBuildDate(): string;
  setBuildDate(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BuildInfoResponse): BuildInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildInfoResponse;
  static deserializeBinaryFromReader(message: BuildInfoResponse, reader: jspb.BinaryReader): BuildInfoResponse;
}

export namespace BuildInfoResponse {
  export type AsObject = {
    gitCommit: string,
    gitBranch: string,
    gitState: string,
    gitSummary: string,
    buildDate: string,
    version: string,
  }
}

export class UserIdentifierRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserIdentifierRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserIdentifierRequest): UserIdentifierRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserIdentifierRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserIdentifierRequest;
  static deserializeBinaryFromReader(message: UserIdentifierRequest, reader: jspb.BinaryReader): UserIdentifierRequest;
}

export namespace UserIdentifierRequest {
  export type AsObject = {
  }
}

export class UserIdentifierResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserIdentifierResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserIdentifierResponse): UserIdentifierResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserIdentifierResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserIdentifierResponse;
  static deserializeBinaryFromReader(message: UserIdentifierResponse, reader: jspb.BinaryReader): UserIdentifierResponse;
}

export namespace UserIdentifierResponse {
  export type AsObject = {
    id: string,
  }
}

export class DefaultStorageConfigRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DefaultStorageConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DefaultStorageConfigRequest): DefaultStorageConfigRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DefaultStorageConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DefaultStorageConfigRequest;
  static deserializeBinaryFromReader(message: DefaultStorageConfigRequest, reader: jspb.BinaryReader): DefaultStorageConfigRequest;
}

export namespace DefaultStorageConfigRequest {
  export type AsObject = {
  }
}

export class DefaultStorageConfigResponse extends jspb.Message {
  hasDefaultStorageConfig(): boolean;
  clearDefaultStorageConfig(): void;
  getDefaultStorageConfig(): StorageConfig | undefined;
  setDefaultStorageConfig(value?: StorageConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DefaultStorageConfigResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DefaultStorageConfigResponse): DefaultStorageConfigResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DefaultStorageConfigResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DefaultStorageConfigResponse;
  static deserializeBinaryFromReader(message: DefaultStorageConfigResponse, reader: jspb.BinaryReader): DefaultStorageConfigResponse;
}

export namespace DefaultStorageConfigResponse {
  export type AsObject = {
    defaultStorageConfig?: StorageConfig.AsObject,
  }
}

export class SetDefaultStorageConfigRequest extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): StorageConfig | undefined;
  setConfig(value?: StorageConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetDefaultStorageConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetDefaultStorageConfigRequest): SetDefaultStorageConfigRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetDefaultStorageConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetDefaultStorageConfigRequest;
  static deserializeBinaryFromReader(message: SetDefaultStorageConfigRequest, reader: jspb.BinaryReader): SetDefaultStorageConfigRequest;
}

export namespace SetDefaultStorageConfigRequest {
  export type AsObject = {
    config?: StorageConfig.AsObject,
  }
}

export class SetDefaultStorageConfigResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetDefaultStorageConfigResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetDefaultStorageConfigResponse): SetDefaultStorageConfigResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetDefaultStorageConfigResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetDefaultStorageConfigResponse;
  static deserializeBinaryFromReader(message: SetDefaultStorageConfigResponse, reader: jspb.BinaryReader): SetDefaultStorageConfigResponse;
}

export namespace SetDefaultStorageConfigResponse {
  export type AsObject = {
  }
}

export class StageRequest extends jspb.Message {
  getChunk(): Uint8Array | string;
  getChunk_asU8(): Uint8Array;
  getChunk_asB64(): string;
  setChunk(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StageRequest): StageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StageRequest;
  static deserializeBinaryFromReader(message: StageRequest, reader: jspb.BinaryReader): StageRequest;
}

export namespace StageRequest {
  export type AsObject = {
    chunk: Uint8Array | string,
  }
}

export class StageResponse extends jspb.Message {
  getCid(): string;
  setCid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StageResponse): StageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StageResponse;
  static deserializeBinaryFromReader(message: StageResponse, reader: jspb.BinaryReader): StageResponse;
}

export namespace StageResponse {
  export type AsObject = {
    cid: string,
  }
}

export class StageCidRequest extends jspb.Message {
  getCid(): string;
  setCid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StageCidRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StageCidRequest): StageCidRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StageCidRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StageCidRequest;
  static deserializeBinaryFromReader(message: StageCidRequest, reader: jspb.BinaryReader): StageCidRequest;
}

export namespace StageCidRequest {
  export type AsObject = {
    cid: string,
  }
}

export class StageCidResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StageCidResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StageCidResponse): StageCidResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StageCidResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StageCidResponse;
  static deserializeBinaryFromReader(message: StageCidResponse, reader: jspb.BinaryReader): StageCidResponse;
}

export namespace StageCidResponse {
  export type AsObject = {
  }
}

export class ApplyStorageConfigRequest extends jspb.Message {
  getCid(): string;
  setCid(value: string): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): StorageConfig | undefined;
  setConfig(value?: StorageConfig): void;

  getHasConfig(): boolean;
  setHasConfig(value: boolean): void;

  getOverrideConfig(): boolean;
  setOverrideConfig(value: boolean): void;

  getHasOverrideConfig(): boolean;
  setHasOverrideConfig(value: boolean): void;

  clearImportDealIdsList(): void;
  getImportDealIdsList(): Array<number>;
  setImportDealIdsList(value: Array<number>): void;
  addImportDealIds(value: number, index?: number): number;

  getNoExec(): boolean;
  setNoExec(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyStorageConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyStorageConfigRequest): ApplyStorageConfigRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApplyStorageConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyStorageConfigRequest;
  static deserializeBinaryFromReader(message: ApplyStorageConfigRequest, reader: jspb.BinaryReader): ApplyStorageConfigRequest;
}

export namespace ApplyStorageConfigRequest {
  export type AsObject = {
    cid: string,
    config?: StorageConfig.AsObject,
    hasConfig: boolean,
    overrideConfig: boolean,
    hasOverrideConfig: boolean,
    importDealIdsList: Array<number>,
    noExec: boolean,
  }
}

export class ApplyStorageConfigResponse extends jspb.Message {
  getJobId(): string;
  setJobId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyStorageConfigResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyStorageConfigResponse): ApplyStorageConfigResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApplyStorageConfigResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyStorageConfigResponse;
  static deserializeBinaryFromReader(message: ApplyStorageConfigResponse, reader: jspb.BinaryReader): ApplyStorageConfigResponse;
}

export namespace ApplyStorageConfigResponse {
  export type AsObject = {
    jobId: string,
  }
}

export class ReplaceDataRequest extends jspb.Message {
  getCid1(): string;
  setCid1(value: string): void;

  getCid2(): string;
  setCid2(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReplaceDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReplaceDataRequest): ReplaceDataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReplaceDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReplaceDataRequest;
  static deserializeBinaryFromReader(message: ReplaceDataRequest, reader: jspb.BinaryReader): ReplaceDataRequest;
}

export namespace ReplaceDataRequest {
  export type AsObject = {
    cid1: string,
    cid2: string,
  }
}

export class ReplaceDataResponse extends jspb.Message {
  getJobId(): string;
  setJobId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReplaceDataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReplaceDataResponse): ReplaceDataResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReplaceDataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReplaceDataResponse;
  static deserializeBinaryFromReader(message: ReplaceDataResponse, reader: jspb.BinaryReader): ReplaceDataResponse;
}

export namespace ReplaceDataResponse {
  export type AsObject = {
    jobId: string,
  }
}

export class GetRequest extends jspb.Message {
  getCid(): string;
  setCid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRequest): GetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRequest;
  static deserializeBinaryFromReader(message: GetRequest, reader: jspb.BinaryReader): GetRequest;
}

export namespace GetRequest {
  export type AsObject = {
    cid: string,
  }
}

export class GetResponse extends jspb.Message {
  getChunk(): Uint8Array | string;
  getChunk_asU8(): Uint8Array;
  getChunk_asB64(): string;
  setChunk(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetResponse): GetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResponse;
  static deserializeBinaryFromReader(message: GetResponse, reader: jspb.BinaryReader): GetResponse;
}

export namespace GetResponse {
  export type AsObject = {
    chunk: Uint8Array | string,
  }
}

export class RemoveRequest extends jspb.Message {
  getCid(): string;
  setCid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveRequest): RemoveRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveRequest;
  static deserializeBinaryFromReader(message: RemoveRequest, reader: jspb.BinaryReader): RemoveRequest;
}

export namespace RemoveRequest {
  export type AsObject = {
    cid: string,
  }
}

export class RemoveResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveResponse): RemoveResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveResponse;
  static deserializeBinaryFromReader(message: RemoveResponse, reader: jspb.BinaryReader): RemoveResponse;
}

export namespace RemoveResponse {
  export type AsObject = {
  }
}

export class WatchLogsRequest extends jspb.Message {
  getCid(): string;
  setCid(value: string): void;

  getJobId(): string;
  setJobId(value: string): void;

  getHistory(): boolean;
  setHistory(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchLogsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WatchLogsRequest): WatchLogsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WatchLogsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchLogsRequest;
  static deserializeBinaryFromReader(message: WatchLogsRequest, reader: jspb.BinaryReader): WatchLogsRequest;
}

export namespace WatchLogsRequest {
  export type AsObject = {
    cid: string,
    jobId: string,
    history: boolean,
  }
}

export class WatchLogsResponse extends jspb.Message {
  hasLogEntry(): boolean;
  clearLogEntry(): void;
  getLogEntry(): LogEntry | undefined;
  setLogEntry(value?: LogEntry): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchLogsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchLogsResponse): WatchLogsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WatchLogsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchLogsResponse;
  static deserializeBinaryFromReader(message: WatchLogsResponse, reader: jspb.BinaryReader): WatchLogsResponse;
}

export namespace WatchLogsResponse {
  export type AsObject = {
    logEntry?: LogEntry.AsObject,
  }
}

export class CidSummaryRequest extends jspb.Message {
  clearCidsList(): void;
  getCidsList(): Array<string>;
  setCidsList(value: Array<string>): void;
  addCids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CidSummaryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CidSummaryRequest): CidSummaryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CidSummaryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CidSummaryRequest;
  static deserializeBinaryFromReader(message: CidSummaryRequest, reader: jspb.BinaryReader): CidSummaryRequest;
}

export namespace CidSummaryRequest {
  export type AsObject = {
    cidsList: Array<string>,
  }
}

export class CidSummaryResponse extends jspb.Message {
  clearCidSummaryList(): void;
  getCidSummaryList(): Array<CidSummary>;
  setCidSummaryList(value: Array<CidSummary>): void;
  addCidSummary(value?: CidSummary, index?: number): CidSummary;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CidSummaryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CidSummaryResponse): CidSummaryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CidSummaryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CidSummaryResponse;
  static deserializeBinaryFromReader(message: CidSummaryResponse, reader: jspb.BinaryReader): CidSummaryResponse;
}

export namespace CidSummaryResponse {
  export type AsObject = {
    cidSummaryList: Array<CidSummary.AsObject>,
  }
}

export class CidInfoRequest extends jspb.Message {
  getCid(): string;
  setCid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CidInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CidInfoRequest): CidInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CidInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CidInfoRequest;
  static deserializeBinaryFromReader(message: CidInfoRequest, reader: jspb.BinaryReader): CidInfoRequest;
}

export namespace CidInfoRequest {
  export type AsObject = {
    cid: string,
  }
}

export class CidInfoResponse extends jspb.Message {
  hasCidInfo(): boolean;
  clearCidInfo(): void;
  getCidInfo(): CidInfo | undefined;
  setCidInfo(value?: CidInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CidInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CidInfoResponse): CidInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CidInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CidInfoResponse;
  static deserializeBinaryFromReader(message: CidInfoResponse, reader: jspb.BinaryReader): CidInfoResponse;
}

export namespace CidInfoResponse {
  export type AsObject = {
    cidInfo?: CidInfo.AsObject,
  }
}

export class BalanceRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BalanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BalanceRequest): BalanceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BalanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BalanceRequest;
  static deserializeBinaryFromReader(message: BalanceRequest, reader: jspb.BinaryReader): BalanceRequest;
}

export namespace BalanceRequest {
  export type AsObject = {
    address: string,
  }
}

export class BalanceResponse extends jspb.Message {
  getBalance(): string;
  setBalance(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BalanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BalanceResponse): BalanceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BalanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BalanceResponse;
  static deserializeBinaryFromReader(message: BalanceResponse, reader: jspb.BinaryReader): BalanceResponse;
}

export namespace BalanceResponse {
  export type AsObject = {
    balance: string,
  }
}

export class NewAddressRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAddressType(): string;
  setAddressType(value: string): void;

  getMakeDefault(): boolean;
  setMakeDefault(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NewAddressRequest): NewAddressRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewAddressRequest;
  static deserializeBinaryFromReader(message: NewAddressRequest, reader: jspb.BinaryReader): NewAddressRequest;
}

export namespace NewAddressRequest {
  export type AsObject = {
    name: string,
    addressType: string,
    makeDefault: boolean,
  }
}

export class NewAddressResponse extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewAddressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NewAddressResponse): NewAddressResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewAddressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewAddressResponse;
  static deserializeBinaryFromReader(message: NewAddressResponse, reader: jspb.BinaryReader): NewAddressResponse;
}

export namespace NewAddressResponse {
  export type AsObject = {
    address: string,
  }
}

export class AddressesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddressesRequest): AddressesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressesRequest;
  static deserializeBinaryFromReader(message: AddressesRequest, reader: jspb.BinaryReader): AddressesRequest;
}

export namespace AddressesRequest {
  export type AsObject = {
  }
}

export class AddressesResponse extends jspb.Message {
  clearAddressesList(): void;
  getAddressesList(): Array<AddrInfo>;
  setAddressesList(value: Array<AddrInfo>): void;
  addAddresses(value?: AddrInfo, index?: number): AddrInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddressesResponse): AddressesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressesResponse;
  static deserializeBinaryFromReader(message: AddressesResponse, reader: jspb.BinaryReader): AddressesResponse;
}

export namespace AddressesResponse {
  export type AsObject = {
    addressesList: Array<AddrInfo.AsObject>,
  }
}

export class SendFilRequest extends jspb.Message {
  getFrom(): string;
  setFrom(value: string): void;

  getTo(): string;
  setTo(value: string): void;

  getAmount(): string;
  setAmount(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendFilRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendFilRequest): SendFilRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendFilRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendFilRequest;
  static deserializeBinaryFromReader(message: SendFilRequest, reader: jspb.BinaryReader): SendFilRequest;
}

export namespace SendFilRequest {
  export type AsObject = {
    from: string,
    to: string,
    amount: string,
  }
}

export class SendFilResponse extends jspb.Message {
  getCid(): string;
  setCid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendFilResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendFilResponse): SendFilResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendFilResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendFilResponse;
  static deserializeBinaryFromReader(message: SendFilResponse, reader: jspb.BinaryReader): SendFilResponse;
}

export namespace SendFilResponse {
  export type AsObject = {
    cid: string,
  }
}

export class SignMessageRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  getMessage(): Uint8Array | string;
  getMessage_asU8(): Uint8Array;
  getMessage_asB64(): string;
  setMessage(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignMessageRequest): SignMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignMessageRequest;
  static deserializeBinaryFromReader(message: SignMessageRequest, reader: jspb.BinaryReader): SignMessageRequest;
}

export namespace SignMessageRequest {
  export type AsObject = {
    address: string,
    message: Uint8Array | string,
  }
}

export class SignMessageResponse extends jspb.Message {
  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SignMessageResponse): SignMessageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignMessageResponse;
  static deserializeBinaryFromReader(message: SignMessageResponse, reader: jspb.BinaryReader): SignMessageResponse;
}

export namespace SignMessageResponse {
  export type AsObject = {
    signature: Uint8Array | string,
  }
}

export class VerifyMessageRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  getMessage(): Uint8Array | string;
  getMessage_asU8(): Uint8Array;
  getMessage_asB64(): string;
  setMessage(value: Uint8Array | string): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyMessageRequest): VerifyMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerifyMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyMessageRequest;
  static deserializeBinaryFromReader(message: VerifyMessageRequest, reader: jspb.BinaryReader): VerifyMessageRequest;
}

export namespace VerifyMessageRequest {
  export type AsObject = {
    address: string,
    message: Uint8Array | string,
    signature: Uint8Array | string,
  }
}

export class VerifyMessageResponse extends jspb.Message {
  getOk(): boolean;
  setOk(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyMessageResponse): VerifyMessageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerifyMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyMessageResponse;
  static deserializeBinaryFromReader(message: VerifyMessageResponse, reader: jspb.BinaryReader): VerifyMessageResponse;
}

export namespace VerifyMessageResponse {
  export type AsObject = {
    ok: boolean,
  }
}

export class StorageInfoRequest extends jspb.Message {
  getCid(): string;
  setCid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StorageInfoRequest): StorageInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageInfoRequest;
  static deserializeBinaryFromReader(message: StorageInfoRequest, reader: jspb.BinaryReader): StorageInfoRequest;
}

export namespace StorageInfoRequest {
  export type AsObject = {
    cid: string,
  }
}

export class StorageInfoResponse extends jspb.Message {
  hasStorageInfo(): boolean;
  clearStorageInfo(): void;
  getStorageInfo(): StorageInfo | undefined;
  setStorageInfo(value?: StorageInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StorageInfoResponse): StorageInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageInfoResponse;
  static deserializeBinaryFromReader(message: StorageInfoResponse, reader: jspb.BinaryReader): StorageInfoResponse;
}

export namespace StorageInfoResponse {
  export type AsObject = {
    storageInfo?: StorageInfo.AsObject,
  }
}

export class ListStorageInfoRequest extends jspb.Message {
  clearCidsList(): void;
  getCidsList(): Array<string>;
  setCidsList(value: Array<string>): void;
  addCids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListStorageInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListStorageInfoRequest): ListStorageInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListStorageInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListStorageInfoRequest;
  static deserializeBinaryFromReader(message: ListStorageInfoRequest, reader: jspb.BinaryReader): ListStorageInfoRequest;
}

export namespace ListStorageInfoRequest {
  export type AsObject = {
    cidsList: Array<string>,
  }
}

export class ListStorageInfoResponse extends jspb.Message {
  clearStorageInfoList(): void;
  getStorageInfoList(): Array<StorageInfo>;
  setStorageInfoList(value: Array<StorageInfo>): void;
  addStorageInfo(value?: StorageInfo, index?: number): StorageInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListStorageInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListStorageInfoResponse): ListStorageInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListStorageInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListStorageInfoResponse;
  static deserializeBinaryFromReader(message: ListStorageInfoResponse, reader: jspb.BinaryReader): ListStorageInfoResponse;
}

export namespace ListStorageInfoResponse {
  export type AsObject = {
    storageInfoList: Array<StorageInfo.AsObject>,
  }
}

export class CancelStorageJobRequest extends jspb.Message {
  getJobId(): string;
  setJobId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelStorageJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelStorageJobRequest): CancelStorageJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelStorageJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelStorageJobRequest;
  static deserializeBinaryFromReader(message: CancelStorageJobRequest, reader: jspb.BinaryReader): CancelStorageJobRequest;
}

export namespace CancelStorageJobRequest {
  export type AsObject = {
    jobId: string,
  }
}

export class CancelStorageJobResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelStorageJobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CancelStorageJobResponse): CancelStorageJobResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelStorageJobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelStorageJobResponse;
  static deserializeBinaryFromReader(message: CancelStorageJobResponse, reader: jspb.BinaryReader): CancelStorageJobResponse;
}

export namespace CancelStorageJobResponse {
  export type AsObject = {
  }
}

export class StorageJobRequest extends jspb.Message {
  getJobId(): string;
  setJobId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StorageJobRequest): StorageJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageJobRequest;
  static deserializeBinaryFromReader(message: StorageJobRequest, reader: jspb.BinaryReader): StorageJobRequest;
}

export namespace StorageJobRequest {
  export type AsObject = {
    jobId: string,
  }
}

export class StorageJobResponse extends jspb.Message {
  hasStorageJob(): boolean;
  clearStorageJob(): void;
  getStorageJob(): StorageJob | undefined;
  setStorageJob(value?: StorageJob): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageJobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StorageJobResponse): StorageJobResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageJobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageJobResponse;
  static deserializeBinaryFromReader(message: StorageJobResponse, reader: jspb.BinaryReader): StorageJobResponse;
}

export namespace StorageJobResponse {
  export type AsObject = {
    storageJob?: StorageJob.AsObject,
  }
}

export class StorageConfigForJobRequest extends jspb.Message {
  getJobId(): string;
  setJobId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageConfigForJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StorageConfigForJobRequest): StorageConfigForJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageConfigForJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageConfigForJobRequest;
  static deserializeBinaryFromReader(message: StorageConfigForJobRequest, reader: jspb.BinaryReader): StorageConfigForJobRequest;
}

export namespace StorageConfigForJobRequest {
  export type AsObject = {
    jobId: string,
  }
}

export class StorageConfigForJobResponse extends jspb.Message {
  hasStorageConfig(): boolean;
  clearStorageConfig(): void;
  getStorageConfig(): StorageConfig | undefined;
  setStorageConfig(value?: StorageConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageConfigForJobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StorageConfigForJobResponse): StorageConfigForJobResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageConfigForJobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageConfigForJobResponse;
  static deserializeBinaryFromReader(message: StorageConfigForJobResponse, reader: jspb.BinaryReader): StorageConfigForJobResponse;
}

export namespace StorageConfigForJobResponse {
  export type AsObject = {
    storageConfig?: StorageConfig.AsObject,
  }
}

export class ListStorageJobsRequest extends jspb.Message {
  getCidFilter(): string;
  setCidFilter(value: string): void;

  getLimit(): number;
  setLimit(value: number): void;

  getAscending(): boolean;
  setAscending(value: boolean): void;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  getSelector(): StorageJobsSelectorMap[keyof StorageJobsSelectorMap];
  setSelector(value: StorageJobsSelectorMap[keyof StorageJobsSelectorMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListStorageJobsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListStorageJobsRequest): ListStorageJobsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListStorageJobsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListStorageJobsRequest;
  static deserializeBinaryFromReader(message: ListStorageJobsRequest, reader: jspb.BinaryReader): ListStorageJobsRequest;
}

export namespace ListStorageJobsRequest {
  export type AsObject = {
    cidFilter: string,
    limit: number,
    ascending: boolean,
    nextPageToken: string,
    selector: StorageJobsSelectorMap[keyof StorageJobsSelectorMap],
  }
}

export class ListStorageJobsResponse extends jspb.Message {
  clearStorageJobsList(): void;
  getStorageJobsList(): Array<StorageJob>;
  setStorageJobsList(value: Array<StorageJob>): void;
  addStorageJobs(value?: StorageJob, index?: number): StorageJob;

  getMore(): boolean;
  setMore(value: boolean): void;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListStorageJobsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListStorageJobsResponse): ListStorageJobsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListStorageJobsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListStorageJobsResponse;
  static deserializeBinaryFromReader(message: ListStorageJobsResponse, reader: jspb.BinaryReader): ListStorageJobsResponse;
}

export namespace ListStorageJobsResponse {
  export type AsObject = {
    storageJobsList: Array<StorageJob.AsObject>,
    more: boolean,
    nextPageToken: string,
  }
}

export class StorageJobsSummaryRequest extends jspb.Message {
  getCid(): string;
  setCid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageJobsSummaryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StorageJobsSummaryRequest): StorageJobsSummaryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageJobsSummaryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageJobsSummaryRequest;
  static deserializeBinaryFromReader(message: StorageJobsSummaryRequest, reader: jspb.BinaryReader): StorageJobsSummaryRequest;
}

export namespace StorageJobsSummaryRequest {
  export type AsObject = {
    cid: string,
  }
}

export class StorageJobsSummaryResponse extends jspb.Message {
  clearQueuedStorageJobsList(): void;
  getQueuedStorageJobsList(): Array<string>;
  setQueuedStorageJobsList(value: Array<string>): void;
  addQueuedStorageJobs(value: string, index?: number): string;

  clearExecutingStorageJobsList(): void;
  getExecutingStorageJobsList(): Array<string>;
  setExecutingStorageJobsList(value: Array<string>): void;
  addExecutingStorageJobs(value: string, index?: number): string;

  clearFinalStorageJobsList(): void;
  getFinalStorageJobsList(): Array<string>;
  setFinalStorageJobsList(value: Array<string>): void;
  addFinalStorageJobs(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageJobsSummaryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StorageJobsSummaryResponse): StorageJobsSummaryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageJobsSummaryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageJobsSummaryResponse;
  static deserializeBinaryFromReader(message: StorageJobsSummaryResponse, reader: jspb.BinaryReader): StorageJobsSummaryResponse;
}

export namespace StorageJobsSummaryResponse {
  export type AsObject = {
    queuedStorageJobsList: Array<string>,
    executingStorageJobsList: Array<string>,
    finalStorageJobsList: Array<string>,
  }
}

export class WatchStorageJobsRequest extends jspb.Message {
  clearJobIdsList(): void;
  getJobIdsList(): Array<string>;
  setJobIdsList(value: Array<string>): void;
  addJobIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchStorageJobsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WatchStorageJobsRequest): WatchStorageJobsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WatchStorageJobsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchStorageJobsRequest;
  static deserializeBinaryFromReader(message: WatchStorageJobsRequest, reader: jspb.BinaryReader): WatchStorageJobsRequest;
}

export namespace WatchStorageJobsRequest {
  export type AsObject = {
    jobIdsList: Array<string>,
  }
}

export class WatchStorageJobsResponse extends jspb.Message {
  hasStorageJob(): boolean;
  clearStorageJob(): void;
  getStorageJob(): StorageJob | undefined;
  setStorageJob(value?: StorageJob): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchStorageJobsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchStorageJobsResponse): WatchStorageJobsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WatchStorageJobsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchStorageJobsResponse;
  static deserializeBinaryFromReader(message: WatchStorageJobsResponse, reader: jspb.BinaryReader): WatchStorageJobsResponse;
}

export namespace WatchStorageJobsResponse {
  export type AsObject = {
    storageJob?: StorageJob.AsObject,
  }
}

export class StorageDealRecordsRequest extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): DealRecordsConfig | undefined;
  setConfig(value?: DealRecordsConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageDealRecordsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StorageDealRecordsRequest): StorageDealRecordsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageDealRecordsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageDealRecordsRequest;
  static deserializeBinaryFromReader(message: StorageDealRecordsRequest, reader: jspb.BinaryReader): StorageDealRecordsRequest;
}

export namespace StorageDealRecordsRequest {
  export type AsObject = {
    config?: DealRecordsConfig.AsObject,
  }
}

export class StorageDealRecordsResponse extends jspb.Message {
  clearRecordsList(): void;
  getRecordsList(): Array<StorageDealRecord>;
  setRecordsList(value: Array<StorageDealRecord>): void;
  addRecords(value?: StorageDealRecord, index?: number): StorageDealRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageDealRecordsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StorageDealRecordsResponse): StorageDealRecordsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageDealRecordsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageDealRecordsResponse;
  static deserializeBinaryFromReader(message: StorageDealRecordsResponse, reader: jspb.BinaryReader): StorageDealRecordsResponse;
}

export namespace StorageDealRecordsResponse {
  export type AsObject = {
    recordsList: Array<StorageDealRecord.AsObject>,
  }
}

export class RetrievalDealRecordsRequest extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): DealRecordsConfig | undefined;
  setConfig(value?: DealRecordsConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrievalDealRecordsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RetrievalDealRecordsRequest): RetrievalDealRecordsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RetrievalDealRecordsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrievalDealRecordsRequest;
  static deserializeBinaryFromReader(message: RetrievalDealRecordsRequest, reader: jspb.BinaryReader): RetrievalDealRecordsRequest;
}

export namespace RetrievalDealRecordsRequest {
  export type AsObject = {
    config?: DealRecordsConfig.AsObject,
  }
}

export class RetrievalDealRecordsResponse extends jspb.Message {
  clearRecordsList(): void;
  getRecordsList(): Array<RetrievalDealRecord>;
  setRecordsList(value: Array<RetrievalDealRecord>): void;
  addRecords(value?: RetrievalDealRecord, index?: number): RetrievalDealRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrievalDealRecordsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RetrievalDealRecordsResponse): RetrievalDealRecordsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RetrievalDealRecordsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrievalDealRecordsResponse;
  static deserializeBinaryFromReader(message: RetrievalDealRecordsResponse, reader: jspb.BinaryReader): RetrievalDealRecordsResponse;
}

export namespace RetrievalDealRecordsResponse {
  export type AsObject = {
    recordsList: Array<RetrievalDealRecord.AsObject>,
  }
}

export class AddrInfo extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAddress(): string;
  setAddress(value: string): void;

  getType(): string;
  setType(value: string): void;

  getBalance(): string;
  setBalance(value: string): void;

  hasVerifiedClientInfo(): boolean;
  clearVerifiedClientInfo(): void;
  getVerifiedClientInfo(): AddrInfo.VerifiedClientInfo | undefined;
  setVerifiedClientInfo(value?: AddrInfo.VerifiedClientInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddrInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AddrInfo): AddrInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddrInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddrInfo;
  static deserializeBinaryFromReader(message: AddrInfo, reader: jspb.BinaryReader): AddrInfo;
}

export namespace AddrInfo {
  export type AsObject = {
    name: string,
    address: string,
    type: string,
    balance: string,
    verifiedClientInfo?: AddrInfo.VerifiedClientInfo.AsObject,
  }

  export class VerifiedClientInfo extends jspb.Message {
    getRemainingDatacapBytes(): string;
    setRemainingDatacapBytes(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VerifiedClientInfo.AsObject;
    static toObject(includeInstance: boolean, msg: VerifiedClientInfo): VerifiedClientInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VerifiedClientInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VerifiedClientInfo;
    static deserializeBinaryFromReader(message: VerifiedClientInfo, reader: jspb.BinaryReader): VerifiedClientInfo;
  }

  export namespace VerifiedClientInfo {
    export type AsObject = {
      remainingDatacapBytes: string,
    }
  }
}

export class CidSummary extends jspb.Message {
  getCid(): string;
  setCid(value: string): void;

  getStored(): boolean;
  setStored(value: boolean): void;

  clearQueuedJobsList(): void;
  getQueuedJobsList(): Array<string>;
  setQueuedJobsList(value: Array<string>): void;
  addQueuedJobs(value: string, index?: number): string;

  getExecutingJob(): string;
  setExecutingJob(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CidSummary.AsObject;
  static toObject(includeInstance: boolean, msg: CidSummary): CidSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CidSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CidSummary;
  static deserializeBinaryFromReader(message: CidSummary, reader: jspb.BinaryReader): CidSummary;
}

export namespace CidSummary {
  export type AsObject = {
    cid: string,
    stored: boolean,
    queuedJobsList: Array<string>,
    executingJob: string,
  }
}

export class IpfsConfig extends jspb.Message {
  getAddTimeout(): number;
  setAddTimeout(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IpfsConfig.AsObject;
  static toObject(includeInstance: boolean, msg: IpfsConfig): IpfsConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IpfsConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IpfsConfig;
  static deserializeBinaryFromReader(message: IpfsConfig, reader: jspb.BinaryReader): IpfsConfig;
}

export namespace IpfsConfig {
  export type AsObject = {
    addTimeout: number,
  }
}

export class HotConfig extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  getAllowUnfreeze(): boolean;
  setAllowUnfreeze(value: boolean): void;

  getUnfreezeMaxPrice(): number;
  setUnfreezeMaxPrice(value: number): void;

  hasIpfs(): boolean;
  clearIpfs(): void;
  getIpfs(): IpfsConfig | undefined;
  setIpfs(value?: IpfsConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotConfig.AsObject;
  static toObject(includeInstance: boolean, msg: HotConfig): HotConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HotConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotConfig;
  static deserializeBinaryFromReader(message: HotConfig, reader: jspb.BinaryReader): HotConfig;
}

export namespace HotConfig {
  export type AsObject = {
    enabled: boolean,
    allowUnfreeze: boolean,
    unfreezeMaxPrice: number,
    ipfs?: IpfsConfig.AsObject,
  }
}

export class FilRenew extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  getThreshold(): number;
  setThreshold(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilRenew.AsObject;
  static toObject(includeInstance: boolean, msg: FilRenew): FilRenew.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FilRenew, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilRenew;
  static deserializeBinaryFromReader(message: FilRenew, reader: jspb.BinaryReader): FilRenew;
}

export namespace FilRenew {
  export type AsObject = {
    enabled: boolean,
    threshold: number,
  }
}

export class FilConfig extends jspb.Message {
  getReplicationFactor(): number;
  setReplicationFactor(value: number): void;

  getDealMinDuration(): number;
  setDealMinDuration(value: number): void;

  clearExcludedMinersList(): void;
  getExcludedMinersList(): Array<string>;
  setExcludedMinersList(value: Array<string>): void;
  addExcludedMiners(value: string, index?: number): string;

  clearTrustedMinersList(): void;
  getTrustedMinersList(): Array<string>;
  setTrustedMinersList(value: Array<string>): void;
  addTrustedMiners(value: string, index?: number): string;

  clearCountryCodesList(): void;
  getCountryCodesList(): Array<string>;
  setCountryCodesList(value: Array<string>): void;
  addCountryCodes(value: string, index?: number): string;

  hasRenew(): boolean;
  clearRenew(): void;
  getRenew(): FilRenew | undefined;
  setRenew(value?: FilRenew): void;

  getAddress(): string;
  setAddress(value: string): void;

  getMaxPrice(): number;
  setMaxPrice(value: number): void;

  getFastRetrieval(): boolean;
  setFastRetrieval(value: boolean): void;

  getDealStartOffset(): number;
  setDealStartOffset(value: number): void;

  getVerifiedDeal(): boolean;
  setVerifiedDeal(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilConfig.AsObject;
  static toObject(includeInstance: boolean, msg: FilConfig): FilConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FilConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilConfig;
  static deserializeBinaryFromReader(message: FilConfig, reader: jspb.BinaryReader): FilConfig;
}

export namespace FilConfig {
  export type AsObject = {
    replicationFactor: number,
    dealMinDuration: number,
    excludedMinersList: Array<string>,
    trustedMinersList: Array<string>,
    countryCodesList: Array<string>,
    renew?: FilRenew.AsObject,
    address: string,
    maxPrice: number,
    fastRetrieval: boolean,
    dealStartOffset: number,
    verifiedDeal: boolean,
  }
}

export class ColdConfig extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  hasFilecoin(): boolean;
  clearFilecoin(): void;
  getFilecoin(): FilConfig | undefined;
  setFilecoin(value?: FilConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ColdConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ColdConfig): ColdConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ColdConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ColdConfig;
  static deserializeBinaryFromReader(message: ColdConfig, reader: jspb.BinaryReader): ColdConfig;
}

export namespace ColdConfig {
  export type AsObject = {
    enabled: boolean,
    filecoin?: FilConfig.AsObject,
  }
}

export class StorageConfig extends jspb.Message {
  hasHot(): boolean;
  clearHot(): void;
  getHot(): HotConfig | undefined;
  setHot(value?: HotConfig): void;

  hasCold(): boolean;
  clearCold(): void;
  getCold(): ColdConfig | undefined;
  setCold(value?: ColdConfig): void;

  getRepairable(): boolean;
  setRepairable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageConfig.AsObject;
  static toObject(includeInstance: boolean, msg: StorageConfig): StorageConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageConfig;
  static deserializeBinaryFromReader(message: StorageConfig, reader: jspb.BinaryReader): StorageConfig;
}

export namespace StorageConfig {
  export type AsObject = {
    hot?: HotConfig.AsObject,
    cold?: ColdConfig.AsObject,
    repairable: boolean,
  }
}

export class IpfsHotInfo extends jspb.Message {
  getCreated(): number;
  setCreated(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IpfsHotInfo.AsObject;
  static toObject(includeInstance: boolean, msg: IpfsHotInfo): IpfsHotInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IpfsHotInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IpfsHotInfo;
  static deserializeBinaryFromReader(message: IpfsHotInfo, reader: jspb.BinaryReader): IpfsHotInfo;
}

export namespace IpfsHotInfo {
  export type AsObject = {
    created: number,
  }
}

export class HotInfo extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  getSize(): number;
  setSize(value: number): void;

  hasIpfs(): boolean;
  clearIpfs(): void;
  getIpfs(): IpfsHotInfo | undefined;
  setIpfs(value?: IpfsHotInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotInfo.AsObject;
  static toObject(includeInstance: boolean, msg: HotInfo): HotInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HotInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotInfo;
  static deserializeBinaryFromReader(message: HotInfo, reader: jspb.BinaryReader): HotInfo;
}

export namespace HotInfo {
  export type AsObject = {
    enabled: boolean,
    size: number,
    ipfs?: IpfsHotInfo.AsObject,
  }
}

export class FilStorage extends jspb.Message {
  getDealId(): number;
  setDealId(value: number): void;

  getRenewed(): boolean;
  setRenewed(value: boolean): void;

  getDuration(): number;
  setDuration(value: number): void;

  getStartEpoch(): number;
  setStartEpoch(value: number): void;

  getMiner(): string;
  setMiner(value: string): void;

  getEpochPrice(): number;
  setEpochPrice(value: number): void;

  getPieceCid(): string;
  setPieceCid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilStorage.AsObject;
  static toObject(includeInstance: boolean, msg: FilStorage): FilStorage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FilStorage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilStorage;
  static deserializeBinaryFromReader(message: FilStorage, reader: jspb.BinaryReader): FilStorage;
}

export namespace FilStorage {
  export type AsObject = {
    dealId: number,
    renewed: boolean,
    duration: number,
    startEpoch: number,
    miner: string,
    epochPrice: number,
    pieceCid: string,
  }
}

export class FilInfo extends jspb.Message {
  getDataCid(): string;
  setDataCid(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  clearProposalsList(): void;
  getProposalsList(): Array<FilStorage>;
  setProposalsList(value: Array<FilStorage>): void;
  addProposals(value?: FilStorage, index?: number): FilStorage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilInfo.AsObject;
  static toObject(includeInstance: boolean, msg: FilInfo): FilInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FilInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilInfo;
  static deserializeBinaryFromReader(message: FilInfo, reader: jspb.BinaryReader): FilInfo;
}

export namespace FilInfo {
  export type AsObject = {
    dataCid: string,
    size: number,
    proposalsList: Array<FilStorage.AsObject>,
  }
}

export class ColdInfo extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  hasFilecoin(): boolean;
  clearFilecoin(): void;
  getFilecoin(): FilInfo | undefined;
  setFilecoin(value?: FilInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ColdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ColdInfo): ColdInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ColdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ColdInfo;
  static deserializeBinaryFromReader(message: ColdInfo, reader: jspb.BinaryReader): ColdInfo;
}

export namespace ColdInfo {
  export type AsObject = {
    enabled: boolean,
    filecoin?: FilInfo.AsObject,
  }
}

export class StorageInfo extends jspb.Message {
  getJobId(): string;
  setJobId(value: string): void;

  getCid(): string;
  setCid(value: string): void;

  getCreated(): number;
  setCreated(value: number): void;

  hasHot(): boolean;
  clearHot(): void;
  getHot(): HotInfo | undefined;
  setHot(value?: HotInfo): void;

  hasCold(): boolean;
  clearCold(): void;
  getCold(): ColdInfo | undefined;
  setCold(value?: ColdInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageInfo.AsObject;
  static toObject(includeInstance: boolean, msg: StorageInfo): StorageInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageInfo;
  static deserializeBinaryFromReader(message: StorageInfo, reader: jspb.BinaryReader): StorageInfo;
}

export namespace StorageInfo {
  export type AsObject = {
    jobId: string,
    cid: string,
    created: number,
    hot?: HotInfo.AsObject,
    cold?: ColdInfo.AsObject,
  }
}

export class CidInfo extends jspb.Message {
  getCid(): string;
  setCid(value: string): void;

  hasLatestPushedStorageConfig(): boolean;
  clearLatestPushedStorageConfig(): void;
  getLatestPushedStorageConfig(): StorageConfig | undefined;
  setLatestPushedStorageConfig(value?: StorageConfig): void;

  hasCurrentStorageInfo(): boolean;
  clearCurrentStorageInfo(): void;
  getCurrentStorageInfo(): StorageInfo | undefined;
  setCurrentStorageInfo(value?: StorageInfo): void;

  clearQueuedStorageJobsList(): void;
  getQueuedStorageJobsList(): Array<StorageJob>;
  setQueuedStorageJobsList(value: Array<StorageJob>): void;
  addQueuedStorageJobs(value?: StorageJob, index?: number): StorageJob;

  hasExecutingStorageJob(): boolean;
  clearExecutingStorageJob(): void;
  getExecutingStorageJob(): StorageJob | undefined;
  setExecutingStorageJob(value?: StorageJob): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CidInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CidInfo): CidInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CidInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CidInfo;
  static deserializeBinaryFromReader(message: CidInfo, reader: jspb.BinaryReader): CidInfo;
}

export namespace CidInfo {
  export type AsObject = {
    cid: string,
    latestPushedStorageConfig?: StorageConfig.AsObject,
    currentStorageInfo?: StorageInfo.AsObject,
    queuedStorageJobsList: Array<StorageJob.AsObject>,
    executingStorageJob?: StorageJob.AsObject,
  }
}

export class DealInfo extends jspb.Message {
  getProposalCid(): string;
  setProposalCid(value: string): void;

  getStateId(): number;
  setStateId(value: number): void;

  getStateName(): string;
  setStateName(value: string): void;

  getMiner(): string;
  setMiner(value: string): void;

  getPieceCid(): string;
  setPieceCid(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  getPricePerEpoch(): number;
  setPricePerEpoch(value: number): void;

  getStartEpoch(): number;
  setStartEpoch(value: number): void;

  getDuration(): number;
  setDuration(value: number): void;

  getDealId(): number;
  setDealId(value: number): void;

  getActivationEpoch(): number;
  setActivationEpoch(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DealInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DealInfo): DealInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DealInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DealInfo;
  static deserializeBinaryFromReader(message: DealInfo, reader: jspb.BinaryReader): DealInfo;
}

export namespace DealInfo {
  export type AsObject = {
    proposalCid: string,
    stateId: number,
    stateName: string,
    miner: string,
    pieceCid: string,
    size: number,
    pricePerEpoch: number,
    startEpoch: number,
    duration: number,
    dealId: number,
    activationEpoch: number,
    message: string,
  }
}

export class StorageJob extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getApiId(): string;
  setApiId(value: string): void;

  getCid(): string;
  setCid(value: string): void;

  getStatus(): JobStatusMap[keyof JobStatusMap];
  setStatus(value: JobStatusMap[keyof JobStatusMap]): void;

  getErrorCause(): string;
  setErrorCause(value: string): void;

  clearDealInfoList(): void;
  getDealInfoList(): Array<DealInfo>;
  setDealInfoList(value: Array<DealInfo>): void;
  addDealInfo(value?: DealInfo, index?: number): DealInfo;

  clearDealErrorsList(): void;
  getDealErrorsList(): Array<DealError>;
  setDealErrorsList(value: Array<DealError>): void;
  addDealErrors(value?: DealError, index?: number): DealError;

  getCreatedAt(): number;
  setCreatedAt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageJob.AsObject;
  static toObject(includeInstance: boolean, msg: StorageJob): StorageJob.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageJob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageJob;
  static deserializeBinaryFromReader(message: StorageJob, reader: jspb.BinaryReader): StorageJob;
}

export namespace StorageJob {
  export type AsObject = {
    id: string,
    apiId: string,
    cid: string,
    status: JobStatusMap[keyof JobStatusMap],
    errorCause: string,
    dealInfoList: Array<DealInfo.AsObject>,
    dealErrorsList: Array<DealError.AsObject>,
    createdAt: number,
  }
}

export class DealError extends jspb.Message {
  getProposalCid(): string;
  setProposalCid(value: string): void;

  getMiner(): string;
  setMiner(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DealError.AsObject;
  static toObject(includeInstance: boolean, msg: DealError): DealError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DealError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DealError;
  static deserializeBinaryFromReader(message: DealError, reader: jspb.BinaryReader): DealError;
}

export namespace DealError {
  export type AsObject = {
    proposalCid: string,
    miner: string,
    message: string,
  }
}

export class LogEntry extends jspb.Message {
  getCid(): string;
  setCid(value: string): void;

  getJobId(): string;
  setJobId(value: string): void;

  getTime(): number;
  setTime(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogEntry.AsObject;
  static toObject(includeInstance: boolean, msg: LogEntry): LogEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LogEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogEntry;
  static deserializeBinaryFromReader(message: LogEntry, reader: jspb.BinaryReader): LogEntry;
}

export namespace LogEntry {
  export type AsObject = {
    cid: string,
    jobId: string,
    time: number,
    message: string,
  }
}

export class DealRecordsConfig extends jspb.Message {
  clearFromAddrsList(): void;
  getFromAddrsList(): Array<string>;
  setFromAddrsList(value: Array<string>): void;
  addFromAddrs(value: string, index?: number): string;

  clearDataCidsList(): void;
  getDataCidsList(): Array<string>;
  setDataCidsList(value: Array<string>): void;
  addDataCids(value: string, index?: number): string;

  getIncludePending(): boolean;
  setIncludePending(value: boolean): void;

  getIncludeFinal(): boolean;
  setIncludeFinal(value: boolean): void;

  getAscending(): boolean;
  setAscending(value: boolean): void;

  getIncludeFailed(): boolean;
  setIncludeFailed(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DealRecordsConfig.AsObject;
  static toObject(includeInstance: boolean, msg: DealRecordsConfig): DealRecordsConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DealRecordsConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DealRecordsConfig;
  static deserializeBinaryFromReader(message: DealRecordsConfig, reader: jspb.BinaryReader): DealRecordsConfig;
}

export namespace DealRecordsConfig {
  export type AsObject = {
    fromAddrsList: Array<string>,
    dataCidsList: Array<string>,
    includePending: boolean,
    includeFinal: boolean,
    ascending: boolean,
    includeFailed: boolean,
  }
}

export class StorageDealInfo extends jspb.Message {
  getProposalCid(): string;
  setProposalCid(value: string): void;

  getStateId(): number;
  setStateId(value: number): void;

  getStateName(): string;
  setStateName(value: string): void;

  getMiner(): string;
  setMiner(value: string): void;

  getPieceCid(): string;
  setPieceCid(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  getPricePerEpoch(): number;
  setPricePerEpoch(value: number): void;

  getStartEpoch(): number;
  setStartEpoch(value: number): void;

  getDuration(): number;
  setDuration(value: number): void;

  getDealId(): number;
  setDealId(value: number): void;

  getActivationEpoch(): number;
  setActivationEpoch(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageDealInfo.AsObject;
  static toObject(includeInstance: boolean, msg: StorageDealInfo): StorageDealInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageDealInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageDealInfo;
  static deserializeBinaryFromReader(message: StorageDealInfo, reader: jspb.BinaryReader): StorageDealInfo;
}

export namespace StorageDealInfo {
  export type AsObject = {
    proposalCid: string,
    stateId: number,
    stateName: string,
    miner: string,
    pieceCid: string,
    size: number,
    pricePerEpoch: number,
    startEpoch: number,
    duration: number,
    dealId: number,
    activationEpoch: number,
    message: string,
  }
}

export class StorageDealRecord extends jspb.Message {
  getRootCid(): string;
  setRootCid(value: string): void;

  getAddress(): string;
  setAddress(value: string): void;

  getTime(): number;
  setTime(value: number): void;

  getPending(): boolean;
  setPending(value: boolean): void;

  hasDealInfo(): boolean;
  clearDealInfo(): void;
  getDealInfo(): StorageDealInfo | undefined;
  setDealInfo(value?: StorageDealInfo): void;

  getTransferSize(): number;
  setTransferSize(value: number): void;

  hasDataTransferStart(): boolean;
  clearDataTransferStart(): void;
  getDataTransferStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDataTransferStart(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDataTransferEnd(): boolean;
  clearDataTransferEnd(): void;
  getDataTransferEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDataTransferEnd(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasSealingStart(): boolean;
  clearSealingStart(): void;
  getSealingStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSealingStart(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasSealingEnd(): boolean;
  clearSealingEnd(): void;
  getSealingEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSealingEnd(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getErrMsg(): string;
  setErrMsg(value: string): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageDealRecord.AsObject;
  static toObject(includeInstance: boolean, msg: StorageDealRecord): StorageDealRecord.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageDealRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageDealRecord;
  static deserializeBinaryFromReader(message: StorageDealRecord, reader: jspb.BinaryReader): StorageDealRecord;
}

export namespace StorageDealRecord {
  export type AsObject = {
    rootCid: string,
    address: string,
    time: number,
    pending: boolean,
    dealInfo?: StorageDealInfo.AsObject,
    transferSize: number,
    dataTransferStart?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dataTransferEnd?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    sealingStart?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    sealingEnd?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    errMsg: string,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class RetrievalDealInfo extends jspb.Message {
  getRootCid(): string;
  setRootCid(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  getMinPrice(): number;
  setMinPrice(value: number): void;

  getPaymentInterval(): number;
  setPaymentInterval(value: number): void;

  getPaymentIntervalIncrease(): number;
  setPaymentIntervalIncrease(value: number): void;

  getMiner(): string;
  setMiner(value: string): void;

  getMinerPeerId(): string;
  setMinerPeerId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrievalDealInfo.AsObject;
  static toObject(includeInstance: boolean, msg: RetrievalDealInfo): RetrievalDealInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RetrievalDealInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrievalDealInfo;
  static deserializeBinaryFromReader(message: RetrievalDealInfo, reader: jspb.BinaryReader): RetrievalDealInfo;
}

export namespace RetrievalDealInfo {
  export type AsObject = {
    rootCid: string,
    size: number,
    minPrice: number,
    paymentInterval: number,
    paymentIntervalIncrease: number,
    miner: string,
    minerPeerId: string,
  }
}

export class RetrievalDealRecord extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  getTime(): number;
  setTime(value: number): void;

  hasDealInfo(): boolean;
  clearDealInfo(): void;
  getDealInfo(): RetrievalDealInfo | undefined;
  setDealInfo(value?: RetrievalDealInfo): void;

  hasDataTransferStart(): boolean;
  clearDataTransferStart(): void;
  getDataTransferStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDataTransferStart(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDataTransferEnd(): boolean;
  clearDataTransferEnd(): void;
  getDataTransferEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDataTransferEnd(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getErrMsg(): string;
  setErrMsg(value: string): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getId(): string;
  setId(value: string): void;

  getBytesReceived(): number;
  setBytesReceived(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrievalDealRecord.AsObject;
  static toObject(includeInstance: boolean, msg: RetrievalDealRecord): RetrievalDealRecord.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RetrievalDealRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrievalDealRecord;
  static deserializeBinaryFromReader(message: RetrievalDealRecord, reader: jspb.BinaryReader): RetrievalDealRecord;
}

export namespace RetrievalDealRecord {
  export type AsObject = {
    address: string,
    time: number,
    dealInfo?: RetrievalDealInfo.AsObject,
    dataTransferStart?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dataTransferEnd?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    errMsg: string,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    id: string,
    bytesReceived: number,
  }
}

export interface JobStatusMap {
  JOB_STATUS_UNSPECIFIED: 0;
  JOB_STATUS_QUEUED: 1;
  JOB_STATUS_EXECUTING: 2;
  JOB_STATUS_FAILED: 3;
  JOB_STATUS_CANCELED: 4;
  JOB_STATUS_SUCCESS: 5;
}

export const JobStatus: JobStatusMap;

export interface StorageJobsSelectorMap {
  STORAGE_JOBS_SELECTOR_UNSPECIFIED: 0;
  STORAGE_JOBS_SELECTOR_ALL: 1;
  STORAGE_JOBS_SELECTOR_QUEUED: 2;
  STORAGE_JOBS_SELECTOR_EXECUTING: 3;
  STORAGE_JOBS_SELECTOR_FINAL: 4;
}

export const StorageJobsSelector: StorageJobsSelectorMap;

