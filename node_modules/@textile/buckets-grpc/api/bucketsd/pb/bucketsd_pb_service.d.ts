// package: api.bucketsd.pb
// file: api/bucketsd/pb/bucketsd.proto

import * as api_bucketsd_pb_bucketsd_pb from "../../../api/bucketsd/pb/bucketsd_pb";
import {grpc} from "@improbable-eng/grpc-web";

type APIServiceList = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_bucketsd_pb_bucketsd_pb.ListRequest;
  readonly responseType: typeof api_bucketsd_pb_bucketsd_pb.ListResponse;
};

type APIServiceCreate = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_bucketsd_pb_bucketsd_pb.CreateRequest;
  readonly responseType: typeof api_bucketsd_pb_bucketsd_pb.CreateResponse;
};

type APIServiceRoot = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_bucketsd_pb_bucketsd_pb.RootRequest;
  readonly responseType: typeof api_bucketsd_pb_bucketsd_pb.RootResponse;
};

type APIServiceLinks = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_bucketsd_pb_bucketsd_pb.LinksRequest;
  readonly responseType: typeof api_bucketsd_pb_bucketsd_pb.LinksResponse;
};

type APIServiceListPath = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_bucketsd_pb_bucketsd_pb.ListPathRequest;
  readonly responseType: typeof api_bucketsd_pb_bucketsd_pb.ListPathResponse;
};

type APIServiceListIpfsPath = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_bucketsd_pb_bucketsd_pb.ListIpfsPathRequest;
  readonly responseType: typeof api_bucketsd_pb_bucketsd_pb.ListIpfsPathResponse;
};

type APIServicePushPath = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof api_bucketsd_pb_bucketsd_pb.PushPathRequest;
  readonly responseType: typeof api_bucketsd_pb_bucketsd_pb.PushPathResponse;
};

type APIServicePushPaths = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof api_bucketsd_pb_bucketsd_pb.PushPathsRequest;
  readonly responseType: typeof api_bucketsd_pb_bucketsd_pb.PushPathsResponse;
};

type APIServicePullPath = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_bucketsd_pb_bucketsd_pb.PullPathRequest;
  readonly responseType: typeof api_bucketsd_pb_bucketsd_pb.PullPathResponse;
};

type APIServicePullIpfsPath = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_bucketsd_pb_bucketsd_pb.PullIpfsPathRequest;
  readonly responseType: typeof api_bucketsd_pb_bucketsd_pb.PullIpfsPathResponse;
};

type APIServiceSetPath = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_bucketsd_pb_bucketsd_pb.SetPathRequest;
  readonly responseType: typeof api_bucketsd_pb_bucketsd_pb.SetPathResponse;
};

type APIServiceMovePath = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_bucketsd_pb_bucketsd_pb.MovePathRequest;
  readonly responseType: typeof api_bucketsd_pb_bucketsd_pb.MovePathResponse;
};

type APIServiceRemove = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_bucketsd_pb_bucketsd_pb.RemoveRequest;
  readonly responseType: typeof api_bucketsd_pb_bucketsd_pb.RemoveResponse;
};

type APIServiceRemovePath = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_bucketsd_pb_bucketsd_pb.RemovePathRequest;
  readonly responseType: typeof api_bucketsd_pb_bucketsd_pb.RemovePathResponse;
};

type APIServicePushPathAccessRoles = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_bucketsd_pb_bucketsd_pb.PushPathAccessRolesRequest;
  readonly responseType: typeof api_bucketsd_pb_bucketsd_pb.PushPathAccessRolesResponse;
};

type APIServicePullPathAccessRoles = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_bucketsd_pb_bucketsd_pb.PullPathAccessRolesRequest;
  readonly responseType: typeof api_bucketsd_pb_bucketsd_pb.PullPathAccessRolesResponse;
};

type APIServiceDefaultArchiveConfig = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_bucketsd_pb_bucketsd_pb.DefaultArchiveConfigRequest;
  readonly responseType: typeof api_bucketsd_pb_bucketsd_pb.DefaultArchiveConfigResponse;
};

type APIServiceSetDefaultArchiveConfig = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_bucketsd_pb_bucketsd_pb.SetDefaultArchiveConfigRequest;
  readonly responseType: typeof api_bucketsd_pb_bucketsd_pb.SetDefaultArchiveConfigResponse;
};

type APIServiceArchive = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_bucketsd_pb_bucketsd_pb.ArchiveRequest;
  readonly responseType: typeof api_bucketsd_pb_bucketsd_pb.ArchiveResponse;
};

type APIServiceArchives = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_bucketsd_pb_bucketsd_pb.ArchivesRequest;
  readonly responseType: typeof api_bucketsd_pb_bucketsd_pb.ArchivesResponse;
};

type APIServiceArchiveWatch = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_bucketsd_pb_bucketsd_pb.ArchiveWatchRequest;
  readonly responseType: typeof api_bucketsd_pb_bucketsd_pb.ArchiveWatchResponse;
};

export class APIService {
  static readonly serviceName: string;
  static readonly List: APIServiceList;
  static readonly Create: APIServiceCreate;
  static readonly Root: APIServiceRoot;
  static readonly Links: APIServiceLinks;
  static readonly ListPath: APIServiceListPath;
  static readonly ListIpfsPath: APIServiceListIpfsPath;
  static readonly PushPath: APIServicePushPath;
  static readonly PushPaths: APIServicePushPaths;
  static readonly PullPath: APIServicePullPath;
  static readonly PullIpfsPath: APIServicePullIpfsPath;
  static readonly SetPath: APIServiceSetPath;
  static readonly MovePath: APIServiceMovePath;
  static readonly Remove: APIServiceRemove;
  static readonly RemovePath: APIServiceRemovePath;
  static readonly PushPathAccessRoles: APIServicePushPathAccessRoles;
  static readonly PullPathAccessRoles: APIServicePullPathAccessRoles;
  static readonly DefaultArchiveConfig: APIServiceDefaultArchiveConfig;
  static readonly SetDefaultArchiveConfig: APIServiceSetDefaultArchiveConfig;
  static readonly Archive: APIServiceArchive;
  static readonly Archives: APIServiceArchives;
  static readonly ArchiveWatch: APIServiceArchiveWatch;
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

export class APIServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  list(
    requestMessage: api_bucketsd_pb_bucketsd_pb.ListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_bucketsd_pb_bucketsd_pb.ListResponse|null) => void
  ): UnaryResponse;
  list(
    requestMessage: api_bucketsd_pb_bucketsd_pb.ListRequest,
    callback: (error: ServiceError|null, responseMessage: api_bucketsd_pb_bucketsd_pb.ListResponse|null) => void
  ): UnaryResponse;
  create(
    requestMessage: api_bucketsd_pb_bucketsd_pb.CreateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_bucketsd_pb_bucketsd_pb.CreateResponse|null) => void
  ): UnaryResponse;
  create(
    requestMessage: api_bucketsd_pb_bucketsd_pb.CreateRequest,
    callback: (error: ServiceError|null, responseMessage: api_bucketsd_pb_bucketsd_pb.CreateResponse|null) => void
  ): UnaryResponse;
  root(
    requestMessage: api_bucketsd_pb_bucketsd_pb.RootRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_bucketsd_pb_bucketsd_pb.RootResponse|null) => void
  ): UnaryResponse;
  root(
    requestMessage: api_bucketsd_pb_bucketsd_pb.RootRequest,
    callback: (error: ServiceError|null, responseMessage: api_bucketsd_pb_bucketsd_pb.RootResponse|null) => void
  ): UnaryResponse;
  links(
    requestMessage: api_bucketsd_pb_bucketsd_pb.LinksRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_bucketsd_pb_bucketsd_pb.LinksResponse|null) => void
  ): UnaryResponse;
  links(
    requestMessage: api_bucketsd_pb_bucketsd_pb.LinksRequest,
    callback: (error: ServiceError|null, responseMessage: api_bucketsd_pb_bucketsd_pb.LinksResponse|null) => void
  ): UnaryResponse;
  listPath(
    requestMessage: api_bucketsd_pb_bucketsd_pb.ListPathRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_bucketsd_pb_bucketsd_pb.ListPathResponse|null) => void
  ): UnaryResponse;
  listPath(
    requestMessage: api_bucketsd_pb_bucketsd_pb.ListPathRequest,
    callback: (error: ServiceError|null, responseMessage: api_bucketsd_pb_bucketsd_pb.ListPathResponse|null) => void
  ): UnaryResponse;
  listIpfsPath(
    requestMessage: api_bucketsd_pb_bucketsd_pb.ListIpfsPathRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_bucketsd_pb_bucketsd_pb.ListIpfsPathResponse|null) => void
  ): UnaryResponse;
  listIpfsPath(
    requestMessage: api_bucketsd_pb_bucketsd_pb.ListIpfsPathRequest,
    callback: (error: ServiceError|null, responseMessage: api_bucketsd_pb_bucketsd_pb.ListIpfsPathResponse|null) => void
  ): UnaryResponse;
  pushPath(metadata?: grpc.Metadata): BidirectionalStream<api_bucketsd_pb_bucketsd_pb.PushPathRequest, api_bucketsd_pb_bucketsd_pb.PushPathResponse>;
  pushPaths(metadata?: grpc.Metadata): BidirectionalStream<api_bucketsd_pb_bucketsd_pb.PushPathsRequest, api_bucketsd_pb_bucketsd_pb.PushPathsResponse>;
  pullPath(requestMessage: api_bucketsd_pb_bucketsd_pb.PullPathRequest, metadata?: grpc.Metadata): ResponseStream<api_bucketsd_pb_bucketsd_pb.PullPathResponse>;
  pullIpfsPath(requestMessage: api_bucketsd_pb_bucketsd_pb.PullIpfsPathRequest, metadata?: grpc.Metadata): ResponseStream<api_bucketsd_pb_bucketsd_pb.PullIpfsPathResponse>;
  setPath(
    requestMessage: api_bucketsd_pb_bucketsd_pb.SetPathRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_bucketsd_pb_bucketsd_pb.SetPathResponse|null) => void
  ): UnaryResponse;
  setPath(
    requestMessage: api_bucketsd_pb_bucketsd_pb.SetPathRequest,
    callback: (error: ServiceError|null, responseMessage: api_bucketsd_pb_bucketsd_pb.SetPathResponse|null) => void
  ): UnaryResponse;
  movePath(
    requestMessage: api_bucketsd_pb_bucketsd_pb.MovePathRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_bucketsd_pb_bucketsd_pb.MovePathResponse|null) => void
  ): UnaryResponse;
  movePath(
    requestMessage: api_bucketsd_pb_bucketsd_pb.MovePathRequest,
    callback: (error: ServiceError|null, responseMessage: api_bucketsd_pb_bucketsd_pb.MovePathResponse|null) => void
  ): UnaryResponse;
  remove(
    requestMessage: api_bucketsd_pb_bucketsd_pb.RemoveRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_bucketsd_pb_bucketsd_pb.RemoveResponse|null) => void
  ): UnaryResponse;
  remove(
    requestMessage: api_bucketsd_pb_bucketsd_pb.RemoveRequest,
    callback: (error: ServiceError|null, responseMessage: api_bucketsd_pb_bucketsd_pb.RemoveResponse|null) => void
  ): UnaryResponse;
  removePath(
    requestMessage: api_bucketsd_pb_bucketsd_pb.RemovePathRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_bucketsd_pb_bucketsd_pb.RemovePathResponse|null) => void
  ): UnaryResponse;
  removePath(
    requestMessage: api_bucketsd_pb_bucketsd_pb.RemovePathRequest,
    callback: (error: ServiceError|null, responseMessage: api_bucketsd_pb_bucketsd_pb.RemovePathResponse|null) => void
  ): UnaryResponse;
  pushPathAccessRoles(
    requestMessage: api_bucketsd_pb_bucketsd_pb.PushPathAccessRolesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_bucketsd_pb_bucketsd_pb.PushPathAccessRolesResponse|null) => void
  ): UnaryResponse;
  pushPathAccessRoles(
    requestMessage: api_bucketsd_pb_bucketsd_pb.PushPathAccessRolesRequest,
    callback: (error: ServiceError|null, responseMessage: api_bucketsd_pb_bucketsd_pb.PushPathAccessRolesResponse|null) => void
  ): UnaryResponse;
  pullPathAccessRoles(
    requestMessage: api_bucketsd_pb_bucketsd_pb.PullPathAccessRolesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_bucketsd_pb_bucketsd_pb.PullPathAccessRolesResponse|null) => void
  ): UnaryResponse;
  pullPathAccessRoles(
    requestMessage: api_bucketsd_pb_bucketsd_pb.PullPathAccessRolesRequest,
    callback: (error: ServiceError|null, responseMessage: api_bucketsd_pb_bucketsd_pb.PullPathAccessRolesResponse|null) => void
  ): UnaryResponse;
  defaultArchiveConfig(
    requestMessage: api_bucketsd_pb_bucketsd_pb.DefaultArchiveConfigRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_bucketsd_pb_bucketsd_pb.DefaultArchiveConfigResponse|null) => void
  ): UnaryResponse;
  defaultArchiveConfig(
    requestMessage: api_bucketsd_pb_bucketsd_pb.DefaultArchiveConfigRequest,
    callback: (error: ServiceError|null, responseMessage: api_bucketsd_pb_bucketsd_pb.DefaultArchiveConfigResponse|null) => void
  ): UnaryResponse;
  setDefaultArchiveConfig(
    requestMessage: api_bucketsd_pb_bucketsd_pb.SetDefaultArchiveConfigRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_bucketsd_pb_bucketsd_pb.SetDefaultArchiveConfigResponse|null) => void
  ): UnaryResponse;
  setDefaultArchiveConfig(
    requestMessage: api_bucketsd_pb_bucketsd_pb.SetDefaultArchiveConfigRequest,
    callback: (error: ServiceError|null, responseMessage: api_bucketsd_pb_bucketsd_pb.SetDefaultArchiveConfigResponse|null) => void
  ): UnaryResponse;
  archive(
    requestMessage: api_bucketsd_pb_bucketsd_pb.ArchiveRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_bucketsd_pb_bucketsd_pb.ArchiveResponse|null) => void
  ): UnaryResponse;
  archive(
    requestMessage: api_bucketsd_pb_bucketsd_pb.ArchiveRequest,
    callback: (error: ServiceError|null, responseMessage: api_bucketsd_pb_bucketsd_pb.ArchiveResponse|null) => void
  ): UnaryResponse;
  archives(
    requestMessage: api_bucketsd_pb_bucketsd_pb.ArchivesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_bucketsd_pb_bucketsd_pb.ArchivesResponse|null) => void
  ): UnaryResponse;
  archives(
    requestMessage: api_bucketsd_pb_bucketsd_pb.ArchivesRequest,
    callback: (error: ServiceError|null, responseMessage: api_bucketsd_pb_bucketsd_pb.ArchivesResponse|null) => void
  ): UnaryResponse;
  archiveWatch(requestMessage: api_bucketsd_pb_bucketsd_pb.ArchiveWatchRequest, metadata?: grpc.Metadata): ResponseStream<api_bucketsd_pb_bucketsd_pb.ArchiveWatchResponse>;
}

