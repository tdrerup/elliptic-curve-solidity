// package: powergate.admin.v1
// file: powergate/admin/v1/admin.proto

import * as powergate_admin_v1_admin_pb from "../../../powergate/admin/v1/admin_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AdminServiceNewAddress = {
  readonly methodName: string;
  readonly service: typeof AdminService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof powergate_admin_v1_admin_pb.NewAddressRequest;
  readonly responseType: typeof powergate_admin_v1_admin_pb.NewAddressResponse;
};

type AdminServiceAddresses = {
  readonly methodName: string;
  readonly service: typeof AdminService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof powergate_admin_v1_admin_pb.AddressesRequest;
  readonly responseType: typeof powergate_admin_v1_admin_pb.AddressesResponse;
};

type AdminServiceSendFil = {
  readonly methodName: string;
  readonly service: typeof AdminService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof powergate_admin_v1_admin_pb.SendFilRequest;
  readonly responseType: typeof powergate_admin_v1_admin_pb.SendFilResponse;
};

type AdminServiceCreateUser = {
  readonly methodName: string;
  readonly service: typeof AdminService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof powergate_admin_v1_admin_pb.CreateUserRequest;
  readonly responseType: typeof powergate_admin_v1_admin_pb.CreateUserResponse;
};

type AdminServiceRegenerateAuth = {
  readonly methodName: string;
  readonly service: typeof AdminService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof powergate_admin_v1_admin_pb.RegenerateAuthRequest;
  readonly responseType: typeof powergate_admin_v1_admin_pb.RegenerateAuthResponse;
};

type AdminServiceUsers = {
  readonly methodName: string;
  readonly service: typeof AdminService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof powergate_admin_v1_admin_pb.UsersRequest;
  readonly responseType: typeof powergate_admin_v1_admin_pb.UsersResponse;
};

type AdminServiceStorageInfo = {
  readonly methodName: string;
  readonly service: typeof AdminService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof powergate_admin_v1_admin_pb.StorageInfoRequest;
  readonly responseType: typeof powergate_admin_v1_admin_pb.StorageInfoResponse;
};

type AdminServiceListStorageInfo = {
  readonly methodName: string;
  readonly service: typeof AdminService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof powergate_admin_v1_admin_pb.ListStorageInfoRequest;
  readonly responseType: typeof powergate_admin_v1_admin_pb.ListStorageInfoResponse;
};

type AdminServiceListStorageJobs = {
  readonly methodName: string;
  readonly service: typeof AdminService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof powergate_admin_v1_admin_pb.ListStorageJobsRequest;
  readonly responseType: typeof powergate_admin_v1_admin_pb.ListStorageJobsResponse;
};

type AdminServiceStorageJobsSummary = {
  readonly methodName: string;
  readonly service: typeof AdminService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof powergate_admin_v1_admin_pb.StorageJobsSummaryRequest;
  readonly responseType: typeof powergate_admin_v1_admin_pb.StorageJobsSummaryResponse;
};

type AdminServiceGetUpdatedStorageDealRecordsSince = {
  readonly methodName: string;
  readonly service: typeof AdminService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof powergate_admin_v1_admin_pb.GetUpdatedStorageDealRecordsSinceRequest;
  readonly responseType: typeof powergate_admin_v1_admin_pb.GetUpdatedStorageDealRecordsSinceResponse;
};

type AdminServiceGetUpdatedRetrievalRecordsSince = {
  readonly methodName: string;
  readonly service: typeof AdminService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof powergate_admin_v1_admin_pb.GetUpdatedRetrievalRecordsSinceRequest;
  readonly responseType: typeof powergate_admin_v1_admin_pb.GetUpdatedRetrievalRecordsSinceResponse;
};

type AdminServiceGCStaged = {
  readonly methodName: string;
  readonly service: typeof AdminService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof powergate_admin_v1_admin_pb.GCStagedRequest;
  readonly responseType: typeof powergate_admin_v1_admin_pb.GCStagedResponse;
};

type AdminServicePinnedCids = {
  readonly methodName: string;
  readonly service: typeof AdminService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof powergate_admin_v1_admin_pb.PinnedCidsRequest;
  readonly responseType: typeof powergate_admin_v1_admin_pb.PinnedCidsResponse;
};

type AdminServiceGetMiners = {
  readonly methodName: string;
  readonly service: typeof AdminService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof powergate_admin_v1_admin_pb.GetMinersRequest;
  readonly responseType: typeof powergate_admin_v1_admin_pb.GetMinersResponse;
};

type AdminServiceGetMinerInfo = {
  readonly methodName: string;
  readonly service: typeof AdminService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof powergate_admin_v1_admin_pb.GetMinerInfoRequest;
  readonly responseType: typeof powergate_admin_v1_admin_pb.GetMinerInfoResponse;
};

export class AdminService {
  static readonly serviceName: string;
  static readonly NewAddress: AdminServiceNewAddress;
  static readonly Addresses: AdminServiceAddresses;
  static readonly SendFil: AdminServiceSendFil;
  static readonly CreateUser: AdminServiceCreateUser;
  static readonly RegenerateAuth: AdminServiceRegenerateAuth;
  static readonly Users: AdminServiceUsers;
  static readonly StorageInfo: AdminServiceStorageInfo;
  static readonly ListStorageInfo: AdminServiceListStorageInfo;
  static readonly ListStorageJobs: AdminServiceListStorageJobs;
  static readonly StorageJobsSummary: AdminServiceStorageJobsSummary;
  static readonly GetUpdatedStorageDealRecordsSince: AdminServiceGetUpdatedStorageDealRecordsSince;
  static readonly GetUpdatedRetrievalRecordsSince: AdminServiceGetUpdatedRetrievalRecordsSince;
  static readonly GCStaged: AdminServiceGCStaged;
  static readonly PinnedCids: AdminServicePinnedCids;
  static readonly GetMiners: AdminServiceGetMiners;
  static readonly GetMinerInfo: AdminServiceGetMinerInfo;
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

export class AdminServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  newAddress(
    requestMessage: powergate_admin_v1_admin_pb.NewAddressRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: powergate_admin_v1_admin_pb.NewAddressResponse|null) => void
  ): UnaryResponse;
  newAddress(
    requestMessage: powergate_admin_v1_admin_pb.NewAddressRequest,
    callback: (error: ServiceError|null, responseMessage: powergate_admin_v1_admin_pb.NewAddressResponse|null) => void
  ): UnaryResponse;
  addresses(
    requestMessage: powergate_admin_v1_admin_pb.AddressesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: powergate_admin_v1_admin_pb.AddressesResponse|null) => void
  ): UnaryResponse;
  addresses(
    requestMessage: powergate_admin_v1_admin_pb.AddressesRequest,
    callback: (error: ServiceError|null, responseMessage: powergate_admin_v1_admin_pb.AddressesResponse|null) => void
  ): UnaryResponse;
  sendFil(
    requestMessage: powergate_admin_v1_admin_pb.SendFilRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: powergate_admin_v1_admin_pb.SendFilResponse|null) => void
  ): UnaryResponse;
  sendFil(
    requestMessage: powergate_admin_v1_admin_pb.SendFilRequest,
    callback: (error: ServiceError|null, responseMessage: powergate_admin_v1_admin_pb.SendFilResponse|null) => void
  ): UnaryResponse;
  createUser(
    requestMessage: powergate_admin_v1_admin_pb.CreateUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: powergate_admin_v1_admin_pb.CreateUserResponse|null) => void
  ): UnaryResponse;
  createUser(
    requestMessage: powergate_admin_v1_admin_pb.CreateUserRequest,
    callback: (error: ServiceError|null, responseMessage: powergate_admin_v1_admin_pb.CreateUserResponse|null) => void
  ): UnaryResponse;
  regenerateAuth(
    requestMessage: powergate_admin_v1_admin_pb.RegenerateAuthRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: powergate_admin_v1_admin_pb.RegenerateAuthResponse|null) => void
  ): UnaryResponse;
  regenerateAuth(
    requestMessage: powergate_admin_v1_admin_pb.RegenerateAuthRequest,
    callback: (error: ServiceError|null, responseMessage: powergate_admin_v1_admin_pb.RegenerateAuthResponse|null) => void
  ): UnaryResponse;
  users(
    requestMessage: powergate_admin_v1_admin_pb.UsersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: powergate_admin_v1_admin_pb.UsersResponse|null) => void
  ): UnaryResponse;
  users(
    requestMessage: powergate_admin_v1_admin_pb.UsersRequest,
    callback: (error: ServiceError|null, responseMessage: powergate_admin_v1_admin_pb.UsersResponse|null) => void
  ): UnaryResponse;
  storageInfo(
    requestMessage: powergate_admin_v1_admin_pb.StorageInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: powergate_admin_v1_admin_pb.StorageInfoResponse|null) => void
  ): UnaryResponse;
  storageInfo(
    requestMessage: powergate_admin_v1_admin_pb.StorageInfoRequest,
    callback: (error: ServiceError|null, responseMessage: powergate_admin_v1_admin_pb.StorageInfoResponse|null) => void
  ): UnaryResponse;
  listStorageInfo(
    requestMessage: powergate_admin_v1_admin_pb.ListStorageInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: powergate_admin_v1_admin_pb.ListStorageInfoResponse|null) => void
  ): UnaryResponse;
  listStorageInfo(
    requestMessage: powergate_admin_v1_admin_pb.ListStorageInfoRequest,
    callback: (error: ServiceError|null, responseMessage: powergate_admin_v1_admin_pb.ListStorageInfoResponse|null) => void
  ): UnaryResponse;
  listStorageJobs(
    requestMessage: powergate_admin_v1_admin_pb.ListStorageJobsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: powergate_admin_v1_admin_pb.ListStorageJobsResponse|null) => void
  ): UnaryResponse;
  listStorageJobs(
    requestMessage: powergate_admin_v1_admin_pb.ListStorageJobsRequest,
    callback: (error: ServiceError|null, responseMessage: powergate_admin_v1_admin_pb.ListStorageJobsResponse|null) => void
  ): UnaryResponse;
  storageJobsSummary(
    requestMessage: powergate_admin_v1_admin_pb.StorageJobsSummaryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: powergate_admin_v1_admin_pb.StorageJobsSummaryResponse|null) => void
  ): UnaryResponse;
  storageJobsSummary(
    requestMessage: powergate_admin_v1_admin_pb.StorageJobsSummaryRequest,
    callback: (error: ServiceError|null, responseMessage: powergate_admin_v1_admin_pb.StorageJobsSummaryResponse|null) => void
  ): UnaryResponse;
  getUpdatedStorageDealRecordsSince(
    requestMessage: powergate_admin_v1_admin_pb.GetUpdatedStorageDealRecordsSinceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: powergate_admin_v1_admin_pb.GetUpdatedStorageDealRecordsSinceResponse|null) => void
  ): UnaryResponse;
  getUpdatedStorageDealRecordsSince(
    requestMessage: powergate_admin_v1_admin_pb.GetUpdatedStorageDealRecordsSinceRequest,
    callback: (error: ServiceError|null, responseMessage: powergate_admin_v1_admin_pb.GetUpdatedStorageDealRecordsSinceResponse|null) => void
  ): UnaryResponse;
  getUpdatedRetrievalRecordsSince(
    requestMessage: powergate_admin_v1_admin_pb.GetUpdatedRetrievalRecordsSinceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: powergate_admin_v1_admin_pb.GetUpdatedRetrievalRecordsSinceResponse|null) => void
  ): UnaryResponse;
  getUpdatedRetrievalRecordsSince(
    requestMessage: powergate_admin_v1_admin_pb.GetUpdatedRetrievalRecordsSinceRequest,
    callback: (error: ServiceError|null, responseMessage: powergate_admin_v1_admin_pb.GetUpdatedRetrievalRecordsSinceResponse|null) => void
  ): UnaryResponse;
  gCStaged(
    requestMessage: powergate_admin_v1_admin_pb.GCStagedRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: powergate_admin_v1_admin_pb.GCStagedResponse|null) => void
  ): UnaryResponse;
  gCStaged(
    requestMessage: powergate_admin_v1_admin_pb.GCStagedRequest,
    callback: (error: ServiceError|null, responseMessage: powergate_admin_v1_admin_pb.GCStagedResponse|null) => void
  ): UnaryResponse;
  pinnedCids(
    requestMessage: powergate_admin_v1_admin_pb.PinnedCidsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: powergate_admin_v1_admin_pb.PinnedCidsResponse|null) => void
  ): UnaryResponse;
  pinnedCids(
    requestMessage: powergate_admin_v1_admin_pb.PinnedCidsRequest,
    callback: (error: ServiceError|null, responseMessage: powergate_admin_v1_admin_pb.PinnedCidsResponse|null) => void
  ): UnaryResponse;
  getMiners(
    requestMessage: powergate_admin_v1_admin_pb.GetMinersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: powergate_admin_v1_admin_pb.GetMinersResponse|null) => void
  ): UnaryResponse;
  getMiners(
    requestMessage: powergate_admin_v1_admin_pb.GetMinersRequest,
    callback: (error: ServiceError|null, responseMessage: powergate_admin_v1_admin_pb.GetMinersResponse|null) => void
  ): UnaryResponse;
  getMinerInfo(
    requestMessage: powergate_admin_v1_admin_pb.GetMinerInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: powergate_admin_v1_admin_pb.GetMinerInfoResponse|null) => void
  ): UnaryResponse;
  getMinerInfo(
    requestMessage: powergate_admin_v1_admin_pb.GetMinerInfoRequest,
    callback: (error: ServiceError|null, responseMessage: powergate_admin_v1_admin_pb.GetMinerInfoResponse|null) => void
  ): UnaryResponse;
}

