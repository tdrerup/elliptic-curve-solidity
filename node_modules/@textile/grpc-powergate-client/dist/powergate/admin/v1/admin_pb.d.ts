// package: powergate.admin.v1
// file: powergate/admin/v1/admin.proto

import * as jspb from "google-protobuf";
import * as powergate_user_v1_user_pb from "../../../powergate/user/v1/user_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class NewAddressRequest extends jspb.Message {
  getAddressType(): string;
  setAddressType(value: string): void;

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
    addressType: string,
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
  getAddressesList(): Array<string>;
  setAddressesList(value: Array<string>): void;
  addAddresses(value: string, index?: number): string;

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
    addressesList: Array<string>,
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

export class User extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: string,
    token: string,
  }
}

export class CreateUserRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserRequest): CreateUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserRequest;
  static deserializeBinaryFromReader(message: CreateUserRequest, reader: jspb.BinaryReader): CreateUserRequest;
}

export namespace CreateUserRequest {
  export type AsObject = {
  }
}

export class CreateUserResponse extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserResponse): CreateUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserResponse;
  static deserializeBinaryFromReader(message: CreateUserResponse, reader: jspb.BinaryReader): CreateUserResponse;
}

export namespace CreateUserResponse {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class RegenerateAuthRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegenerateAuthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegenerateAuthRequest): RegenerateAuthRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegenerateAuthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegenerateAuthRequest;
  static deserializeBinaryFromReader(message: RegenerateAuthRequest, reader: jspb.BinaryReader): RegenerateAuthRequest;
}

export namespace RegenerateAuthRequest {
  export type AsObject = {
    token: string,
  }
}

export class RegenerateAuthResponse extends jspb.Message {
  getNewToken(): string;
  setNewToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegenerateAuthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegenerateAuthResponse): RegenerateAuthResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegenerateAuthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegenerateAuthResponse;
  static deserializeBinaryFromReader(message: RegenerateAuthResponse, reader: jspb.BinaryReader): RegenerateAuthResponse;
}

export namespace RegenerateAuthResponse {
  export type AsObject = {
    newToken: string,
  }
}

export class UsersRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UsersRequest): UsersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsersRequest;
  static deserializeBinaryFromReader(message: UsersRequest, reader: jspb.BinaryReader): UsersRequest;
}

export namespace UsersRequest {
  export type AsObject = {
  }
}

export class UsersResponse extends jspb.Message {
  clearUsersList(): void;
  getUsersList(): Array<User>;
  setUsersList(value: Array<User>): void;
  addUsers(value?: User, index?: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UsersResponse): UsersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsersResponse;
  static deserializeBinaryFromReader(message: UsersResponse, reader: jspb.BinaryReader): UsersResponse;
}

export namespace UsersResponse {
  export type AsObject = {
    usersList: Array<User.AsObject>,
  }
}

export class StorageInfoRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

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
    userId: string,
    cid: string,
  }
}

export class StorageInfoResponse extends jspb.Message {
  hasStorageInfo(): boolean;
  clearStorageInfo(): void;
  getStorageInfo(): powergate_user_v1_user_pb.StorageInfo | undefined;
  setStorageInfo(value?: powergate_user_v1_user_pb.StorageInfo): void;

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
    storageInfo?: powergate_user_v1_user_pb.StorageInfo.AsObject,
  }
}

export class ListStorageInfoRequest extends jspb.Message {
  clearUserIdsList(): void;
  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): void;
  addUserIds(value: string, index?: number): string;

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
    userIdsList: Array<string>,
    cidsList: Array<string>,
  }
}

export class ListStorageInfoResponse extends jspb.Message {
  clearStorageInfoList(): void;
  getStorageInfoList(): Array<powergate_user_v1_user_pb.StorageInfo>;
  setStorageInfoList(value: Array<powergate_user_v1_user_pb.StorageInfo>): void;
  addStorageInfo(value?: powergate_user_v1_user_pb.StorageInfo, index?: number): powergate_user_v1_user_pb.StorageInfo;

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
    storageInfoList: Array<powergate_user_v1_user_pb.StorageInfo.AsObject>,
  }
}

export class ListStorageJobsRequest extends jspb.Message {
  getUserIdFilter(): string;
  setUserIdFilter(value: string): void;

  getCidFilter(): string;
  setCidFilter(value: string): void;

  getLimit(): number;
  setLimit(value: number): void;

  getAscending(): boolean;
  setAscending(value: boolean): void;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  getSelector(): powergate_user_v1_user_pb.StorageJobsSelectorMap[keyof powergate_user_v1_user_pb.StorageJobsSelectorMap];
  setSelector(value: powergate_user_v1_user_pb.StorageJobsSelectorMap[keyof powergate_user_v1_user_pb.StorageJobsSelectorMap]): void;

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
    userIdFilter: string,
    cidFilter: string,
    limit: number,
    ascending: boolean,
    nextPageToken: string,
    selector: powergate_user_v1_user_pb.StorageJobsSelectorMap[keyof powergate_user_v1_user_pb.StorageJobsSelectorMap],
  }
}

export class ListStorageJobsResponse extends jspb.Message {
  clearStorageJobsList(): void;
  getStorageJobsList(): Array<powergate_user_v1_user_pb.StorageJob>;
  setStorageJobsList(value: Array<powergate_user_v1_user_pb.StorageJob>): void;
  addStorageJobs(value?: powergate_user_v1_user_pb.StorageJob, index?: number): powergate_user_v1_user_pb.StorageJob;

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
    storageJobsList: Array<powergate_user_v1_user_pb.StorageJob.AsObject>,
    more: boolean,
    nextPageToken: string,
  }
}

export class StorageJobsSummaryRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

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
    userId: string,
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

export class GCStagedRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GCStagedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GCStagedRequest): GCStagedRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GCStagedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GCStagedRequest;
  static deserializeBinaryFromReader(message: GCStagedRequest, reader: jspb.BinaryReader): GCStagedRequest;
}

export namespace GCStagedRequest {
  export type AsObject = {
  }
}

export class GCStagedResponse extends jspb.Message {
  clearUnpinnedCidsList(): void;
  getUnpinnedCidsList(): Array<string>;
  setUnpinnedCidsList(value: Array<string>): void;
  addUnpinnedCids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GCStagedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GCStagedResponse): GCStagedResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GCStagedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GCStagedResponse;
  static deserializeBinaryFromReader(message: GCStagedResponse, reader: jspb.BinaryReader): GCStagedResponse;
}

export namespace GCStagedResponse {
  export type AsObject = {
    unpinnedCidsList: Array<string>,
  }
}

export class PinnedCidsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PinnedCidsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PinnedCidsRequest): PinnedCidsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PinnedCidsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PinnedCidsRequest;
  static deserializeBinaryFromReader(message: PinnedCidsRequest, reader: jspb.BinaryReader): PinnedCidsRequest;
}

export namespace PinnedCidsRequest {
  export type AsObject = {
  }
}

export class PinnedCidsResponse extends jspb.Message {
  clearCidsList(): void;
  getCidsList(): Array<HSPinnedCid>;
  setCidsList(value: Array<HSPinnedCid>): void;
  addCids(value?: HSPinnedCid, index?: number): HSPinnedCid;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PinnedCidsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PinnedCidsResponse): PinnedCidsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PinnedCidsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PinnedCidsResponse;
  static deserializeBinaryFromReader(message: PinnedCidsResponse, reader: jspb.BinaryReader): PinnedCidsResponse;
}

export namespace PinnedCidsResponse {
  export type AsObject = {
    cidsList: Array<HSPinnedCid.AsObject>,
  }
}

export class HSPinnedCid extends jspb.Message {
  getCid(): string;
  setCid(value: string): void;

  clearUsersList(): void;
  getUsersList(): Array<HSPinnedCidUser>;
  setUsersList(value: Array<HSPinnedCidUser>): void;
  addUsers(value?: HSPinnedCidUser, index?: number): HSPinnedCidUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HSPinnedCid.AsObject;
  static toObject(includeInstance: boolean, msg: HSPinnedCid): HSPinnedCid.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HSPinnedCid, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HSPinnedCid;
  static deserializeBinaryFromReader(message: HSPinnedCid, reader: jspb.BinaryReader): HSPinnedCid;
}

export namespace HSPinnedCid {
  export type AsObject = {
    cid: string,
    usersList: Array<HSPinnedCidUser.AsObject>,
  }
}

export class HSPinnedCidUser extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getStaged(): boolean;
  setStaged(value: boolean): void;

  getCreatedAt(): number;
  setCreatedAt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HSPinnedCidUser.AsObject;
  static toObject(includeInstance: boolean, msg: HSPinnedCidUser): HSPinnedCidUser.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HSPinnedCidUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HSPinnedCidUser;
  static deserializeBinaryFromReader(message: HSPinnedCidUser, reader: jspb.BinaryReader): HSPinnedCidUser;
}

export namespace HSPinnedCidUser {
  export type AsObject = {
    userId: string,
    staged: boolean,
    createdAt: number,
  }
}

export class GetUpdatedStorageDealRecordsSinceRequest extends jspb.Message {
  hasSince(): boolean;
  clearSince(): void;
  getSince(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSince(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUpdatedStorageDealRecordsSinceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUpdatedStorageDealRecordsSinceRequest): GetUpdatedStorageDealRecordsSinceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUpdatedStorageDealRecordsSinceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUpdatedStorageDealRecordsSinceRequest;
  static deserializeBinaryFromReader(message: GetUpdatedStorageDealRecordsSinceRequest, reader: jspb.BinaryReader): GetUpdatedStorageDealRecordsSinceRequest;
}

export namespace GetUpdatedStorageDealRecordsSinceRequest {
  export type AsObject = {
    since?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    limit: number,
  }
}

export class GetUpdatedStorageDealRecordsSinceResponse extends jspb.Message {
  clearRecordsList(): void;
  getRecordsList(): Array<powergate_user_v1_user_pb.StorageDealRecord>;
  setRecordsList(value: Array<powergate_user_v1_user_pb.StorageDealRecord>): void;
  addRecords(value?: powergate_user_v1_user_pb.StorageDealRecord, index?: number): powergate_user_v1_user_pb.StorageDealRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUpdatedStorageDealRecordsSinceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUpdatedStorageDealRecordsSinceResponse): GetUpdatedStorageDealRecordsSinceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUpdatedStorageDealRecordsSinceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUpdatedStorageDealRecordsSinceResponse;
  static deserializeBinaryFromReader(message: GetUpdatedStorageDealRecordsSinceResponse, reader: jspb.BinaryReader): GetUpdatedStorageDealRecordsSinceResponse;
}

export namespace GetUpdatedStorageDealRecordsSinceResponse {
  export type AsObject = {
    recordsList: Array<powergate_user_v1_user_pb.StorageDealRecord.AsObject>,
  }
}

export class GetUpdatedRetrievalRecordsSinceRequest extends jspb.Message {
  hasSince(): boolean;
  clearSince(): void;
  getSince(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSince(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUpdatedRetrievalRecordsSinceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUpdatedRetrievalRecordsSinceRequest): GetUpdatedRetrievalRecordsSinceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUpdatedRetrievalRecordsSinceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUpdatedRetrievalRecordsSinceRequest;
  static deserializeBinaryFromReader(message: GetUpdatedRetrievalRecordsSinceRequest, reader: jspb.BinaryReader): GetUpdatedRetrievalRecordsSinceRequest;
}

export namespace GetUpdatedRetrievalRecordsSinceRequest {
  export type AsObject = {
    since?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    limit: number,
  }
}

export class GetUpdatedRetrievalRecordsSinceResponse extends jspb.Message {
  clearRecordsList(): void;
  getRecordsList(): Array<powergate_user_v1_user_pb.RetrievalDealRecord>;
  setRecordsList(value: Array<powergate_user_v1_user_pb.RetrievalDealRecord>): void;
  addRecords(value?: powergate_user_v1_user_pb.RetrievalDealRecord, index?: number): powergate_user_v1_user_pb.RetrievalDealRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUpdatedRetrievalRecordsSinceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUpdatedRetrievalRecordsSinceResponse): GetUpdatedRetrievalRecordsSinceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUpdatedRetrievalRecordsSinceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUpdatedRetrievalRecordsSinceResponse;
  static deserializeBinaryFromReader(message: GetUpdatedRetrievalRecordsSinceResponse, reader: jspb.BinaryReader): GetUpdatedRetrievalRecordsSinceResponse;
}

export namespace GetUpdatedRetrievalRecordsSinceResponse {
  export type AsObject = {
    recordsList: Array<powergate_user_v1_user_pb.RetrievalDealRecord.AsObject>,
  }
}

export class GetMinersRequest extends jspb.Message {
  getWithPower(): boolean;
  setWithPower(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMinersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMinersRequest): GetMinersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMinersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMinersRequest;
  static deserializeBinaryFromReader(message: GetMinersRequest, reader: jspb.BinaryReader): GetMinersRequest;
}

export namespace GetMinersRequest {
  export type AsObject = {
    withPower: boolean,
  }
}

export class GetMinersResponse extends jspb.Message {
  clearMinersList(): void;
  getMinersList(): Array<FilecoinMiner>;
  setMinersList(value: Array<FilecoinMiner>): void;
  addMiners(value?: FilecoinMiner, index?: number): FilecoinMiner;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMinersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMinersResponse): GetMinersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMinersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMinersResponse;
  static deserializeBinaryFromReader(message: GetMinersResponse, reader: jspb.BinaryReader): GetMinersResponse;
}

export namespace GetMinersResponse {
  export type AsObject = {
    minersList: Array<FilecoinMiner.AsObject>,
  }
}

export class FilecoinMiner extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilecoinMiner.AsObject;
  static toObject(includeInstance: boolean, msg: FilecoinMiner): FilecoinMiner.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FilecoinMiner, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilecoinMiner;
  static deserializeBinaryFromReader(message: FilecoinMiner, reader: jspb.BinaryReader): FilecoinMiner;
}

export namespace FilecoinMiner {
  export type AsObject = {
    address: string,
  }
}

export class GetMinerInfoRequest extends jspb.Message {
  clearMinersList(): void;
  getMinersList(): Array<string>;
  setMinersList(value: Array<string>): void;
  addMiners(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMinerInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMinerInfoRequest): GetMinerInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMinerInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMinerInfoRequest;
  static deserializeBinaryFromReader(message: GetMinerInfoRequest, reader: jspb.BinaryReader): GetMinerInfoRequest;
}

export namespace GetMinerInfoRequest {
  export type AsObject = {
    minersList: Array<string>,
  }
}

export class GetMinerInfoResponse extends jspb.Message {
  clearMinersInfoList(): void;
  getMinersInfoList(): Array<MinerInfo>;
  setMinersInfoList(value: Array<MinerInfo>): void;
  addMinersInfo(value?: MinerInfo, index?: number): MinerInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMinerInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMinerInfoResponse): GetMinerInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMinerInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMinerInfoResponse;
  static deserializeBinaryFromReader(message: GetMinerInfoResponse, reader: jspb.BinaryReader): GetMinerInfoResponse;
}

export namespace GetMinerInfoResponse {
  export type AsObject = {
    minersInfoList: Array<MinerInfo.AsObject>,
  }
}

export class MinerInfo extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  getRelativePower(): number;
  setRelativePower(value: number): void;

  getAskPrice(): string;
  setAskPrice(value: string): void;

  getAskVerifiedPrice(): string;
  setAskVerifiedPrice(value: string): void;

  getMinPieceSize(): number;
  setMinPieceSize(value: number): void;

  getMaxPieceSize(): number;
  setMaxPieceSize(value: number): void;

  getSectorSize(): number;
  setSectorSize(value: number): void;

  getSectorsActive(): number;
  setSectorsActive(value: number): void;

  getSectorsLive(): number;
  setSectorsLive(value: number): void;

  getSectorsFaulty(): number;
  setSectorsFaulty(value: number): void;

  getLocation(): string;
  setLocation(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MinerInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MinerInfo): MinerInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MinerInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MinerInfo;
  static deserializeBinaryFromReader(message: MinerInfo, reader: jspb.BinaryReader): MinerInfo;
}

export namespace MinerInfo {
  export type AsObject = {
    address: string,
    relativePower: number,
    askPrice: string,
    askVerifiedPrice: string,
    minPieceSize: number,
    maxPieceSize: number,
    sectorSize: number,
    sectorsActive: number,
    sectorsLive: number,
    sectorsFaulty: number,
    location: string,
  }
}

