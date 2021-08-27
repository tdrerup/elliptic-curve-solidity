// package: api.billingd.pb
// file: api/billingd/pb/billingd.proto

import * as api_billingd_pb_billingd_pb from "../../../api/billingd/pb/billingd_pb";
import {grpc} from "@improbable-eng/grpc-web";

type APIServiceCheckHealth = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_billingd_pb_billingd_pb.CheckHealthRequest;
  readonly responseType: typeof api_billingd_pb_billingd_pb.CheckHealthResponse;
};

type APIServiceCreateCustomer = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_billingd_pb_billingd_pb.CreateCustomerRequest;
  readonly responseType: typeof api_billingd_pb_billingd_pb.CreateCustomerResponse;
};

type APIServiceGetCustomer = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_billingd_pb_billingd_pb.GetCustomerRequest;
  readonly responseType: typeof api_billingd_pb_billingd_pb.GetCustomerResponse;
};

type APIServiceListDependentCustomers = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_billingd_pb_billingd_pb.ListDependentCustomersRequest;
  readonly responseType: typeof api_billingd_pb_billingd_pb.ListDependentCustomersResponse;
};

type APIServiceGetCustomerSession = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_billingd_pb_billingd_pb.GetCustomerSessionRequest;
  readonly responseType: typeof api_billingd_pb_billingd_pb.GetCustomerSessionResponse;
};

type APIServiceUpdateCustomer = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_billingd_pb_billingd_pb.UpdateCustomerRequest;
  readonly responseType: typeof api_billingd_pb_billingd_pb.UpdateCustomerResponse;
};

type APIServiceUpdateCustomerSubscription = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_billingd_pb_billingd_pb.UpdateCustomerSubscriptionRequest;
  readonly responseType: typeof api_billingd_pb_billingd_pb.UpdateCustomerSubscriptionResponse;
};

type APIServiceRecreateCustomerSubscription = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_billingd_pb_billingd_pb.RecreateCustomerSubscriptionRequest;
  readonly responseType: typeof api_billingd_pb_billingd_pb.RecreateCustomerSubscriptionResponse;
};

type APIServiceDeleteCustomer = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_billingd_pb_billingd_pb.DeleteCustomerRequest;
  readonly responseType: typeof api_billingd_pb_billingd_pb.DeleteCustomerResponse;
};

type APIServiceGetCustomerUsage = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_billingd_pb_billingd_pb.GetCustomerUsageRequest;
  readonly responseType: typeof api_billingd_pb_billingd_pb.GetCustomerUsageResponse;
};

type APIServiceIncCustomerUsage = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_billingd_pb_billingd_pb.IncCustomerUsageRequest;
  readonly responseType: typeof api_billingd_pb_billingd_pb.IncCustomerUsageResponse;
};

type APIServiceReportCustomerUsage = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_billingd_pb_billingd_pb.ReportCustomerUsageRequest;
  readonly responseType: typeof api_billingd_pb_billingd_pb.ReportCustomerUsageResponse;
};

type APIServiceIdentify = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_billingd_pb_billingd_pb.IdentifyRequest;
  readonly responseType: typeof api_billingd_pb_billingd_pb.IdentifyResponse;
};

type APIServiceTrackEvent = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_billingd_pb_billingd_pb.TrackEventRequest;
  readonly responseType: typeof api_billingd_pb_billingd_pb.TrackEventResponse;
};

export class APIService {
  static readonly serviceName: string;
  static readonly CheckHealth: APIServiceCheckHealth;
  static readonly CreateCustomer: APIServiceCreateCustomer;
  static readonly GetCustomer: APIServiceGetCustomer;
  static readonly ListDependentCustomers: APIServiceListDependentCustomers;
  static readonly GetCustomerSession: APIServiceGetCustomerSession;
  static readonly UpdateCustomer: APIServiceUpdateCustomer;
  static readonly UpdateCustomerSubscription: APIServiceUpdateCustomerSubscription;
  static readonly RecreateCustomerSubscription: APIServiceRecreateCustomerSubscription;
  static readonly DeleteCustomer: APIServiceDeleteCustomer;
  static readonly GetCustomerUsage: APIServiceGetCustomerUsage;
  static readonly IncCustomerUsage: APIServiceIncCustomerUsage;
  static readonly ReportCustomerUsage: APIServiceReportCustomerUsage;
  static readonly Identify: APIServiceIdentify;
  static readonly TrackEvent: APIServiceTrackEvent;
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
  checkHealth(
    requestMessage: api_billingd_pb_billingd_pb.CheckHealthRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_billingd_pb_billingd_pb.CheckHealthResponse|null) => void
  ): UnaryResponse;
  checkHealth(
    requestMessage: api_billingd_pb_billingd_pb.CheckHealthRequest,
    callback: (error: ServiceError|null, responseMessage: api_billingd_pb_billingd_pb.CheckHealthResponse|null) => void
  ): UnaryResponse;
  createCustomer(
    requestMessage: api_billingd_pb_billingd_pb.CreateCustomerRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_billingd_pb_billingd_pb.CreateCustomerResponse|null) => void
  ): UnaryResponse;
  createCustomer(
    requestMessage: api_billingd_pb_billingd_pb.CreateCustomerRequest,
    callback: (error: ServiceError|null, responseMessage: api_billingd_pb_billingd_pb.CreateCustomerResponse|null) => void
  ): UnaryResponse;
  getCustomer(
    requestMessage: api_billingd_pb_billingd_pb.GetCustomerRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_billingd_pb_billingd_pb.GetCustomerResponse|null) => void
  ): UnaryResponse;
  getCustomer(
    requestMessage: api_billingd_pb_billingd_pb.GetCustomerRequest,
    callback: (error: ServiceError|null, responseMessage: api_billingd_pb_billingd_pb.GetCustomerResponse|null) => void
  ): UnaryResponse;
  listDependentCustomers(
    requestMessage: api_billingd_pb_billingd_pb.ListDependentCustomersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_billingd_pb_billingd_pb.ListDependentCustomersResponse|null) => void
  ): UnaryResponse;
  listDependentCustomers(
    requestMessage: api_billingd_pb_billingd_pb.ListDependentCustomersRequest,
    callback: (error: ServiceError|null, responseMessage: api_billingd_pb_billingd_pb.ListDependentCustomersResponse|null) => void
  ): UnaryResponse;
  getCustomerSession(
    requestMessage: api_billingd_pb_billingd_pb.GetCustomerSessionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_billingd_pb_billingd_pb.GetCustomerSessionResponse|null) => void
  ): UnaryResponse;
  getCustomerSession(
    requestMessage: api_billingd_pb_billingd_pb.GetCustomerSessionRequest,
    callback: (error: ServiceError|null, responseMessage: api_billingd_pb_billingd_pb.GetCustomerSessionResponse|null) => void
  ): UnaryResponse;
  updateCustomer(
    requestMessage: api_billingd_pb_billingd_pb.UpdateCustomerRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_billingd_pb_billingd_pb.UpdateCustomerResponse|null) => void
  ): UnaryResponse;
  updateCustomer(
    requestMessage: api_billingd_pb_billingd_pb.UpdateCustomerRequest,
    callback: (error: ServiceError|null, responseMessage: api_billingd_pb_billingd_pb.UpdateCustomerResponse|null) => void
  ): UnaryResponse;
  updateCustomerSubscription(
    requestMessage: api_billingd_pb_billingd_pb.UpdateCustomerSubscriptionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_billingd_pb_billingd_pb.UpdateCustomerSubscriptionResponse|null) => void
  ): UnaryResponse;
  updateCustomerSubscription(
    requestMessage: api_billingd_pb_billingd_pb.UpdateCustomerSubscriptionRequest,
    callback: (error: ServiceError|null, responseMessage: api_billingd_pb_billingd_pb.UpdateCustomerSubscriptionResponse|null) => void
  ): UnaryResponse;
  recreateCustomerSubscription(
    requestMessage: api_billingd_pb_billingd_pb.RecreateCustomerSubscriptionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_billingd_pb_billingd_pb.RecreateCustomerSubscriptionResponse|null) => void
  ): UnaryResponse;
  recreateCustomerSubscription(
    requestMessage: api_billingd_pb_billingd_pb.RecreateCustomerSubscriptionRequest,
    callback: (error: ServiceError|null, responseMessage: api_billingd_pb_billingd_pb.RecreateCustomerSubscriptionResponse|null) => void
  ): UnaryResponse;
  deleteCustomer(
    requestMessage: api_billingd_pb_billingd_pb.DeleteCustomerRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_billingd_pb_billingd_pb.DeleteCustomerResponse|null) => void
  ): UnaryResponse;
  deleteCustomer(
    requestMessage: api_billingd_pb_billingd_pb.DeleteCustomerRequest,
    callback: (error: ServiceError|null, responseMessage: api_billingd_pb_billingd_pb.DeleteCustomerResponse|null) => void
  ): UnaryResponse;
  getCustomerUsage(
    requestMessage: api_billingd_pb_billingd_pb.GetCustomerUsageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_billingd_pb_billingd_pb.GetCustomerUsageResponse|null) => void
  ): UnaryResponse;
  getCustomerUsage(
    requestMessage: api_billingd_pb_billingd_pb.GetCustomerUsageRequest,
    callback: (error: ServiceError|null, responseMessage: api_billingd_pb_billingd_pb.GetCustomerUsageResponse|null) => void
  ): UnaryResponse;
  incCustomerUsage(
    requestMessage: api_billingd_pb_billingd_pb.IncCustomerUsageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_billingd_pb_billingd_pb.IncCustomerUsageResponse|null) => void
  ): UnaryResponse;
  incCustomerUsage(
    requestMessage: api_billingd_pb_billingd_pb.IncCustomerUsageRequest,
    callback: (error: ServiceError|null, responseMessage: api_billingd_pb_billingd_pb.IncCustomerUsageResponse|null) => void
  ): UnaryResponse;
  reportCustomerUsage(
    requestMessage: api_billingd_pb_billingd_pb.ReportCustomerUsageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_billingd_pb_billingd_pb.ReportCustomerUsageResponse|null) => void
  ): UnaryResponse;
  reportCustomerUsage(
    requestMessage: api_billingd_pb_billingd_pb.ReportCustomerUsageRequest,
    callback: (error: ServiceError|null, responseMessage: api_billingd_pb_billingd_pb.ReportCustomerUsageResponse|null) => void
  ): UnaryResponse;
  identify(
    requestMessage: api_billingd_pb_billingd_pb.IdentifyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_billingd_pb_billingd_pb.IdentifyResponse|null) => void
  ): UnaryResponse;
  identify(
    requestMessage: api_billingd_pb_billingd_pb.IdentifyRequest,
    callback: (error: ServiceError|null, responseMessage: api_billingd_pb_billingd_pb.IdentifyResponse|null) => void
  ): UnaryResponse;
  trackEvent(
    requestMessage: api_billingd_pb_billingd_pb.TrackEventRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_billingd_pb_billingd_pb.TrackEventResponse|null) => void
  ): UnaryResponse;
  trackEvent(
    requestMessage: api_billingd_pb_billingd_pb.TrackEventRequest,
    callback: (error: ServiceError|null, responseMessage: api_billingd_pb_billingd_pb.TrackEventResponse|null) => void
  ): UnaryResponse;
}

