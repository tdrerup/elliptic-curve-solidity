// package: powergate.user.v1
// file: powergate/user/v1/user.proto

import * as powergate_user_v1_user_pb from "../../../powergate/user/v1/user_pb";
import {grpc} from "@improbable-eng/grpc-web";

type UserServiceBuildInfo = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof powergate_user_v1_user_pb.BuildInfoRequest;
  readonly responseType: typeof powergate_user_v1_user_pb.BuildInfoResponse;
};

type UserServiceUserIdentifier = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof powergate_user_v1_user_pb.UserIdentifierRequest;
  readonly responseType: typeof powergate_user_v1_user_pb.UserIdentifierResponse;
};

type UserServiceDefaultStorageConfig = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof powergate_user_v1_user_pb.DefaultStorageConfigRequest;
  readonly responseType: typeof powergate_user_v1_user_pb.DefaultStorageConfigResponse;
};

type UserServiceSetDefaultStorageConfig = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof powergate_user_v1_user_pb.SetDefaultStorageConfigRequest;
  readonly responseType: typeof powergate_user_v1_user_pb.SetDefaultStorageConfigResponse;
};

type UserServiceApplyStorageConfig = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof powergate_user_v1_user_pb.ApplyStorageConfigRequest;
  readonly responseType: typeof powergate_user_v1_user_pb.ApplyStorageConfigResponse;
};

type UserServiceRemove = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof powergate_user_v1_user_pb.RemoveRequest;
  readonly responseType: typeof powergate_user_v1_user_pb.RemoveResponse;
};

type UserServiceStage = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: true;
  readonly responseStream: false;
  readonly requestType: typeof powergate_user_v1_user_pb.StageRequest;
  readonly responseType: typeof powergate_user_v1_user_pb.StageResponse;
};

type UserServiceStageCid = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof powergate_user_v1_user_pb.StageCidRequest;
  readonly responseType: typeof powergate_user_v1_user_pb.StageCidResponse;
};

type UserServiceReplaceData = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof powergate_user_v1_user_pb.ReplaceDataRequest;
  readonly responseType: typeof powergate_user_v1_user_pb.ReplaceDataResponse;
};

type UserServiceGet = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof powergate_user_v1_user_pb.GetRequest;
  readonly responseType: typeof powergate_user_v1_user_pb.GetResponse;
};

type UserServiceWatchLogs = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof powergate_user_v1_user_pb.WatchLogsRequest;
  readonly responseType: typeof powergate_user_v1_user_pb.WatchLogsResponse;
};

type UserServiceCidSummary = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof powergate_user_v1_user_pb.CidSummaryRequest;
  readonly responseType: typeof powergate_user_v1_user_pb.CidSummaryResponse;
};

type UserServiceCidInfo = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof powergate_user_v1_user_pb.CidInfoRequest;
  readonly responseType: typeof powergate_user_v1_user_pb.CidInfoResponse;
};

type UserServiceBalance = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof powergate_user_v1_user_pb.BalanceRequest;
  readonly responseType: typeof powergate_user_v1_user_pb.BalanceResponse;
};

type UserServiceNewAddress = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof powergate_user_v1_user_pb.NewAddressRequest;
  readonly responseType: typeof powergate_user_v1_user_pb.NewAddressResponse;
};

type UserServiceAddresses = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof powergate_user_v1_user_pb.AddressesRequest;
  readonly responseType: typeof powergate_user_v1_user_pb.AddressesResponse;
};

type UserServiceSendFil = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof powergate_user_v1_user_pb.SendFilRequest;
  readonly responseType: typeof powergate_user_v1_user_pb.SendFilResponse;
};

type UserServiceSignMessage = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof powergate_user_v1_user_pb.SignMessageRequest;
  readonly responseType: typeof powergate_user_v1_user_pb.SignMessageResponse;
};

type UserServiceVerifyMessage = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof powergate_user_v1_user_pb.VerifyMessageRequest;
  readonly responseType: typeof powergate_user_v1_user_pb.VerifyMessageResponse;
};

type UserServiceStorageInfo = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof powergate_user_v1_user_pb.StorageInfoRequest;
  readonly responseType: typeof powergate_user_v1_user_pb.StorageInfoResponse;
};

type UserServiceListStorageInfo = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof powergate_user_v1_user_pb.ListStorageInfoRequest;
  readonly responseType: typeof powergate_user_v1_user_pb.ListStorageInfoResponse;
};

type UserServiceStorageJob = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof powergate_user_v1_user_pb.StorageJobRequest;
  readonly responseType: typeof powergate_user_v1_user_pb.StorageJobResponse;
};

type UserServiceStorageConfigForJob = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof powergate_user_v1_user_pb.StorageConfigForJobRequest;
  readonly responseType: typeof powergate_user_v1_user_pb.StorageConfigForJobResponse;
};

type UserServiceListStorageJobs = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof powergate_user_v1_user_pb.ListStorageJobsRequest;
  readonly responseType: typeof powergate_user_v1_user_pb.ListStorageJobsResponse;
};

type UserServiceStorageJobsSummary = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof powergate_user_v1_user_pb.StorageJobsSummaryRequest;
  readonly responseType: typeof powergate_user_v1_user_pb.StorageJobsSummaryResponse;
};

type UserServiceWatchStorageJobs = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof powergate_user_v1_user_pb.WatchStorageJobsRequest;
  readonly responseType: typeof powergate_user_v1_user_pb.WatchStorageJobsResponse;
};

type UserServiceCancelStorageJob = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof powergate_user_v1_user_pb.CancelStorageJobRequest;
  readonly responseType: typeof powergate_user_v1_user_pb.CancelStorageJobResponse;
};

type UserServiceStorageDealRecords = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof powergate_user_v1_user_pb.StorageDealRecordsRequest;
  readonly responseType: typeof powergate_user_v1_user_pb.StorageDealRecordsResponse;
};

type UserServiceRetrievalDealRecords = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof powergate_user_v1_user_pb.RetrievalDealRecordsRequest;
  readonly responseType: typeof powergate_user_v1_user_pb.RetrievalDealRecordsResponse;
};

export class UserService {
  static readonly serviceName: string;
  static readonly BuildInfo: UserServiceBuildInfo;
  static readonly UserIdentifier: UserServiceUserIdentifier;
  static readonly DefaultStorageConfig: UserServiceDefaultStorageConfig;
  static readonly SetDefaultStorageConfig: UserServiceSetDefaultStorageConfig;
  static readonly ApplyStorageConfig: UserServiceApplyStorageConfig;
  static readonly Remove: UserServiceRemove;
  static readonly Stage: UserServiceStage;
  static readonly StageCid: UserServiceStageCid;
  static readonly ReplaceData: UserServiceReplaceData;
  static readonly Get: UserServiceGet;
  static readonly WatchLogs: UserServiceWatchLogs;
  static readonly CidSummary: UserServiceCidSummary;
  static readonly CidInfo: UserServiceCidInfo;
  static readonly Balance: UserServiceBalance;
  static readonly NewAddress: UserServiceNewAddress;
  static readonly Addresses: UserServiceAddresses;
  static readonly SendFil: UserServiceSendFil;
  static readonly SignMessage: UserServiceSignMessage;
  static readonly VerifyMessage: UserServiceVerifyMessage;
  static readonly StorageInfo: UserServiceStorageInfo;
  static readonly ListStorageInfo: UserServiceListStorageInfo;
  static readonly StorageJob: UserServiceStorageJob;
  static readonly StorageConfigForJob: UserServiceStorageConfigForJob;
  static readonly ListStorageJobs: UserServiceListStorageJobs;
  static readonly StorageJobsSummary: UserServiceStorageJobsSummary;
  static readonly WatchStorageJobs: UserServiceWatchStorageJobs;
  static readonly CancelStorageJob: UserServiceCancelStorageJob;
  static readonly StorageDealRecords: UserServiceStorageDealRecords;
  static readonly RetrievalDealRecords: UserServiceRetrievalDealRecords;
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

export class UserServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  buildInfo(
    requestMessage: powergate_user_v1_user_pb.BuildInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.BuildInfoResponse|null) => void
  ): UnaryResponse;
  buildInfo(
    requestMessage: powergate_user_v1_user_pb.BuildInfoRequest,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.BuildInfoResponse|null) => void
  ): UnaryResponse;
  userIdentifier(
    requestMessage: powergate_user_v1_user_pb.UserIdentifierRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.UserIdentifierResponse|null) => void
  ): UnaryResponse;
  userIdentifier(
    requestMessage: powergate_user_v1_user_pb.UserIdentifierRequest,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.UserIdentifierResponse|null) => void
  ): UnaryResponse;
  defaultStorageConfig(
    requestMessage: powergate_user_v1_user_pb.DefaultStorageConfigRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.DefaultStorageConfigResponse|null) => void
  ): UnaryResponse;
  defaultStorageConfig(
    requestMessage: powergate_user_v1_user_pb.DefaultStorageConfigRequest,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.DefaultStorageConfigResponse|null) => void
  ): UnaryResponse;
  setDefaultStorageConfig(
    requestMessage: powergate_user_v1_user_pb.SetDefaultStorageConfigRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.SetDefaultStorageConfigResponse|null) => void
  ): UnaryResponse;
  setDefaultStorageConfig(
    requestMessage: powergate_user_v1_user_pb.SetDefaultStorageConfigRequest,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.SetDefaultStorageConfigResponse|null) => void
  ): UnaryResponse;
  applyStorageConfig(
    requestMessage: powergate_user_v1_user_pb.ApplyStorageConfigRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.ApplyStorageConfigResponse|null) => void
  ): UnaryResponse;
  applyStorageConfig(
    requestMessage: powergate_user_v1_user_pb.ApplyStorageConfigRequest,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.ApplyStorageConfigResponse|null) => void
  ): UnaryResponse;
  remove(
    requestMessage: powergate_user_v1_user_pb.RemoveRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.RemoveResponse|null) => void
  ): UnaryResponse;
  remove(
    requestMessage: powergate_user_v1_user_pb.RemoveRequest,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.RemoveResponse|null) => void
  ): UnaryResponse;
  stage(metadata?: grpc.Metadata): RequestStream<powergate_user_v1_user_pb.StageRequest>;
  stageCid(
    requestMessage: powergate_user_v1_user_pb.StageCidRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.StageCidResponse|null) => void
  ): UnaryResponse;
  stageCid(
    requestMessage: powergate_user_v1_user_pb.StageCidRequest,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.StageCidResponse|null) => void
  ): UnaryResponse;
  replaceData(
    requestMessage: powergate_user_v1_user_pb.ReplaceDataRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.ReplaceDataResponse|null) => void
  ): UnaryResponse;
  replaceData(
    requestMessage: powergate_user_v1_user_pb.ReplaceDataRequest,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.ReplaceDataResponse|null) => void
  ): UnaryResponse;
  get(requestMessage: powergate_user_v1_user_pb.GetRequest, metadata?: grpc.Metadata): ResponseStream<powergate_user_v1_user_pb.GetResponse>;
  watchLogs(requestMessage: powergate_user_v1_user_pb.WatchLogsRequest, metadata?: grpc.Metadata): ResponseStream<powergate_user_v1_user_pb.WatchLogsResponse>;
  cidSummary(
    requestMessage: powergate_user_v1_user_pb.CidSummaryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.CidSummaryResponse|null) => void
  ): UnaryResponse;
  cidSummary(
    requestMessage: powergate_user_v1_user_pb.CidSummaryRequest,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.CidSummaryResponse|null) => void
  ): UnaryResponse;
  cidInfo(
    requestMessage: powergate_user_v1_user_pb.CidInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.CidInfoResponse|null) => void
  ): UnaryResponse;
  cidInfo(
    requestMessage: powergate_user_v1_user_pb.CidInfoRequest,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.CidInfoResponse|null) => void
  ): UnaryResponse;
  balance(
    requestMessage: powergate_user_v1_user_pb.BalanceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.BalanceResponse|null) => void
  ): UnaryResponse;
  balance(
    requestMessage: powergate_user_v1_user_pb.BalanceRequest,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.BalanceResponse|null) => void
  ): UnaryResponse;
  newAddress(
    requestMessage: powergate_user_v1_user_pb.NewAddressRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.NewAddressResponse|null) => void
  ): UnaryResponse;
  newAddress(
    requestMessage: powergate_user_v1_user_pb.NewAddressRequest,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.NewAddressResponse|null) => void
  ): UnaryResponse;
  addresses(
    requestMessage: powergate_user_v1_user_pb.AddressesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.AddressesResponse|null) => void
  ): UnaryResponse;
  addresses(
    requestMessage: powergate_user_v1_user_pb.AddressesRequest,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.AddressesResponse|null) => void
  ): UnaryResponse;
  sendFil(
    requestMessage: powergate_user_v1_user_pb.SendFilRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.SendFilResponse|null) => void
  ): UnaryResponse;
  sendFil(
    requestMessage: powergate_user_v1_user_pb.SendFilRequest,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.SendFilResponse|null) => void
  ): UnaryResponse;
  signMessage(
    requestMessage: powergate_user_v1_user_pb.SignMessageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.SignMessageResponse|null) => void
  ): UnaryResponse;
  signMessage(
    requestMessage: powergate_user_v1_user_pb.SignMessageRequest,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.SignMessageResponse|null) => void
  ): UnaryResponse;
  verifyMessage(
    requestMessage: powergate_user_v1_user_pb.VerifyMessageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.VerifyMessageResponse|null) => void
  ): UnaryResponse;
  verifyMessage(
    requestMessage: powergate_user_v1_user_pb.VerifyMessageRequest,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.VerifyMessageResponse|null) => void
  ): UnaryResponse;
  storageInfo(
    requestMessage: powergate_user_v1_user_pb.StorageInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.StorageInfoResponse|null) => void
  ): UnaryResponse;
  storageInfo(
    requestMessage: powergate_user_v1_user_pb.StorageInfoRequest,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.StorageInfoResponse|null) => void
  ): UnaryResponse;
  listStorageInfo(
    requestMessage: powergate_user_v1_user_pb.ListStorageInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.ListStorageInfoResponse|null) => void
  ): UnaryResponse;
  listStorageInfo(
    requestMessage: powergate_user_v1_user_pb.ListStorageInfoRequest,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.ListStorageInfoResponse|null) => void
  ): UnaryResponse;
  storageJob(
    requestMessage: powergate_user_v1_user_pb.StorageJobRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.StorageJobResponse|null) => void
  ): UnaryResponse;
  storageJob(
    requestMessage: powergate_user_v1_user_pb.StorageJobRequest,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.StorageJobResponse|null) => void
  ): UnaryResponse;
  storageConfigForJob(
    requestMessage: powergate_user_v1_user_pb.StorageConfigForJobRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.StorageConfigForJobResponse|null) => void
  ): UnaryResponse;
  storageConfigForJob(
    requestMessage: powergate_user_v1_user_pb.StorageConfigForJobRequest,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.StorageConfigForJobResponse|null) => void
  ): UnaryResponse;
  listStorageJobs(
    requestMessage: powergate_user_v1_user_pb.ListStorageJobsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.ListStorageJobsResponse|null) => void
  ): UnaryResponse;
  listStorageJobs(
    requestMessage: powergate_user_v1_user_pb.ListStorageJobsRequest,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.ListStorageJobsResponse|null) => void
  ): UnaryResponse;
  storageJobsSummary(
    requestMessage: powergate_user_v1_user_pb.StorageJobsSummaryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.StorageJobsSummaryResponse|null) => void
  ): UnaryResponse;
  storageJobsSummary(
    requestMessage: powergate_user_v1_user_pb.StorageJobsSummaryRequest,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.StorageJobsSummaryResponse|null) => void
  ): UnaryResponse;
  watchStorageJobs(requestMessage: powergate_user_v1_user_pb.WatchStorageJobsRequest, metadata?: grpc.Metadata): ResponseStream<powergate_user_v1_user_pb.WatchStorageJobsResponse>;
  cancelStorageJob(
    requestMessage: powergate_user_v1_user_pb.CancelStorageJobRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.CancelStorageJobResponse|null) => void
  ): UnaryResponse;
  cancelStorageJob(
    requestMessage: powergate_user_v1_user_pb.CancelStorageJobRequest,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.CancelStorageJobResponse|null) => void
  ): UnaryResponse;
  storageDealRecords(
    requestMessage: powergate_user_v1_user_pb.StorageDealRecordsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.StorageDealRecordsResponse|null) => void
  ): UnaryResponse;
  storageDealRecords(
    requestMessage: powergate_user_v1_user_pb.StorageDealRecordsRequest,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.StorageDealRecordsResponse|null) => void
  ): UnaryResponse;
  retrievalDealRecords(
    requestMessage: powergate_user_v1_user_pb.RetrievalDealRecordsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.RetrievalDealRecordsResponse|null) => void
  ): UnaryResponse;
  retrievalDealRecords(
    requestMessage: powergate_user_v1_user_pb.RetrievalDealRecordsRequest,
    callback: (error: ServiceError|null, responseMessage: powergate_user_v1_user_pb.RetrievalDealRecordsResponse|null) => void
  ): UnaryResponse;
}

