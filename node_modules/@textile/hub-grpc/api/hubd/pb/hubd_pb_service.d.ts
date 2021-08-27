// package: api.hubd.pb
// file: api/hubd/pb/hubd.proto

import * as api_hubd_pb_hubd_pb from "../../../api/hubd/pb/hubd_pb";
import {grpc} from "@improbable-eng/grpc-web";

type APIServiceBuildInfo = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_hubd_pb_hubd_pb.BuildInfoRequest;
  readonly responseType: typeof api_hubd_pb_hubd_pb.BuildInfoResponse;
};

type APIServiceSignup = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_hubd_pb_hubd_pb.SignupRequest;
  readonly responseType: typeof api_hubd_pb_hubd_pb.SignupResponse;
};

type APIServiceSignin = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_hubd_pb_hubd_pb.SigninRequest;
  readonly responseType: typeof api_hubd_pb_hubd_pb.SigninResponse;
};

type APIServiceSignout = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_hubd_pb_hubd_pb.SignoutRequest;
  readonly responseType: typeof api_hubd_pb_hubd_pb.SignoutResponse;
};

type APIServiceGetSessionInfo = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_hubd_pb_hubd_pb.GetSessionInfoRequest;
  readonly responseType: typeof api_hubd_pb_hubd_pb.GetSessionInfoResponse;
};

type APIServiceGetIdentity = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_hubd_pb_hubd_pb.GetIdentityRequest;
  readonly responseType: typeof api_hubd_pb_hubd_pb.GetIdentityResponse;
};

type APIServiceCreateKey = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_hubd_pb_hubd_pb.CreateKeyRequest;
  readonly responseType: typeof api_hubd_pb_hubd_pb.CreateKeyResponse;
};

type APIServiceListKeys = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_hubd_pb_hubd_pb.ListKeysRequest;
  readonly responseType: typeof api_hubd_pb_hubd_pb.ListKeysResponse;
};

type APIServiceInvalidateKey = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_hubd_pb_hubd_pb.InvalidateKeyRequest;
  readonly responseType: typeof api_hubd_pb_hubd_pb.InvalidateKeyResponse;
};

type APIServiceCreateOrg = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_hubd_pb_hubd_pb.CreateOrgRequest;
  readonly responseType: typeof api_hubd_pb_hubd_pb.CreateOrgResponse;
};

type APIServiceGetOrg = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_hubd_pb_hubd_pb.GetOrgRequest;
  readonly responseType: typeof api_hubd_pb_hubd_pb.GetOrgResponse;
};

type APIServiceListOrgs = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_hubd_pb_hubd_pb.ListOrgsRequest;
  readonly responseType: typeof api_hubd_pb_hubd_pb.ListOrgsResponse;
};

type APIServiceRemoveOrg = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_hubd_pb_hubd_pb.RemoveOrgRequest;
  readonly responseType: typeof api_hubd_pb_hubd_pb.RemoveOrgResponse;
};

type APIServiceInviteToOrg = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_hubd_pb_hubd_pb.InviteToOrgRequest;
  readonly responseType: typeof api_hubd_pb_hubd_pb.InviteToOrgResponse;
};

type APIServiceLeaveOrg = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_hubd_pb_hubd_pb.LeaveOrgRequest;
  readonly responseType: typeof api_hubd_pb_hubd_pb.LeaveOrgResponse;
};

type APIServiceSetupBilling = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_hubd_pb_hubd_pb.SetupBillingRequest;
  readonly responseType: typeof api_hubd_pb_hubd_pb.SetupBillingResponse;
};

type APIServiceGetBillingSession = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_hubd_pb_hubd_pb.GetBillingSessionRequest;
  readonly responseType: typeof api_hubd_pb_hubd_pb.GetBillingSessionResponse;
};

type APIServiceListBillingUsers = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_hubd_pb_hubd_pb.ListBillingUsersRequest;
  readonly responseType: typeof api_hubd_pb_hubd_pb.ListBillingUsersResponse;
};

type APIServiceIsUsernameAvailable = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_hubd_pb_hubd_pb.IsUsernameAvailableRequest;
  readonly responseType: typeof api_hubd_pb_hubd_pb.IsUsernameAvailableResponse;
};

type APIServiceIsOrgNameAvailable = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_hubd_pb_hubd_pb.IsOrgNameAvailableRequest;
  readonly responseType: typeof api_hubd_pb_hubd_pb.IsOrgNameAvailableResponse;
};

type APIServiceDestroyAccount = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_hubd_pb_hubd_pb.DestroyAccountRequest;
  readonly responseType: typeof api_hubd_pb_hubd_pb.DestroyAccountResponse;
};

export class APIService {
  static readonly serviceName: string;
  static readonly BuildInfo: APIServiceBuildInfo;
  static readonly Signup: APIServiceSignup;
  static readonly Signin: APIServiceSignin;
  static readonly Signout: APIServiceSignout;
  static readonly GetSessionInfo: APIServiceGetSessionInfo;
  static readonly GetIdentity: APIServiceGetIdentity;
  static readonly CreateKey: APIServiceCreateKey;
  static readonly ListKeys: APIServiceListKeys;
  static readonly InvalidateKey: APIServiceInvalidateKey;
  static readonly CreateOrg: APIServiceCreateOrg;
  static readonly GetOrg: APIServiceGetOrg;
  static readonly ListOrgs: APIServiceListOrgs;
  static readonly RemoveOrg: APIServiceRemoveOrg;
  static readonly InviteToOrg: APIServiceInviteToOrg;
  static readonly LeaveOrg: APIServiceLeaveOrg;
  static readonly SetupBilling: APIServiceSetupBilling;
  static readonly GetBillingSession: APIServiceGetBillingSession;
  static readonly ListBillingUsers: APIServiceListBillingUsers;
  static readonly IsUsernameAvailable: APIServiceIsUsernameAvailable;
  static readonly IsOrgNameAvailable: APIServiceIsOrgNameAvailable;
  static readonly DestroyAccount: APIServiceDestroyAccount;
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
  buildInfo(
    requestMessage: api_hubd_pb_hubd_pb.BuildInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.BuildInfoResponse|null) => void
  ): UnaryResponse;
  buildInfo(
    requestMessage: api_hubd_pb_hubd_pb.BuildInfoRequest,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.BuildInfoResponse|null) => void
  ): UnaryResponse;
  signup(
    requestMessage: api_hubd_pb_hubd_pb.SignupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.SignupResponse|null) => void
  ): UnaryResponse;
  signup(
    requestMessage: api_hubd_pb_hubd_pb.SignupRequest,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.SignupResponse|null) => void
  ): UnaryResponse;
  signin(
    requestMessage: api_hubd_pb_hubd_pb.SigninRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.SigninResponse|null) => void
  ): UnaryResponse;
  signin(
    requestMessage: api_hubd_pb_hubd_pb.SigninRequest,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.SigninResponse|null) => void
  ): UnaryResponse;
  signout(
    requestMessage: api_hubd_pb_hubd_pb.SignoutRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.SignoutResponse|null) => void
  ): UnaryResponse;
  signout(
    requestMessage: api_hubd_pb_hubd_pb.SignoutRequest,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.SignoutResponse|null) => void
  ): UnaryResponse;
  getSessionInfo(
    requestMessage: api_hubd_pb_hubd_pb.GetSessionInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.GetSessionInfoResponse|null) => void
  ): UnaryResponse;
  getSessionInfo(
    requestMessage: api_hubd_pb_hubd_pb.GetSessionInfoRequest,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.GetSessionInfoResponse|null) => void
  ): UnaryResponse;
  getIdentity(
    requestMessage: api_hubd_pb_hubd_pb.GetIdentityRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.GetIdentityResponse|null) => void
  ): UnaryResponse;
  getIdentity(
    requestMessage: api_hubd_pb_hubd_pb.GetIdentityRequest,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.GetIdentityResponse|null) => void
  ): UnaryResponse;
  createKey(
    requestMessage: api_hubd_pb_hubd_pb.CreateKeyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.CreateKeyResponse|null) => void
  ): UnaryResponse;
  createKey(
    requestMessage: api_hubd_pb_hubd_pb.CreateKeyRequest,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.CreateKeyResponse|null) => void
  ): UnaryResponse;
  listKeys(
    requestMessage: api_hubd_pb_hubd_pb.ListKeysRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.ListKeysResponse|null) => void
  ): UnaryResponse;
  listKeys(
    requestMessage: api_hubd_pb_hubd_pb.ListKeysRequest,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.ListKeysResponse|null) => void
  ): UnaryResponse;
  invalidateKey(
    requestMessage: api_hubd_pb_hubd_pb.InvalidateKeyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.InvalidateKeyResponse|null) => void
  ): UnaryResponse;
  invalidateKey(
    requestMessage: api_hubd_pb_hubd_pb.InvalidateKeyRequest,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.InvalidateKeyResponse|null) => void
  ): UnaryResponse;
  createOrg(
    requestMessage: api_hubd_pb_hubd_pb.CreateOrgRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.CreateOrgResponse|null) => void
  ): UnaryResponse;
  createOrg(
    requestMessage: api_hubd_pb_hubd_pb.CreateOrgRequest,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.CreateOrgResponse|null) => void
  ): UnaryResponse;
  getOrg(
    requestMessage: api_hubd_pb_hubd_pb.GetOrgRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.GetOrgResponse|null) => void
  ): UnaryResponse;
  getOrg(
    requestMessage: api_hubd_pb_hubd_pb.GetOrgRequest,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.GetOrgResponse|null) => void
  ): UnaryResponse;
  listOrgs(
    requestMessage: api_hubd_pb_hubd_pb.ListOrgsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.ListOrgsResponse|null) => void
  ): UnaryResponse;
  listOrgs(
    requestMessage: api_hubd_pb_hubd_pb.ListOrgsRequest,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.ListOrgsResponse|null) => void
  ): UnaryResponse;
  removeOrg(
    requestMessage: api_hubd_pb_hubd_pb.RemoveOrgRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.RemoveOrgResponse|null) => void
  ): UnaryResponse;
  removeOrg(
    requestMessage: api_hubd_pb_hubd_pb.RemoveOrgRequest,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.RemoveOrgResponse|null) => void
  ): UnaryResponse;
  inviteToOrg(
    requestMessage: api_hubd_pb_hubd_pb.InviteToOrgRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.InviteToOrgResponse|null) => void
  ): UnaryResponse;
  inviteToOrg(
    requestMessage: api_hubd_pb_hubd_pb.InviteToOrgRequest,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.InviteToOrgResponse|null) => void
  ): UnaryResponse;
  leaveOrg(
    requestMessage: api_hubd_pb_hubd_pb.LeaveOrgRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.LeaveOrgResponse|null) => void
  ): UnaryResponse;
  leaveOrg(
    requestMessage: api_hubd_pb_hubd_pb.LeaveOrgRequest,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.LeaveOrgResponse|null) => void
  ): UnaryResponse;
  setupBilling(
    requestMessage: api_hubd_pb_hubd_pb.SetupBillingRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.SetupBillingResponse|null) => void
  ): UnaryResponse;
  setupBilling(
    requestMessage: api_hubd_pb_hubd_pb.SetupBillingRequest,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.SetupBillingResponse|null) => void
  ): UnaryResponse;
  getBillingSession(
    requestMessage: api_hubd_pb_hubd_pb.GetBillingSessionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.GetBillingSessionResponse|null) => void
  ): UnaryResponse;
  getBillingSession(
    requestMessage: api_hubd_pb_hubd_pb.GetBillingSessionRequest,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.GetBillingSessionResponse|null) => void
  ): UnaryResponse;
  listBillingUsers(
    requestMessage: api_hubd_pb_hubd_pb.ListBillingUsersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.ListBillingUsersResponse|null) => void
  ): UnaryResponse;
  listBillingUsers(
    requestMessage: api_hubd_pb_hubd_pb.ListBillingUsersRequest,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.ListBillingUsersResponse|null) => void
  ): UnaryResponse;
  isUsernameAvailable(
    requestMessage: api_hubd_pb_hubd_pb.IsUsernameAvailableRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.IsUsernameAvailableResponse|null) => void
  ): UnaryResponse;
  isUsernameAvailable(
    requestMessage: api_hubd_pb_hubd_pb.IsUsernameAvailableRequest,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.IsUsernameAvailableResponse|null) => void
  ): UnaryResponse;
  isOrgNameAvailable(
    requestMessage: api_hubd_pb_hubd_pb.IsOrgNameAvailableRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.IsOrgNameAvailableResponse|null) => void
  ): UnaryResponse;
  isOrgNameAvailable(
    requestMessage: api_hubd_pb_hubd_pb.IsOrgNameAvailableRequest,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.IsOrgNameAvailableResponse|null) => void
  ): UnaryResponse;
  destroyAccount(
    requestMessage: api_hubd_pb_hubd_pb.DestroyAccountRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.DestroyAccountResponse|null) => void
  ): UnaryResponse;
  destroyAccount(
    requestMessage: api_hubd_pb_hubd_pb.DestroyAccountRequest,
    callback: (error: ServiceError|null, responseMessage: api_hubd_pb_hubd_pb.DestroyAccountResponse|null) => void
  ): UnaryResponse;
}

