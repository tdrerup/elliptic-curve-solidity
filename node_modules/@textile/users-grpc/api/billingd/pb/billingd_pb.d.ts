// package: api.billingd.pb
// file: api/billingd/pb/billingd.proto

import * as jspb from "google-protobuf";

export class Period extends jspb.Message {
  getUnixStart(): number;
  setUnixStart(value: number): void;

  getUnixEnd(): number;
  setUnixEnd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Period.AsObject;
  static toObject(includeInstance: boolean, msg: Period): Period.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Period, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Period;
  static deserializeBinaryFromReader(message: Period, reader: jspb.BinaryReader): Period;
}

export namespace Period {
  export type AsObject = {
    unixStart: number,
    unixEnd: number,
  }
}

export class Usage extends jspb.Message {
  getDescription(): string;
  setDescription(value: string): void;

  getUnits(): number;
  setUnits(value: number): void;

  getTotal(): number;
  setTotal(value: number): void;

  getFree(): number;
  setFree(value: number): void;

  getGrace(): number;
  setGrace(value: number): void;

  getCost(): number;
  setCost(value: number): void;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): Period | undefined;
  setPeriod(value?: Period): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Usage.AsObject;
  static toObject(includeInstance: boolean, msg: Usage): Usage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Usage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Usage;
  static deserializeBinaryFromReader(message: Usage, reader: jspb.BinaryReader): Usage;
}

export namespace Usage {
  export type AsObject = {
    description: string,
    units: number,
    total: number,
    free: number,
    grace: number,
    cost: number,
    period?: Period.AsObject,
  }
}

export class CheckHealthRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckHealthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckHealthRequest): CheckHealthRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckHealthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckHealthRequest;
  static deserializeBinaryFromReader(message: CheckHealthRequest, reader: jspb.BinaryReader): CheckHealthRequest;
}

export namespace CheckHealthRequest {
  export type AsObject = {
  }
}

export class CheckHealthResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckHealthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckHealthResponse): CheckHealthResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckHealthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckHealthResponse;
  static deserializeBinaryFromReader(message: CheckHealthResponse, reader: jspb.BinaryReader): CheckHealthResponse;
}

export namespace CheckHealthResponse {
  export type AsObject = {
  }
}

export class CreateCustomerRequest extends jspb.Message {
  hasCustomer(): boolean;
  clearCustomer(): void;
  getCustomer(): CreateCustomerRequest.Params | undefined;
  setCustomer(value?: CreateCustomerRequest.Params): void;

  hasParent(): boolean;
  clearParent(): void;
  getParent(): CreateCustomerRequest.Params | undefined;
  setParent(value?: CreateCustomerRequest.Params): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCustomerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCustomerRequest): CreateCustomerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCustomerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCustomerRequest;
  static deserializeBinaryFromReader(message: CreateCustomerRequest, reader: jspb.BinaryReader): CreateCustomerRequest;
}

export namespace CreateCustomerRequest {
  export type AsObject = {
    customer?: CreateCustomerRequest.Params.AsObject,
    parent?: CreateCustomerRequest.Params.AsObject,
  }

  export class Params extends jspb.Message {
    getKey(): string;
    setKey(value: string): void;

    getEmail(): string;
    setEmail(value: string): void;

    getAccountType(): number;
    setAccountType(value: number): void;

    getUsername(): string;
    setUsername(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Params.AsObject;
    static toObject(includeInstance: boolean, msg: Params): Params.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Params, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Params;
    static deserializeBinaryFromReader(message: Params, reader: jspb.BinaryReader): Params;
  }

  export namespace Params {
    export type AsObject = {
      key: string,
      email: string,
      accountType: number,
      username: string,
    }
  }
}

export class CreateCustomerResponse extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCustomerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCustomerResponse): CreateCustomerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCustomerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCustomerResponse;
  static deserializeBinaryFromReader(message: CreateCustomerResponse, reader: jspb.BinaryReader): CreateCustomerResponse;
}

export namespace CreateCustomerResponse {
  export type AsObject = {
    customerId: string,
  }
}

export class GetCustomerRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerRequest): GetCustomerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCustomerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerRequest;
  static deserializeBinaryFromReader(message: GetCustomerRequest, reader: jspb.BinaryReader): GetCustomerRequest;
}

export namespace GetCustomerRequest {
  export type AsObject = {
    key: string,
  }
}

export class GetCustomerResponse extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getCustomerId(): string;
  setCustomerId(value: string): void;

  getParentKey(): string;
  setParentKey(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getAccountType(): number;
  setAccountType(value: number): void;

  getAccountStatus(): string;
  setAccountStatus(value: string): void;

  getSubscriptionStatus(): string;
  setSubscriptionStatus(value: string): void;

  getBalance(): number;
  setBalance(value: number): void;

  getBillable(): boolean;
  setBillable(value: boolean): void;

  getDelinquent(): boolean;
  setDelinquent(value: boolean): void;

  getCreatedAt(): number;
  setCreatedAt(value: number): void;

  getGracePeriodEnd(): number;
  setGracePeriodEnd(value: number): void;

  hasInvoicePeriod(): boolean;
  clearInvoicePeriod(): void;
  getInvoicePeriod(): Period | undefined;
  setInvoicePeriod(value?: Period): void;

  getDailyUsageMap(): jspb.Map<string, Usage>;
  clearDailyUsageMap(): void;
  getDependents(): number;
  setDependents(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerResponse): GetCustomerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCustomerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerResponse;
  static deserializeBinaryFromReader(message: GetCustomerResponse, reader: jspb.BinaryReader): GetCustomerResponse;
}

export namespace GetCustomerResponse {
  export type AsObject = {
    key: string,
    customerId: string,
    parentKey: string,
    email: string,
    accountType: number,
    accountStatus: string,
    subscriptionStatus: string,
    balance: number,
    billable: boolean,
    delinquent: boolean,
    createdAt: number,
    gracePeriodEnd: number,
    invoicePeriod?: Period.AsObject,
    dailyUsageMap: Array<[string, Usage.AsObject]>,
    dependents: number,
  }
}

export class ListDependentCustomersRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDependentCustomersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDependentCustomersRequest): ListDependentCustomersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDependentCustomersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDependentCustomersRequest;
  static deserializeBinaryFromReader(message: ListDependentCustomersRequest, reader: jspb.BinaryReader): ListDependentCustomersRequest;
}

export namespace ListDependentCustomersRequest {
  export type AsObject = {
    key: string,
    offset: number,
    limit: number,
  }
}

export class ListDependentCustomersResponse extends jspb.Message {
  clearCustomersList(): void;
  getCustomersList(): Array<GetCustomerResponse>;
  setCustomersList(value: Array<GetCustomerResponse>): void;
  addCustomers(value?: GetCustomerResponse, index?: number): GetCustomerResponse;

  getNextOffset(): number;
  setNextOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDependentCustomersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDependentCustomersResponse): ListDependentCustomersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDependentCustomersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDependentCustomersResponse;
  static deserializeBinaryFromReader(message: ListDependentCustomersResponse, reader: jspb.BinaryReader): ListDependentCustomersResponse;
}

export namespace ListDependentCustomersResponse {
  export type AsObject = {
    customersList: Array<GetCustomerResponse.AsObject>,
    nextOffset: number,
  }
}

export class GetCustomerSessionRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerSessionRequest): GetCustomerSessionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCustomerSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerSessionRequest;
  static deserializeBinaryFromReader(message: GetCustomerSessionRequest, reader: jspb.BinaryReader): GetCustomerSessionRequest;
}

export namespace GetCustomerSessionRequest {
  export type AsObject = {
    key: string,
  }
}

export class GetCustomerSessionResponse extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerSessionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerSessionResponse): GetCustomerSessionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCustomerSessionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerSessionResponse;
  static deserializeBinaryFromReader(message: GetCustomerSessionResponse, reader: jspb.BinaryReader): GetCustomerSessionResponse;
}

export namespace GetCustomerSessionResponse {
  export type AsObject = {
    url: string,
  }
}

export class UpdateCustomerRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  getBalance(): number;
  setBalance(value: number): void;

  getBillable(): boolean;
  setBillable(value: boolean): void;

  getDelinquent(): boolean;
  setDelinquent(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCustomerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCustomerRequest): UpdateCustomerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCustomerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCustomerRequest;
  static deserializeBinaryFromReader(message: UpdateCustomerRequest, reader: jspb.BinaryReader): UpdateCustomerRequest;
}

export namespace UpdateCustomerRequest {
  export type AsObject = {
    customerId: string,
    balance: number,
    billable: boolean,
    delinquent: boolean,
  }
}

export class UpdateCustomerResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCustomerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCustomerResponse): UpdateCustomerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCustomerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCustomerResponse;
  static deserializeBinaryFromReader(message: UpdateCustomerResponse, reader: jspb.BinaryReader): UpdateCustomerResponse;
}

export namespace UpdateCustomerResponse {
  export type AsObject = {
  }
}

export class UpdateCustomerSubscriptionRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  hasInvoicePeriod(): boolean;
  clearInvoicePeriod(): void;
  getInvoicePeriod(): Period | undefined;
  setInvoicePeriod(value?: Period): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCustomerSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCustomerSubscriptionRequest): UpdateCustomerSubscriptionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCustomerSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCustomerSubscriptionRequest;
  static deserializeBinaryFromReader(message: UpdateCustomerSubscriptionRequest, reader: jspb.BinaryReader): UpdateCustomerSubscriptionRequest;
}

export namespace UpdateCustomerSubscriptionRequest {
  export type AsObject = {
    customerId: string,
    status: string,
    invoicePeriod?: Period.AsObject,
  }
}

export class UpdateCustomerSubscriptionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCustomerSubscriptionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCustomerSubscriptionResponse): UpdateCustomerSubscriptionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCustomerSubscriptionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCustomerSubscriptionResponse;
  static deserializeBinaryFromReader(message: UpdateCustomerSubscriptionResponse, reader: jspb.BinaryReader): UpdateCustomerSubscriptionResponse;
}

export namespace UpdateCustomerSubscriptionResponse {
  export type AsObject = {
  }
}

export class RecreateCustomerSubscriptionRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecreateCustomerSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecreateCustomerSubscriptionRequest): RecreateCustomerSubscriptionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecreateCustomerSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecreateCustomerSubscriptionRequest;
  static deserializeBinaryFromReader(message: RecreateCustomerSubscriptionRequest, reader: jspb.BinaryReader): RecreateCustomerSubscriptionRequest;
}

export namespace RecreateCustomerSubscriptionRequest {
  export type AsObject = {
    key: string,
  }
}

export class RecreateCustomerSubscriptionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecreateCustomerSubscriptionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RecreateCustomerSubscriptionResponse): RecreateCustomerSubscriptionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecreateCustomerSubscriptionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecreateCustomerSubscriptionResponse;
  static deserializeBinaryFromReader(message: RecreateCustomerSubscriptionResponse, reader: jspb.BinaryReader): RecreateCustomerSubscriptionResponse;
}

export namespace RecreateCustomerSubscriptionResponse {
  export type AsObject = {
  }
}

export class DeleteCustomerRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCustomerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCustomerRequest): DeleteCustomerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCustomerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCustomerRequest;
  static deserializeBinaryFromReader(message: DeleteCustomerRequest, reader: jspb.BinaryReader): DeleteCustomerRequest;
}

export namespace DeleteCustomerRequest {
  export type AsObject = {
    key: string,
  }
}

export class DeleteCustomerResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCustomerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCustomerResponse): DeleteCustomerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCustomerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCustomerResponse;
  static deserializeBinaryFromReader(message: DeleteCustomerResponse, reader: jspb.BinaryReader): DeleteCustomerResponse;
}

export namespace DeleteCustomerResponse {
  export type AsObject = {
  }
}

export class GetCustomerUsageRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerUsageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerUsageRequest): GetCustomerUsageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCustomerUsageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerUsageRequest;
  static deserializeBinaryFromReader(message: GetCustomerUsageRequest, reader: jspb.BinaryReader): GetCustomerUsageRequest;
}

export namespace GetCustomerUsageRequest {
  export type AsObject = {
    key: string,
  }
}

export class GetCustomerUsageResponse extends jspb.Message {
  getUsageMap(): jspb.Map<string, Usage>;
  clearUsageMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerUsageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerUsageResponse): GetCustomerUsageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCustomerUsageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerUsageResponse;
  static deserializeBinaryFromReader(message: GetCustomerUsageResponse, reader: jspb.BinaryReader): GetCustomerUsageResponse;
}

export namespace GetCustomerUsageResponse {
  export type AsObject = {
    usageMap: Array<[string, Usage.AsObject]>,
  }
}

export class IncCustomerUsageRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getProductUsageMap(): jspb.Map<string, number>;
  clearProductUsageMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IncCustomerUsageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IncCustomerUsageRequest): IncCustomerUsageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IncCustomerUsageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IncCustomerUsageRequest;
  static deserializeBinaryFromReader(message: IncCustomerUsageRequest, reader: jspb.BinaryReader): IncCustomerUsageRequest;
}

export namespace IncCustomerUsageRequest {
  export type AsObject = {
    key: string,
    productUsageMap: Array<[string, number]>,
  }
}

export class IncCustomerUsageResponse extends jspb.Message {
  getDailyUsageMap(): jspb.Map<string, Usage>;
  clearDailyUsageMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IncCustomerUsageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IncCustomerUsageResponse): IncCustomerUsageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IncCustomerUsageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IncCustomerUsageResponse;
  static deserializeBinaryFromReader(message: IncCustomerUsageResponse, reader: jspb.BinaryReader): IncCustomerUsageResponse;
}

export namespace IncCustomerUsageResponse {
  export type AsObject = {
    dailyUsageMap: Array<[string, Usage.AsObject]>,
  }
}

export class ReportCustomerUsageRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportCustomerUsageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReportCustomerUsageRequest): ReportCustomerUsageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReportCustomerUsageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportCustomerUsageRequest;
  static deserializeBinaryFromReader(message: ReportCustomerUsageRequest, reader: jspb.BinaryReader): ReportCustomerUsageRequest;
}

export namespace ReportCustomerUsageRequest {
  export type AsObject = {
    key: string,
  }
}

export class ReportCustomerUsageResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportCustomerUsageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReportCustomerUsageResponse): ReportCustomerUsageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReportCustomerUsageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportCustomerUsageResponse;
  static deserializeBinaryFromReader(message: ReportCustomerUsageResponse, reader: jspb.BinaryReader): ReportCustomerUsageResponse;
}

export namespace ReportCustomerUsageResponse {
  export type AsObject = {
  }
}

export class IdentifyRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getAccountType(): number;
  setAccountType(value: number): void;

  getActive(): boolean;
  setActive(value: boolean): void;

  getEmail(): string;
  setEmail(value: string): void;

  getPropertiesMap(): jspb.Map<string, string>;
  clearPropertiesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentifyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IdentifyRequest): IdentifyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IdentifyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentifyRequest;
  static deserializeBinaryFromReader(message: IdentifyRequest, reader: jspb.BinaryReader): IdentifyRequest;
}

export namespace IdentifyRequest {
  export type AsObject = {
    key: string,
    accountType: number,
    active: boolean,
    email: string,
    propertiesMap: Array<[string, string]>,
  }
}

export class IdentifyResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentifyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IdentifyResponse): IdentifyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IdentifyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentifyResponse;
  static deserializeBinaryFromReader(message: IdentifyResponse, reader: jspb.BinaryReader): IdentifyResponse;
}

export namespace IdentifyResponse {
  export type AsObject = {
  }
}

export class TrackEventRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getAccountType(): number;
  setAccountType(value: number): void;

  getActive(): boolean;
  setActive(value: boolean): void;

  getEvent(): number;
  setEvent(value: number): void;

  getPropertiesMap(): jspb.Map<string, string>;
  clearPropertiesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrackEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TrackEventRequest): TrackEventRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TrackEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrackEventRequest;
  static deserializeBinaryFromReader(message: TrackEventRequest, reader: jspb.BinaryReader): TrackEventRequest;
}

export namespace TrackEventRequest {
  export type AsObject = {
    key: string,
    accountType: number,
    active: boolean,
    event: number,
    propertiesMap: Array<[string, string]>,
  }
}

export class TrackEventResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrackEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TrackEventResponse): TrackEventResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TrackEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrackEventResponse;
  static deserializeBinaryFromReader(message: TrackEventResponse, reader: jspb.BinaryReader): TrackEventResponse;
}

export namespace TrackEventResponse {
  export type AsObject = {
  }
}

