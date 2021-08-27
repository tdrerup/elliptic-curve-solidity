// package: threads.pb
// file: threads.proto

import * as threads_pb from "./threads_pb";
import {grpc} from "@improbable-eng/grpc-web";

type APIGetToken = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof threads_pb.GetTokenRequest;
  readonly responseType: typeof threads_pb.GetTokenReply;
};

type APINewDB = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof threads_pb.NewDBRequest;
  readonly responseType: typeof threads_pb.NewDBReply;
};

type APINewDBFromAddr = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof threads_pb.NewDBFromAddrRequest;
  readonly responseType: typeof threads_pb.NewDBReply;
};

type APIListDBs = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof threads_pb.ListDBsRequest;
  readonly responseType: typeof threads_pb.ListDBsReply;
};

type APIGetDBInfo = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof threads_pb.GetDBInfoRequest;
  readonly responseType: typeof threads_pb.GetDBInfoReply;
};

type APIDeleteDB = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof threads_pb.DeleteDBRequest;
  readonly responseType: typeof threads_pb.DeleteDBReply;
};

type APINewCollection = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof threads_pb.NewCollectionRequest;
  readonly responseType: typeof threads_pb.NewCollectionReply;
};

type APIUpdateCollection = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof threads_pb.UpdateCollectionRequest;
  readonly responseType: typeof threads_pb.UpdateCollectionReply;
};

type APIDeleteCollection = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof threads_pb.DeleteCollectionRequest;
  readonly responseType: typeof threads_pb.DeleteCollectionReply;
};

type APIGetCollectionInfo = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof threads_pb.GetCollectionInfoRequest;
  readonly responseType: typeof threads_pb.GetCollectionInfoReply;
};

type APIGetCollectionIndexes = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof threads_pb.GetCollectionIndexesRequest;
  readonly responseType: typeof threads_pb.GetCollectionIndexesReply;
};

type APIListCollections = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof threads_pb.ListCollectionsRequest;
  readonly responseType: typeof threads_pb.ListCollectionsReply;
};

type APICreate = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof threads_pb.CreateRequest;
  readonly responseType: typeof threads_pb.CreateReply;
};

type APIVerify = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof threads_pb.VerifyRequest;
  readonly responseType: typeof threads_pb.VerifyReply;
};

type APISave = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof threads_pb.SaveRequest;
  readonly responseType: typeof threads_pb.SaveReply;
};

type APIDelete = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof threads_pb.DeleteRequest;
  readonly responseType: typeof threads_pb.DeleteReply;
};

type APIHas = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof threads_pb.HasRequest;
  readonly responseType: typeof threads_pb.HasReply;
};

type APIFind = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof threads_pb.FindRequest;
  readonly responseType: typeof threads_pb.FindReply;
};

type APIFindByID = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof threads_pb.FindByIDRequest;
  readonly responseType: typeof threads_pb.FindByIDReply;
};

type APIReadTransaction = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof threads_pb.ReadTransactionRequest;
  readonly responseType: typeof threads_pb.ReadTransactionReply;
};

type APIWriteTransaction = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof threads_pb.WriteTransactionRequest;
  readonly responseType: typeof threads_pb.WriteTransactionReply;
};

type APIListen = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof threads_pb.ListenRequest;
  readonly responseType: typeof threads_pb.ListenReply;
};

export class API {
  static readonly serviceName: string;
  static readonly GetToken: APIGetToken;
  static readonly NewDB: APINewDB;
  static readonly NewDBFromAddr: APINewDBFromAddr;
  static readonly ListDBs: APIListDBs;
  static readonly GetDBInfo: APIGetDBInfo;
  static readonly DeleteDB: APIDeleteDB;
  static readonly NewCollection: APINewCollection;
  static readonly UpdateCollection: APIUpdateCollection;
  static readonly DeleteCollection: APIDeleteCollection;
  static readonly GetCollectionInfo: APIGetCollectionInfo;
  static readonly GetCollectionIndexes: APIGetCollectionIndexes;
  static readonly ListCollections: APIListCollections;
  static readonly Create: APICreate;
  static readonly Verify: APIVerify;
  static readonly Save: APISave;
  static readonly Delete: APIDelete;
  static readonly Has: APIHas;
  static readonly Find: APIFind;
  static readonly FindByID: APIFindByID;
  static readonly ReadTransaction: APIReadTransaction;
  static readonly WriteTransaction: APIWriteTransaction;
  static readonly Listen: APIListen;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class APIClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getToken(metadata?: grpc.Metadata): BidirectionalStream<threads_pb.GetTokenRequest, threads_pb.GetTokenReply>;
  newDB(
    requestMessage: threads_pb.NewDBRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: threads_pb.NewDBReply|null) => void
  ): UnaryResponse;
  newDB(
    requestMessage: threads_pb.NewDBRequest,
    callback: (error: ServiceError|null, responseMessage: threads_pb.NewDBReply|null) => void
  ): UnaryResponse;
  newDBFromAddr(
    requestMessage: threads_pb.NewDBFromAddrRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: threads_pb.NewDBReply|null) => void
  ): UnaryResponse;
  newDBFromAddr(
    requestMessage: threads_pb.NewDBFromAddrRequest,
    callback: (error: ServiceError|null, responseMessage: threads_pb.NewDBReply|null) => void
  ): UnaryResponse;
  listDBs(
    requestMessage: threads_pb.ListDBsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: threads_pb.ListDBsReply|null) => void
  ): UnaryResponse;
  listDBs(
    requestMessage: threads_pb.ListDBsRequest,
    callback: (error: ServiceError|null, responseMessage: threads_pb.ListDBsReply|null) => void
  ): UnaryResponse;
  getDBInfo(
    requestMessage: threads_pb.GetDBInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: threads_pb.GetDBInfoReply|null) => void
  ): UnaryResponse;
  getDBInfo(
    requestMessage: threads_pb.GetDBInfoRequest,
    callback: (error: ServiceError|null, responseMessage: threads_pb.GetDBInfoReply|null) => void
  ): UnaryResponse;
  deleteDB(
    requestMessage: threads_pb.DeleteDBRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: threads_pb.DeleteDBReply|null) => void
  ): UnaryResponse;
  deleteDB(
    requestMessage: threads_pb.DeleteDBRequest,
    callback: (error: ServiceError|null, responseMessage: threads_pb.DeleteDBReply|null) => void
  ): UnaryResponse;
  newCollection(
    requestMessage: threads_pb.NewCollectionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: threads_pb.NewCollectionReply|null) => void
  ): UnaryResponse;
  newCollection(
    requestMessage: threads_pb.NewCollectionRequest,
    callback: (error: ServiceError|null, responseMessage: threads_pb.NewCollectionReply|null) => void
  ): UnaryResponse;
  updateCollection(
    requestMessage: threads_pb.UpdateCollectionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: threads_pb.UpdateCollectionReply|null) => void
  ): UnaryResponse;
  updateCollection(
    requestMessage: threads_pb.UpdateCollectionRequest,
    callback: (error: ServiceError|null, responseMessage: threads_pb.UpdateCollectionReply|null) => void
  ): UnaryResponse;
  deleteCollection(
    requestMessage: threads_pb.DeleteCollectionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: threads_pb.DeleteCollectionReply|null) => void
  ): UnaryResponse;
  deleteCollection(
    requestMessage: threads_pb.DeleteCollectionRequest,
    callback: (error: ServiceError|null, responseMessage: threads_pb.DeleteCollectionReply|null) => void
  ): UnaryResponse;
  getCollectionInfo(
    requestMessage: threads_pb.GetCollectionInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: threads_pb.GetCollectionInfoReply|null) => void
  ): UnaryResponse;
  getCollectionInfo(
    requestMessage: threads_pb.GetCollectionInfoRequest,
    callback: (error: ServiceError|null, responseMessage: threads_pb.GetCollectionInfoReply|null) => void
  ): UnaryResponse;
  getCollectionIndexes(
    requestMessage: threads_pb.GetCollectionIndexesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: threads_pb.GetCollectionIndexesReply|null) => void
  ): UnaryResponse;
  getCollectionIndexes(
    requestMessage: threads_pb.GetCollectionIndexesRequest,
    callback: (error: ServiceError|null, responseMessage: threads_pb.GetCollectionIndexesReply|null) => void
  ): UnaryResponse;
  listCollections(
    requestMessage: threads_pb.ListCollectionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: threads_pb.ListCollectionsReply|null) => void
  ): UnaryResponse;
  listCollections(
    requestMessage: threads_pb.ListCollectionsRequest,
    callback: (error: ServiceError|null, responseMessage: threads_pb.ListCollectionsReply|null) => void
  ): UnaryResponse;
  create(
    requestMessage: threads_pb.CreateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: threads_pb.CreateReply|null) => void
  ): UnaryResponse;
  create(
    requestMessage: threads_pb.CreateRequest,
    callback: (error: ServiceError|null, responseMessage: threads_pb.CreateReply|null) => void
  ): UnaryResponse;
  verify(
    requestMessage: threads_pb.VerifyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: threads_pb.VerifyReply|null) => void
  ): UnaryResponse;
  verify(
    requestMessage: threads_pb.VerifyRequest,
    callback: (error: ServiceError|null, responseMessage: threads_pb.VerifyReply|null) => void
  ): UnaryResponse;
  save(
    requestMessage: threads_pb.SaveRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: threads_pb.SaveReply|null) => void
  ): UnaryResponse;
  save(
    requestMessage: threads_pb.SaveRequest,
    callback: (error: ServiceError|null, responseMessage: threads_pb.SaveReply|null) => void
  ): UnaryResponse;
  delete(
    requestMessage: threads_pb.DeleteRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: threads_pb.DeleteReply|null) => void
  ): UnaryResponse;
  delete(
    requestMessage: threads_pb.DeleteRequest,
    callback: (error: ServiceError|null, responseMessage: threads_pb.DeleteReply|null) => void
  ): UnaryResponse;
  has(
    requestMessage: threads_pb.HasRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: threads_pb.HasReply|null) => void
  ): UnaryResponse;
  has(
    requestMessage: threads_pb.HasRequest,
    callback: (error: ServiceError|null, responseMessage: threads_pb.HasReply|null) => void
  ): UnaryResponse;
  find(
    requestMessage: threads_pb.FindRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: threads_pb.FindReply|null) => void
  ): UnaryResponse;
  find(
    requestMessage: threads_pb.FindRequest,
    callback: (error: ServiceError|null, responseMessage: threads_pb.FindReply|null) => void
  ): UnaryResponse;
  findByID(
    requestMessage: threads_pb.FindByIDRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: threads_pb.FindByIDReply|null) => void
  ): UnaryResponse;
  findByID(
    requestMessage: threads_pb.FindByIDRequest,
    callback: (error: ServiceError|null, responseMessage: threads_pb.FindByIDReply|null) => void
  ): UnaryResponse;
  readTransaction(metadata?: grpc.Metadata): BidirectionalStream<threads_pb.ReadTransactionRequest, threads_pb.ReadTransactionReply>;
  writeTransaction(metadata?: grpc.Metadata): BidirectionalStream<threads_pb.WriteTransactionRequest, threads_pb.WriteTransactionReply>;
  listen(requestMessage: threads_pb.ListenRequest, metadata?: grpc.Metadata): ResponseStream<threads_pb.ListenReply>;
}

