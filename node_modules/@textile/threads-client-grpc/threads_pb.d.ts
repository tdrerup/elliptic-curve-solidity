// package: threads.pb
// file: threads.proto

import * as jspb from "google-protobuf";

export class GetTokenRequest extends jspb.Message {
  hasKey(): boolean;
  clearKey(): void;
  getKey(): string;
  setKey(value: string): void;

  hasSignature(): boolean;
  clearSignature(): void;
  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  getPayloadCase(): GetTokenRequest.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTokenRequest): GetTokenRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTokenRequest;
  static deserializeBinaryFromReader(message: GetTokenRequest, reader: jspb.BinaryReader): GetTokenRequest;
}

export namespace GetTokenRequest {
  export type AsObject = {
    key: string,
    signature: Uint8Array | string,
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    KEY = 1,
    SIGNATURE = 2,
  }
}

export class GetTokenReply extends jspb.Message {
  hasChallenge(): boolean;
  clearChallenge(): void;
  getChallenge(): Uint8Array | string;
  getChallenge_asU8(): Uint8Array;
  getChallenge_asB64(): string;
  setChallenge(value: Uint8Array | string): void;

  hasToken(): boolean;
  clearToken(): void;
  getToken(): string;
  setToken(value: string): void;

  getPayloadCase(): GetTokenReply.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTokenReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetTokenReply): GetTokenReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTokenReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTokenReply;
  static deserializeBinaryFromReader(message: GetTokenReply, reader: jspb.BinaryReader): GetTokenReply;
}

export namespace GetTokenReply {
  export type AsObject = {
    challenge: Uint8Array | string,
    token: string,
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    CHALLENGE = 1,
    TOKEN = 2,
  }
}

export class NewDBRequest extends jspb.Message {
  getDbid(): Uint8Array | string;
  getDbid_asU8(): Uint8Array;
  getDbid_asB64(): string;
  setDbid(value: Uint8Array | string): void;

  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): void;

  getLogkey(): Uint8Array | string;
  getLogkey_asU8(): Uint8Array;
  getLogkey_asB64(): string;
  setLogkey(value: Uint8Array | string): void;

  getName(): string;
  setName(value: string): void;

  clearCollectionsList(): void;
  getCollectionsList(): Array<CollectionConfig>;
  setCollectionsList(value: Array<CollectionConfig>): void;
  addCollections(value?: CollectionConfig, index?: number): CollectionConfig;

  getBlock(): boolean;
  setBlock(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewDBRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NewDBRequest): NewDBRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewDBRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewDBRequest;
  static deserializeBinaryFromReader(message: NewDBRequest, reader: jspb.BinaryReader): NewDBRequest;
}

export namespace NewDBRequest {
  export type AsObject = {
    dbid: Uint8Array | string,
    key: Uint8Array | string,
    logkey: Uint8Array | string,
    name: string,
    collectionsList: Array<CollectionConfig.AsObject>,
    block: boolean,
  }
}

export class NewDBFromAddrRequest extends jspb.Message {
  getAddr(): Uint8Array | string;
  getAddr_asU8(): Uint8Array;
  getAddr_asB64(): string;
  setAddr(value: Uint8Array | string): void;

  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): void;

  getLogkey(): Uint8Array | string;
  getLogkey_asU8(): Uint8Array;
  getLogkey_asB64(): string;
  setLogkey(value: Uint8Array | string): void;

  getName(): string;
  setName(value: string): void;

  clearCollectionsList(): void;
  getCollectionsList(): Array<CollectionConfig>;
  setCollectionsList(value: Array<CollectionConfig>): void;
  addCollections(value?: CollectionConfig, index?: number): CollectionConfig;

  getBlock(): boolean;
  setBlock(value: boolean): void;

  getThreadkey(): Uint8Array | string;
  getThreadkey_asU8(): Uint8Array;
  getThreadkey_asB64(): string;
  setThreadkey(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewDBFromAddrRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NewDBFromAddrRequest): NewDBFromAddrRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewDBFromAddrRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewDBFromAddrRequest;
  static deserializeBinaryFromReader(message: NewDBFromAddrRequest, reader: jspb.BinaryReader): NewDBFromAddrRequest;
}

export namespace NewDBFromAddrRequest {
  export type AsObject = {
    addr: Uint8Array | string,
    key: Uint8Array | string,
    logkey: Uint8Array | string,
    name: string,
    collectionsList: Array<CollectionConfig.AsObject>,
    block: boolean,
    threadkey: Uint8Array | string,
  }
}

export class CollectionConfig extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getSchema(): Uint8Array | string;
  getSchema_asU8(): Uint8Array;
  getSchema_asB64(): string;
  setSchema(value: Uint8Array | string): void;

  clearIndexesList(): void;
  getIndexesList(): Array<Index>;
  setIndexesList(value: Array<Index>): void;
  addIndexes(value?: Index, index?: number): Index;

  getWritevalidator(): string;
  setWritevalidator(value: string): void;

  getReadfilter(): string;
  setReadfilter(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectionConfig.AsObject;
  static toObject(includeInstance: boolean, msg: CollectionConfig): CollectionConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CollectionConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectionConfig;
  static deserializeBinaryFromReader(message: CollectionConfig, reader: jspb.BinaryReader): CollectionConfig;
}

export namespace CollectionConfig {
  export type AsObject = {
    name: string,
    schema: Uint8Array | string,
    indexesList: Array<Index.AsObject>,
    writevalidator: string,
    readfilter: string,
  }
}

export class Index extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  getUnique(): boolean;
  setUnique(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Index.AsObject;
  static toObject(includeInstance: boolean, msg: Index): Index.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Index, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Index;
  static deserializeBinaryFromReader(message: Index, reader: jspb.BinaryReader): Index;
}

export namespace Index {
  export type AsObject = {
    path: string,
    unique: boolean,
  }
}

export class NewDBReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewDBReply.AsObject;
  static toObject(includeInstance: boolean, msg: NewDBReply): NewDBReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewDBReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewDBReply;
  static deserializeBinaryFromReader(message: NewDBReply, reader: jspb.BinaryReader): NewDBReply;
}

export namespace NewDBReply {
  export type AsObject = {
  }
}

export class ListDBsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDBsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDBsRequest): ListDBsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDBsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDBsRequest;
  static deserializeBinaryFromReader(message: ListDBsRequest, reader: jspb.BinaryReader): ListDBsRequest;
}

export namespace ListDBsRequest {
  export type AsObject = {
  }
}

export class ListDBsReply extends jspb.Message {
  clearDbsList(): void;
  getDbsList(): Array<ListDBsReply.DB>;
  setDbsList(value: Array<ListDBsReply.DB>): void;
  addDbs(value?: ListDBsReply.DB, index?: number): ListDBsReply.DB;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDBsReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListDBsReply): ListDBsReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDBsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDBsReply;
  static deserializeBinaryFromReader(message: ListDBsReply, reader: jspb.BinaryReader): ListDBsReply;
}

export namespace ListDBsReply {
  export type AsObject = {
    dbsList: Array<ListDBsReply.DB.AsObject>,
  }

  export class DB extends jspb.Message {
    getDbid(): Uint8Array | string;
    getDbid_asU8(): Uint8Array;
    getDbid_asB64(): string;
    setDbid(value: Uint8Array | string): void;

    hasInfo(): boolean;
    clearInfo(): void;
    getInfo(): GetDBInfoReply | undefined;
    setInfo(value?: GetDBInfoReply): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DB.AsObject;
    static toObject(includeInstance: boolean, msg: DB): DB.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DB, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DB;
    static deserializeBinaryFromReader(message: DB, reader: jspb.BinaryReader): DB;
  }

  export namespace DB {
    export type AsObject = {
      dbid: Uint8Array | string,
      info?: GetDBInfoReply.AsObject,
    }
  }
}

export class GetDBInfoRequest extends jspb.Message {
  getDbid(): Uint8Array | string;
  getDbid_asU8(): Uint8Array;
  getDbid_asB64(): string;
  setDbid(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDBInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDBInfoRequest): GetDBInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDBInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDBInfoRequest;
  static deserializeBinaryFromReader(message: GetDBInfoRequest, reader: jspb.BinaryReader): GetDBInfoRequest;
}

export namespace GetDBInfoRequest {
  export type AsObject = {
    dbid: Uint8Array | string,
  }
}

export class GetDBInfoReply extends jspb.Message {
  clearAddrsList(): void;
  getAddrsList(): Array<Uint8Array | string>;
  getAddrsList_asU8(): Array<Uint8Array>;
  getAddrsList_asB64(): Array<string>;
  setAddrsList(value: Array<Uint8Array | string>): void;
  addAddrs(value: Uint8Array | string, index?: number): Uint8Array | string;

  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDBInfoReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetDBInfoReply): GetDBInfoReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDBInfoReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDBInfoReply;
  static deserializeBinaryFromReader(message: GetDBInfoReply, reader: jspb.BinaryReader): GetDBInfoReply;
}

export namespace GetDBInfoReply {
  export type AsObject = {
    addrsList: Array<Uint8Array | string>,
    key: Uint8Array | string,
    name: string,
  }
}

export class DeleteDBRequest extends jspb.Message {
  getDbid(): Uint8Array | string;
  getDbid_asU8(): Uint8Array;
  getDbid_asB64(): string;
  setDbid(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDBRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDBRequest): DeleteDBRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDBRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDBRequest;
  static deserializeBinaryFromReader(message: DeleteDBRequest, reader: jspb.BinaryReader): DeleteDBRequest;
}

export namespace DeleteDBRequest {
  export type AsObject = {
    dbid: Uint8Array | string,
  }
}

export class DeleteDBReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDBReply.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDBReply): DeleteDBReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDBReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDBReply;
  static deserializeBinaryFromReader(message: DeleteDBReply, reader: jspb.BinaryReader): DeleteDBReply;
}

export namespace DeleteDBReply {
  export type AsObject = {
  }
}

export class NewCollectionRequest extends jspb.Message {
  getDbid(): Uint8Array | string;
  getDbid_asU8(): Uint8Array;
  getDbid_asB64(): string;
  setDbid(value: Uint8Array | string): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): CollectionConfig | undefined;
  setConfig(value?: CollectionConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewCollectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NewCollectionRequest): NewCollectionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewCollectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewCollectionRequest;
  static deserializeBinaryFromReader(message: NewCollectionRequest, reader: jspb.BinaryReader): NewCollectionRequest;
}

export namespace NewCollectionRequest {
  export type AsObject = {
    dbid: Uint8Array | string,
    config?: CollectionConfig.AsObject,
  }
}

export class NewCollectionReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewCollectionReply.AsObject;
  static toObject(includeInstance: boolean, msg: NewCollectionReply): NewCollectionReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewCollectionReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewCollectionReply;
  static deserializeBinaryFromReader(message: NewCollectionReply, reader: jspb.BinaryReader): NewCollectionReply;
}

export namespace NewCollectionReply {
  export type AsObject = {
  }
}

export class UpdateCollectionRequest extends jspb.Message {
  getDbid(): Uint8Array | string;
  getDbid_asU8(): Uint8Array;
  getDbid_asB64(): string;
  setDbid(value: Uint8Array | string): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): CollectionConfig | undefined;
  setConfig(value?: CollectionConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCollectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCollectionRequest): UpdateCollectionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCollectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCollectionRequest;
  static deserializeBinaryFromReader(message: UpdateCollectionRequest, reader: jspb.BinaryReader): UpdateCollectionRequest;
}

export namespace UpdateCollectionRequest {
  export type AsObject = {
    dbid: Uint8Array | string,
    config?: CollectionConfig.AsObject,
  }
}

export class UpdateCollectionReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCollectionReply.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCollectionReply): UpdateCollectionReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCollectionReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCollectionReply;
  static deserializeBinaryFromReader(message: UpdateCollectionReply, reader: jspb.BinaryReader): UpdateCollectionReply;
}

export namespace UpdateCollectionReply {
  export type AsObject = {
  }
}

export class DeleteCollectionRequest extends jspb.Message {
  getDbid(): Uint8Array | string;
  getDbid_asU8(): Uint8Array;
  getDbid_asB64(): string;
  setDbid(value: Uint8Array | string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCollectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCollectionRequest): DeleteCollectionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCollectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCollectionRequest;
  static deserializeBinaryFromReader(message: DeleteCollectionRequest, reader: jspb.BinaryReader): DeleteCollectionRequest;
}

export namespace DeleteCollectionRequest {
  export type AsObject = {
    dbid: Uint8Array | string,
    name: string,
  }
}

export class DeleteCollectionReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCollectionReply.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCollectionReply): DeleteCollectionReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCollectionReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCollectionReply;
  static deserializeBinaryFromReader(message: DeleteCollectionReply, reader: jspb.BinaryReader): DeleteCollectionReply;
}

export namespace DeleteCollectionReply {
  export type AsObject = {
  }
}

export class GetCollectionInfoRequest extends jspb.Message {
  getDbid(): Uint8Array | string;
  getDbid_asU8(): Uint8Array;
  getDbid_asB64(): string;
  setDbid(value: Uint8Array | string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCollectionInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCollectionInfoRequest): GetCollectionInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCollectionInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCollectionInfoRequest;
  static deserializeBinaryFromReader(message: GetCollectionInfoRequest, reader: jspb.BinaryReader): GetCollectionInfoRequest;
}

export namespace GetCollectionInfoRequest {
  export type AsObject = {
    dbid: Uint8Array | string,
    name: string,
  }
}

export class GetCollectionInfoReply extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getSchema(): Uint8Array | string;
  getSchema_asU8(): Uint8Array;
  getSchema_asB64(): string;
  setSchema(value: Uint8Array | string): void;

  clearIndexesList(): void;
  getIndexesList(): Array<Index>;
  setIndexesList(value: Array<Index>): void;
  addIndexes(value?: Index, index?: number): Index;

  getWritevalidator(): string;
  setWritevalidator(value: string): void;

  getReadfilter(): string;
  setReadfilter(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCollectionInfoReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetCollectionInfoReply): GetCollectionInfoReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCollectionInfoReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCollectionInfoReply;
  static deserializeBinaryFromReader(message: GetCollectionInfoReply, reader: jspb.BinaryReader): GetCollectionInfoReply;
}

export namespace GetCollectionInfoReply {
  export type AsObject = {
    name: string,
    schema: Uint8Array | string,
    indexesList: Array<Index.AsObject>,
    writevalidator: string,
    readfilter: string,
  }
}

export class GetCollectionIndexesRequest extends jspb.Message {
  getDbid(): Uint8Array | string;
  getDbid_asU8(): Uint8Array;
  getDbid_asB64(): string;
  setDbid(value: Uint8Array | string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCollectionIndexesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCollectionIndexesRequest): GetCollectionIndexesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCollectionIndexesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCollectionIndexesRequest;
  static deserializeBinaryFromReader(message: GetCollectionIndexesRequest, reader: jspb.BinaryReader): GetCollectionIndexesRequest;
}

export namespace GetCollectionIndexesRequest {
  export type AsObject = {
    dbid: Uint8Array | string,
    name: string,
  }
}

export class GetCollectionIndexesReply extends jspb.Message {
  clearIndexesList(): void;
  getIndexesList(): Array<Index>;
  setIndexesList(value: Array<Index>): void;
  addIndexes(value?: Index, index?: number): Index;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCollectionIndexesReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetCollectionIndexesReply): GetCollectionIndexesReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCollectionIndexesReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCollectionIndexesReply;
  static deserializeBinaryFromReader(message: GetCollectionIndexesReply, reader: jspb.BinaryReader): GetCollectionIndexesReply;
}

export namespace GetCollectionIndexesReply {
  export type AsObject = {
    indexesList: Array<Index.AsObject>,
  }
}

export class ListCollectionsRequest extends jspb.Message {
  getDbid(): Uint8Array | string;
  getDbid_asU8(): Uint8Array;
  getDbid_asB64(): string;
  setDbid(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCollectionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCollectionsRequest): ListCollectionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCollectionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCollectionsRequest;
  static deserializeBinaryFromReader(message: ListCollectionsRequest, reader: jspb.BinaryReader): ListCollectionsRequest;
}

export namespace ListCollectionsRequest {
  export type AsObject = {
    dbid: Uint8Array | string,
  }
}

export class ListCollectionsReply extends jspb.Message {
  clearCollectionsList(): void;
  getCollectionsList(): Array<GetCollectionInfoReply>;
  setCollectionsList(value: Array<GetCollectionInfoReply>): void;
  addCollections(value?: GetCollectionInfoReply, index?: number): GetCollectionInfoReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCollectionsReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListCollectionsReply): ListCollectionsReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCollectionsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCollectionsReply;
  static deserializeBinaryFromReader(message: ListCollectionsReply, reader: jspb.BinaryReader): ListCollectionsReply;
}

export namespace ListCollectionsReply {
  export type AsObject = {
    collectionsList: Array<GetCollectionInfoReply.AsObject>,
  }
}

export class CreateRequest extends jspb.Message {
  getDbid(): Uint8Array | string;
  getDbid_asU8(): Uint8Array;
  getDbid_asB64(): string;
  setDbid(value: Uint8Array | string): void;

  getCollectionname(): string;
  setCollectionname(value: string): void;

  clearInstancesList(): void;
  getInstancesList(): Array<Uint8Array | string>;
  getInstancesList_asU8(): Array<Uint8Array>;
  getInstancesList_asB64(): Array<string>;
  setInstancesList(value: Array<Uint8Array | string>): void;
  addInstances(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRequest): CreateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRequest;
  static deserializeBinaryFromReader(message: CreateRequest, reader: jspb.BinaryReader): CreateRequest;
}

export namespace CreateRequest {
  export type AsObject = {
    dbid: Uint8Array | string,
    collectionname: string,
    instancesList: Array<Uint8Array | string>,
  }
}

export class CreateReply extends jspb.Message {
  clearInstanceidsList(): void;
  getInstanceidsList(): Array<string>;
  setInstanceidsList(value: Array<string>): void;
  addInstanceids(value: string, index?: number): string;

  getTransactionerror(): string;
  setTransactionerror(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreateReply): CreateReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateReply;
  static deserializeBinaryFromReader(message: CreateReply, reader: jspb.BinaryReader): CreateReply;
}

export namespace CreateReply {
  export type AsObject = {
    instanceidsList: Array<string>,
    transactionerror: string,
  }
}

export class VerifyRequest extends jspb.Message {
  getDbid(): Uint8Array | string;
  getDbid_asU8(): Uint8Array;
  getDbid_asB64(): string;
  setDbid(value: Uint8Array | string): void;

  getCollectionname(): string;
  setCollectionname(value: string): void;

  clearInstancesList(): void;
  getInstancesList(): Array<Uint8Array | string>;
  getInstancesList_asU8(): Array<Uint8Array>;
  getInstancesList_asB64(): Array<string>;
  setInstancesList(value: Array<Uint8Array | string>): void;
  addInstances(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyRequest): VerifyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerifyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyRequest;
  static deserializeBinaryFromReader(message: VerifyRequest, reader: jspb.BinaryReader): VerifyRequest;
}

export namespace VerifyRequest {
  export type AsObject = {
    dbid: Uint8Array | string,
    collectionname: string,
    instancesList: Array<Uint8Array | string>,
  }
}

export class VerifyReply extends jspb.Message {
  getTransactionerror(): string;
  setTransactionerror(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyReply.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyReply): VerifyReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerifyReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyReply;
  static deserializeBinaryFromReader(message: VerifyReply, reader: jspb.BinaryReader): VerifyReply;
}

export namespace VerifyReply {
  export type AsObject = {
    transactionerror: string,
  }
}

export class SaveRequest extends jspb.Message {
  getDbid(): Uint8Array | string;
  getDbid_asU8(): Uint8Array;
  getDbid_asB64(): string;
  setDbid(value: Uint8Array | string): void;

  getCollectionname(): string;
  setCollectionname(value: string): void;

  clearInstancesList(): void;
  getInstancesList(): Array<Uint8Array | string>;
  getInstancesList_asU8(): Array<Uint8Array>;
  getInstancesList_asB64(): Array<string>;
  setInstancesList(value: Array<Uint8Array | string>): void;
  addInstances(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SaveRequest): SaveRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SaveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveRequest;
  static deserializeBinaryFromReader(message: SaveRequest, reader: jspb.BinaryReader): SaveRequest;
}

export namespace SaveRequest {
  export type AsObject = {
    dbid: Uint8Array | string,
    collectionname: string,
    instancesList: Array<Uint8Array | string>,
  }
}

export class SaveReply extends jspb.Message {
  getTransactionerror(): string;
  setTransactionerror(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveReply.AsObject;
  static toObject(includeInstance: boolean, msg: SaveReply): SaveReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SaveReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveReply;
  static deserializeBinaryFromReader(message: SaveReply, reader: jspb.BinaryReader): SaveReply;
}

export namespace SaveReply {
  export type AsObject = {
    transactionerror: string,
  }
}

export class DeleteRequest extends jspb.Message {
  getDbid(): Uint8Array | string;
  getDbid_asU8(): Uint8Array;
  getDbid_asB64(): string;
  setDbid(value: Uint8Array | string): void;

  getCollectionname(): string;
  setCollectionname(value: string): void;

  clearInstanceidsList(): void;
  getInstanceidsList(): Array<string>;
  setInstanceidsList(value: Array<string>): void;
  addInstanceids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRequest): DeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRequest;
  static deserializeBinaryFromReader(message: DeleteRequest, reader: jspb.BinaryReader): DeleteRequest;
}

export namespace DeleteRequest {
  export type AsObject = {
    dbid: Uint8Array | string,
    collectionname: string,
    instanceidsList: Array<string>,
  }
}

export class DeleteReply extends jspb.Message {
  getTransactionerror(): string;
  setTransactionerror(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteReply.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteReply): DeleteReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteReply;
  static deserializeBinaryFromReader(message: DeleteReply, reader: jspb.BinaryReader): DeleteReply;
}

export namespace DeleteReply {
  export type AsObject = {
    transactionerror: string,
  }
}

export class HasRequest extends jspb.Message {
  getDbid(): Uint8Array | string;
  getDbid_asU8(): Uint8Array;
  getDbid_asB64(): string;
  setDbid(value: Uint8Array | string): void;

  getCollectionname(): string;
  setCollectionname(value: string): void;

  clearInstanceidsList(): void;
  getInstanceidsList(): Array<string>;
  setInstanceidsList(value: Array<string>): void;
  addInstanceids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HasRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HasRequest): HasRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HasRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HasRequest;
  static deserializeBinaryFromReader(message: HasRequest, reader: jspb.BinaryReader): HasRequest;
}

export namespace HasRequest {
  export type AsObject = {
    dbid: Uint8Array | string,
    collectionname: string,
    instanceidsList: Array<string>,
  }
}

export class HasReply extends jspb.Message {
  getExists(): boolean;
  setExists(value: boolean): void;

  getTransactionerror(): string;
  setTransactionerror(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HasReply.AsObject;
  static toObject(includeInstance: boolean, msg: HasReply): HasReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HasReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HasReply;
  static deserializeBinaryFromReader(message: HasReply, reader: jspb.BinaryReader): HasReply;
}

export namespace HasReply {
  export type AsObject = {
    exists: boolean,
    transactionerror: string,
  }
}

export class FindRequest extends jspb.Message {
  getDbid(): Uint8Array | string;
  getDbid_asU8(): Uint8Array;
  getDbid_asB64(): string;
  setDbid(value: Uint8Array | string): void;

  getCollectionname(): string;
  setCollectionname(value: string): void;

  getQueryjson(): Uint8Array | string;
  getQueryjson_asU8(): Uint8Array;
  getQueryjson_asB64(): string;
  setQueryjson(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindRequest): FindRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindRequest;
  static deserializeBinaryFromReader(message: FindRequest, reader: jspb.BinaryReader): FindRequest;
}

export namespace FindRequest {
  export type AsObject = {
    dbid: Uint8Array | string,
    collectionname: string,
    queryjson: Uint8Array | string,
  }
}

export class FindReply extends jspb.Message {
  clearInstancesList(): void;
  getInstancesList(): Array<Uint8Array | string>;
  getInstancesList_asU8(): Array<Uint8Array>;
  getInstancesList_asB64(): Array<string>;
  setInstancesList(value: Array<Uint8Array | string>): void;
  addInstances(value: Uint8Array | string, index?: number): Uint8Array | string;

  getTransactionerror(): string;
  setTransactionerror(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindReply.AsObject;
  static toObject(includeInstance: boolean, msg: FindReply): FindReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindReply;
  static deserializeBinaryFromReader(message: FindReply, reader: jspb.BinaryReader): FindReply;
}

export namespace FindReply {
  export type AsObject = {
    instancesList: Array<Uint8Array | string>,
    transactionerror: string,
  }
}

export class FindByIDRequest extends jspb.Message {
  getDbid(): Uint8Array | string;
  getDbid_asU8(): Uint8Array;
  getDbid_asB64(): string;
  setDbid(value: Uint8Array | string): void;

  getCollectionname(): string;
  setCollectionname(value: string): void;

  getInstanceid(): string;
  setInstanceid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindByIDRequest): FindByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindByIDRequest;
  static deserializeBinaryFromReader(message: FindByIDRequest, reader: jspb.BinaryReader): FindByIDRequest;
}

export namespace FindByIDRequest {
  export type AsObject = {
    dbid: Uint8Array | string,
    collectionname: string,
    instanceid: string,
  }
}

export class FindByIDReply extends jspb.Message {
  getInstance(): Uint8Array | string;
  getInstance_asU8(): Uint8Array;
  getInstance_asB64(): string;
  setInstance(value: Uint8Array | string): void;

  getTransactionerror(): string;
  setTransactionerror(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindByIDReply.AsObject;
  static toObject(includeInstance: boolean, msg: FindByIDReply): FindByIDReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindByIDReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindByIDReply;
  static deserializeBinaryFromReader(message: FindByIDReply, reader: jspb.BinaryReader): FindByIDReply;
}

export namespace FindByIDReply {
  export type AsObject = {
    instance: Uint8Array | string,
    transactionerror: string,
  }
}

export class DiscardRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiscardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DiscardRequest): DiscardRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiscardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiscardRequest;
  static deserializeBinaryFromReader(message: DiscardRequest, reader: jspb.BinaryReader): DiscardRequest;
}

export namespace DiscardRequest {
  export type AsObject = {
  }
}

export class DiscardReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiscardReply.AsObject;
  static toObject(includeInstance: boolean, msg: DiscardReply): DiscardReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiscardReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiscardReply;
  static deserializeBinaryFromReader(message: DiscardReply, reader: jspb.BinaryReader): DiscardReply;
}

export namespace DiscardReply {
  export type AsObject = {
  }
}

export class StartTransactionRequest extends jspb.Message {
  getDbid(): Uint8Array | string;
  getDbid_asU8(): Uint8Array;
  getDbid_asB64(): string;
  setDbid(value: Uint8Array | string): void;

  getCollectionname(): string;
  setCollectionname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartTransactionRequest): StartTransactionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartTransactionRequest;
  static deserializeBinaryFromReader(message: StartTransactionRequest, reader: jspb.BinaryReader): StartTransactionRequest;
}

export namespace StartTransactionRequest {
  export type AsObject = {
    dbid: Uint8Array | string,
    collectionname: string,
  }
}

export class ReadTransactionRequest extends jspb.Message {
  hasStarttransactionrequest(): boolean;
  clearStarttransactionrequest(): void;
  getStarttransactionrequest(): StartTransactionRequest | undefined;
  setStarttransactionrequest(value?: StartTransactionRequest): void;

  hasHasrequest(): boolean;
  clearHasrequest(): void;
  getHasrequest(): HasRequest | undefined;
  setHasrequest(value?: HasRequest): void;

  hasFindrequest(): boolean;
  clearFindrequest(): void;
  getFindrequest(): FindRequest | undefined;
  setFindrequest(value?: FindRequest): void;

  hasFindbyidrequest(): boolean;
  clearFindbyidrequest(): void;
  getFindbyidrequest(): FindByIDRequest | undefined;
  setFindbyidrequest(value?: FindByIDRequest): void;

  getOptionCase(): ReadTransactionRequest.OptionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReadTransactionRequest): ReadTransactionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReadTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadTransactionRequest;
  static deserializeBinaryFromReader(message: ReadTransactionRequest, reader: jspb.BinaryReader): ReadTransactionRequest;
}

export namespace ReadTransactionRequest {
  export type AsObject = {
    starttransactionrequest?: StartTransactionRequest.AsObject,
    hasrequest?: HasRequest.AsObject,
    findrequest?: FindRequest.AsObject,
    findbyidrequest?: FindByIDRequest.AsObject,
  }

  export enum OptionCase {
    OPTION_NOT_SET = 0,
    STARTTRANSACTIONREQUEST = 1,
    HASREQUEST = 2,
    FINDREQUEST = 3,
    FINDBYIDREQUEST = 4,
  }
}

export class ReadTransactionReply extends jspb.Message {
  hasHasreply(): boolean;
  clearHasreply(): void;
  getHasreply(): HasReply | undefined;
  setHasreply(value?: HasReply): void;

  hasFindreply(): boolean;
  clearFindreply(): void;
  getFindreply(): FindReply | undefined;
  setFindreply(value?: FindReply): void;

  hasFindbyidreply(): boolean;
  clearFindbyidreply(): void;
  getFindbyidreply(): FindByIDReply | undefined;
  setFindbyidreply(value?: FindByIDReply): void;

  getOptionCase(): ReadTransactionReply.OptionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadTransactionReply.AsObject;
  static toObject(includeInstance: boolean, msg: ReadTransactionReply): ReadTransactionReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReadTransactionReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadTransactionReply;
  static deserializeBinaryFromReader(message: ReadTransactionReply, reader: jspb.BinaryReader): ReadTransactionReply;
}

export namespace ReadTransactionReply {
  export type AsObject = {
    hasreply?: HasReply.AsObject,
    findreply?: FindReply.AsObject,
    findbyidreply?: FindByIDReply.AsObject,
  }

  export enum OptionCase {
    OPTION_NOT_SET = 0,
    HASREPLY = 1,
    FINDREPLY = 2,
    FINDBYIDREPLY = 3,
  }
}

export class WriteTransactionRequest extends jspb.Message {
  hasStarttransactionrequest(): boolean;
  clearStarttransactionrequest(): void;
  getStarttransactionrequest(): StartTransactionRequest | undefined;
  setStarttransactionrequest(value?: StartTransactionRequest): void;

  hasCreaterequest(): boolean;
  clearCreaterequest(): void;
  getCreaterequest(): CreateRequest | undefined;
  setCreaterequest(value?: CreateRequest): void;

  hasVerifyrequest(): boolean;
  clearVerifyrequest(): void;
  getVerifyrequest(): VerifyRequest | undefined;
  setVerifyrequest(value?: VerifyRequest): void;

  hasSaverequest(): boolean;
  clearSaverequest(): void;
  getSaverequest(): SaveRequest | undefined;
  setSaverequest(value?: SaveRequest): void;

  hasDeleterequest(): boolean;
  clearDeleterequest(): void;
  getDeleterequest(): DeleteRequest | undefined;
  setDeleterequest(value?: DeleteRequest): void;

  hasHasrequest(): boolean;
  clearHasrequest(): void;
  getHasrequest(): HasRequest | undefined;
  setHasrequest(value?: HasRequest): void;

  hasFindrequest(): boolean;
  clearFindrequest(): void;
  getFindrequest(): FindRequest | undefined;
  setFindrequest(value?: FindRequest): void;

  hasFindbyidrequest(): boolean;
  clearFindbyidrequest(): void;
  getFindbyidrequest(): FindByIDRequest | undefined;
  setFindbyidrequest(value?: FindByIDRequest): void;

  hasDiscardrequest(): boolean;
  clearDiscardrequest(): void;
  getDiscardrequest(): DiscardRequest | undefined;
  setDiscardrequest(value?: DiscardRequest): void;

  getOptionCase(): WriteTransactionRequest.OptionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WriteTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WriteTransactionRequest): WriteTransactionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WriteTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WriteTransactionRequest;
  static deserializeBinaryFromReader(message: WriteTransactionRequest, reader: jspb.BinaryReader): WriteTransactionRequest;
}

export namespace WriteTransactionRequest {
  export type AsObject = {
    starttransactionrequest?: StartTransactionRequest.AsObject,
    createrequest?: CreateRequest.AsObject,
    verifyrequest?: VerifyRequest.AsObject,
    saverequest?: SaveRequest.AsObject,
    deleterequest?: DeleteRequest.AsObject,
    hasrequest?: HasRequest.AsObject,
    findrequest?: FindRequest.AsObject,
    findbyidrequest?: FindByIDRequest.AsObject,
    discardrequest?: DiscardRequest.AsObject,
  }

  export enum OptionCase {
    OPTION_NOT_SET = 0,
    STARTTRANSACTIONREQUEST = 1,
    CREATEREQUEST = 2,
    VERIFYREQUEST = 8,
    SAVEREQUEST = 3,
    DELETEREQUEST = 4,
    HASREQUEST = 5,
    FINDREQUEST = 6,
    FINDBYIDREQUEST = 7,
    DISCARDREQUEST = 9,
  }
}

export class WriteTransactionReply extends jspb.Message {
  hasCreatereply(): boolean;
  clearCreatereply(): void;
  getCreatereply(): CreateReply | undefined;
  setCreatereply(value?: CreateReply): void;

  hasVerifyreply(): boolean;
  clearVerifyreply(): void;
  getVerifyreply(): VerifyReply | undefined;
  setVerifyreply(value?: VerifyReply): void;

  hasSavereply(): boolean;
  clearSavereply(): void;
  getSavereply(): SaveReply | undefined;
  setSavereply(value?: SaveReply): void;

  hasDeletereply(): boolean;
  clearDeletereply(): void;
  getDeletereply(): DeleteReply | undefined;
  setDeletereply(value?: DeleteReply): void;

  hasHasreply(): boolean;
  clearHasreply(): void;
  getHasreply(): HasReply | undefined;
  setHasreply(value?: HasReply): void;

  hasFindreply(): boolean;
  clearFindreply(): void;
  getFindreply(): FindReply | undefined;
  setFindreply(value?: FindReply): void;

  hasFindbyidreply(): boolean;
  clearFindbyidreply(): void;
  getFindbyidreply(): FindByIDReply | undefined;
  setFindbyidreply(value?: FindByIDReply): void;

  hasDiscardreply(): boolean;
  clearDiscardreply(): void;
  getDiscardreply(): DiscardReply | undefined;
  setDiscardreply(value?: DiscardReply): void;

  getOptionCase(): WriteTransactionReply.OptionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WriteTransactionReply.AsObject;
  static toObject(includeInstance: boolean, msg: WriteTransactionReply): WriteTransactionReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WriteTransactionReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WriteTransactionReply;
  static deserializeBinaryFromReader(message: WriteTransactionReply, reader: jspb.BinaryReader): WriteTransactionReply;
}

export namespace WriteTransactionReply {
  export type AsObject = {
    createreply?: CreateReply.AsObject,
    verifyreply?: VerifyReply.AsObject,
    savereply?: SaveReply.AsObject,
    deletereply?: DeleteReply.AsObject,
    hasreply?: HasReply.AsObject,
    findreply?: FindReply.AsObject,
    findbyidreply?: FindByIDReply.AsObject,
    discardreply?: DiscardReply.AsObject,
  }

  export enum OptionCase {
    OPTION_NOT_SET = 0,
    CREATEREPLY = 1,
    VERIFYREPLY = 7,
    SAVEREPLY = 2,
    DELETEREPLY = 3,
    HASREPLY = 4,
    FINDREPLY = 5,
    FINDBYIDREPLY = 6,
    DISCARDREPLY = 8,
  }
}

export class ListenRequest extends jspb.Message {
  getDbid(): Uint8Array | string;
  getDbid_asU8(): Uint8Array;
  getDbid_asB64(): string;
  setDbid(value: Uint8Array | string): void;

  clearFiltersList(): void;
  getFiltersList(): Array<ListenRequest.Filter>;
  setFiltersList(value: Array<ListenRequest.Filter>): void;
  addFilters(value?: ListenRequest.Filter, index?: number): ListenRequest.Filter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListenRequest): ListenRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListenRequest;
  static deserializeBinaryFromReader(message: ListenRequest, reader: jspb.BinaryReader): ListenRequest;
}

export namespace ListenRequest {
  export type AsObject = {
    dbid: Uint8Array | string,
    filtersList: Array<ListenRequest.Filter.AsObject>,
  }

  export class Filter extends jspb.Message {
    getCollectionname(): string;
    setCollectionname(value: string): void;

    getInstanceid(): string;
    setInstanceid(value: string): void;

    getAction(): ListenRequest.Filter.ActionMap[keyof ListenRequest.Filter.ActionMap];
    setAction(value: ListenRequest.Filter.ActionMap[keyof ListenRequest.Filter.ActionMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Filter.AsObject;
    static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Filter;
    static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
  }

  export namespace Filter {
    export type AsObject = {
      collectionname: string,
      instanceid: string,
      action: ListenRequest.Filter.ActionMap[keyof ListenRequest.Filter.ActionMap],
    }

    export interface ActionMap {
      ALL: 0;
      CREATE: 1;
      SAVE: 2;
      DELETE: 3;
    }

    export const Action: ActionMap;
  }
}

export class ListenReply extends jspb.Message {
  getCollectionname(): string;
  setCollectionname(value: string): void;

  getInstanceid(): string;
  setInstanceid(value: string): void;

  getAction(): ListenReply.ActionMap[keyof ListenReply.ActionMap];
  setAction(value: ListenReply.ActionMap[keyof ListenReply.ActionMap]): void;

  getInstance(): Uint8Array | string;
  getInstance_asU8(): Uint8Array;
  getInstance_asB64(): string;
  setInstance(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListenReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListenReply): ListenReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListenReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListenReply;
  static deserializeBinaryFromReader(message: ListenReply, reader: jspb.BinaryReader): ListenReply;
}

export namespace ListenReply {
  export type AsObject = {
    collectionname: string,
    instanceid: string,
    action: ListenReply.ActionMap[keyof ListenReply.ActionMap],
    instance: Uint8Array | string,
  }

  export interface ActionMap {
    CREATE: 0;
    SAVE: 1;
    DELETE: 2;
  }

  export const Action: ActionMap;
}

