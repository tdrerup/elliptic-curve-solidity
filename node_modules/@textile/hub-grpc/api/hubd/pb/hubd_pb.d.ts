// package: api.hubd.pb
// file: api/hubd/pb/hubd.proto

import * as jspb from "google-protobuf";
import * as api_billingd_pb_billingd_pb from "../../../api/billingd/pb/billingd_pb";

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

export class SignupRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignupRequest): SignupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignupRequest;
  static deserializeBinaryFromReader(message: SignupRequest, reader: jspb.BinaryReader): SignupRequest;
}

export namespace SignupRequest {
  export type AsObject = {
    username: string,
    email: string,
  }
}

export class SignupResponse extends jspb.Message {
  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): void;

  getSession(): string;
  setSession(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SignupResponse): SignupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignupResponse;
  static deserializeBinaryFromReader(message: SignupResponse, reader: jspb.BinaryReader): SignupResponse;
}

export namespace SignupResponse {
  export type AsObject = {
    key: Uint8Array | string,
    session: string,
  }
}

export class SigninRequest extends jspb.Message {
  getUsernameOrEmail(): string;
  setUsernameOrEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SigninRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SigninRequest): SigninRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SigninRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SigninRequest;
  static deserializeBinaryFromReader(message: SigninRequest, reader: jspb.BinaryReader): SigninRequest;
}

export namespace SigninRequest {
  export type AsObject = {
    usernameOrEmail: string,
  }
}

export class SigninResponse extends jspb.Message {
  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): void;

  getSession(): string;
  setSession(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SigninResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SigninResponse): SigninResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SigninResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SigninResponse;
  static deserializeBinaryFromReader(message: SigninResponse, reader: jspb.BinaryReader): SigninResponse;
}

export namespace SigninResponse {
  export type AsObject = {
    key: Uint8Array | string,
    session: string,
  }
}

export class SignoutRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignoutRequest): SignoutRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignoutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignoutRequest;
  static deserializeBinaryFromReader(message: SignoutRequest, reader: jspb.BinaryReader): SignoutRequest;
}

export namespace SignoutRequest {
  export type AsObject = {
  }
}

export class SignoutResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignoutResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SignoutResponse): SignoutResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignoutResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignoutResponse;
  static deserializeBinaryFromReader(message: SignoutResponse, reader: jspb.BinaryReader): SignoutResponse;
}

export namespace SignoutResponse {
  export type AsObject = {
  }
}

export class GetSessionInfoRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSessionInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSessionInfoRequest): GetSessionInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSessionInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSessionInfoRequest;
  static deserializeBinaryFromReader(message: GetSessionInfoRequest, reader: jspb.BinaryReader): GetSessionInfoRequest;
}

export namespace GetSessionInfoRequest {
  export type AsObject = {
  }
}

export class GetSessionInfoResponse extends jspb.Message {
  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSessionInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSessionInfoResponse): GetSessionInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSessionInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSessionInfoResponse;
  static deserializeBinaryFromReader(message: GetSessionInfoResponse, reader: jspb.BinaryReader): GetSessionInfoResponse;
}

export namespace GetSessionInfoResponse {
  export type AsObject = {
    key: Uint8Array | string,
    username: string,
    email: string,
  }
}

export class GetIdentityRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIdentityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetIdentityRequest): GetIdentityRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetIdentityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIdentityRequest;
  static deserializeBinaryFromReader(message: GetIdentityRequest, reader: jspb.BinaryReader): GetIdentityRequest;
}

export namespace GetIdentityRequest {
  export type AsObject = {
  }
}

export class GetIdentityResponse extends jspb.Message {
  getIdentity(): Uint8Array | string;
  getIdentity_asU8(): Uint8Array;
  getIdentity_asB64(): string;
  setIdentity(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIdentityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetIdentityResponse): GetIdentityResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetIdentityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIdentityResponse;
  static deserializeBinaryFromReader(message: GetIdentityResponse, reader: jspb.BinaryReader): GetIdentityResponse;
}

export namespace GetIdentityResponse {
  export type AsObject = {
    identity: Uint8Array | string,
  }
}

export class KeyInfo extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getSecret(): string;
  setSecret(value: string): void;

  getType(): KeyTypeMap[keyof KeyTypeMap];
  setType(value: KeyTypeMap[keyof KeyTypeMap]): void;

  getValid(): boolean;
  setValid(value: boolean): void;

  getThreads(): number;
  setThreads(value: number): void;

  getSecure(): boolean;
  setSecure(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyInfo.AsObject;
  static toObject(includeInstance: boolean, msg: KeyInfo): KeyInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeyInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyInfo;
  static deserializeBinaryFromReader(message: KeyInfo, reader: jspb.BinaryReader): KeyInfo;
}

export namespace KeyInfo {
  export type AsObject = {
    key: string,
    secret: string,
    type: KeyTypeMap[keyof KeyTypeMap],
    valid: boolean,
    threads: number,
    secure: boolean,
  }
}

export class CreateKeyRequest extends jspb.Message {
  getType(): KeyTypeMap[keyof KeyTypeMap];
  setType(value: KeyTypeMap[keyof KeyTypeMap]): void;

  getSecure(): boolean;
  setSecure(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateKeyRequest): CreateKeyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateKeyRequest;
  static deserializeBinaryFromReader(message: CreateKeyRequest, reader: jspb.BinaryReader): CreateKeyRequest;
}

export namespace CreateKeyRequest {
  export type AsObject = {
    type: KeyTypeMap[keyof KeyTypeMap],
    secure: boolean,
  }
}

export class CreateKeyResponse extends jspb.Message {
  hasKeyInfo(): boolean;
  clearKeyInfo(): void;
  getKeyInfo(): KeyInfo | undefined;
  setKeyInfo(value?: KeyInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateKeyResponse): CreateKeyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateKeyResponse;
  static deserializeBinaryFromReader(message: CreateKeyResponse, reader: jspb.BinaryReader): CreateKeyResponse;
}

export namespace CreateKeyResponse {
  export type AsObject = {
    keyInfo?: KeyInfo.AsObject,
  }
}

export class InvalidateKeyRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvalidateKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InvalidateKeyRequest): InvalidateKeyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvalidateKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvalidateKeyRequest;
  static deserializeBinaryFromReader(message: InvalidateKeyRequest, reader: jspb.BinaryReader): InvalidateKeyRequest;
}

export namespace InvalidateKeyRequest {
  export type AsObject = {
    key: string,
  }
}

export class InvalidateKeyResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvalidateKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InvalidateKeyResponse): InvalidateKeyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvalidateKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvalidateKeyResponse;
  static deserializeBinaryFromReader(message: InvalidateKeyResponse, reader: jspb.BinaryReader): InvalidateKeyResponse;
}

export namespace InvalidateKeyResponse {
  export type AsObject = {
  }
}

export class ListKeysRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListKeysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListKeysRequest): ListKeysRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListKeysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListKeysRequest;
  static deserializeBinaryFromReader(message: ListKeysRequest, reader: jspb.BinaryReader): ListKeysRequest;
}

export namespace ListKeysRequest {
  export type AsObject = {
  }
}

export class ListKeysResponse extends jspb.Message {
  clearListList(): void;
  getListList(): Array<KeyInfo>;
  setListList(value: Array<KeyInfo>): void;
  addList(value?: KeyInfo, index?: number): KeyInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListKeysResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListKeysResponse): ListKeysResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListKeysResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListKeysResponse;
  static deserializeBinaryFromReader(message: ListKeysResponse, reader: jspb.BinaryReader): ListKeysResponse;
}

export namespace ListKeysResponse {
  export type AsObject = {
    listList: Array<KeyInfo.AsObject>,
  }
}

export class OrgInfo extends jspb.Message {
  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): void;

  getName(): string;
  setName(value: string): void;

  getSlug(): string;
  setSlug(value: string): void;

  getHost(): string;
  setHost(value: string): void;

  clearMembersList(): void;
  getMembersList(): Array<OrgInfo.Member>;
  setMembersList(value: Array<OrgInfo.Member>): void;
  addMembers(value?: OrgInfo.Member, index?: number): OrgInfo.Member;

  getCreatedAt(): number;
  setCreatedAt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrgInfo.AsObject;
  static toObject(includeInstance: boolean, msg: OrgInfo): OrgInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrgInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrgInfo;
  static deserializeBinaryFromReader(message: OrgInfo, reader: jspb.BinaryReader): OrgInfo;
}

export namespace OrgInfo {
  export type AsObject = {
    key: Uint8Array | string,
    name: string,
    slug: string,
    host: string,
    membersList: Array<OrgInfo.Member.AsObject>,
    createdAt: number,
  }

  export class Member extends jspb.Message {
    getKey(): Uint8Array | string;
    getKey_asU8(): Uint8Array;
    getKey_asB64(): string;
    setKey(value: Uint8Array | string): void;

    getUsername(): string;
    setUsername(value: string): void;

    getRole(): string;
    setRole(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Member.AsObject;
    static toObject(includeInstance: boolean, msg: Member): Member.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Member, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Member;
    static deserializeBinaryFromReader(message: Member, reader: jspb.BinaryReader): Member;
  }

  export namespace Member {
    export type AsObject = {
      key: Uint8Array | string,
      username: string,
      role: string,
    }
  }
}

export class CreateOrgRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOrgRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOrgRequest): CreateOrgRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOrgRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOrgRequest;
  static deserializeBinaryFromReader(message: CreateOrgRequest, reader: jspb.BinaryReader): CreateOrgRequest;
}

export namespace CreateOrgRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateOrgResponse extends jspb.Message {
  hasOrgInfo(): boolean;
  clearOrgInfo(): void;
  getOrgInfo(): OrgInfo | undefined;
  setOrgInfo(value?: OrgInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOrgResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOrgResponse): CreateOrgResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOrgResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOrgResponse;
  static deserializeBinaryFromReader(message: CreateOrgResponse, reader: jspb.BinaryReader): CreateOrgResponse;
}

export namespace CreateOrgResponse {
  export type AsObject = {
    orgInfo?: OrgInfo.AsObject,
  }
}

export class GetOrgRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrgRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrgRequest): GetOrgRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrgRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrgRequest;
  static deserializeBinaryFromReader(message: GetOrgRequest, reader: jspb.BinaryReader): GetOrgRequest;
}

export namespace GetOrgRequest {
  export type AsObject = {
  }
}

export class GetOrgResponse extends jspb.Message {
  hasOrgInfo(): boolean;
  clearOrgInfo(): void;
  getOrgInfo(): OrgInfo | undefined;
  setOrgInfo(value?: OrgInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrgResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrgResponse): GetOrgResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrgResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrgResponse;
  static deserializeBinaryFromReader(message: GetOrgResponse, reader: jspb.BinaryReader): GetOrgResponse;
}

export namespace GetOrgResponse {
  export type AsObject = {
    orgInfo?: OrgInfo.AsObject,
  }
}

export class ListOrgsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrgsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrgsRequest): ListOrgsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrgsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrgsRequest;
  static deserializeBinaryFromReader(message: ListOrgsRequest, reader: jspb.BinaryReader): ListOrgsRequest;
}

export namespace ListOrgsRequest {
  export type AsObject = {
  }
}

export class ListOrgsResponse extends jspb.Message {
  clearListList(): void;
  getListList(): Array<OrgInfo>;
  setListList(value: Array<OrgInfo>): void;
  addList(value?: OrgInfo, index?: number): OrgInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrgsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrgsResponse): ListOrgsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrgsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrgsResponse;
  static deserializeBinaryFromReader(message: ListOrgsResponse, reader: jspb.BinaryReader): ListOrgsResponse;
}

export namespace ListOrgsResponse {
  export type AsObject = {
    listList: Array<OrgInfo.AsObject>,
  }
}

export class RemoveOrgRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveOrgRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveOrgRequest): RemoveOrgRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveOrgRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveOrgRequest;
  static deserializeBinaryFromReader(message: RemoveOrgRequest, reader: jspb.BinaryReader): RemoveOrgRequest;
}

export namespace RemoveOrgRequest {
  export type AsObject = {
  }
}

export class RemoveOrgResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveOrgResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveOrgResponse): RemoveOrgResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveOrgResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveOrgResponse;
  static deserializeBinaryFromReader(message: RemoveOrgResponse, reader: jspb.BinaryReader): RemoveOrgResponse;
}

export namespace RemoveOrgResponse {
  export type AsObject = {
  }
}

export class InviteToOrgRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InviteToOrgRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InviteToOrgRequest): InviteToOrgRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InviteToOrgRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InviteToOrgRequest;
  static deserializeBinaryFromReader(message: InviteToOrgRequest, reader: jspb.BinaryReader): InviteToOrgRequest;
}

export namespace InviteToOrgRequest {
  export type AsObject = {
    email: string,
  }
}

export class InviteToOrgResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InviteToOrgResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InviteToOrgResponse): InviteToOrgResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InviteToOrgResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InviteToOrgResponse;
  static deserializeBinaryFromReader(message: InviteToOrgResponse, reader: jspb.BinaryReader): InviteToOrgResponse;
}

export namespace InviteToOrgResponse {
  export type AsObject = {
    token: string,
  }
}

export class LeaveOrgRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LeaveOrgRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LeaveOrgRequest): LeaveOrgRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LeaveOrgRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LeaveOrgRequest;
  static deserializeBinaryFromReader(message: LeaveOrgRequest, reader: jspb.BinaryReader): LeaveOrgRequest;
}

export namespace LeaveOrgRequest {
  export type AsObject = {
  }
}

export class LeaveOrgResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LeaveOrgResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LeaveOrgResponse): LeaveOrgResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LeaveOrgResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LeaveOrgResponse;
  static deserializeBinaryFromReader(message: LeaveOrgResponse, reader: jspb.BinaryReader): LeaveOrgResponse;
}

export namespace LeaveOrgResponse {
  export type AsObject = {
  }
}

export class SetupBillingRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetupBillingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetupBillingRequest): SetupBillingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetupBillingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetupBillingRequest;
  static deserializeBinaryFromReader(message: SetupBillingRequest, reader: jspb.BinaryReader): SetupBillingRequest;
}

export namespace SetupBillingRequest {
  export type AsObject = {
  }
}

export class SetupBillingResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetupBillingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetupBillingResponse): SetupBillingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetupBillingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetupBillingResponse;
  static deserializeBinaryFromReader(message: SetupBillingResponse, reader: jspb.BinaryReader): SetupBillingResponse;
}

export namespace SetupBillingResponse {
  export type AsObject = {
  }
}

export class GetBillingSessionRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBillingSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBillingSessionRequest): GetBillingSessionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBillingSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBillingSessionRequest;
  static deserializeBinaryFromReader(message: GetBillingSessionRequest, reader: jspb.BinaryReader): GetBillingSessionRequest;
}

export namespace GetBillingSessionRequest {
  export type AsObject = {
  }
}

export class GetBillingSessionResponse extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBillingSessionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBillingSessionResponse): GetBillingSessionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBillingSessionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBillingSessionResponse;
  static deserializeBinaryFromReader(message: GetBillingSessionResponse, reader: jspb.BinaryReader): GetBillingSessionResponse;
}

export namespace GetBillingSessionResponse {
  export type AsObject = {
    url: string,
  }
}

export class ListBillingUsersRequest extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBillingUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBillingUsersRequest): ListBillingUsersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListBillingUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBillingUsersRequest;
  static deserializeBinaryFromReader(message: ListBillingUsersRequest, reader: jspb.BinaryReader): ListBillingUsersRequest;
}

export namespace ListBillingUsersRequest {
  export type AsObject = {
    offset: number,
    limit: number,
  }
}

export class ListBillingUsersResponse extends jspb.Message {
  clearUsersList(): void;
  getUsersList(): Array<api_billingd_pb_billingd_pb.GetCustomerResponse>;
  setUsersList(value: Array<api_billingd_pb_billingd_pb.GetCustomerResponse>): void;
  addUsers(value?: api_billingd_pb_billingd_pb.GetCustomerResponse, index?: number): api_billingd_pb_billingd_pb.GetCustomerResponse;

  getNextOffset(): number;
  setNextOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBillingUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBillingUsersResponse): ListBillingUsersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListBillingUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBillingUsersResponse;
  static deserializeBinaryFromReader(message: ListBillingUsersResponse, reader: jspb.BinaryReader): ListBillingUsersResponse;
}

export namespace ListBillingUsersResponse {
  export type AsObject = {
    usersList: Array<api_billingd_pb_billingd_pb.GetCustomerResponse.AsObject>,
    nextOffset: number,
  }
}

export class IsUsernameAvailableRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsUsernameAvailableRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IsUsernameAvailableRequest): IsUsernameAvailableRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IsUsernameAvailableRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsUsernameAvailableRequest;
  static deserializeBinaryFromReader(message: IsUsernameAvailableRequest, reader: jspb.BinaryReader): IsUsernameAvailableRequest;
}

export namespace IsUsernameAvailableRequest {
  export type AsObject = {
    username: string,
  }
}

export class IsUsernameAvailableResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsUsernameAvailableResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IsUsernameAvailableResponse): IsUsernameAvailableResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IsUsernameAvailableResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsUsernameAvailableResponse;
  static deserializeBinaryFromReader(message: IsUsernameAvailableResponse, reader: jspb.BinaryReader): IsUsernameAvailableResponse;
}

export namespace IsUsernameAvailableResponse {
  export type AsObject = {
  }
}

export class IsOrgNameAvailableRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsOrgNameAvailableRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IsOrgNameAvailableRequest): IsOrgNameAvailableRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IsOrgNameAvailableRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsOrgNameAvailableRequest;
  static deserializeBinaryFromReader(message: IsOrgNameAvailableRequest, reader: jspb.BinaryReader): IsOrgNameAvailableRequest;
}

export namespace IsOrgNameAvailableRequest {
  export type AsObject = {
    name: string,
  }
}

export class IsOrgNameAvailableResponse extends jspb.Message {
  getSlug(): string;
  setSlug(value: string): void;

  getHost(): string;
  setHost(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsOrgNameAvailableResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IsOrgNameAvailableResponse): IsOrgNameAvailableResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IsOrgNameAvailableResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsOrgNameAvailableResponse;
  static deserializeBinaryFromReader(message: IsOrgNameAvailableResponse, reader: jspb.BinaryReader): IsOrgNameAvailableResponse;
}

export namespace IsOrgNameAvailableResponse {
  export type AsObject = {
    slug: string,
    host: string,
  }
}

export class DestroyAccountRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DestroyAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DestroyAccountRequest): DestroyAccountRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DestroyAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DestroyAccountRequest;
  static deserializeBinaryFromReader(message: DestroyAccountRequest, reader: jspb.BinaryReader): DestroyAccountRequest;
}

export namespace DestroyAccountRequest {
  export type AsObject = {
  }
}

export class DestroyAccountResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DestroyAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DestroyAccountResponse): DestroyAccountResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DestroyAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DestroyAccountResponse;
  static deserializeBinaryFromReader(message: DestroyAccountResponse, reader: jspb.BinaryReader): DestroyAccountResponse;
}

export namespace DestroyAccountResponse {
  export type AsObject = {
  }
}

export interface KeyTypeMap {
  KEY_TYPE_UNSPECIFIED: 0;
  KEY_TYPE_ACCOUNT: 1;
  KEY_TYPE_USER: 2;
}

export const KeyType: KeyTypeMap;

