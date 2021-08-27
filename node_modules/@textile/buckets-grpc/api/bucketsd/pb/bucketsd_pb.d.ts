// package: api.bucketsd.pb
// file: api/bucketsd/pb/bucketsd.proto

import * as jspb from "google-protobuf";

export class Metadata extends jspb.Message {
  getRolesMap(): jspb.Map<string, PathAccessRoleMap[keyof PathAccessRoleMap]>;
  clearRolesMap(): void;
  getUpdatedAt(): number;
  setUpdatedAt(value: number): void;

  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Metadata.AsObject;
  static toObject(includeInstance: boolean, msg: Metadata): Metadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Metadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Metadata;
  static deserializeBinaryFromReader(message: Metadata, reader: jspb.BinaryReader): Metadata;
}

export namespace Metadata {
  export type AsObject = {
    rolesMap: Array<[string, PathAccessRoleMap[keyof PathAccessRoleMap]]>,
    updatedAt: number,
    key: string,
  }
}

export class Root extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getName(): string;
  setName(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  getCreatedAt(): number;
  setCreatedAt(value: number): void;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): void;

  getThread(): string;
  setThread(value: string): void;

  getOwner(): string;
  setOwner(value: string): void;

  getVersion(): number;
  setVersion(value: number): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): void;

  getLinkKey(): string;
  setLinkKey(value: string): void;

  getPathMetadataMap(): jspb.Map<string, Metadata>;
  clearPathMetadataMap(): void;
  hasArchives(): boolean;
  clearArchives(): void;
  getArchives(): Archives | undefined;
  setArchives(value?: Archives): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Root.AsObject;
  static toObject(includeInstance: boolean, msg: Root): Root.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Root, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Root;
  static deserializeBinaryFromReader(message: Root, reader: jspb.BinaryReader): Root;
}

export namespace Root {
  export type AsObject = {
    key: string,
    name: string,
    path: string,
    createdAt: number,
    updatedAt: number,
    thread: string,
    owner: string,
    version: number,
    metadata?: Metadata.AsObject,
    linkKey: string,
    pathMetadataMap: Array<[string, Metadata.AsObject]>,
    archives?: Archives.AsObject,
  }
}

export class ListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRequest): ListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRequest;
  static deserializeBinaryFromReader(message: ListRequest, reader: jspb.BinaryReader): ListRequest;
}

export namespace ListRequest {
  export type AsObject = {
  }
}

export class ListResponse extends jspb.Message {
  clearRootsList(): void;
  getRootsList(): Array<Root>;
  setRootsList(value: Array<Root>): void;
  addRoots(value?: Root, index?: number): Root;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListResponse): ListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResponse;
  static deserializeBinaryFromReader(message: ListResponse, reader: jspb.BinaryReader): ListResponse;
}

export namespace ListResponse {
  export type AsObject = {
    rootsList: Array<Root.AsObject>,
  }
}

export class CreateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getBootstrapCid(): string;
  setBootstrapCid(value: string): void;

  getPrivate(): boolean;
  setPrivate(value: boolean): void;

  getUnfreeze(): boolean;
  setUnfreeze(value: boolean): void;

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
    name: string,
    bootstrapCid: string,
    pb_private: boolean,
    unfreeze: boolean,
  }
}

export class CreateResponse extends jspb.Message {
  hasRoot(): boolean;
  clearRoot(): void;
  getRoot(): Root | undefined;
  setRoot(value?: Root): void;

  hasLinks(): boolean;
  clearLinks(): void;
  getLinks(): LinksResponse | undefined;
  setLinks(value?: LinksResponse): void;

  getSeed(): Uint8Array | string;
  getSeed_asU8(): Uint8Array;
  getSeed_asB64(): string;
  setSeed(value: Uint8Array | string): void;

  getSeedCid(): string;
  setSeedCid(value: string): void;

  getPinned(): number;
  setPinned(value: number): void;

  getRetrievalId(): string;
  setRetrievalId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateResponse): CreateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateResponse;
  static deserializeBinaryFromReader(message: CreateResponse, reader: jspb.BinaryReader): CreateResponse;
}

export namespace CreateResponse {
  export type AsObject = {
    root?: Root.AsObject,
    links?: LinksResponse.AsObject,
    seed: Uint8Array | string,
    seedCid: string,
    pinned: number,
    retrievalId: string,
  }
}

export class RootRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RootRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RootRequest): RootRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RootRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RootRequest;
  static deserializeBinaryFromReader(message: RootRequest, reader: jspb.BinaryReader): RootRequest;
}

export namespace RootRequest {
  export type AsObject = {
    key: string,
  }
}

export class RootResponse extends jspb.Message {
  hasRoot(): boolean;
  clearRoot(): void;
  getRoot(): Root | undefined;
  setRoot(value?: Root): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RootResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RootResponse): RootResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RootResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RootResponse;
  static deserializeBinaryFromReader(message: RootResponse, reader: jspb.BinaryReader): RootResponse;
}

export namespace RootResponse {
  export type AsObject = {
    root?: Root.AsObject,
  }
}

export class LinksRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LinksRequest): LinksRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LinksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinksRequest;
  static deserializeBinaryFromReader(message: LinksRequest, reader: jspb.BinaryReader): LinksRequest;
}

export namespace LinksRequest {
  export type AsObject = {
    key: string,
    path: string,
  }
}

export class LinksResponse extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  getWww(): string;
  setWww(value: string): void;

  getIpns(): string;
  setIpns(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LinksResponse): LinksResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LinksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinksResponse;
  static deserializeBinaryFromReader(message: LinksResponse, reader: jspb.BinaryReader): LinksResponse;
}

export namespace LinksResponse {
  export type AsObject = {
    url: string,
    www: string,
    ipns: string,
  }
}

export class ListPathRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPathRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPathRequest): ListPathRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPathRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPathRequest;
  static deserializeBinaryFromReader(message: ListPathRequest, reader: jspb.BinaryReader): ListPathRequest;
}

export namespace ListPathRequest {
  export type AsObject = {
    key: string,
    path: string,
  }
}

export class ListPathResponse extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): PathItem | undefined;
  setItem(value?: PathItem): void;

  hasRoot(): boolean;
  clearRoot(): void;
  getRoot(): Root | undefined;
  setRoot(value?: Root): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPathResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPathResponse): ListPathResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPathResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPathResponse;
  static deserializeBinaryFromReader(message: ListPathResponse, reader: jspb.BinaryReader): ListPathResponse;
}

export namespace ListPathResponse {
  export type AsObject = {
    item?: PathItem.AsObject,
    root?: Root.AsObject,
  }
}

export class PathItem extends jspb.Message {
  getCid(): string;
  setCid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  getIsDir(): boolean;
  setIsDir(value: boolean): void;

  clearItemsList(): void;
  getItemsList(): Array<PathItem>;
  setItemsList(value: Array<PathItem>): void;
  addItems(value?: PathItem, index?: number): PathItem;

  getItemsCount(): number;
  setItemsCount(value: number): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PathItem.AsObject;
  static toObject(includeInstance: boolean, msg: PathItem): PathItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PathItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PathItem;
  static deserializeBinaryFromReader(message: PathItem, reader: jspb.BinaryReader): PathItem;
}

export namespace PathItem {
  export type AsObject = {
    cid: string,
    name: string,
    path: string,
    size: number,
    isDir: boolean,
    itemsList: Array<PathItem.AsObject>,
    itemsCount: number,
    metadata?: Metadata.AsObject,
  }
}

export class ListIpfsPathRequest extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListIpfsPathRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListIpfsPathRequest): ListIpfsPathRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListIpfsPathRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListIpfsPathRequest;
  static deserializeBinaryFromReader(message: ListIpfsPathRequest, reader: jspb.BinaryReader): ListIpfsPathRequest;
}

export namespace ListIpfsPathRequest {
  export type AsObject = {
    path: string,
  }
}

export class ListIpfsPathResponse extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): PathItem | undefined;
  setItem(value?: PathItem): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListIpfsPathResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListIpfsPathResponse): ListIpfsPathResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListIpfsPathResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListIpfsPathResponse;
  static deserializeBinaryFromReader(message: ListIpfsPathResponse, reader: jspb.BinaryReader): ListIpfsPathResponse;
}

export namespace ListIpfsPathResponse {
  export type AsObject = {
    item?: PathItem.AsObject,
  }
}

export class PushPathRequest extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): PushPathRequest.Header | undefined;
  setHeader(value?: PushPathRequest.Header): void;

  hasChunk(): boolean;
  clearChunk(): void;
  getChunk(): Uint8Array | string;
  getChunk_asU8(): Uint8Array;
  getChunk_asB64(): string;
  setChunk(value: Uint8Array | string): void;

  getPayloadCase(): PushPathRequest.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PushPathRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PushPathRequest): PushPathRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PushPathRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PushPathRequest;
  static deserializeBinaryFromReader(message: PushPathRequest, reader: jspb.BinaryReader): PushPathRequest;
}

export namespace PushPathRequest {
  export type AsObject = {
    header?: PushPathRequest.Header.AsObject,
    chunk: Uint8Array | string,
  }

  export class Header extends jspb.Message {
    getKey(): string;
    setKey(value: string): void;

    getPath(): string;
    setPath(value: string): void;

    getRoot(): string;
    setRoot(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Header.AsObject;
    static toObject(includeInstance: boolean, msg: Header): Header.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Header, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Header;
    static deserializeBinaryFromReader(message: Header, reader: jspb.BinaryReader): Header;
  }

  export namespace Header {
    export type AsObject = {
      key: string,
      path: string,
      root: string,
    }
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    HEADER = 1,
    CHUNK = 2,
  }
}

export class PushPathResponse extends jspb.Message {
  hasEvent(): boolean;
  clearEvent(): void;
  getEvent(): PushPathResponse.Event | undefined;
  setEvent(value?: PushPathResponse.Event): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PushPathResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PushPathResponse): PushPathResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PushPathResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PushPathResponse;
  static deserializeBinaryFromReader(message: PushPathResponse, reader: jspb.BinaryReader): PushPathResponse;
}

export namespace PushPathResponse {
  export type AsObject = {
    event?: PushPathResponse.Event.AsObject,
  }

  export class Event extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getPath(): string;
    setPath(value: string): void;

    getBytes(): number;
    setBytes(value: number): void;

    getSize(): string;
    setSize(value: string): void;

    hasRoot(): boolean;
    clearRoot(): void;
    getRoot(): Root | undefined;
    setRoot(value?: Root): void;

    getPinned(): number;
    setPinned(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Event.AsObject;
    static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Event;
    static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
  }

  export namespace Event {
    export type AsObject = {
      name: string,
      path: string,
      bytes: number,
      size: string,
      root?: Root.AsObject,
      pinned: number,
    }
  }
}

export class PushPathsRequest extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): PushPathsRequest.Header | undefined;
  setHeader(value?: PushPathsRequest.Header): void;

  hasChunk(): boolean;
  clearChunk(): void;
  getChunk(): PushPathsRequest.Chunk | undefined;
  setChunk(value?: PushPathsRequest.Chunk): void;

  getPayloadCase(): PushPathsRequest.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PushPathsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PushPathsRequest): PushPathsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PushPathsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PushPathsRequest;
  static deserializeBinaryFromReader(message: PushPathsRequest, reader: jspb.BinaryReader): PushPathsRequest;
}

export namespace PushPathsRequest {
  export type AsObject = {
    header?: PushPathsRequest.Header.AsObject,
    chunk?: PushPathsRequest.Chunk.AsObject,
  }

  export class Header extends jspb.Message {
    getKey(): string;
    setKey(value: string): void;

    getRoot(): string;
    setRoot(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Header.AsObject;
    static toObject(includeInstance: boolean, msg: Header): Header.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Header, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Header;
    static deserializeBinaryFromReader(message: Header, reader: jspb.BinaryReader): Header;
  }

  export namespace Header {
    export type AsObject = {
      key: string,
      root: string,
    }
  }

  export class Chunk extends jspb.Message {
    getPath(): string;
    setPath(value: string): void;

    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Chunk.AsObject;
    static toObject(includeInstance: boolean, msg: Chunk): Chunk.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Chunk, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Chunk;
    static deserializeBinaryFromReader(message: Chunk, reader: jspb.BinaryReader): Chunk;
  }

  export namespace Chunk {
    export type AsObject = {
      path: string,
      data: Uint8Array | string,
    }
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    HEADER = 1,
    CHUNK = 2,
  }
}

export class PushPathsResponse extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  getCid(): string;
  setCid(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  getPinned(): number;
  setPinned(value: number): void;

  hasRoot(): boolean;
  clearRoot(): void;
  getRoot(): Root | undefined;
  setRoot(value?: Root): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PushPathsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PushPathsResponse): PushPathsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PushPathsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PushPathsResponse;
  static deserializeBinaryFromReader(message: PushPathsResponse, reader: jspb.BinaryReader): PushPathsResponse;
}

export namespace PushPathsResponse {
  export type AsObject = {
    path: string,
    cid: string,
    size: number,
    pinned: number,
    root?: Root.AsObject,
  }
}

export class PullPathRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullPathRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullPathRequest): PullPathRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PullPathRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullPathRequest;
  static deserializeBinaryFromReader(message: PullPathRequest, reader: jspb.BinaryReader): PullPathRequest;
}

export namespace PullPathRequest {
  export type AsObject = {
    key: string,
    path: string,
  }
}

export class PullPathResponse extends jspb.Message {
  getChunk(): Uint8Array | string;
  getChunk_asU8(): Uint8Array;
  getChunk_asB64(): string;
  setChunk(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullPathResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullPathResponse): PullPathResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PullPathResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullPathResponse;
  static deserializeBinaryFromReader(message: PullPathResponse, reader: jspb.BinaryReader): PullPathResponse;
}

export namespace PullPathResponse {
  export type AsObject = {
    chunk: Uint8Array | string,
  }
}

export class PullIpfsPathRequest extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullIpfsPathRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullIpfsPathRequest): PullIpfsPathRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PullIpfsPathRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullIpfsPathRequest;
  static deserializeBinaryFromReader(message: PullIpfsPathRequest, reader: jspb.BinaryReader): PullIpfsPathRequest;
}

export namespace PullIpfsPathRequest {
  export type AsObject = {
    path: string,
  }
}

export class PullIpfsPathResponse extends jspb.Message {
  getChunk(): Uint8Array | string;
  getChunk_asU8(): Uint8Array;
  getChunk_asB64(): string;
  setChunk(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullIpfsPathResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullIpfsPathResponse): PullIpfsPathResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PullIpfsPathResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullIpfsPathResponse;
  static deserializeBinaryFromReader(message: PullIpfsPathResponse, reader: jspb.BinaryReader): PullIpfsPathResponse;
}

export namespace PullIpfsPathResponse {
  export type AsObject = {
    chunk: Uint8Array | string,
  }
}

export class SetPathRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  getCid(): string;
  setCid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetPathRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetPathRequest): SetPathRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetPathRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetPathRequest;
  static deserializeBinaryFromReader(message: SetPathRequest, reader: jspb.BinaryReader): SetPathRequest;
}

export namespace SetPathRequest {
  export type AsObject = {
    key: string,
    path: string,
    cid: string,
  }
}

export class SetPathResponse extends jspb.Message {
  getPinned(): number;
  setPinned(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetPathResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetPathResponse): SetPathResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetPathResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetPathResponse;
  static deserializeBinaryFromReader(message: SetPathResponse, reader: jspb.BinaryReader): SetPathResponse;
}

export namespace SetPathResponse {
  export type AsObject = {
    pinned: number,
  }
}

export class MovePathRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getFromPath(): string;
  setFromPath(value: string): void;

  getToPath(): string;
  setToPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MovePathRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MovePathRequest): MovePathRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MovePathRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MovePathRequest;
  static deserializeBinaryFromReader(message: MovePathRequest, reader: jspb.BinaryReader): MovePathRequest;
}

export namespace MovePathRequest {
  export type AsObject = {
    key: string,
    fromPath: string,
    toPath: string,
  }
}

export class MovePathResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MovePathResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MovePathResponse): MovePathResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MovePathResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MovePathResponse;
  static deserializeBinaryFromReader(message: MovePathResponse, reader: jspb.BinaryReader): MovePathResponse;
}

export namespace MovePathResponse {
  export type AsObject = {
  }
}

export class RemoveRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

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
    key: string,
  }
}

export class RemoveResponse extends jspb.Message {
  getPinned(): number;
  setPinned(value: number): void;

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
    pinned: number,
  }
}

export class RemovePathRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  getRoot(): string;
  setRoot(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemovePathRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemovePathRequest): RemovePathRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemovePathRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemovePathRequest;
  static deserializeBinaryFromReader(message: RemovePathRequest, reader: jspb.BinaryReader): RemovePathRequest;
}

export namespace RemovePathRequest {
  export type AsObject = {
    key: string,
    path: string,
    root: string,
  }
}

export class RemovePathResponse extends jspb.Message {
  hasRoot(): boolean;
  clearRoot(): void;
  getRoot(): Root | undefined;
  setRoot(value?: Root): void;

  getPinned(): number;
  setPinned(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemovePathResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemovePathResponse): RemovePathResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemovePathResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemovePathResponse;
  static deserializeBinaryFromReader(message: RemovePathResponse, reader: jspb.BinaryReader): RemovePathResponse;
}

export namespace RemovePathResponse {
  export type AsObject = {
    root?: Root.AsObject,
    pinned: number,
  }
}

export class PushPathAccessRolesRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  getRolesMap(): jspb.Map<string, PathAccessRoleMap[keyof PathAccessRoleMap]>;
  clearRolesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PushPathAccessRolesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PushPathAccessRolesRequest): PushPathAccessRolesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PushPathAccessRolesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PushPathAccessRolesRequest;
  static deserializeBinaryFromReader(message: PushPathAccessRolesRequest, reader: jspb.BinaryReader): PushPathAccessRolesRequest;
}

export namespace PushPathAccessRolesRequest {
  export type AsObject = {
    key: string,
    path: string,
    rolesMap: Array<[string, PathAccessRoleMap[keyof PathAccessRoleMap]]>,
  }
}

export class PushPathAccessRolesResponse extends jspb.Message {
  getPinned(): number;
  setPinned(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PushPathAccessRolesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PushPathAccessRolesResponse): PushPathAccessRolesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PushPathAccessRolesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PushPathAccessRolesResponse;
  static deserializeBinaryFromReader(message: PushPathAccessRolesResponse, reader: jspb.BinaryReader): PushPathAccessRolesResponse;
}

export namespace PushPathAccessRolesResponse {
  export type AsObject = {
    pinned: number,
  }
}

export class PullPathAccessRolesRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullPathAccessRolesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullPathAccessRolesRequest): PullPathAccessRolesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PullPathAccessRolesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullPathAccessRolesRequest;
  static deserializeBinaryFromReader(message: PullPathAccessRolesRequest, reader: jspb.BinaryReader): PullPathAccessRolesRequest;
}

export namespace PullPathAccessRolesRequest {
  export type AsObject = {
    key: string,
    path: string,
  }
}

export class PullPathAccessRolesResponse extends jspb.Message {
  getRolesMap(): jspb.Map<string, PathAccessRoleMap[keyof PathAccessRoleMap]>;
  clearRolesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullPathAccessRolesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullPathAccessRolesResponse): PullPathAccessRolesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PullPathAccessRolesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullPathAccessRolesResponse;
  static deserializeBinaryFromReader(message: PullPathAccessRolesResponse, reader: jspb.BinaryReader): PullPathAccessRolesResponse;
}

export namespace PullPathAccessRolesResponse {
  export type AsObject = {
    rolesMap: Array<[string, PathAccessRoleMap[keyof PathAccessRoleMap]]>,
  }
}

export class ArchiveConfig extends jspb.Message {
  getRepFactor(): number;
  setRepFactor(value: number): void;

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
  getRenew(): ArchiveRenew | undefined;
  setRenew(value?: ArchiveRenew): void;

  getMaxPrice(): number;
  setMaxPrice(value: number): void;

  getFastRetrieval(): boolean;
  setFastRetrieval(value: boolean): void;

  getDealStartOffset(): number;
  setDealStartOffset(value: number): void;

  getVerifiedDeal(): boolean;
  setVerifiedDeal(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArchiveConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ArchiveConfig): ArchiveConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArchiveConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArchiveConfig;
  static deserializeBinaryFromReader(message: ArchiveConfig, reader: jspb.BinaryReader): ArchiveConfig;
}

export namespace ArchiveConfig {
  export type AsObject = {
    repFactor: number,
    dealMinDuration: number,
    excludedMinersList: Array<string>,
    trustedMinersList: Array<string>,
    countryCodesList: Array<string>,
    renew?: ArchiveRenew.AsObject,
    maxPrice: number,
    fastRetrieval: boolean,
    dealStartOffset: number,
    verifiedDeal: boolean,
  }
}

export class Archives extends jspb.Message {
  hasCurrent(): boolean;
  clearCurrent(): void;
  getCurrent(): Archive | undefined;
  setCurrent(value?: Archive): void;

  clearHistoryList(): void;
  getHistoryList(): Array<Archive>;
  setHistoryList(value: Array<Archive>): void;
  addHistory(value?: Archive, index?: number): Archive;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Archives.AsObject;
  static toObject(includeInstance: boolean, msg: Archives): Archives.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Archives, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Archives;
  static deserializeBinaryFromReader(message: Archives, reader: jspb.BinaryReader): Archives;
}

export namespace Archives {
  export type AsObject = {
    current?: Archive.AsObject,
    historyList: Array<Archive.AsObject>,
  }
}

export class Archive extends jspb.Message {
  getCid(): string;
  setCid(value: string): void;

  getJobId(): string;
  setJobId(value: string): void;

  getArchiveStatus(): ArchiveStatusMap[keyof ArchiveStatusMap];
  setArchiveStatus(value: ArchiveStatusMap[keyof ArchiveStatusMap]): void;

  getAborted(): boolean;
  setAborted(value: boolean): void;

  getAbortedMsg(): string;
  setAbortedMsg(value: string): void;

  getFailureMsg(): string;
  setFailureMsg(value: string): void;

  getCreatedAt(): number;
  setCreatedAt(value: number): void;

  clearDealInfoList(): void;
  getDealInfoList(): Array<DealInfo>;
  setDealInfoList(value: Array<DealInfo>): void;
  addDealInfo(value?: DealInfo, index?: number): DealInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Archive.AsObject;
  static toObject(includeInstance: boolean, msg: Archive): Archive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Archive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Archive;
  static deserializeBinaryFromReader(message: Archive, reader: jspb.BinaryReader): Archive;
}

export namespace Archive {
  export type AsObject = {
    cid: string,
    jobId: string,
    archiveStatus: ArchiveStatusMap[keyof ArchiveStatusMap],
    aborted: boolean,
    abortedMsg: string,
    failureMsg: string,
    createdAt: number,
    dealInfoList: Array<DealInfo.AsObject>,
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

export class ArchiveRenew extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  getThreshold(): number;
  setThreshold(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArchiveRenew.AsObject;
  static toObject(includeInstance: boolean, msg: ArchiveRenew): ArchiveRenew.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArchiveRenew, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArchiveRenew;
  static deserializeBinaryFromReader(message: ArchiveRenew, reader: jspb.BinaryReader): ArchiveRenew;
}

export namespace ArchiveRenew {
  export type AsObject = {
    enabled: boolean,
    threshold: number,
  }
}

export class DefaultArchiveConfigRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DefaultArchiveConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DefaultArchiveConfigRequest): DefaultArchiveConfigRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DefaultArchiveConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DefaultArchiveConfigRequest;
  static deserializeBinaryFromReader(message: DefaultArchiveConfigRequest, reader: jspb.BinaryReader): DefaultArchiveConfigRequest;
}

export namespace DefaultArchiveConfigRequest {
  export type AsObject = {
    key: string,
  }
}

export class DefaultArchiveConfigResponse extends jspb.Message {
  hasArchiveConfig(): boolean;
  clearArchiveConfig(): void;
  getArchiveConfig(): ArchiveConfig | undefined;
  setArchiveConfig(value?: ArchiveConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DefaultArchiveConfigResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DefaultArchiveConfigResponse): DefaultArchiveConfigResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DefaultArchiveConfigResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DefaultArchiveConfigResponse;
  static deserializeBinaryFromReader(message: DefaultArchiveConfigResponse, reader: jspb.BinaryReader): DefaultArchiveConfigResponse;
}

export namespace DefaultArchiveConfigResponse {
  export type AsObject = {
    archiveConfig?: ArchiveConfig.AsObject,
  }
}

export class SetDefaultArchiveConfigRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  hasArchiveConfig(): boolean;
  clearArchiveConfig(): void;
  getArchiveConfig(): ArchiveConfig | undefined;
  setArchiveConfig(value?: ArchiveConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetDefaultArchiveConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetDefaultArchiveConfigRequest): SetDefaultArchiveConfigRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetDefaultArchiveConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetDefaultArchiveConfigRequest;
  static deserializeBinaryFromReader(message: SetDefaultArchiveConfigRequest, reader: jspb.BinaryReader): SetDefaultArchiveConfigRequest;
}

export namespace SetDefaultArchiveConfigRequest {
  export type AsObject = {
    key: string,
    archiveConfig?: ArchiveConfig.AsObject,
  }
}

export class SetDefaultArchiveConfigResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetDefaultArchiveConfigResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetDefaultArchiveConfigResponse): SetDefaultArchiveConfigResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetDefaultArchiveConfigResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetDefaultArchiveConfigResponse;
  static deserializeBinaryFromReader(message: SetDefaultArchiveConfigResponse, reader: jspb.BinaryReader): SetDefaultArchiveConfigResponse;
}

export namespace SetDefaultArchiveConfigResponse {
  export type AsObject = {
  }
}

export class ArchiveRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  hasArchiveConfig(): boolean;
  clearArchiveConfig(): void;
  getArchiveConfig(): ArchiveConfig | undefined;
  setArchiveConfig(value?: ArchiveConfig): void;

  getSkipAutomaticVerifiedDeal(): boolean;
  setSkipAutomaticVerifiedDeal(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArchiveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ArchiveRequest): ArchiveRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArchiveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArchiveRequest;
  static deserializeBinaryFromReader(message: ArchiveRequest, reader: jspb.BinaryReader): ArchiveRequest;
}

export namespace ArchiveRequest {
  export type AsObject = {
    key: string,
    archiveConfig?: ArchiveConfig.AsObject,
    skipAutomaticVerifiedDeal: boolean,
  }
}

export class ArchiveResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArchiveResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ArchiveResponse): ArchiveResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArchiveResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArchiveResponse;
  static deserializeBinaryFromReader(message: ArchiveResponse, reader: jspb.BinaryReader): ArchiveResponse;
}

export namespace ArchiveResponse {
  export type AsObject = {
  }
}

export class ArchivesRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArchivesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ArchivesRequest): ArchivesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArchivesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArchivesRequest;
  static deserializeBinaryFromReader(message: ArchivesRequest, reader: jspb.BinaryReader): ArchivesRequest;
}

export namespace ArchivesRequest {
  export type AsObject = {
    key: string,
  }
}

export class ArchivesResponse extends jspb.Message {
  hasCurrent(): boolean;
  clearCurrent(): void;
  getCurrent(): Archive | undefined;
  setCurrent(value?: Archive): void;

  clearHistoryList(): void;
  getHistoryList(): Array<Archive>;
  setHistoryList(value: Array<Archive>): void;
  addHistory(value?: Archive, index?: number): Archive;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArchivesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ArchivesResponse): ArchivesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArchivesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArchivesResponse;
  static deserializeBinaryFromReader(message: ArchivesResponse, reader: jspb.BinaryReader): ArchivesResponse;
}

export namespace ArchivesResponse {
  export type AsObject = {
    current?: Archive.AsObject,
    historyList: Array<Archive.AsObject>,
  }
}

export class ArchiveWatchRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArchiveWatchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ArchiveWatchRequest): ArchiveWatchRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArchiveWatchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArchiveWatchRequest;
  static deserializeBinaryFromReader(message: ArchiveWatchRequest, reader: jspb.BinaryReader): ArchiveWatchRequest;
}

export namespace ArchiveWatchRequest {
  export type AsObject = {
    key: string,
  }
}

export class ArchiveWatchResponse extends jspb.Message {
  getMsg(): string;
  setMsg(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArchiveWatchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ArchiveWatchResponse): ArchiveWatchResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArchiveWatchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArchiveWatchResponse;
  static deserializeBinaryFromReader(message: ArchiveWatchResponse, reader: jspb.BinaryReader): ArchiveWatchResponse;
}

export namespace ArchiveWatchResponse {
  export type AsObject = {
    msg: string,
  }
}

export interface PathAccessRoleMap {
  PATH_ACCESS_ROLE_UNSPECIFIED: 0;
  PATH_ACCESS_ROLE_READER: 1;
  PATH_ACCESS_ROLE_WRITER: 2;
  PATH_ACCESS_ROLE_ADMIN: 3;
}

export const PathAccessRole: PathAccessRoleMap;

export interface ArchiveStatusMap {
  ARCHIVE_STATUS_UNSPECIFIED: 0;
  ARCHIVE_STATUS_QUEUED: 1;
  ARCHIVE_STATUS_EXECUTING: 2;
  ARCHIVE_STATUS_FAILED: 3;
  ARCHIVE_STATUS_CANCELED: 4;
  ARCHIVE_STATUS_SUCCESS: 5;
}

export const ArchiveStatus: ArchiveStatusMap;

