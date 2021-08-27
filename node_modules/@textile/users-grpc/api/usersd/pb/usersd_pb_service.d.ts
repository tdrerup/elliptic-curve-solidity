// package: api.usersd.pb
// file: api/usersd/pb/usersd.proto

import * as api_usersd_pb_usersd_pb from "../../../api/usersd/pb/usersd_pb";
import {grpc} from "@improbable-eng/grpc-web";

type APIServiceGetThread = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_usersd_pb_usersd_pb.GetThreadRequest;
  readonly responseType: typeof api_usersd_pb_usersd_pb.GetThreadResponse;
};

type APIServiceListThreads = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_usersd_pb_usersd_pb.ListThreadsRequest;
  readonly responseType: typeof api_usersd_pb_usersd_pb.ListThreadsResponse;
};

type APIServiceSetupMailbox = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_usersd_pb_usersd_pb.SetupMailboxRequest;
  readonly responseType: typeof api_usersd_pb_usersd_pb.SetupMailboxResponse;
};

type APIServiceSendMessage = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_usersd_pb_usersd_pb.SendMessageRequest;
  readonly responseType: typeof api_usersd_pb_usersd_pb.SendMessageResponse;
};

type APIServiceListInboxMessages = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_usersd_pb_usersd_pb.ListInboxMessagesRequest;
  readonly responseType: typeof api_usersd_pb_usersd_pb.ListInboxMessagesResponse;
};

type APIServiceListSentboxMessages = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_usersd_pb_usersd_pb.ListSentboxMessagesRequest;
  readonly responseType: typeof api_usersd_pb_usersd_pb.ListSentboxMessagesResponse;
};

type APIServiceReadInboxMessage = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_usersd_pb_usersd_pb.ReadInboxMessageRequest;
  readonly responseType: typeof api_usersd_pb_usersd_pb.ReadInboxMessageResponse;
};

type APIServiceDeleteInboxMessage = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_usersd_pb_usersd_pb.DeleteInboxMessageRequest;
  readonly responseType: typeof api_usersd_pb_usersd_pb.DeleteInboxMessageResponse;
};

type APIServiceDeleteSentboxMessage = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_usersd_pb_usersd_pb.DeleteSentboxMessageRequest;
  readonly responseType: typeof api_usersd_pb_usersd_pb.DeleteSentboxMessageResponse;
};

type APIServiceGetUsage = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_usersd_pb_usersd_pb.GetUsageRequest;
  readonly responseType: typeof api_usersd_pb_usersd_pb.GetUsageResponse;
};

type APIServiceArchivesLs = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_usersd_pb_usersd_pb.ArchivesLsRequest;
  readonly responseType: typeof api_usersd_pb_usersd_pb.ArchivesLsResponse;
};

type APIServiceArchivesImport = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_usersd_pb_usersd_pb.ArchivesImportRequest;
  readonly responseType: typeof api_usersd_pb_usersd_pb.ArchivesImportResponse;
};

type APIServiceArchiveRetrievalLs = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_usersd_pb_usersd_pb.ArchiveRetrievalLsRequest;
  readonly responseType: typeof api_usersd_pb_usersd_pb.ArchiveRetrievalLsResponse;
};

type APIServiceArchiveRetrievalLogs = {
  readonly methodName: string;
  readonly service: typeof APIService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_usersd_pb_usersd_pb.ArchiveRetrievalLogsRequest;
  readonly responseType: typeof api_usersd_pb_usersd_pb.ArchiveRetrievalLogsResponse;
};

export class APIService {
  static readonly serviceName: string;
  static readonly GetThread: APIServiceGetThread;
  static readonly ListThreads: APIServiceListThreads;
  static readonly SetupMailbox: APIServiceSetupMailbox;
  static readonly SendMessage: APIServiceSendMessage;
  static readonly ListInboxMessages: APIServiceListInboxMessages;
  static readonly ListSentboxMessages: APIServiceListSentboxMessages;
  static readonly ReadInboxMessage: APIServiceReadInboxMessage;
  static readonly DeleteInboxMessage: APIServiceDeleteInboxMessage;
  static readonly DeleteSentboxMessage: APIServiceDeleteSentboxMessage;
  static readonly GetUsage: APIServiceGetUsage;
  static readonly ArchivesLs: APIServiceArchivesLs;
  static readonly ArchivesImport: APIServiceArchivesImport;
  static readonly ArchiveRetrievalLs: APIServiceArchiveRetrievalLs;
  static readonly ArchiveRetrievalLogs: APIServiceArchiveRetrievalLogs;
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
  getThread(
    requestMessage: api_usersd_pb_usersd_pb.GetThreadRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_usersd_pb_usersd_pb.GetThreadResponse|null) => void
  ): UnaryResponse;
  getThread(
    requestMessage: api_usersd_pb_usersd_pb.GetThreadRequest,
    callback: (error: ServiceError|null, responseMessage: api_usersd_pb_usersd_pb.GetThreadResponse|null) => void
  ): UnaryResponse;
  listThreads(
    requestMessage: api_usersd_pb_usersd_pb.ListThreadsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_usersd_pb_usersd_pb.ListThreadsResponse|null) => void
  ): UnaryResponse;
  listThreads(
    requestMessage: api_usersd_pb_usersd_pb.ListThreadsRequest,
    callback: (error: ServiceError|null, responseMessage: api_usersd_pb_usersd_pb.ListThreadsResponse|null) => void
  ): UnaryResponse;
  setupMailbox(
    requestMessage: api_usersd_pb_usersd_pb.SetupMailboxRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_usersd_pb_usersd_pb.SetupMailboxResponse|null) => void
  ): UnaryResponse;
  setupMailbox(
    requestMessage: api_usersd_pb_usersd_pb.SetupMailboxRequest,
    callback: (error: ServiceError|null, responseMessage: api_usersd_pb_usersd_pb.SetupMailboxResponse|null) => void
  ): UnaryResponse;
  sendMessage(
    requestMessage: api_usersd_pb_usersd_pb.SendMessageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_usersd_pb_usersd_pb.SendMessageResponse|null) => void
  ): UnaryResponse;
  sendMessage(
    requestMessage: api_usersd_pb_usersd_pb.SendMessageRequest,
    callback: (error: ServiceError|null, responseMessage: api_usersd_pb_usersd_pb.SendMessageResponse|null) => void
  ): UnaryResponse;
  listInboxMessages(
    requestMessage: api_usersd_pb_usersd_pb.ListInboxMessagesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_usersd_pb_usersd_pb.ListInboxMessagesResponse|null) => void
  ): UnaryResponse;
  listInboxMessages(
    requestMessage: api_usersd_pb_usersd_pb.ListInboxMessagesRequest,
    callback: (error: ServiceError|null, responseMessage: api_usersd_pb_usersd_pb.ListInboxMessagesResponse|null) => void
  ): UnaryResponse;
  listSentboxMessages(
    requestMessage: api_usersd_pb_usersd_pb.ListSentboxMessagesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_usersd_pb_usersd_pb.ListSentboxMessagesResponse|null) => void
  ): UnaryResponse;
  listSentboxMessages(
    requestMessage: api_usersd_pb_usersd_pb.ListSentboxMessagesRequest,
    callback: (error: ServiceError|null, responseMessage: api_usersd_pb_usersd_pb.ListSentboxMessagesResponse|null) => void
  ): UnaryResponse;
  readInboxMessage(
    requestMessage: api_usersd_pb_usersd_pb.ReadInboxMessageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_usersd_pb_usersd_pb.ReadInboxMessageResponse|null) => void
  ): UnaryResponse;
  readInboxMessage(
    requestMessage: api_usersd_pb_usersd_pb.ReadInboxMessageRequest,
    callback: (error: ServiceError|null, responseMessage: api_usersd_pb_usersd_pb.ReadInboxMessageResponse|null) => void
  ): UnaryResponse;
  deleteInboxMessage(
    requestMessage: api_usersd_pb_usersd_pb.DeleteInboxMessageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_usersd_pb_usersd_pb.DeleteInboxMessageResponse|null) => void
  ): UnaryResponse;
  deleteInboxMessage(
    requestMessage: api_usersd_pb_usersd_pb.DeleteInboxMessageRequest,
    callback: (error: ServiceError|null, responseMessage: api_usersd_pb_usersd_pb.DeleteInboxMessageResponse|null) => void
  ): UnaryResponse;
  deleteSentboxMessage(
    requestMessage: api_usersd_pb_usersd_pb.DeleteSentboxMessageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_usersd_pb_usersd_pb.DeleteSentboxMessageResponse|null) => void
  ): UnaryResponse;
  deleteSentboxMessage(
    requestMessage: api_usersd_pb_usersd_pb.DeleteSentboxMessageRequest,
    callback: (error: ServiceError|null, responseMessage: api_usersd_pb_usersd_pb.DeleteSentboxMessageResponse|null) => void
  ): UnaryResponse;
  getUsage(
    requestMessage: api_usersd_pb_usersd_pb.GetUsageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_usersd_pb_usersd_pb.GetUsageResponse|null) => void
  ): UnaryResponse;
  getUsage(
    requestMessage: api_usersd_pb_usersd_pb.GetUsageRequest,
    callback: (error: ServiceError|null, responseMessage: api_usersd_pb_usersd_pb.GetUsageResponse|null) => void
  ): UnaryResponse;
  archivesLs(
    requestMessage: api_usersd_pb_usersd_pb.ArchivesLsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_usersd_pb_usersd_pb.ArchivesLsResponse|null) => void
  ): UnaryResponse;
  archivesLs(
    requestMessage: api_usersd_pb_usersd_pb.ArchivesLsRequest,
    callback: (error: ServiceError|null, responseMessage: api_usersd_pb_usersd_pb.ArchivesLsResponse|null) => void
  ): UnaryResponse;
  archivesImport(
    requestMessage: api_usersd_pb_usersd_pb.ArchivesImportRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_usersd_pb_usersd_pb.ArchivesImportResponse|null) => void
  ): UnaryResponse;
  archivesImport(
    requestMessage: api_usersd_pb_usersd_pb.ArchivesImportRequest,
    callback: (error: ServiceError|null, responseMessage: api_usersd_pb_usersd_pb.ArchivesImportResponse|null) => void
  ): UnaryResponse;
  archiveRetrievalLs(
    requestMessage: api_usersd_pb_usersd_pb.ArchiveRetrievalLsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_usersd_pb_usersd_pb.ArchiveRetrievalLsResponse|null) => void
  ): UnaryResponse;
  archiveRetrievalLs(
    requestMessage: api_usersd_pb_usersd_pb.ArchiveRetrievalLsRequest,
    callback: (error: ServiceError|null, responseMessage: api_usersd_pb_usersd_pb.ArchiveRetrievalLsResponse|null) => void
  ): UnaryResponse;
  archiveRetrievalLogs(requestMessage: api_usersd_pb_usersd_pb.ArchiveRetrievalLogsRequest, metadata?: grpc.Metadata): ResponseStream<api_usersd_pb_usersd_pb.ArchiveRetrievalLogsResponse>;
}

