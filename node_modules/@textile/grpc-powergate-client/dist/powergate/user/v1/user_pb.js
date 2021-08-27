// source: powergate/user/v1/user.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.powergate.user.v1.AddrInfo', null, global);
goog.exportSymbol('proto.powergate.user.v1.AddrInfo.VerifiedClientInfo', null, global);
goog.exportSymbol('proto.powergate.user.v1.AddressesRequest', null, global);
goog.exportSymbol('proto.powergate.user.v1.AddressesResponse', null, global);
goog.exportSymbol('proto.powergate.user.v1.ApplyStorageConfigRequest', null, global);
goog.exportSymbol('proto.powergate.user.v1.ApplyStorageConfigResponse', null, global);
goog.exportSymbol('proto.powergate.user.v1.BalanceRequest', null, global);
goog.exportSymbol('proto.powergate.user.v1.BalanceResponse', null, global);
goog.exportSymbol('proto.powergate.user.v1.BuildInfoRequest', null, global);
goog.exportSymbol('proto.powergate.user.v1.BuildInfoResponse', null, global);
goog.exportSymbol('proto.powergate.user.v1.CancelStorageJobRequest', null, global);
goog.exportSymbol('proto.powergate.user.v1.CancelStorageJobResponse', null, global);
goog.exportSymbol('proto.powergate.user.v1.CidInfo', null, global);
goog.exportSymbol('proto.powergate.user.v1.CidInfoRequest', null, global);
goog.exportSymbol('proto.powergate.user.v1.CidInfoResponse', null, global);
goog.exportSymbol('proto.powergate.user.v1.CidSummary', null, global);
goog.exportSymbol('proto.powergate.user.v1.CidSummaryRequest', null, global);
goog.exportSymbol('proto.powergate.user.v1.CidSummaryResponse', null, global);
goog.exportSymbol('proto.powergate.user.v1.ColdConfig', null, global);
goog.exportSymbol('proto.powergate.user.v1.ColdInfo', null, global);
goog.exportSymbol('proto.powergate.user.v1.DealError', null, global);
goog.exportSymbol('proto.powergate.user.v1.DealInfo', null, global);
goog.exportSymbol('proto.powergate.user.v1.DealRecordsConfig', null, global);
goog.exportSymbol('proto.powergate.user.v1.DefaultStorageConfigRequest', null, global);
goog.exportSymbol('proto.powergate.user.v1.DefaultStorageConfigResponse', null, global);
goog.exportSymbol('proto.powergate.user.v1.FilConfig', null, global);
goog.exportSymbol('proto.powergate.user.v1.FilInfo', null, global);
goog.exportSymbol('proto.powergate.user.v1.FilRenew', null, global);
goog.exportSymbol('proto.powergate.user.v1.FilStorage', null, global);
goog.exportSymbol('proto.powergate.user.v1.GetRequest', null, global);
goog.exportSymbol('proto.powergate.user.v1.GetResponse', null, global);
goog.exportSymbol('proto.powergate.user.v1.HotConfig', null, global);
goog.exportSymbol('proto.powergate.user.v1.HotInfo', null, global);
goog.exportSymbol('proto.powergate.user.v1.IpfsConfig', null, global);
goog.exportSymbol('proto.powergate.user.v1.IpfsHotInfo', null, global);
goog.exportSymbol('proto.powergate.user.v1.JobStatus', null, global);
goog.exportSymbol('proto.powergate.user.v1.ListStorageInfoRequest', null, global);
goog.exportSymbol('proto.powergate.user.v1.ListStorageInfoResponse', null, global);
goog.exportSymbol('proto.powergate.user.v1.ListStorageJobsRequest', null, global);
goog.exportSymbol('proto.powergate.user.v1.ListStorageJobsResponse', null, global);
goog.exportSymbol('proto.powergate.user.v1.LogEntry', null, global);
goog.exportSymbol('proto.powergate.user.v1.NewAddressRequest', null, global);
goog.exportSymbol('proto.powergate.user.v1.NewAddressResponse', null, global);
goog.exportSymbol('proto.powergate.user.v1.RemoveRequest', null, global);
goog.exportSymbol('proto.powergate.user.v1.RemoveResponse', null, global);
goog.exportSymbol('proto.powergate.user.v1.ReplaceDataRequest', null, global);
goog.exportSymbol('proto.powergate.user.v1.ReplaceDataResponse', null, global);
goog.exportSymbol('proto.powergate.user.v1.RetrievalDealInfo', null, global);
goog.exportSymbol('proto.powergate.user.v1.RetrievalDealRecord', null, global);
goog.exportSymbol('proto.powergate.user.v1.RetrievalDealRecordsRequest', null, global);
goog.exportSymbol('proto.powergate.user.v1.RetrievalDealRecordsResponse', null, global);
goog.exportSymbol('proto.powergate.user.v1.SendFilRequest', null, global);
goog.exportSymbol('proto.powergate.user.v1.SendFilResponse', null, global);
goog.exportSymbol('proto.powergate.user.v1.SetDefaultStorageConfigRequest', null, global);
goog.exportSymbol('proto.powergate.user.v1.SetDefaultStorageConfigResponse', null, global);
goog.exportSymbol('proto.powergate.user.v1.SignMessageRequest', null, global);
goog.exportSymbol('proto.powergate.user.v1.SignMessageResponse', null, global);
goog.exportSymbol('proto.powergate.user.v1.StageCidRequest', null, global);
goog.exportSymbol('proto.powergate.user.v1.StageCidResponse', null, global);
goog.exportSymbol('proto.powergate.user.v1.StageRequest', null, global);
goog.exportSymbol('proto.powergate.user.v1.StageResponse', null, global);
goog.exportSymbol('proto.powergate.user.v1.StorageConfig', null, global);
goog.exportSymbol('proto.powergate.user.v1.StorageConfigForJobRequest', null, global);
goog.exportSymbol('proto.powergate.user.v1.StorageConfigForJobResponse', null, global);
goog.exportSymbol('proto.powergate.user.v1.StorageDealInfo', null, global);
goog.exportSymbol('proto.powergate.user.v1.StorageDealRecord', null, global);
goog.exportSymbol('proto.powergate.user.v1.StorageDealRecordsRequest', null, global);
goog.exportSymbol('proto.powergate.user.v1.StorageDealRecordsResponse', null, global);
goog.exportSymbol('proto.powergate.user.v1.StorageInfo', null, global);
goog.exportSymbol('proto.powergate.user.v1.StorageInfoRequest', null, global);
goog.exportSymbol('proto.powergate.user.v1.StorageInfoResponse', null, global);
goog.exportSymbol('proto.powergate.user.v1.StorageJob', null, global);
goog.exportSymbol('proto.powergate.user.v1.StorageJobRequest', null, global);
goog.exportSymbol('proto.powergate.user.v1.StorageJobResponse', null, global);
goog.exportSymbol('proto.powergate.user.v1.StorageJobsSelector', null, global);
goog.exportSymbol('proto.powergate.user.v1.StorageJobsSummaryRequest', null, global);
goog.exportSymbol('proto.powergate.user.v1.StorageJobsSummaryResponse', null, global);
goog.exportSymbol('proto.powergate.user.v1.UserIdentifierRequest', null, global);
goog.exportSymbol('proto.powergate.user.v1.UserIdentifierResponse', null, global);
goog.exportSymbol('proto.powergate.user.v1.VerifyMessageRequest', null, global);
goog.exportSymbol('proto.powergate.user.v1.VerifyMessageResponse', null, global);
goog.exportSymbol('proto.powergate.user.v1.WatchLogsRequest', null, global);
goog.exportSymbol('proto.powergate.user.v1.WatchLogsResponse', null, global);
goog.exportSymbol('proto.powergate.user.v1.WatchStorageJobsRequest', null, global);
goog.exportSymbol('proto.powergate.user.v1.WatchStorageJobsResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.BuildInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.BuildInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.BuildInfoRequest.displayName = 'proto.powergate.user.v1.BuildInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.BuildInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.BuildInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.BuildInfoResponse.displayName = 'proto.powergate.user.v1.BuildInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.UserIdentifierRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.UserIdentifierRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.UserIdentifierRequest.displayName = 'proto.powergate.user.v1.UserIdentifierRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.UserIdentifierResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.UserIdentifierResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.UserIdentifierResponse.displayName = 'proto.powergate.user.v1.UserIdentifierResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.DefaultStorageConfigRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.DefaultStorageConfigRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.DefaultStorageConfigRequest.displayName = 'proto.powergate.user.v1.DefaultStorageConfigRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.DefaultStorageConfigResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.DefaultStorageConfigResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.DefaultStorageConfigResponse.displayName = 'proto.powergate.user.v1.DefaultStorageConfigResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.SetDefaultStorageConfigRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.SetDefaultStorageConfigRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.SetDefaultStorageConfigRequest.displayName = 'proto.powergate.user.v1.SetDefaultStorageConfigRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.SetDefaultStorageConfigResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.SetDefaultStorageConfigResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.SetDefaultStorageConfigResponse.displayName = 'proto.powergate.user.v1.SetDefaultStorageConfigResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.StageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.StageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.StageRequest.displayName = 'proto.powergate.user.v1.StageRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.StageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.StageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.StageResponse.displayName = 'proto.powergate.user.v1.StageResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.StageCidRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.StageCidRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.StageCidRequest.displayName = 'proto.powergate.user.v1.StageCidRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.StageCidResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.StageCidResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.StageCidResponse.displayName = 'proto.powergate.user.v1.StageCidResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.ApplyStorageConfigRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.powergate.user.v1.ApplyStorageConfigRequest.repeatedFields_, null);
};
goog.inherits(proto.powergate.user.v1.ApplyStorageConfigRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.ApplyStorageConfigRequest.displayName = 'proto.powergate.user.v1.ApplyStorageConfigRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.ApplyStorageConfigResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.ApplyStorageConfigResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.ApplyStorageConfigResponse.displayName = 'proto.powergate.user.v1.ApplyStorageConfigResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.ReplaceDataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.ReplaceDataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.ReplaceDataRequest.displayName = 'proto.powergate.user.v1.ReplaceDataRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.ReplaceDataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.ReplaceDataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.ReplaceDataResponse.displayName = 'proto.powergate.user.v1.ReplaceDataResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.GetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.GetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.GetRequest.displayName = 'proto.powergate.user.v1.GetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.GetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.GetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.GetResponse.displayName = 'proto.powergate.user.v1.GetResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.RemoveRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.RemoveRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.RemoveRequest.displayName = 'proto.powergate.user.v1.RemoveRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.RemoveResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.RemoveResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.RemoveResponse.displayName = 'proto.powergate.user.v1.RemoveResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.WatchLogsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.WatchLogsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.WatchLogsRequest.displayName = 'proto.powergate.user.v1.WatchLogsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.WatchLogsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.WatchLogsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.WatchLogsResponse.displayName = 'proto.powergate.user.v1.WatchLogsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.CidSummaryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.powergate.user.v1.CidSummaryRequest.repeatedFields_, null);
};
goog.inherits(proto.powergate.user.v1.CidSummaryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.CidSummaryRequest.displayName = 'proto.powergate.user.v1.CidSummaryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.CidSummaryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.powergate.user.v1.CidSummaryResponse.repeatedFields_, null);
};
goog.inherits(proto.powergate.user.v1.CidSummaryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.CidSummaryResponse.displayName = 'proto.powergate.user.v1.CidSummaryResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.CidInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.CidInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.CidInfoRequest.displayName = 'proto.powergate.user.v1.CidInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.CidInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.CidInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.CidInfoResponse.displayName = 'proto.powergate.user.v1.CidInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.BalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.BalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.BalanceRequest.displayName = 'proto.powergate.user.v1.BalanceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.BalanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.BalanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.BalanceResponse.displayName = 'proto.powergate.user.v1.BalanceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.NewAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.NewAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.NewAddressRequest.displayName = 'proto.powergate.user.v1.NewAddressRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.NewAddressResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.NewAddressResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.NewAddressResponse.displayName = 'proto.powergate.user.v1.NewAddressResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.AddressesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.AddressesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.AddressesRequest.displayName = 'proto.powergate.user.v1.AddressesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.AddressesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.powergate.user.v1.AddressesResponse.repeatedFields_, null);
};
goog.inherits(proto.powergate.user.v1.AddressesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.AddressesResponse.displayName = 'proto.powergate.user.v1.AddressesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.SendFilRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.SendFilRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.SendFilRequest.displayName = 'proto.powergate.user.v1.SendFilRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.SendFilResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.SendFilResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.SendFilResponse.displayName = 'proto.powergate.user.v1.SendFilResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.SignMessageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.SignMessageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.SignMessageRequest.displayName = 'proto.powergate.user.v1.SignMessageRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.SignMessageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.SignMessageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.SignMessageResponse.displayName = 'proto.powergate.user.v1.SignMessageResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.VerifyMessageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.VerifyMessageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.VerifyMessageRequest.displayName = 'proto.powergate.user.v1.VerifyMessageRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.VerifyMessageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.VerifyMessageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.VerifyMessageResponse.displayName = 'proto.powergate.user.v1.VerifyMessageResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.StorageInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.StorageInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.StorageInfoRequest.displayName = 'proto.powergate.user.v1.StorageInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.StorageInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.StorageInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.StorageInfoResponse.displayName = 'proto.powergate.user.v1.StorageInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.ListStorageInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.powergate.user.v1.ListStorageInfoRequest.repeatedFields_, null);
};
goog.inherits(proto.powergate.user.v1.ListStorageInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.ListStorageInfoRequest.displayName = 'proto.powergate.user.v1.ListStorageInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.ListStorageInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.powergate.user.v1.ListStorageInfoResponse.repeatedFields_, null);
};
goog.inherits(proto.powergate.user.v1.ListStorageInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.ListStorageInfoResponse.displayName = 'proto.powergate.user.v1.ListStorageInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.CancelStorageJobRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.CancelStorageJobRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.CancelStorageJobRequest.displayName = 'proto.powergate.user.v1.CancelStorageJobRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.CancelStorageJobResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.CancelStorageJobResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.CancelStorageJobResponse.displayName = 'proto.powergate.user.v1.CancelStorageJobResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.StorageJobRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.StorageJobRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.StorageJobRequest.displayName = 'proto.powergate.user.v1.StorageJobRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.StorageJobResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.StorageJobResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.StorageJobResponse.displayName = 'proto.powergate.user.v1.StorageJobResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.StorageConfigForJobRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.StorageConfigForJobRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.StorageConfigForJobRequest.displayName = 'proto.powergate.user.v1.StorageConfigForJobRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.StorageConfigForJobResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.StorageConfigForJobResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.StorageConfigForJobResponse.displayName = 'proto.powergate.user.v1.StorageConfigForJobResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.ListStorageJobsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.ListStorageJobsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.ListStorageJobsRequest.displayName = 'proto.powergate.user.v1.ListStorageJobsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.ListStorageJobsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.powergate.user.v1.ListStorageJobsResponse.repeatedFields_, null);
};
goog.inherits(proto.powergate.user.v1.ListStorageJobsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.ListStorageJobsResponse.displayName = 'proto.powergate.user.v1.ListStorageJobsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.StorageJobsSummaryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.StorageJobsSummaryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.StorageJobsSummaryRequest.displayName = 'proto.powergate.user.v1.StorageJobsSummaryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.StorageJobsSummaryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.powergate.user.v1.StorageJobsSummaryResponse.repeatedFields_, null);
};
goog.inherits(proto.powergate.user.v1.StorageJobsSummaryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.StorageJobsSummaryResponse.displayName = 'proto.powergate.user.v1.StorageJobsSummaryResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.WatchStorageJobsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.powergate.user.v1.WatchStorageJobsRequest.repeatedFields_, null);
};
goog.inherits(proto.powergate.user.v1.WatchStorageJobsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.WatchStorageJobsRequest.displayName = 'proto.powergate.user.v1.WatchStorageJobsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.WatchStorageJobsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.WatchStorageJobsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.WatchStorageJobsResponse.displayName = 'proto.powergate.user.v1.WatchStorageJobsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.StorageDealRecordsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.StorageDealRecordsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.StorageDealRecordsRequest.displayName = 'proto.powergate.user.v1.StorageDealRecordsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.StorageDealRecordsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.powergate.user.v1.StorageDealRecordsResponse.repeatedFields_, null);
};
goog.inherits(proto.powergate.user.v1.StorageDealRecordsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.StorageDealRecordsResponse.displayName = 'proto.powergate.user.v1.StorageDealRecordsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.RetrievalDealRecordsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.RetrievalDealRecordsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.RetrievalDealRecordsRequest.displayName = 'proto.powergate.user.v1.RetrievalDealRecordsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.RetrievalDealRecordsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.powergate.user.v1.RetrievalDealRecordsResponse.repeatedFields_, null);
};
goog.inherits(proto.powergate.user.v1.RetrievalDealRecordsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.RetrievalDealRecordsResponse.displayName = 'proto.powergate.user.v1.RetrievalDealRecordsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.AddrInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.AddrInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.AddrInfo.displayName = 'proto.powergate.user.v1.AddrInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.AddrInfo.VerifiedClientInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.AddrInfo.VerifiedClientInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.AddrInfo.VerifiedClientInfo.displayName = 'proto.powergate.user.v1.AddrInfo.VerifiedClientInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.CidSummary = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.powergate.user.v1.CidSummary.repeatedFields_, null);
};
goog.inherits(proto.powergate.user.v1.CidSummary, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.CidSummary.displayName = 'proto.powergate.user.v1.CidSummary';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.IpfsConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.IpfsConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.IpfsConfig.displayName = 'proto.powergate.user.v1.IpfsConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.HotConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.HotConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.HotConfig.displayName = 'proto.powergate.user.v1.HotConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.FilRenew = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.FilRenew, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.FilRenew.displayName = 'proto.powergate.user.v1.FilRenew';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.FilConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.powergate.user.v1.FilConfig.repeatedFields_, null);
};
goog.inherits(proto.powergate.user.v1.FilConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.FilConfig.displayName = 'proto.powergate.user.v1.FilConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.ColdConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.ColdConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.ColdConfig.displayName = 'proto.powergate.user.v1.ColdConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.StorageConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.StorageConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.StorageConfig.displayName = 'proto.powergate.user.v1.StorageConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.IpfsHotInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.IpfsHotInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.IpfsHotInfo.displayName = 'proto.powergate.user.v1.IpfsHotInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.HotInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.HotInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.HotInfo.displayName = 'proto.powergate.user.v1.HotInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.FilStorage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.FilStorage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.FilStorage.displayName = 'proto.powergate.user.v1.FilStorage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.FilInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.powergate.user.v1.FilInfo.repeatedFields_, null);
};
goog.inherits(proto.powergate.user.v1.FilInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.FilInfo.displayName = 'proto.powergate.user.v1.FilInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.ColdInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.ColdInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.ColdInfo.displayName = 'proto.powergate.user.v1.ColdInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.StorageInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.StorageInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.StorageInfo.displayName = 'proto.powergate.user.v1.StorageInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.CidInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.powergate.user.v1.CidInfo.repeatedFields_, null);
};
goog.inherits(proto.powergate.user.v1.CidInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.CidInfo.displayName = 'proto.powergate.user.v1.CidInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.DealInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.DealInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.DealInfo.displayName = 'proto.powergate.user.v1.DealInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.StorageJob = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.powergate.user.v1.StorageJob.repeatedFields_, null);
};
goog.inherits(proto.powergate.user.v1.StorageJob, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.StorageJob.displayName = 'proto.powergate.user.v1.StorageJob';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.DealError = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.DealError, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.DealError.displayName = 'proto.powergate.user.v1.DealError';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.LogEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.LogEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.LogEntry.displayName = 'proto.powergate.user.v1.LogEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.DealRecordsConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.powergate.user.v1.DealRecordsConfig.repeatedFields_, null);
};
goog.inherits(proto.powergate.user.v1.DealRecordsConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.DealRecordsConfig.displayName = 'proto.powergate.user.v1.DealRecordsConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.StorageDealInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.StorageDealInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.StorageDealInfo.displayName = 'proto.powergate.user.v1.StorageDealInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.StorageDealRecord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.StorageDealRecord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.StorageDealRecord.displayName = 'proto.powergate.user.v1.StorageDealRecord';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.RetrievalDealInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.RetrievalDealInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.RetrievalDealInfo.displayName = 'proto.powergate.user.v1.RetrievalDealInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.powergate.user.v1.RetrievalDealRecord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.powergate.user.v1.RetrievalDealRecord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.powergate.user.v1.RetrievalDealRecord.displayName = 'proto.powergate.user.v1.RetrievalDealRecord';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.BuildInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.BuildInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.BuildInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.BuildInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.BuildInfoRequest}
 */
proto.powergate.user.v1.BuildInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.BuildInfoRequest;
  return proto.powergate.user.v1.BuildInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.BuildInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.BuildInfoRequest}
 */
proto.powergate.user.v1.BuildInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.BuildInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.BuildInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.BuildInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.BuildInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.BuildInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.BuildInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.BuildInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.BuildInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    gitCommit: jspb.Message.getFieldWithDefault(msg, 1, ""),
    gitBranch: jspb.Message.getFieldWithDefault(msg, 2, ""),
    gitState: jspb.Message.getFieldWithDefault(msg, 3, ""),
    gitSummary: jspb.Message.getFieldWithDefault(msg, 4, ""),
    buildDate: jspb.Message.getFieldWithDefault(msg, 5, ""),
    version: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.BuildInfoResponse}
 */
proto.powergate.user.v1.BuildInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.BuildInfoResponse;
  return proto.powergate.user.v1.BuildInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.BuildInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.BuildInfoResponse}
 */
proto.powergate.user.v1.BuildInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGitCommit(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGitBranch(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setGitState(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setGitSummary(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuildDate(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.BuildInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.BuildInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.BuildInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.BuildInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGitCommit();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGitBranch();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getGitState();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getGitSummary();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getBuildDate();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string git_commit = 1;
 * @return {string}
 */
proto.powergate.user.v1.BuildInfoResponse.prototype.getGitCommit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.BuildInfoResponse} returns this
 */
proto.powergate.user.v1.BuildInfoResponse.prototype.setGitCommit = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string git_branch = 2;
 * @return {string}
 */
proto.powergate.user.v1.BuildInfoResponse.prototype.getGitBranch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.BuildInfoResponse} returns this
 */
proto.powergate.user.v1.BuildInfoResponse.prototype.setGitBranch = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string git_state = 3;
 * @return {string}
 */
proto.powergate.user.v1.BuildInfoResponse.prototype.getGitState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.BuildInfoResponse} returns this
 */
proto.powergate.user.v1.BuildInfoResponse.prototype.setGitState = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string git_summary = 4;
 * @return {string}
 */
proto.powergate.user.v1.BuildInfoResponse.prototype.getGitSummary = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.BuildInfoResponse} returns this
 */
proto.powergate.user.v1.BuildInfoResponse.prototype.setGitSummary = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string build_date = 5;
 * @return {string}
 */
proto.powergate.user.v1.BuildInfoResponse.prototype.getBuildDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.BuildInfoResponse} returns this
 */
proto.powergate.user.v1.BuildInfoResponse.prototype.setBuildDate = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string version = 6;
 * @return {string}
 */
proto.powergate.user.v1.BuildInfoResponse.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.BuildInfoResponse} returns this
 */
proto.powergate.user.v1.BuildInfoResponse.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.UserIdentifierRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.UserIdentifierRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.UserIdentifierRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.UserIdentifierRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.UserIdentifierRequest}
 */
proto.powergate.user.v1.UserIdentifierRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.UserIdentifierRequest;
  return proto.powergate.user.v1.UserIdentifierRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.UserIdentifierRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.UserIdentifierRequest}
 */
proto.powergate.user.v1.UserIdentifierRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.UserIdentifierRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.UserIdentifierRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.UserIdentifierRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.UserIdentifierRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.UserIdentifierResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.UserIdentifierResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.UserIdentifierResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.UserIdentifierResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.UserIdentifierResponse}
 */
proto.powergate.user.v1.UserIdentifierResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.UserIdentifierResponse;
  return proto.powergate.user.v1.UserIdentifierResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.UserIdentifierResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.UserIdentifierResponse}
 */
proto.powergate.user.v1.UserIdentifierResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.UserIdentifierResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.UserIdentifierResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.UserIdentifierResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.UserIdentifierResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.powergate.user.v1.UserIdentifierResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.UserIdentifierResponse} returns this
 */
proto.powergate.user.v1.UserIdentifierResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.DefaultStorageConfigRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.DefaultStorageConfigRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.DefaultStorageConfigRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.DefaultStorageConfigRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.DefaultStorageConfigRequest}
 */
proto.powergate.user.v1.DefaultStorageConfigRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.DefaultStorageConfigRequest;
  return proto.powergate.user.v1.DefaultStorageConfigRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.DefaultStorageConfigRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.DefaultStorageConfigRequest}
 */
proto.powergate.user.v1.DefaultStorageConfigRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.DefaultStorageConfigRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.DefaultStorageConfigRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.DefaultStorageConfigRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.DefaultStorageConfigRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.DefaultStorageConfigResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.DefaultStorageConfigResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.DefaultStorageConfigResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.DefaultStorageConfigResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    defaultStorageConfig: (f = msg.getDefaultStorageConfig()) && proto.powergate.user.v1.StorageConfig.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.DefaultStorageConfigResponse}
 */
proto.powergate.user.v1.DefaultStorageConfigResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.DefaultStorageConfigResponse;
  return proto.powergate.user.v1.DefaultStorageConfigResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.DefaultStorageConfigResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.DefaultStorageConfigResponse}
 */
proto.powergate.user.v1.DefaultStorageConfigResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.powergate.user.v1.StorageConfig;
      reader.readMessage(value,proto.powergate.user.v1.StorageConfig.deserializeBinaryFromReader);
      msg.setDefaultStorageConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.DefaultStorageConfigResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.DefaultStorageConfigResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.DefaultStorageConfigResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.DefaultStorageConfigResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDefaultStorageConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.powergate.user.v1.StorageConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional StorageConfig default_storage_config = 1;
 * @return {?proto.powergate.user.v1.StorageConfig}
 */
proto.powergate.user.v1.DefaultStorageConfigResponse.prototype.getDefaultStorageConfig = function() {
  return /** @type{?proto.powergate.user.v1.StorageConfig} */ (
    jspb.Message.getWrapperField(this, proto.powergate.user.v1.StorageConfig, 1));
};


/**
 * @param {?proto.powergate.user.v1.StorageConfig|undefined} value
 * @return {!proto.powergate.user.v1.DefaultStorageConfigResponse} returns this
*/
proto.powergate.user.v1.DefaultStorageConfigResponse.prototype.setDefaultStorageConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.powergate.user.v1.DefaultStorageConfigResponse} returns this
 */
proto.powergate.user.v1.DefaultStorageConfigResponse.prototype.clearDefaultStorageConfig = function() {
  return this.setDefaultStorageConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.powergate.user.v1.DefaultStorageConfigResponse.prototype.hasDefaultStorageConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.SetDefaultStorageConfigRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.SetDefaultStorageConfigRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.SetDefaultStorageConfigRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.SetDefaultStorageConfigRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && proto.powergate.user.v1.StorageConfig.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.SetDefaultStorageConfigRequest}
 */
proto.powergate.user.v1.SetDefaultStorageConfigRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.SetDefaultStorageConfigRequest;
  return proto.powergate.user.v1.SetDefaultStorageConfigRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.SetDefaultStorageConfigRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.SetDefaultStorageConfigRequest}
 */
proto.powergate.user.v1.SetDefaultStorageConfigRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.powergate.user.v1.StorageConfig;
      reader.readMessage(value,proto.powergate.user.v1.StorageConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.SetDefaultStorageConfigRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.SetDefaultStorageConfigRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.SetDefaultStorageConfigRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.SetDefaultStorageConfigRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.powergate.user.v1.StorageConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional StorageConfig config = 1;
 * @return {?proto.powergate.user.v1.StorageConfig}
 */
proto.powergate.user.v1.SetDefaultStorageConfigRequest.prototype.getConfig = function() {
  return /** @type{?proto.powergate.user.v1.StorageConfig} */ (
    jspb.Message.getWrapperField(this, proto.powergate.user.v1.StorageConfig, 1));
};


/**
 * @param {?proto.powergate.user.v1.StorageConfig|undefined} value
 * @return {!proto.powergate.user.v1.SetDefaultStorageConfigRequest} returns this
*/
proto.powergate.user.v1.SetDefaultStorageConfigRequest.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.powergate.user.v1.SetDefaultStorageConfigRequest} returns this
 */
proto.powergate.user.v1.SetDefaultStorageConfigRequest.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.powergate.user.v1.SetDefaultStorageConfigRequest.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.SetDefaultStorageConfigResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.SetDefaultStorageConfigResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.SetDefaultStorageConfigResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.SetDefaultStorageConfigResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.SetDefaultStorageConfigResponse}
 */
proto.powergate.user.v1.SetDefaultStorageConfigResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.SetDefaultStorageConfigResponse;
  return proto.powergate.user.v1.SetDefaultStorageConfigResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.SetDefaultStorageConfigResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.SetDefaultStorageConfigResponse}
 */
proto.powergate.user.v1.SetDefaultStorageConfigResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.SetDefaultStorageConfigResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.SetDefaultStorageConfigResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.SetDefaultStorageConfigResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.SetDefaultStorageConfigResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.StageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.StageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.StageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.StageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    chunk: msg.getChunk_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.StageRequest}
 */
proto.powergate.user.v1.StageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.StageRequest;
  return proto.powergate.user.v1.StageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.StageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.StageRequest}
 */
proto.powergate.user.v1.StageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setChunk(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.StageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.StageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.StageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.StageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChunk_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes chunk = 1;
 * @return {!(string|Uint8Array)}
 */
proto.powergate.user.v1.StageRequest.prototype.getChunk = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes chunk = 1;
 * This is a type-conversion wrapper around `getChunk()`
 * @return {string}
 */
proto.powergate.user.v1.StageRequest.prototype.getChunk_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getChunk()));
};


/**
 * optional bytes chunk = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getChunk()`
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.StageRequest.prototype.getChunk_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getChunk()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.powergate.user.v1.StageRequest} returns this
 */
proto.powergate.user.v1.StageRequest.prototype.setChunk = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.StageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.StageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.StageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.StageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.StageResponse}
 */
proto.powergate.user.v1.StageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.StageResponse;
  return proto.powergate.user.v1.StageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.StageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.StageResponse}
 */
proto.powergate.user.v1.StageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.StageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.StageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.StageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.StageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cid = 1;
 * @return {string}
 */
proto.powergate.user.v1.StageResponse.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.StageResponse} returns this
 */
proto.powergate.user.v1.StageResponse.prototype.setCid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.StageCidRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.StageCidRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.StageCidRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.StageCidRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    cid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.StageCidRequest}
 */
proto.powergate.user.v1.StageCidRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.StageCidRequest;
  return proto.powergate.user.v1.StageCidRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.StageCidRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.StageCidRequest}
 */
proto.powergate.user.v1.StageCidRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.StageCidRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.StageCidRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.StageCidRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.StageCidRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cid = 1;
 * @return {string}
 */
proto.powergate.user.v1.StageCidRequest.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.StageCidRequest} returns this
 */
proto.powergate.user.v1.StageCidRequest.prototype.setCid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.StageCidResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.StageCidResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.StageCidResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.StageCidResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.StageCidResponse}
 */
proto.powergate.user.v1.StageCidResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.StageCidResponse;
  return proto.powergate.user.v1.StageCidResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.StageCidResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.StageCidResponse}
 */
proto.powergate.user.v1.StageCidResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.StageCidResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.StageCidResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.StageCidResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.StageCidResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.powergate.user.v1.ApplyStorageConfigRequest.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.ApplyStorageConfigRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.ApplyStorageConfigRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.ApplyStorageConfigRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.ApplyStorageConfigRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    cid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    config: (f = msg.getConfig()) && proto.powergate.user.v1.StorageConfig.toObject(includeInstance, f),
    hasConfig: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    overrideConfig: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    hasOverrideConfig: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    importDealIdsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    noExec: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.ApplyStorageConfigRequest}
 */
proto.powergate.user.v1.ApplyStorageConfigRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.ApplyStorageConfigRequest;
  return proto.powergate.user.v1.ApplyStorageConfigRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.ApplyStorageConfigRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.ApplyStorageConfigRequest}
 */
proto.powergate.user.v1.ApplyStorageConfigRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    case 2:
      var value = new proto.powergate.user.v1.StorageConfig;
      reader.readMessage(value,proto.powergate.user.v1.StorageConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasConfig(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOverrideConfig(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasOverrideConfig(value);
      break;
    case 6:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint64());
      msg.setImportDealIdsList(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNoExec(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.ApplyStorageConfigRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.ApplyStorageConfigRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.ApplyStorageConfigRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.ApplyStorageConfigRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.powergate.user.v1.StorageConfig.serializeBinaryToWriter
    );
  }
  f = message.getHasConfig();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getOverrideConfig();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getHasOverrideConfig();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getImportDealIdsList();
  if (f.length > 0) {
    writer.writePackedUint64(
      6,
      f
    );
  }
  f = message.getNoExec();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional string cid = 1;
 * @return {string}
 */
proto.powergate.user.v1.ApplyStorageConfigRequest.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.ApplyStorageConfigRequest} returns this
 */
proto.powergate.user.v1.ApplyStorageConfigRequest.prototype.setCid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional StorageConfig config = 2;
 * @return {?proto.powergate.user.v1.StorageConfig}
 */
proto.powergate.user.v1.ApplyStorageConfigRequest.prototype.getConfig = function() {
  return /** @type{?proto.powergate.user.v1.StorageConfig} */ (
    jspb.Message.getWrapperField(this, proto.powergate.user.v1.StorageConfig, 2));
};


/**
 * @param {?proto.powergate.user.v1.StorageConfig|undefined} value
 * @return {!proto.powergate.user.v1.ApplyStorageConfigRequest} returns this
*/
proto.powergate.user.v1.ApplyStorageConfigRequest.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.powergate.user.v1.ApplyStorageConfigRequest} returns this
 */
proto.powergate.user.v1.ApplyStorageConfigRequest.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.powergate.user.v1.ApplyStorageConfigRequest.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool has_config = 3;
 * @return {boolean}
 */
proto.powergate.user.v1.ApplyStorageConfigRequest.prototype.getHasConfig = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.powergate.user.v1.ApplyStorageConfigRequest} returns this
 */
proto.powergate.user.v1.ApplyStorageConfigRequest.prototype.setHasConfig = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool override_config = 4;
 * @return {boolean}
 */
proto.powergate.user.v1.ApplyStorageConfigRequest.prototype.getOverrideConfig = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.powergate.user.v1.ApplyStorageConfigRequest} returns this
 */
proto.powergate.user.v1.ApplyStorageConfigRequest.prototype.setOverrideConfig = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool has_override_config = 5;
 * @return {boolean}
 */
proto.powergate.user.v1.ApplyStorageConfigRequest.prototype.getHasOverrideConfig = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.powergate.user.v1.ApplyStorageConfigRequest} returns this
 */
proto.powergate.user.v1.ApplyStorageConfigRequest.prototype.setHasOverrideConfig = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * repeated uint64 import_deal_ids = 6;
 * @return {!Array<number>}
 */
proto.powergate.user.v1.ApplyStorageConfigRequest.prototype.getImportDealIdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.powergate.user.v1.ApplyStorageConfigRequest} returns this
 */
proto.powergate.user.v1.ApplyStorageConfigRequest.prototype.setImportDealIdsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.powergate.user.v1.ApplyStorageConfigRequest} returns this
 */
proto.powergate.user.v1.ApplyStorageConfigRequest.prototype.addImportDealIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.powergate.user.v1.ApplyStorageConfigRequest} returns this
 */
proto.powergate.user.v1.ApplyStorageConfigRequest.prototype.clearImportDealIdsList = function() {
  return this.setImportDealIdsList([]);
};


/**
 * optional bool no_exec = 7;
 * @return {boolean}
 */
proto.powergate.user.v1.ApplyStorageConfigRequest.prototype.getNoExec = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.powergate.user.v1.ApplyStorageConfigRequest} returns this
 */
proto.powergate.user.v1.ApplyStorageConfigRequest.prototype.setNoExec = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.ApplyStorageConfigResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.ApplyStorageConfigResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.ApplyStorageConfigResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.ApplyStorageConfigResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    jobId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.ApplyStorageConfigResponse}
 */
proto.powergate.user.v1.ApplyStorageConfigResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.ApplyStorageConfigResponse;
  return proto.powergate.user.v1.ApplyStorageConfigResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.ApplyStorageConfigResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.ApplyStorageConfigResponse}
 */
proto.powergate.user.v1.ApplyStorageConfigResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setJobId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.ApplyStorageConfigResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.ApplyStorageConfigResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.ApplyStorageConfigResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.ApplyStorageConfigResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJobId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string job_id = 1;
 * @return {string}
 */
proto.powergate.user.v1.ApplyStorageConfigResponse.prototype.getJobId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.ApplyStorageConfigResponse} returns this
 */
proto.powergate.user.v1.ApplyStorageConfigResponse.prototype.setJobId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.ReplaceDataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.ReplaceDataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.ReplaceDataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.ReplaceDataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    cid1: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cid2: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.ReplaceDataRequest}
 */
proto.powergate.user.v1.ReplaceDataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.ReplaceDataRequest;
  return proto.powergate.user.v1.ReplaceDataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.ReplaceDataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.ReplaceDataRequest}
 */
proto.powergate.user.v1.ReplaceDataRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid1(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid2(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.ReplaceDataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.ReplaceDataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.ReplaceDataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.ReplaceDataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCid1();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCid2();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string cid1 = 1;
 * @return {string}
 */
proto.powergate.user.v1.ReplaceDataRequest.prototype.getCid1 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.ReplaceDataRequest} returns this
 */
proto.powergate.user.v1.ReplaceDataRequest.prototype.setCid1 = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string cid2 = 2;
 * @return {string}
 */
proto.powergate.user.v1.ReplaceDataRequest.prototype.getCid2 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.ReplaceDataRequest} returns this
 */
proto.powergate.user.v1.ReplaceDataRequest.prototype.setCid2 = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.ReplaceDataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.ReplaceDataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.ReplaceDataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.ReplaceDataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    jobId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.ReplaceDataResponse}
 */
proto.powergate.user.v1.ReplaceDataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.ReplaceDataResponse;
  return proto.powergate.user.v1.ReplaceDataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.ReplaceDataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.ReplaceDataResponse}
 */
proto.powergate.user.v1.ReplaceDataResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setJobId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.ReplaceDataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.ReplaceDataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.ReplaceDataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.ReplaceDataResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJobId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string job_id = 1;
 * @return {string}
 */
proto.powergate.user.v1.ReplaceDataResponse.prototype.getJobId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.ReplaceDataResponse} returns this
 */
proto.powergate.user.v1.ReplaceDataResponse.prototype.setJobId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.GetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.GetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.GetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.GetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    cid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.GetRequest}
 */
proto.powergate.user.v1.GetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.GetRequest;
  return proto.powergate.user.v1.GetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.GetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.GetRequest}
 */
proto.powergate.user.v1.GetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.GetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.GetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.GetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.GetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cid = 1;
 * @return {string}
 */
proto.powergate.user.v1.GetRequest.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.GetRequest} returns this
 */
proto.powergate.user.v1.GetRequest.prototype.setCid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.GetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.GetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.GetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.GetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    chunk: msg.getChunk_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.GetResponse}
 */
proto.powergate.user.v1.GetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.GetResponse;
  return proto.powergate.user.v1.GetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.GetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.GetResponse}
 */
proto.powergate.user.v1.GetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setChunk(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.GetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.GetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.GetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.GetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChunk_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes chunk = 1;
 * @return {!(string|Uint8Array)}
 */
proto.powergate.user.v1.GetResponse.prototype.getChunk = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes chunk = 1;
 * This is a type-conversion wrapper around `getChunk()`
 * @return {string}
 */
proto.powergate.user.v1.GetResponse.prototype.getChunk_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getChunk()));
};


/**
 * optional bytes chunk = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getChunk()`
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.GetResponse.prototype.getChunk_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getChunk()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.powergate.user.v1.GetResponse} returns this
 */
proto.powergate.user.v1.GetResponse.prototype.setChunk = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.RemoveRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.RemoveRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.RemoveRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.RemoveRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    cid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.RemoveRequest}
 */
proto.powergate.user.v1.RemoveRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.RemoveRequest;
  return proto.powergate.user.v1.RemoveRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.RemoveRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.RemoveRequest}
 */
proto.powergate.user.v1.RemoveRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.RemoveRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.RemoveRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.RemoveRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.RemoveRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cid = 1;
 * @return {string}
 */
proto.powergate.user.v1.RemoveRequest.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.RemoveRequest} returns this
 */
proto.powergate.user.v1.RemoveRequest.prototype.setCid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.RemoveResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.RemoveResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.RemoveResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.RemoveResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.RemoveResponse}
 */
proto.powergate.user.v1.RemoveResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.RemoveResponse;
  return proto.powergate.user.v1.RemoveResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.RemoveResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.RemoveResponse}
 */
proto.powergate.user.v1.RemoveResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.RemoveResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.RemoveResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.RemoveResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.RemoveResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.WatchLogsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.WatchLogsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.WatchLogsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.WatchLogsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    cid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    jobId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    history: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.WatchLogsRequest}
 */
proto.powergate.user.v1.WatchLogsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.WatchLogsRequest;
  return proto.powergate.user.v1.WatchLogsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.WatchLogsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.WatchLogsRequest}
 */
proto.powergate.user.v1.WatchLogsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setJobId(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHistory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.WatchLogsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.WatchLogsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.WatchLogsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.WatchLogsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getJobId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getHistory();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string cid = 1;
 * @return {string}
 */
proto.powergate.user.v1.WatchLogsRequest.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.WatchLogsRequest} returns this
 */
proto.powergate.user.v1.WatchLogsRequest.prototype.setCid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string job_id = 2;
 * @return {string}
 */
proto.powergate.user.v1.WatchLogsRequest.prototype.getJobId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.WatchLogsRequest} returns this
 */
proto.powergate.user.v1.WatchLogsRequest.prototype.setJobId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool history = 3;
 * @return {boolean}
 */
proto.powergate.user.v1.WatchLogsRequest.prototype.getHistory = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.powergate.user.v1.WatchLogsRequest} returns this
 */
proto.powergate.user.v1.WatchLogsRequest.prototype.setHistory = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.WatchLogsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.WatchLogsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.WatchLogsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.WatchLogsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    logEntry: (f = msg.getLogEntry()) && proto.powergate.user.v1.LogEntry.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.WatchLogsResponse}
 */
proto.powergate.user.v1.WatchLogsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.WatchLogsResponse;
  return proto.powergate.user.v1.WatchLogsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.WatchLogsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.WatchLogsResponse}
 */
proto.powergate.user.v1.WatchLogsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.powergate.user.v1.LogEntry;
      reader.readMessage(value,proto.powergate.user.v1.LogEntry.deserializeBinaryFromReader);
      msg.setLogEntry(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.WatchLogsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.WatchLogsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.WatchLogsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.WatchLogsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLogEntry();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.powergate.user.v1.LogEntry.serializeBinaryToWriter
    );
  }
};


/**
 * optional LogEntry log_entry = 1;
 * @return {?proto.powergate.user.v1.LogEntry}
 */
proto.powergate.user.v1.WatchLogsResponse.prototype.getLogEntry = function() {
  return /** @type{?proto.powergate.user.v1.LogEntry} */ (
    jspb.Message.getWrapperField(this, proto.powergate.user.v1.LogEntry, 1));
};


/**
 * @param {?proto.powergate.user.v1.LogEntry|undefined} value
 * @return {!proto.powergate.user.v1.WatchLogsResponse} returns this
*/
proto.powergate.user.v1.WatchLogsResponse.prototype.setLogEntry = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.powergate.user.v1.WatchLogsResponse} returns this
 */
proto.powergate.user.v1.WatchLogsResponse.prototype.clearLogEntry = function() {
  return this.setLogEntry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.powergate.user.v1.WatchLogsResponse.prototype.hasLogEntry = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.powergate.user.v1.CidSummaryRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.CidSummaryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.CidSummaryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.CidSummaryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.CidSummaryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    cidsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.CidSummaryRequest}
 */
proto.powergate.user.v1.CidSummaryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.CidSummaryRequest;
  return proto.powergate.user.v1.CidSummaryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.CidSummaryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.CidSummaryRequest}
 */
proto.powergate.user.v1.CidSummaryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addCids(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.CidSummaryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.CidSummaryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.CidSummaryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.CidSummaryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string cids = 1;
 * @return {!Array<string>}
 */
proto.powergate.user.v1.CidSummaryRequest.prototype.getCidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.powergate.user.v1.CidSummaryRequest} returns this
 */
proto.powergate.user.v1.CidSummaryRequest.prototype.setCidsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.powergate.user.v1.CidSummaryRequest} returns this
 */
proto.powergate.user.v1.CidSummaryRequest.prototype.addCids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.powergate.user.v1.CidSummaryRequest} returns this
 */
proto.powergate.user.v1.CidSummaryRequest.prototype.clearCidsList = function() {
  return this.setCidsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.powergate.user.v1.CidSummaryResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.CidSummaryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.CidSummaryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.CidSummaryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.CidSummaryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cidSummaryList: jspb.Message.toObjectList(msg.getCidSummaryList(),
    proto.powergate.user.v1.CidSummary.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.CidSummaryResponse}
 */
proto.powergate.user.v1.CidSummaryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.CidSummaryResponse;
  return proto.powergate.user.v1.CidSummaryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.CidSummaryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.CidSummaryResponse}
 */
proto.powergate.user.v1.CidSummaryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.powergate.user.v1.CidSummary;
      reader.readMessage(value,proto.powergate.user.v1.CidSummary.deserializeBinaryFromReader);
      msg.addCidSummary(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.CidSummaryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.CidSummaryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.CidSummaryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.CidSummaryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCidSummaryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.powergate.user.v1.CidSummary.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CidSummary cid_summary = 1;
 * @return {!Array<!proto.powergate.user.v1.CidSummary>}
 */
proto.powergate.user.v1.CidSummaryResponse.prototype.getCidSummaryList = function() {
  return /** @type{!Array<!proto.powergate.user.v1.CidSummary>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.powergate.user.v1.CidSummary, 1));
};


/**
 * @param {!Array<!proto.powergate.user.v1.CidSummary>} value
 * @return {!proto.powergate.user.v1.CidSummaryResponse} returns this
*/
proto.powergate.user.v1.CidSummaryResponse.prototype.setCidSummaryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.powergate.user.v1.CidSummary=} opt_value
 * @param {number=} opt_index
 * @return {!proto.powergate.user.v1.CidSummary}
 */
proto.powergate.user.v1.CidSummaryResponse.prototype.addCidSummary = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.powergate.user.v1.CidSummary, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.powergate.user.v1.CidSummaryResponse} returns this
 */
proto.powergate.user.v1.CidSummaryResponse.prototype.clearCidSummaryList = function() {
  return this.setCidSummaryList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.CidInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.CidInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.CidInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.CidInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    cid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.CidInfoRequest}
 */
proto.powergate.user.v1.CidInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.CidInfoRequest;
  return proto.powergate.user.v1.CidInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.CidInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.CidInfoRequest}
 */
proto.powergate.user.v1.CidInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.CidInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.CidInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.CidInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.CidInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cid = 1;
 * @return {string}
 */
proto.powergate.user.v1.CidInfoRequest.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.CidInfoRequest} returns this
 */
proto.powergate.user.v1.CidInfoRequest.prototype.setCid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.CidInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.CidInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.CidInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.CidInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cidInfo: (f = msg.getCidInfo()) && proto.powergate.user.v1.CidInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.CidInfoResponse}
 */
proto.powergate.user.v1.CidInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.CidInfoResponse;
  return proto.powergate.user.v1.CidInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.CidInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.CidInfoResponse}
 */
proto.powergate.user.v1.CidInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.powergate.user.v1.CidInfo;
      reader.readMessage(value,proto.powergate.user.v1.CidInfo.deserializeBinaryFromReader);
      msg.setCidInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.CidInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.CidInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.CidInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.CidInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCidInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.powergate.user.v1.CidInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional CidInfo cid_info = 1;
 * @return {?proto.powergate.user.v1.CidInfo}
 */
proto.powergate.user.v1.CidInfoResponse.prototype.getCidInfo = function() {
  return /** @type{?proto.powergate.user.v1.CidInfo} */ (
    jspb.Message.getWrapperField(this, proto.powergate.user.v1.CidInfo, 1));
};


/**
 * @param {?proto.powergate.user.v1.CidInfo|undefined} value
 * @return {!proto.powergate.user.v1.CidInfoResponse} returns this
*/
proto.powergate.user.v1.CidInfoResponse.prototype.setCidInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.powergate.user.v1.CidInfoResponse} returns this
 */
proto.powergate.user.v1.CidInfoResponse.prototype.clearCidInfo = function() {
  return this.setCidInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.powergate.user.v1.CidInfoResponse.prototype.hasCidInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.BalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.BalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.BalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.BalanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.BalanceRequest}
 */
proto.powergate.user.v1.BalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.BalanceRequest;
  return proto.powergate.user.v1.BalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.BalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.BalanceRequest}
 */
proto.powergate.user.v1.BalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.BalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.BalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.BalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.BalanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.powergate.user.v1.BalanceRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.BalanceRequest} returns this
 */
proto.powergate.user.v1.BalanceRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.BalanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.BalanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.BalanceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.BalanceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    balance: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.BalanceResponse}
 */
proto.powergate.user.v1.BalanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.BalanceResponse;
  return proto.powergate.user.v1.BalanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.BalanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.BalanceResponse}
 */
proto.powergate.user.v1.BalanceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBalance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.BalanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.BalanceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.BalanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.BalanceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBalance();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string balance = 1;
 * @return {string}
 */
proto.powergate.user.v1.BalanceResponse.prototype.getBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.BalanceResponse} returns this
 */
proto.powergate.user.v1.BalanceResponse.prototype.setBalance = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.NewAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.NewAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.NewAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.NewAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    addressType: jspb.Message.getFieldWithDefault(msg, 2, ""),
    makeDefault: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.NewAddressRequest}
 */
proto.powergate.user.v1.NewAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.NewAddressRequest;
  return proto.powergate.user.v1.NewAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.NewAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.NewAddressRequest}
 */
proto.powergate.user.v1.NewAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddressType(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMakeDefault(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.NewAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.NewAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.NewAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.NewAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAddressType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMakeDefault();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.powergate.user.v1.NewAddressRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.NewAddressRequest} returns this
 */
proto.powergate.user.v1.NewAddressRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string address_type = 2;
 * @return {string}
 */
proto.powergate.user.v1.NewAddressRequest.prototype.getAddressType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.NewAddressRequest} returns this
 */
proto.powergate.user.v1.NewAddressRequest.prototype.setAddressType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool make_default = 3;
 * @return {boolean}
 */
proto.powergate.user.v1.NewAddressRequest.prototype.getMakeDefault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.powergate.user.v1.NewAddressRequest} returns this
 */
proto.powergate.user.v1.NewAddressRequest.prototype.setMakeDefault = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.NewAddressResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.NewAddressResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.NewAddressResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.NewAddressResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.NewAddressResponse}
 */
proto.powergate.user.v1.NewAddressResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.NewAddressResponse;
  return proto.powergate.user.v1.NewAddressResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.NewAddressResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.NewAddressResponse}
 */
proto.powergate.user.v1.NewAddressResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.NewAddressResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.NewAddressResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.NewAddressResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.NewAddressResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.powergate.user.v1.NewAddressResponse.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.NewAddressResponse} returns this
 */
proto.powergate.user.v1.NewAddressResponse.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.AddressesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.AddressesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.AddressesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.AddressesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.AddressesRequest}
 */
proto.powergate.user.v1.AddressesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.AddressesRequest;
  return proto.powergate.user.v1.AddressesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.AddressesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.AddressesRequest}
 */
proto.powergate.user.v1.AddressesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.AddressesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.AddressesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.AddressesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.AddressesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.powergate.user.v1.AddressesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.AddressesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.AddressesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.AddressesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.AddressesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressesList: jspb.Message.toObjectList(msg.getAddressesList(),
    proto.powergate.user.v1.AddrInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.AddressesResponse}
 */
proto.powergate.user.v1.AddressesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.AddressesResponse;
  return proto.powergate.user.v1.AddressesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.AddressesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.AddressesResponse}
 */
proto.powergate.user.v1.AddressesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.powergate.user.v1.AddrInfo;
      reader.readMessage(value,proto.powergate.user.v1.AddrInfo.deserializeBinaryFromReader);
      msg.addAddresses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.AddressesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.AddressesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.AddressesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.AddressesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.powergate.user.v1.AddrInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AddrInfo addresses = 1;
 * @return {!Array<!proto.powergate.user.v1.AddrInfo>}
 */
proto.powergate.user.v1.AddressesResponse.prototype.getAddressesList = function() {
  return /** @type{!Array<!proto.powergate.user.v1.AddrInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.powergate.user.v1.AddrInfo, 1));
};


/**
 * @param {!Array<!proto.powergate.user.v1.AddrInfo>} value
 * @return {!proto.powergate.user.v1.AddressesResponse} returns this
*/
proto.powergate.user.v1.AddressesResponse.prototype.setAddressesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.powergate.user.v1.AddrInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.powergate.user.v1.AddrInfo}
 */
proto.powergate.user.v1.AddressesResponse.prototype.addAddresses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.powergate.user.v1.AddrInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.powergate.user.v1.AddressesResponse} returns this
 */
proto.powergate.user.v1.AddressesResponse.prototype.clearAddressesList = function() {
  return this.setAddressesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.SendFilRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.SendFilRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.SendFilRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.SendFilRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    from: jspb.Message.getFieldWithDefault(msg, 1, ""),
    to: jspb.Message.getFieldWithDefault(msg, 2, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.SendFilRequest}
 */
proto.powergate.user.v1.SendFilRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.SendFilRequest;
  return proto.powergate.user.v1.SendFilRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.SendFilRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.SendFilRequest}
 */
proto.powergate.user.v1.SendFilRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrom(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTo(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.SendFilRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.SendFilRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.SendFilRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.SendFilRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrom();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTo();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAmount();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string from = 1;
 * @return {string}
 */
proto.powergate.user.v1.SendFilRequest.prototype.getFrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.SendFilRequest} returns this
 */
proto.powergate.user.v1.SendFilRequest.prototype.setFrom = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string to = 2;
 * @return {string}
 */
proto.powergate.user.v1.SendFilRequest.prototype.getTo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.SendFilRequest} returns this
 */
proto.powergate.user.v1.SendFilRequest.prototype.setTo = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string amount = 3;
 * @return {string}
 */
proto.powergate.user.v1.SendFilRequest.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.SendFilRequest} returns this
 */
proto.powergate.user.v1.SendFilRequest.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.SendFilResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.SendFilResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.SendFilResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.SendFilResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.SendFilResponse}
 */
proto.powergate.user.v1.SendFilResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.SendFilResponse;
  return proto.powergate.user.v1.SendFilResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.SendFilResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.SendFilResponse}
 */
proto.powergate.user.v1.SendFilResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.SendFilResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.SendFilResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.SendFilResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.SendFilResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cid = 1;
 * @return {string}
 */
proto.powergate.user.v1.SendFilResponse.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.SendFilResponse} returns this
 */
proto.powergate.user.v1.SendFilResponse.prototype.setCid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.SignMessageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.SignMessageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.SignMessageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.SignMessageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    message: msg.getMessage_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.SignMessageRequest}
 */
proto.powergate.user.v1.SignMessageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.SignMessageRequest;
  return proto.powergate.user.v1.SignMessageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.SignMessageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.SignMessageRequest}
 */
proto.powergate.user.v1.SignMessageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.SignMessageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.SignMessageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.SignMessageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.SignMessageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessage_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.powergate.user.v1.SignMessageRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.SignMessageRequest} returns this
 */
proto.powergate.user.v1.SignMessageRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes message = 2;
 * @return {!(string|Uint8Array)}
 */
proto.powergate.user.v1.SignMessageRequest.prototype.getMessage = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes message = 2;
 * This is a type-conversion wrapper around `getMessage()`
 * @return {string}
 */
proto.powergate.user.v1.SignMessageRequest.prototype.getMessage_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMessage()));
};


/**
 * optional bytes message = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMessage()`
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.SignMessageRequest.prototype.getMessage_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMessage()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.powergate.user.v1.SignMessageRequest} returns this
 */
proto.powergate.user.v1.SignMessageRequest.prototype.setMessage = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.SignMessageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.SignMessageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.SignMessageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.SignMessageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    signature: msg.getSignature_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.SignMessageResponse}
 */
proto.powergate.user.v1.SignMessageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.SignMessageResponse;
  return proto.powergate.user.v1.SignMessageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.SignMessageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.SignMessageResponse}
 */
proto.powergate.user.v1.SignMessageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.SignMessageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.SignMessageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.SignMessageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.SignMessageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes signature = 1;
 * @return {!(string|Uint8Array)}
 */
proto.powergate.user.v1.SignMessageResponse.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes signature = 1;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.powergate.user.v1.SignMessageResponse.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes signature = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.SignMessageResponse.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.powergate.user.v1.SignMessageResponse} returns this
 */
proto.powergate.user.v1.SignMessageResponse.prototype.setSignature = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.VerifyMessageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.VerifyMessageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.VerifyMessageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.VerifyMessageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    message: msg.getMessage_asB64(),
    signature: msg.getSignature_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.VerifyMessageRequest}
 */
proto.powergate.user.v1.VerifyMessageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.VerifyMessageRequest;
  return proto.powergate.user.v1.VerifyMessageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.VerifyMessageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.VerifyMessageRequest}
 */
proto.powergate.user.v1.VerifyMessageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.VerifyMessageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.VerifyMessageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.VerifyMessageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.VerifyMessageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessage_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.powergate.user.v1.VerifyMessageRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.VerifyMessageRequest} returns this
 */
proto.powergate.user.v1.VerifyMessageRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes message = 2;
 * @return {!(string|Uint8Array)}
 */
proto.powergate.user.v1.VerifyMessageRequest.prototype.getMessage = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes message = 2;
 * This is a type-conversion wrapper around `getMessage()`
 * @return {string}
 */
proto.powergate.user.v1.VerifyMessageRequest.prototype.getMessage_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMessage()));
};


/**
 * optional bytes message = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMessage()`
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.VerifyMessageRequest.prototype.getMessage_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMessage()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.powergate.user.v1.VerifyMessageRequest} returns this
 */
proto.powergate.user.v1.VerifyMessageRequest.prototype.setMessage = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes signature = 3;
 * @return {!(string|Uint8Array)}
 */
proto.powergate.user.v1.VerifyMessageRequest.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes signature = 3;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.powergate.user.v1.VerifyMessageRequest.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes signature = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.VerifyMessageRequest.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.powergate.user.v1.VerifyMessageRequest} returns this
 */
proto.powergate.user.v1.VerifyMessageRequest.prototype.setSignature = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.VerifyMessageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.VerifyMessageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.VerifyMessageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.VerifyMessageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ok: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.VerifyMessageResponse}
 */
proto.powergate.user.v1.VerifyMessageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.VerifyMessageResponse;
  return proto.powergate.user.v1.VerifyMessageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.VerifyMessageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.VerifyMessageResponse}
 */
proto.powergate.user.v1.VerifyMessageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOk(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.VerifyMessageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.VerifyMessageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.VerifyMessageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.VerifyMessageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOk();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool ok = 1;
 * @return {boolean}
 */
proto.powergate.user.v1.VerifyMessageResponse.prototype.getOk = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.powergate.user.v1.VerifyMessageResponse} returns this
 */
proto.powergate.user.v1.VerifyMessageResponse.prototype.setOk = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.StorageInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.StorageInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.StorageInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.StorageInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    cid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.StorageInfoRequest}
 */
proto.powergate.user.v1.StorageInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.StorageInfoRequest;
  return proto.powergate.user.v1.StorageInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.StorageInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.StorageInfoRequest}
 */
proto.powergate.user.v1.StorageInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.StorageInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.StorageInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.StorageInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.StorageInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cid = 1;
 * @return {string}
 */
proto.powergate.user.v1.StorageInfoRequest.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.StorageInfoRequest} returns this
 */
proto.powergate.user.v1.StorageInfoRequest.prototype.setCid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.StorageInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.StorageInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.StorageInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.StorageInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    storageInfo: (f = msg.getStorageInfo()) && proto.powergate.user.v1.StorageInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.StorageInfoResponse}
 */
proto.powergate.user.v1.StorageInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.StorageInfoResponse;
  return proto.powergate.user.v1.StorageInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.StorageInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.StorageInfoResponse}
 */
proto.powergate.user.v1.StorageInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.powergate.user.v1.StorageInfo;
      reader.readMessage(value,proto.powergate.user.v1.StorageInfo.deserializeBinaryFromReader);
      msg.setStorageInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.StorageInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.StorageInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.StorageInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.StorageInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStorageInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.powergate.user.v1.StorageInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional StorageInfo storage_info = 1;
 * @return {?proto.powergate.user.v1.StorageInfo}
 */
proto.powergate.user.v1.StorageInfoResponse.prototype.getStorageInfo = function() {
  return /** @type{?proto.powergate.user.v1.StorageInfo} */ (
    jspb.Message.getWrapperField(this, proto.powergate.user.v1.StorageInfo, 1));
};


/**
 * @param {?proto.powergate.user.v1.StorageInfo|undefined} value
 * @return {!proto.powergate.user.v1.StorageInfoResponse} returns this
*/
proto.powergate.user.v1.StorageInfoResponse.prototype.setStorageInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.powergate.user.v1.StorageInfoResponse} returns this
 */
proto.powergate.user.v1.StorageInfoResponse.prototype.clearStorageInfo = function() {
  return this.setStorageInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.powergate.user.v1.StorageInfoResponse.prototype.hasStorageInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.powergate.user.v1.ListStorageInfoRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.ListStorageInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.ListStorageInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.ListStorageInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.ListStorageInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    cidsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.ListStorageInfoRequest}
 */
proto.powergate.user.v1.ListStorageInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.ListStorageInfoRequest;
  return proto.powergate.user.v1.ListStorageInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.ListStorageInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.ListStorageInfoRequest}
 */
proto.powergate.user.v1.ListStorageInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addCids(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.ListStorageInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.ListStorageInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.ListStorageInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.ListStorageInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string cids = 1;
 * @return {!Array<string>}
 */
proto.powergate.user.v1.ListStorageInfoRequest.prototype.getCidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.powergate.user.v1.ListStorageInfoRequest} returns this
 */
proto.powergate.user.v1.ListStorageInfoRequest.prototype.setCidsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.powergate.user.v1.ListStorageInfoRequest} returns this
 */
proto.powergate.user.v1.ListStorageInfoRequest.prototype.addCids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.powergate.user.v1.ListStorageInfoRequest} returns this
 */
proto.powergate.user.v1.ListStorageInfoRequest.prototype.clearCidsList = function() {
  return this.setCidsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.powergate.user.v1.ListStorageInfoResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.ListStorageInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.ListStorageInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.ListStorageInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.ListStorageInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    storageInfoList: jspb.Message.toObjectList(msg.getStorageInfoList(),
    proto.powergate.user.v1.StorageInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.ListStorageInfoResponse}
 */
proto.powergate.user.v1.ListStorageInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.ListStorageInfoResponse;
  return proto.powergate.user.v1.ListStorageInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.ListStorageInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.ListStorageInfoResponse}
 */
proto.powergate.user.v1.ListStorageInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.powergate.user.v1.StorageInfo;
      reader.readMessage(value,proto.powergate.user.v1.StorageInfo.deserializeBinaryFromReader);
      msg.addStorageInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.ListStorageInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.ListStorageInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.ListStorageInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.ListStorageInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStorageInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.powergate.user.v1.StorageInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated StorageInfo storage_info = 1;
 * @return {!Array<!proto.powergate.user.v1.StorageInfo>}
 */
proto.powergate.user.v1.ListStorageInfoResponse.prototype.getStorageInfoList = function() {
  return /** @type{!Array<!proto.powergate.user.v1.StorageInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.powergate.user.v1.StorageInfo, 1));
};


/**
 * @param {!Array<!proto.powergate.user.v1.StorageInfo>} value
 * @return {!proto.powergate.user.v1.ListStorageInfoResponse} returns this
*/
proto.powergate.user.v1.ListStorageInfoResponse.prototype.setStorageInfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.powergate.user.v1.StorageInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.powergate.user.v1.StorageInfo}
 */
proto.powergate.user.v1.ListStorageInfoResponse.prototype.addStorageInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.powergate.user.v1.StorageInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.powergate.user.v1.ListStorageInfoResponse} returns this
 */
proto.powergate.user.v1.ListStorageInfoResponse.prototype.clearStorageInfoList = function() {
  return this.setStorageInfoList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.CancelStorageJobRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.CancelStorageJobRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.CancelStorageJobRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.CancelStorageJobRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    jobId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.CancelStorageJobRequest}
 */
proto.powergate.user.v1.CancelStorageJobRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.CancelStorageJobRequest;
  return proto.powergate.user.v1.CancelStorageJobRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.CancelStorageJobRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.CancelStorageJobRequest}
 */
proto.powergate.user.v1.CancelStorageJobRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setJobId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.CancelStorageJobRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.CancelStorageJobRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.CancelStorageJobRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.CancelStorageJobRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJobId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string job_id = 1;
 * @return {string}
 */
proto.powergate.user.v1.CancelStorageJobRequest.prototype.getJobId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.CancelStorageJobRequest} returns this
 */
proto.powergate.user.v1.CancelStorageJobRequest.prototype.setJobId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.CancelStorageJobResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.CancelStorageJobResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.CancelStorageJobResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.CancelStorageJobResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.CancelStorageJobResponse}
 */
proto.powergate.user.v1.CancelStorageJobResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.CancelStorageJobResponse;
  return proto.powergate.user.v1.CancelStorageJobResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.CancelStorageJobResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.CancelStorageJobResponse}
 */
proto.powergate.user.v1.CancelStorageJobResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.CancelStorageJobResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.CancelStorageJobResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.CancelStorageJobResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.CancelStorageJobResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.StorageJobRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.StorageJobRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.StorageJobRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.StorageJobRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    jobId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.StorageJobRequest}
 */
proto.powergate.user.v1.StorageJobRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.StorageJobRequest;
  return proto.powergate.user.v1.StorageJobRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.StorageJobRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.StorageJobRequest}
 */
proto.powergate.user.v1.StorageJobRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setJobId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.StorageJobRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.StorageJobRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.StorageJobRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.StorageJobRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJobId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string job_id = 1;
 * @return {string}
 */
proto.powergate.user.v1.StorageJobRequest.prototype.getJobId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.StorageJobRequest} returns this
 */
proto.powergate.user.v1.StorageJobRequest.prototype.setJobId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.StorageJobResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.StorageJobResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.StorageJobResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.StorageJobResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    storageJob: (f = msg.getStorageJob()) && proto.powergate.user.v1.StorageJob.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.StorageJobResponse}
 */
proto.powergate.user.v1.StorageJobResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.StorageJobResponse;
  return proto.powergate.user.v1.StorageJobResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.StorageJobResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.StorageJobResponse}
 */
proto.powergate.user.v1.StorageJobResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.powergate.user.v1.StorageJob;
      reader.readMessage(value,proto.powergate.user.v1.StorageJob.deserializeBinaryFromReader);
      msg.setStorageJob(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.StorageJobResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.StorageJobResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.StorageJobResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.StorageJobResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStorageJob();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.powergate.user.v1.StorageJob.serializeBinaryToWriter
    );
  }
};


/**
 * optional StorageJob storage_job = 1;
 * @return {?proto.powergate.user.v1.StorageJob}
 */
proto.powergate.user.v1.StorageJobResponse.prototype.getStorageJob = function() {
  return /** @type{?proto.powergate.user.v1.StorageJob} */ (
    jspb.Message.getWrapperField(this, proto.powergate.user.v1.StorageJob, 1));
};


/**
 * @param {?proto.powergate.user.v1.StorageJob|undefined} value
 * @return {!proto.powergate.user.v1.StorageJobResponse} returns this
*/
proto.powergate.user.v1.StorageJobResponse.prototype.setStorageJob = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.powergate.user.v1.StorageJobResponse} returns this
 */
proto.powergate.user.v1.StorageJobResponse.prototype.clearStorageJob = function() {
  return this.setStorageJob(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.powergate.user.v1.StorageJobResponse.prototype.hasStorageJob = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.StorageConfigForJobRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.StorageConfigForJobRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.StorageConfigForJobRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.StorageConfigForJobRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    jobId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.StorageConfigForJobRequest}
 */
proto.powergate.user.v1.StorageConfigForJobRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.StorageConfigForJobRequest;
  return proto.powergate.user.v1.StorageConfigForJobRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.StorageConfigForJobRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.StorageConfigForJobRequest}
 */
proto.powergate.user.v1.StorageConfigForJobRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setJobId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.StorageConfigForJobRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.StorageConfigForJobRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.StorageConfigForJobRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.StorageConfigForJobRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJobId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string job_id = 1;
 * @return {string}
 */
proto.powergate.user.v1.StorageConfigForJobRequest.prototype.getJobId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.StorageConfigForJobRequest} returns this
 */
proto.powergate.user.v1.StorageConfigForJobRequest.prototype.setJobId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.StorageConfigForJobResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.StorageConfigForJobResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.StorageConfigForJobResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.StorageConfigForJobResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    storageConfig: (f = msg.getStorageConfig()) && proto.powergate.user.v1.StorageConfig.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.StorageConfigForJobResponse}
 */
proto.powergate.user.v1.StorageConfigForJobResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.StorageConfigForJobResponse;
  return proto.powergate.user.v1.StorageConfigForJobResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.StorageConfigForJobResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.StorageConfigForJobResponse}
 */
proto.powergate.user.v1.StorageConfigForJobResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.powergate.user.v1.StorageConfig;
      reader.readMessage(value,proto.powergate.user.v1.StorageConfig.deserializeBinaryFromReader);
      msg.setStorageConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.StorageConfigForJobResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.StorageConfigForJobResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.StorageConfigForJobResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.StorageConfigForJobResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStorageConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.powergate.user.v1.StorageConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional StorageConfig storage_config = 1;
 * @return {?proto.powergate.user.v1.StorageConfig}
 */
proto.powergate.user.v1.StorageConfigForJobResponse.prototype.getStorageConfig = function() {
  return /** @type{?proto.powergate.user.v1.StorageConfig} */ (
    jspb.Message.getWrapperField(this, proto.powergate.user.v1.StorageConfig, 1));
};


/**
 * @param {?proto.powergate.user.v1.StorageConfig|undefined} value
 * @return {!proto.powergate.user.v1.StorageConfigForJobResponse} returns this
*/
proto.powergate.user.v1.StorageConfigForJobResponse.prototype.setStorageConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.powergate.user.v1.StorageConfigForJobResponse} returns this
 */
proto.powergate.user.v1.StorageConfigForJobResponse.prototype.clearStorageConfig = function() {
  return this.setStorageConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.powergate.user.v1.StorageConfigForJobResponse.prototype.hasStorageConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.ListStorageJobsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.ListStorageJobsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.ListStorageJobsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.ListStorageJobsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    cidFilter: jspb.Message.getFieldWithDefault(msg, 1, ""),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    ascending: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 4, ""),
    selector: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.ListStorageJobsRequest}
 */
proto.powergate.user.v1.ListStorageJobsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.ListStorageJobsRequest;
  return proto.powergate.user.v1.ListStorageJobsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.ListStorageJobsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.ListStorageJobsRequest}
 */
proto.powergate.user.v1.ListStorageJobsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCidFilter(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAscending(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    case 5:
      var value = /** @type {!proto.powergate.user.v1.StorageJobsSelector} */ (reader.readEnum());
      msg.setSelector(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.ListStorageJobsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.ListStorageJobsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.ListStorageJobsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.ListStorageJobsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCidFilter();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getAscending();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSelector();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional string cid_filter = 1;
 * @return {string}
 */
proto.powergate.user.v1.ListStorageJobsRequest.prototype.getCidFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.ListStorageJobsRequest} returns this
 */
proto.powergate.user.v1.ListStorageJobsRequest.prototype.setCidFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 limit = 2;
 * @return {number}
 */
proto.powergate.user.v1.ListStorageJobsRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.powergate.user.v1.ListStorageJobsRequest} returns this
 */
proto.powergate.user.v1.ListStorageJobsRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool ascending = 3;
 * @return {boolean}
 */
proto.powergate.user.v1.ListStorageJobsRequest.prototype.getAscending = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.powergate.user.v1.ListStorageJobsRequest} returns this
 */
proto.powergate.user.v1.ListStorageJobsRequest.prototype.setAscending = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string next_page_token = 4;
 * @return {string}
 */
proto.powergate.user.v1.ListStorageJobsRequest.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.ListStorageJobsRequest} returns this
 */
proto.powergate.user.v1.ListStorageJobsRequest.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional StorageJobsSelector selector = 5;
 * @return {!proto.powergate.user.v1.StorageJobsSelector}
 */
proto.powergate.user.v1.ListStorageJobsRequest.prototype.getSelector = function() {
  return /** @type {!proto.powergate.user.v1.StorageJobsSelector} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.powergate.user.v1.StorageJobsSelector} value
 * @return {!proto.powergate.user.v1.ListStorageJobsRequest} returns this
 */
proto.powergate.user.v1.ListStorageJobsRequest.prototype.setSelector = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.powergate.user.v1.ListStorageJobsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.ListStorageJobsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.ListStorageJobsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.ListStorageJobsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.ListStorageJobsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    storageJobsList: jspb.Message.toObjectList(msg.getStorageJobsList(),
    proto.powergate.user.v1.StorageJob.toObject, includeInstance),
    more: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.ListStorageJobsResponse}
 */
proto.powergate.user.v1.ListStorageJobsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.ListStorageJobsResponse;
  return proto.powergate.user.v1.ListStorageJobsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.ListStorageJobsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.ListStorageJobsResponse}
 */
proto.powergate.user.v1.ListStorageJobsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.powergate.user.v1.StorageJob;
      reader.readMessage(value,proto.powergate.user.v1.StorageJob.deserializeBinaryFromReader);
      msg.addStorageJobs(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMore(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.ListStorageJobsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.ListStorageJobsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.ListStorageJobsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.ListStorageJobsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStorageJobsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.powergate.user.v1.StorageJob.serializeBinaryToWriter
    );
  }
  f = message.getMore();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * repeated StorageJob storage_jobs = 1;
 * @return {!Array<!proto.powergate.user.v1.StorageJob>}
 */
proto.powergate.user.v1.ListStorageJobsResponse.prototype.getStorageJobsList = function() {
  return /** @type{!Array<!proto.powergate.user.v1.StorageJob>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.powergate.user.v1.StorageJob, 1));
};


/**
 * @param {!Array<!proto.powergate.user.v1.StorageJob>} value
 * @return {!proto.powergate.user.v1.ListStorageJobsResponse} returns this
*/
proto.powergate.user.v1.ListStorageJobsResponse.prototype.setStorageJobsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.powergate.user.v1.StorageJob=} opt_value
 * @param {number=} opt_index
 * @return {!proto.powergate.user.v1.StorageJob}
 */
proto.powergate.user.v1.ListStorageJobsResponse.prototype.addStorageJobs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.powergate.user.v1.StorageJob, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.powergate.user.v1.ListStorageJobsResponse} returns this
 */
proto.powergate.user.v1.ListStorageJobsResponse.prototype.clearStorageJobsList = function() {
  return this.setStorageJobsList([]);
};


/**
 * optional bool more = 2;
 * @return {boolean}
 */
proto.powergate.user.v1.ListStorageJobsResponse.prototype.getMore = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.powergate.user.v1.ListStorageJobsResponse} returns this
 */
proto.powergate.user.v1.ListStorageJobsResponse.prototype.setMore = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.powergate.user.v1.ListStorageJobsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.ListStorageJobsResponse} returns this
 */
proto.powergate.user.v1.ListStorageJobsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.StorageJobsSummaryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.StorageJobsSummaryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.StorageJobsSummaryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.StorageJobsSummaryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    cid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.StorageJobsSummaryRequest}
 */
proto.powergate.user.v1.StorageJobsSummaryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.StorageJobsSummaryRequest;
  return proto.powergate.user.v1.StorageJobsSummaryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.StorageJobsSummaryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.StorageJobsSummaryRequest}
 */
proto.powergate.user.v1.StorageJobsSummaryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.StorageJobsSummaryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.StorageJobsSummaryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.StorageJobsSummaryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.StorageJobsSummaryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cid = 1;
 * @return {string}
 */
proto.powergate.user.v1.StorageJobsSummaryRequest.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.StorageJobsSummaryRequest} returns this
 */
proto.powergate.user.v1.StorageJobsSummaryRequest.prototype.setCid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.powergate.user.v1.StorageJobsSummaryResponse.repeatedFields_ = [1,2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.StorageJobsSummaryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.StorageJobsSummaryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.StorageJobsSummaryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.StorageJobsSummaryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    queuedStorageJobsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    executingStorageJobsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    finalStorageJobsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.StorageJobsSummaryResponse}
 */
proto.powergate.user.v1.StorageJobsSummaryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.StorageJobsSummaryResponse;
  return proto.powergate.user.v1.StorageJobsSummaryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.StorageJobsSummaryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.StorageJobsSummaryResponse}
 */
proto.powergate.user.v1.StorageJobsSummaryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addQueuedStorageJobs(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addExecutingStorageJobs(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addFinalStorageJobs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.StorageJobsSummaryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.StorageJobsSummaryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.StorageJobsSummaryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.StorageJobsSummaryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQueuedStorageJobsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getExecutingStorageJobsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getFinalStorageJobsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * repeated string queued_storage_jobs = 1;
 * @return {!Array<string>}
 */
proto.powergate.user.v1.StorageJobsSummaryResponse.prototype.getQueuedStorageJobsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.powergate.user.v1.StorageJobsSummaryResponse} returns this
 */
proto.powergate.user.v1.StorageJobsSummaryResponse.prototype.setQueuedStorageJobsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.powergate.user.v1.StorageJobsSummaryResponse} returns this
 */
proto.powergate.user.v1.StorageJobsSummaryResponse.prototype.addQueuedStorageJobs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.powergate.user.v1.StorageJobsSummaryResponse} returns this
 */
proto.powergate.user.v1.StorageJobsSummaryResponse.prototype.clearQueuedStorageJobsList = function() {
  return this.setQueuedStorageJobsList([]);
};


/**
 * repeated string executing_storage_jobs = 2;
 * @return {!Array<string>}
 */
proto.powergate.user.v1.StorageJobsSummaryResponse.prototype.getExecutingStorageJobsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.powergate.user.v1.StorageJobsSummaryResponse} returns this
 */
proto.powergate.user.v1.StorageJobsSummaryResponse.prototype.setExecutingStorageJobsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.powergate.user.v1.StorageJobsSummaryResponse} returns this
 */
proto.powergate.user.v1.StorageJobsSummaryResponse.prototype.addExecutingStorageJobs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.powergate.user.v1.StorageJobsSummaryResponse} returns this
 */
proto.powergate.user.v1.StorageJobsSummaryResponse.prototype.clearExecutingStorageJobsList = function() {
  return this.setExecutingStorageJobsList([]);
};


/**
 * repeated string final_storage_jobs = 3;
 * @return {!Array<string>}
 */
proto.powergate.user.v1.StorageJobsSummaryResponse.prototype.getFinalStorageJobsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.powergate.user.v1.StorageJobsSummaryResponse} returns this
 */
proto.powergate.user.v1.StorageJobsSummaryResponse.prototype.setFinalStorageJobsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.powergate.user.v1.StorageJobsSummaryResponse} returns this
 */
proto.powergate.user.v1.StorageJobsSummaryResponse.prototype.addFinalStorageJobs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.powergate.user.v1.StorageJobsSummaryResponse} returns this
 */
proto.powergate.user.v1.StorageJobsSummaryResponse.prototype.clearFinalStorageJobsList = function() {
  return this.setFinalStorageJobsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.powergate.user.v1.WatchStorageJobsRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.WatchStorageJobsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.WatchStorageJobsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.WatchStorageJobsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.WatchStorageJobsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    jobIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.WatchStorageJobsRequest}
 */
proto.powergate.user.v1.WatchStorageJobsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.WatchStorageJobsRequest;
  return proto.powergate.user.v1.WatchStorageJobsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.WatchStorageJobsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.WatchStorageJobsRequest}
 */
proto.powergate.user.v1.WatchStorageJobsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addJobIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.WatchStorageJobsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.WatchStorageJobsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.WatchStorageJobsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.WatchStorageJobsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJobIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string job_ids = 1;
 * @return {!Array<string>}
 */
proto.powergate.user.v1.WatchStorageJobsRequest.prototype.getJobIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.powergate.user.v1.WatchStorageJobsRequest} returns this
 */
proto.powergate.user.v1.WatchStorageJobsRequest.prototype.setJobIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.powergate.user.v1.WatchStorageJobsRequest} returns this
 */
proto.powergate.user.v1.WatchStorageJobsRequest.prototype.addJobIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.powergate.user.v1.WatchStorageJobsRequest} returns this
 */
proto.powergate.user.v1.WatchStorageJobsRequest.prototype.clearJobIdsList = function() {
  return this.setJobIdsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.WatchStorageJobsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.WatchStorageJobsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.WatchStorageJobsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.WatchStorageJobsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    storageJob: (f = msg.getStorageJob()) && proto.powergate.user.v1.StorageJob.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.WatchStorageJobsResponse}
 */
proto.powergate.user.v1.WatchStorageJobsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.WatchStorageJobsResponse;
  return proto.powergate.user.v1.WatchStorageJobsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.WatchStorageJobsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.WatchStorageJobsResponse}
 */
proto.powergate.user.v1.WatchStorageJobsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.powergate.user.v1.StorageJob;
      reader.readMessage(value,proto.powergate.user.v1.StorageJob.deserializeBinaryFromReader);
      msg.setStorageJob(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.WatchStorageJobsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.WatchStorageJobsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.WatchStorageJobsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.WatchStorageJobsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStorageJob();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.powergate.user.v1.StorageJob.serializeBinaryToWriter
    );
  }
};


/**
 * optional StorageJob storage_job = 1;
 * @return {?proto.powergate.user.v1.StorageJob}
 */
proto.powergate.user.v1.WatchStorageJobsResponse.prototype.getStorageJob = function() {
  return /** @type{?proto.powergate.user.v1.StorageJob} */ (
    jspb.Message.getWrapperField(this, proto.powergate.user.v1.StorageJob, 1));
};


/**
 * @param {?proto.powergate.user.v1.StorageJob|undefined} value
 * @return {!proto.powergate.user.v1.WatchStorageJobsResponse} returns this
*/
proto.powergate.user.v1.WatchStorageJobsResponse.prototype.setStorageJob = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.powergate.user.v1.WatchStorageJobsResponse} returns this
 */
proto.powergate.user.v1.WatchStorageJobsResponse.prototype.clearStorageJob = function() {
  return this.setStorageJob(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.powergate.user.v1.WatchStorageJobsResponse.prototype.hasStorageJob = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.StorageDealRecordsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.StorageDealRecordsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.StorageDealRecordsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.StorageDealRecordsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && proto.powergate.user.v1.DealRecordsConfig.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.StorageDealRecordsRequest}
 */
proto.powergate.user.v1.StorageDealRecordsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.StorageDealRecordsRequest;
  return proto.powergate.user.v1.StorageDealRecordsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.StorageDealRecordsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.StorageDealRecordsRequest}
 */
proto.powergate.user.v1.StorageDealRecordsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.powergate.user.v1.DealRecordsConfig;
      reader.readMessage(value,proto.powergate.user.v1.DealRecordsConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.StorageDealRecordsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.StorageDealRecordsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.StorageDealRecordsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.StorageDealRecordsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.powergate.user.v1.DealRecordsConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional DealRecordsConfig config = 1;
 * @return {?proto.powergate.user.v1.DealRecordsConfig}
 */
proto.powergate.user.v1.StorageDealRecordsRequest.prototype.getConfig = function() {
  return /** @type{?proto.powergate.user.v1.DealRecordsConfig} */ (
    jspb.Message.getWrapperField(this, proto.powergate.user.v1.DealRecordsConfig, 1));
};


/**
 * @param {?proto.powergate.user.v1.DealRecordsConfig|undefined} value
 * @return {!proto.powergate.user.v1.StorageDealRecordsRequest} returns this
*/
proto.powergate.user.v1.StorageDealRecordsRequest.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.powergate.user.v1.StorageDealRecordsRequest} returns this
 */
proto.powergate.user.v1.StorageDealRecordsRequest.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.powergate.user.v1.StorageDealRecordsRequest.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.powergate.user.v1.StorageDealRecordsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.StorageDealRecordsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.StorageDealRecordsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.StorageDealRecordsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.StorageDealRecordsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordsList: jspb.Message.toObjectList(msg.getRecordsList(),
    proto.powergate.user.v1.StorageDealRecord.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.StorageDealRecordsResponse}
 */
proto.powergate.user.v1.StorageDealRecordsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.StorageDealRecordsResponse;
  return proto.powergate.user.v1.StorageDealRecordsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.StorageDealRecordsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.StorageDealRecordsResponse}
 */
proto.powergate.user.v1.StorageDealRecordsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.powergate.user.v1.StorageDealRecord;
      reader.readMessage(value,proto.powergate.user.v1.StorageDealRecord.deserializeBinaryFromReader);
      msg.addRecords(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.StorageDealRecordsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.StorageDealRecordsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.StorageDealRecordsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.StorageDealRecordsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.powergate.user.v1.StorageDealRecord.serializeBinaryToWriter
    );
  }
};


/**
 * repeated StorageDealRecord records = 1;
 * @return {!Array<!proto.powergate.user.v1.StorageDealRecord>}
 */
proto.powergate.user.v1.StorageDealRecordsResponse.prototype.getRecordsList = function() {
  return /** @type{!Array<!proto.powergate.user.v1.StorageDealRecord>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.powergate.user.v1.StorageDealRecord, 1));
};


/**
 * @param {!Array<!proto.powergate.user.v1.StorageDealRecord>} value
 * @return {!proto.powergate.user.v1.StorageDealRecordsResponse} returns this
*/
proto.powergate.user.v1.StorageDealRecordsResponse.prototype.setRecordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.powergate.user.v1.StorageDealRecord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.powergate.user.v1.StorageDealRecord}
 */
proto.powergate.user.v1.StorageDealRecordsResponse.prototype.addRecords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.powergate.user.v1.StorageDealRecord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.powergate.user.v1.StorageDealRecordsResponse} returns this
 */
proto.powergate.user.v1.StorageDealRecordsResponse.prototype.clearRecordsList = function() {
  return this.setRecordsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.RetrievalDealRecordsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.RetrievalDealRecordsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.RetrievalDealRecordsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.RetrievalDealRecordsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && proto.powergate.user.v1.DealRecordsConfig.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.RetrievalDealRecordsRequest}
 */
proto.powergate.user.v1.RetrievalDealRecordsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.RetrievalDealRecordsRequest;
  return proto.powergate.user.v1.RetrievalDealRecordsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.RetrievalDealRecordsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.RetrievalDealRecordsRequest}
 */
proto.powergate.user.v1.RetrievalDealRecordsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.powergate.user.v1.DealRecordsConfig;
      reader.readMessage(value,proto.powergate.user.v1.DealRecordsConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.RetrievalDealRecordsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.RetrievalDealRecordsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.RetrievalDealRecordsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.RetrievalDealRecordsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.powergate.user.v1.DealRecordsConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional DealRecordsConfig config = 1;
 * @return {?proto.powergate.user.v1.DealRecordsConfig}
 */
proto.powergate.user.v1.RetrievalDealRecordsRequest.prototype.getConfig = function() {
  return /** @type{?proto.powergate.user.v1.DealRecordsConfig} */ (
    jspb.Message.getWrapperField(this, proto.powergate.user.v1.DealRecordsConfig, 1));
};


/**
 * @param {?proto.powergate.user.v1.DealRecordsConfig|undefined} value
 * @return {!proto.powergate.user.v1.RetrievalDealRecordsRequest} returns this
*/
proto.powergate.user.v1.RetrievalDealRecordsRequest.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.powergate.user.v1.RetrievalDealRecordsRequest} returns this
 */
proto.powergate.user.v1.RetrievalDealRecordsRequest.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.powergate.user.v1.RetrievalDealRecordsRequest.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.powergate.user.v1.RetrievalDealRecordsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.RetrievalDealRecordsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.RetrievalDealRecordsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.RetrievalDealRecordsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.RetrievalDealRecordsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordsList: jspb.Message.toObjectList(msg.getRecordsList(),
    proto.powergate.user.v1.RetrievalDealRecord.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.RetrievalDealRecordsResponse}
 */
proto.powergate.user.v1.RetrievalDealRecordsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.RetrievalDealRecordsResponse;
  return proto.powergate.user.v1.RetrievalDealRecordsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.RetrievalDealRecordsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.RetrievalDealRecordsResponse}
 */
proto.powergate.user.v1.RetrievalDealRecordsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.powergate.user.v1.RetrievalDealRecord;
      reader.readMessage(value,proto.powergate.user.v1.RetrievalDealRecord.deserializeBinaryFromReader);
      msg.addRecords(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.RetrievalDealRecordsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.RetrievalDealRecordsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.RetrievalDealRecordsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.RetrievalDealRecordsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.powergate.user.v1.RetrievalDealRecord.serializeBinaryToWriter
    );
  }
};


/**
 * repeated RetrievalDealRecord records = 1;
 * @return {!Array<!proto.powergate.user.v1.RetrievalDealRecord>}
 */
proto.powergate.user.v1.RetrievalDealRecordsResponse.prototype.getRecordsList = function() {
  return /** @type{!Array<!proto.powergate.user.v1.RetrievalDealRecord>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.powergate.user.v1.RetrievalDealRecord, 1));
};


/**
 * @param {!Array<!proto.powergate.user.v1.RetrievalDealRecord>} value
 * @return {!proto.powergate.user.v1.RetrievalDealRecordsResponse} returns this
*/
proto.powergate.user.v1.RetrievalDealRecordsResponse.prototype.setRecordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.powergate.user.v1.RetrievalDealRecord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.powergate.user.v1.RetrievalDealRecord}
 */
proto.powergate.user.v1.RetrievalDealRecordsResponse.prototype.addRecords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.powergate.user.v1.RetrievalDealRecord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.powergate.user.v1.RetrievalDealRecordsResponse} returns this
 */
proto.powergate.user.v1.RetrievalDealRecordsResponse.prototype.clearRecordsList = function() {
  return this.setRecordsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.AddrInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.AddrInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.AddrInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.AddrInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    address: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, ""),
    balance: jspb.Message.getFieldWithDefault(msg, 4, ""),
    verifiedClientInfo: (f = msg.getVerifiedClientInfo()) && proto.powergate.user.v1.AddrInfo.VerifiedClientInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.AddrInfo}
 */
proto.powergate.user.v1.AddrInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.AddrInfo;
  return proto.powergate.user.v1.AddrInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.AddrInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.AddrInfo}
 */
proto.powergate.user.v1.AddrInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBalance(value);
      break;
    case 5:
      var value = new proto.powergate.user.v1.AddrInfo.VerifiedClientInfo;
      reader.readMessage(value,proto.powergate.user.v1.AddrInfo.VerifiedClientInfo.deserializeBinaryFromReader);
      msg.setVerifiedClientInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.AddrInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.AddrInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.AddrInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.AddrInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBalance();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getVerifiedClientInfo();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.powergate.user.v1.AddrInfo.VerifiedClientInfo.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.AddrInfo.VerifiedClientInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.AddrInfo.VerifiedClientInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.AddrInfo.VerifiedClientInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.AddrInfo.VerifiedClientInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    remainingDatacapBytes: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.AddrInfo.VerifiedClientInfo}
 */
proto.powergate.user.v1.AddrInfo.VerifiedClientInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.AddrInfo.VerifiedClientInfo;
  return proto.powergate.user.v1.AddrInfo.VerifiedClientInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.AddrInfo.VerifiedClientInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.AddrInfo.VerifiedClientInfo}
 */
proto.powergate.user.v1.AddrInfo.VerifiedClientInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRemainingDatacapBytes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.AddrInfo.VerifiedClientInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.AddrInfo.VerifiedClientInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.AddrInfo.VerifiedClientInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.AddrInfo.VerifiedClientInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRemainingDatacapBytes();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string remaining_datacap_bytes = 1;
 * @return {string}
 */
proto.powergate.user.v1.AddrInfo.VerifiedClientInfo.prototype.getRemainingDatacapBytes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.AddrInfo.VerifiedClientInfo} returns this
 */
proto.powergate.user.v1.AddrInfo.VerifiedClientInfo.prototype.setRemainingDatacapBytes = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.powergate.user.v1.AddrInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.AddrInfo} returns this
 */
proto.powergate.user.v1.AddrInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string address = 2;
 * @return {string}
 */
proto.powergate.user.v1.AddrInfo.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.AddrInfo} returns this
 */
proto.powergate.user.v1.AddrInfo.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string type = 3;
 * @return {string}
 */
proto.powergate.user.v1.AddrInfo.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.AddrInfo} returns this
 */
proto.powergate.user.v1.AddrInfo.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string balance = 4;
 * @return {string}
 */
proto.powergate.user.v1.AddrInfo.prototype.getBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.AddrInfo} returns this
 */
proto.powergate.user.v1.AddrInfo.prototype.setBalance = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional VerifiedClientInfo verified_client_info = 5;
 * @return {?proto.powergate.user.v1.AddrInfo.VerifiedClientInfo}
 */
proto.powergate.user.v1.AddrInfo.prototype.getVerifiedClientInfo = function() {
  return /** @type{?proto.powergate.user.v1.AddrInfo.VerifiedClientInfo} */ (
    jspb.Message.getWrapperField(this, proto.powergate.user.v1.AddrInfo.VerifiedClientInfo, 5));
};


/**
 * @param {?proto.powergate.user.v1.AddrInfo.VerifiedClientInfo|undefined} value
 * @return {!proto.powergate.user.v1.AddrInfo} returns this
*/
proto.powergate.user.v1.AddrInfo.prototype.setVerifiedClientInfo = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.powergate.user.v1.AddrInfo} returns this
 */
proto.powergate.user.v1.AddrInfo.prototype.clearVerifiedClientInfo = function() {
  return this.setVerifiedClientInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.powergate.user.v1.AddrInfo.prototype.hasVerifiedClientInfo = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.powergate.user.v1.CidSummary.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.CidSummary.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.CidSummary.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.CidSummary} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.CidSummary.toObject = function(includeInstance, msg) {
  var f, obj = {
    cid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    stored: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    queuedJobsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    executingJob: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.CidSummary}
 */
proto.powergate.user.v1.CidSummary.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.CidSummary;
  return proto.powergate.user.v1.CidSummary.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.CidSummary} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.CidSummary}
 */
proto.powergate.user.v1.CidSummary.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStored(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addQueuedJobs(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setExecutingJob(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.CidSummary.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.CidSummary.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.CidSummary} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.CidSummary.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStored();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getQueuedJobsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getExecutingJob();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string cid = 1;
 * @return {string}
 */
proto.powergate.user.v1.CidSummary.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.CidSummary} returns this
 */
proto.powergate.user.v1.CidSummary.prototype.setCid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool stored = 2;
 * @return {boolean}
 */
proto.powergate.user.v1.CidSummary.prototype.getStored = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.powergate.user.v1.CidSummary} returns this
 */
proto.powergate.user.v1.CidSummary.prototype.setStored = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * repeated string queued_jobs = 3;
 * @return {!Array<string>}
 */
proto.powergate.user.v1.CidSummary.prototype.getQueuedJobsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.powergate.user.v1.CidSummary} returns this
 */
proto.powergate.user.v1.CidSummary.prototype.setQueuedJobsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.powergate.user.v1.CidSummary} returns this
 */
proto.powergate.user.v1.CidSummary.prototype.addQueuedJobs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.powergate.user.v1.CidSummary} returns this
 */
proto.powergate.user.v1.CidSummary.prototype.clearQueuedJobsList = function() {
  return this.setQueuedJobsList([]);
};


/**
 * optional string executing_job = 4;
 * @return {string}
 */
proto.powergate.user.v1.CidSummary.prototype.getExecutingJob = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.CidSummary} returns this
 */
proto.powergate.user.v1.CidSummary.prototype.setExecutingJob = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.IpfsConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.IpfsConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.IpfsConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.IpfsConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    addTimeout: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.IpfsConfig}
 */
proto.powergate.user.v1.IpfsConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.IpfsConfig;
  return proto.powergate.user.v1.IpfsConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.IpfsConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.IpfsConfig}
 */
proto.powergate.user.v1.IpfsConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAddTimeout(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.IpfsConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.IpfsConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.IpfsConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.IpfsConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddTimeout();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 add_timeout = 1;
 * @return {number}
 */
proto.powergate.user.v1.IpfsConfig.prototype.getAddTimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.powergate.user.v1.IpfsConfig} returns this
 */
proto.powergate.user.v1.IpfsConfig.prototype.setAddTimeout = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.HotConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.HotConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.HotConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.HotConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    allowUnfreeze: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    unfreezeMaxPrice: jspb.Message.getFieldWithDefault(msg, 3, 0),
    ipfs: (f = msg.getIpfs()) && proto.powergate.user.v1.IpfsConfig.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.HotConfig}
 */
proto.powergate.user.v1.HotConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.HotConfig;
  return proto.powergate.user.v1.HotConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.HotConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.HotConfig}
 */
proto.powergate.user.v1.HotConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowUnfreeze(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUnfreezeMaxPrice(value);
      break;
    case 4:
      var value = new proto.powergate.user.v1.IpfsConfig;
      reader.readMessage(value,proto.powergate.user.v1.IpfsConfig.deserializeBinaryFromReader);
      msg.setIpfs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.HotConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.HotConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.HotConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.HotConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getAllowUnfreeze();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getUnfreezeMaxPrice();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getIpfs();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.powergate.user.v1.IpfsConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.powergate.user.v1.HotConfig.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.powergate.user.v1.HotConfig} returns this
 */
proto.powergate.user.v1.HotConfig.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool allow_unfreeze = 2;
 * @return {boolean}
 */
proto.powergate.user.v1.HotConfig.prototype.getAllowUnfreeze = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.powergate.user.v1.HotConfig} returns this
 */
proto.powergate.user.v1.HotConfig.prototype.setAllowUnfreeze = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional uint64 unfreeze_max_price = 3;
 * @return {number}
 */
proto.powergate.user.v1.HotConfig.prototype.getUnfreezeMaxPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.powergate.user.v1.HotConfig} returns this
 */
proto.powergate.user.v1.HotConfig.prototype.setUnfreezeMaxPrice = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional IpfsConfig ipfs = 4;
 * @return {?proto.powergate.user.v1.IpfsConfig}
 */
proto.powergate.user.v1.HotConfig.prototype.getIpfs = function() {
  return /** @type{?proto.powergate.user.v1.IpfsConfig} */ (
    jspb.Message.getWrapperField(this, proto.powergate.user.v1.IpfsConfig, 4));
};


/**
 * @param {?proto.powergate.user.v1.IpfsConfig|undefined} value
 * @return {!proto.powergate.user.v1.HotConfig} returns this
*/
proto.powergate.user.v1.HotConfig.prototype.setIpfs = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.powergate.user.v1.HotConfig} returns this
 */
proto.powergate.user.v1.HotConfig.prototype.clearIpfs = function() {
  return this.setIpfs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.powergate.user.v1.HotConfig.prototype.hasIpfs = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.FilRenew.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.FilRenew.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.FilRenew} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.FilRenew.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    threshold: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.FilRenew}
 */
proto.powergate.user.v1.FilRenew.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.FilRenew;
  return proto.powergate.user.v1.FilRenew.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.FilRenew} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.FilRenew}
 */
proto.powergate.user.v1.FilRenew.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setThreshold(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.FilRenew.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.FilRenew.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.FilRenew} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.FilRenew.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getThreshold();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.powergate.user.v1.FilRenew.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.powergate.user.v1.FilRenew} returns this
 */
proto.powergate.user.v1.FilRenew.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional int64 threshold = 2;
 * @return {number}
 */
proto.powergate.user.v1.FilRenew.prototype.getThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.powergate.user.v1.FilRenew} returns this
 */
proto.powergate.user.v1.FilRenew.prototype.setThreshold = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.powergate.user.v1.FilConfig.repeatedFields_ = [3,4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.FilConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.FilConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.FilConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.FilConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    replicationFactor: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dealMinDuration: jspb.Message.getFieldWithDefault(msg, 2, 0),
    excludedMinersList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    trustedMinersList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    countryCodesList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    renew: (f = msg.getRenew()) && proto.powergate.user.v1.FilRenew.toObject(includeInstance, f),
    address: jspb.Message.getFieldWithDefault(msg, 7, ""),
    maxPrice: jspb.Message.getFieldWithDefault(msg, 8, 0),
    fastRetrieval: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    dealStartOffset: jspb.Message.getFieldWithDefault(msg, 10, 0),
    verifiedDeal: jspb.Message.getBooleanFieldWithDefault(msg, 11, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.FilConfig}
 */
proto.powergate.user.v1.FilConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.FilConfig;
  return proto.powergate.user.v1.FilConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.FilConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.FilConfig}
 */
proto.powergate.user.v1.FilConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReplicationFactor(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDealMinDuration(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addExcludedMiners(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addTrustedMiners(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addCountryCodes(value);
      break;
    case 6:
      var value = new proto.powergate.user.v1.FilRenew;
      reader.readMessage(value,proto.powergate.user.v1.FilRenew.deserializeBinaryFromReader);
      msg.setRenew(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxPrice(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFastRetrieval(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDealStartOffset(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVerifiedDeal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.FilConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.FilConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.FilConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.FilConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReplicationFactor();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getDealMinDuration();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getExcludedMinersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getTrustedMinersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getCountryCodesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getRenew();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.powergate.user.v1.FilRenew.serializeBinaryToWriter
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getMaxPrice();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getFastRetrieval();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getDealStartOffset();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getVerifiedDeal();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
};


/**
 * optional int64 replication_factor = 1;
 * @return {number}
 */
proto.powergate.user.v1.FilConfig.prototype.getReplicationFactor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.powergate.user.v1.FilConfig} returns this
 */
proto.powergate.user.v1.FilConfig.prototype.setReplicationFactor = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 deal_min_duration = 2;
 * @return {number}
 */
proto.powergate.user.v1.FilConfig.prototype.getDealMinDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.powergate.user.v1.FilConfig} returns this
 */
proto.powergate.user.v1.FilConfig.prototype.setDealMinDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated string excluded_miners = 3;
 * @return {!Array<string>}
 */
proto.powergate.user.v1.FilConfig.prototype.getExcludedMinersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.powergate.user.v1.FilConfig} returns this
 */
proto.powergate.user.v1.FilConfig.prototype.setExcludedMinersList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.powergate.user.v1.FilConfig} returns this
 */
proto.powergate.user.v1.FilConfig.prototype.addExcludedMiners = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.powergate.user.v1.FilConfig} returns this
 */
proto.powergate.user.v1.FilConfig.prototype.clearExcludedMinersList = function() {
  return this.setExcludedMinersList([]);
};


/**
 * repeated string trusted_miners = 4;
 * @return {!Array<string>}
 */
proto.powergate.user.v1.FilConfig.prototype.getTrustedMinersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.powergate.user.v1.FilConfig} returns this
 */
proto.powergate.user.v1.FilConfig.prototype.setTrustedMinersList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.powergate.user.v1.FilConfig} returns this
 */
proto.powergate.user.v1.FilConfig.prototype.addTrustedMiners = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.powergate.user.v1.FilConfig} returns this
 */
proto.powergate.user.v1.FilConfig.prototype.clearTrustedMinersList = function() {
  return this.setTrustedMinersList([]);
};


/**
 * repeated string country_codes = 5;
 * @return {!Array<string>}
 */
proto.powergate.user.v1.FilConfig.prototype.getCountryCodesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.powergate.user.v1.FilConfig} returns this
 */
proto.powergate.user.v1.FilConfig.prototype.setCountryCodesList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.powergate.user.v1.FilConfig} returns this
 */
proto.powergate.user.v1.FilConfig.prototype.addCountryCodes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.powergate.user.v1.FilConfig} returns this
 */
proto.powergate.user.v1.FilConfig.prototype.clearCountryCodesList = function() {
  return this.setCountryCodesList([]);
};


/**
 * optional FilRenew renew = 6;
 * @return {?proto.powergate.user.v1.FilRenew}
 */
proto.powergate.user.v1.FilConfig.prototype.getRenew = function() {
  return /** @type{?proto.powergate.user.v1.FilRenew} */ (
    jspb.Message.getWrapperField(this, proto.powergate.user.v1.FilRenew, 6));
};


/**
 * @param {?proto.powergate.user.v1.FilRenew|undefined} value
 * @return {!proto.powergate.user.v1.FilConfig} returns this
*/
proto.powergate.user.v1.FilConfig.prototype.setRenew = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.powergate.user.v1.FilConfig} returns this
 */
proto.powergate.user.v1.FilConfig.prototype.clearRenew = function() {
  return this.setRenew(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.powergate.user.v1.FilConfig.prototype.hasRenew = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string address = 7;
 * @return {string}
 */
proto.powergate.user.v1.FilConfig.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.FilConfig} returns this
 */
proto.powergate.user.v1.FilConfig.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional uint64 max_price = 8;
 * @return {number}
 */
proto.powergate.user.v1.FilConfig.prototype.getMaxPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.powergate.user.v1.FilConfig} returns this
 */
proto.powergate.user.v1.FilConfig.prototype.setMaxPrice = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional bool fast_retrieval = 9;
 * @return {boolean}
 */
proto.powergate.user.v1.FilConfig.prototype.getFastRetrieval = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.powergate.user.v1.FilConfig} returns this
 */
proto.powergate.user.v1.FilConfig.prototype.setFastRetrieval = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional int64 deal_start_offset = 10;
 * @return {number}
 */
proto.powergate.user.v1.FilConfig.prototype.getDealStartOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.powergate.user.v1.FilConfig} returns this
 */
proto.powergate.user.v1.FilConfig.prototype.setDealStartOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional bool verified_deal = 11;
 * @return {boolean}
 */
proto.powergate.user.v1.FilConfig.prototype.getVerifiedDeal = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.powergate.user.v1.FilConfig} returns this
 */
proto.powergate.user.v1.FilConfig.prototype.setVerifiedDeal = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.ColdConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.ColdConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.ColdConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.ColdConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    filecoin: (f = msg.getFilecoin()) && proto.powergate.user.v1.FilConfig.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.ColdConfig}
 */
proto.powergate.user.v1.ColdConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.ColdConfig;
  return proto.powergate.user.v1.ColdConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.ColdConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.ColdConfig}
 */
proto.powergate.user.v1.ColdConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 2:
      var value = new proto.powergate.user.v1.FilConfig;
      reader.readMessage(value,proto.powergate.user.v1.FilConfig.deserializeBinaryFromReader);
      msg.setFilecoin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.ColdConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.ColdConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.ColdConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.ColdConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getFilecoin();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.powergate.user.v1.FilConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.powergate.user.v1.ColdConfig.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.powergate.user.v1.ColdConfig} returns this
 */
proto.powergate.user.v1.ColdConfig.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional FilConfig filecoin = 2;
 * @return {?proto.powergate.user.v1.FilConfig}
 */
proto.powergate.user.v1.ColdConfig.prototype.getFilecoin = function() {
  return /** @type{?proto.powergate.user.v1.FilConfig} */ (
    jspb.Message.getWrapperField(this, proto.powergate.user.v1.FilConfig, 2));
};


/**
 * @param {?proto.powergate.user.v1.FilConfig|undefined} value
 * @return {!proto.powergate.user.v1.ColdConfig} returns this
*/
proto.powergate.user.v1.ColdConfig.prototype.setFilecoin = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.powergate.user.v1.ColdConfig} returns this
 */
proto.powergate.user.v1.ColdConfig.prototype.clearFilecoin = function() {
  return this.setFilecoin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.powergate.user.v1.ColdConfig.prototype.hasFilecoin = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.StorageConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.StorageConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.StorageConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.StorageConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    hot: (f = msg.getHot()) && proto.powergate.user.v1.HotConfig.toObject(includeInstance, f),
    cold: (f = msg.getCold()) && proto.powergate.user.v1.ColdConfig.toObject(includeInstance, f),
    repairable: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.StorageConfig}
 */
proto.powergate.user.v1.StorageConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.StorageConfig;
  return proto.powergate.user.v1.StorageConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.StorageConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.StorageConfig}
 */
proto.powergate.user.v1.StorageConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.powergate.user.v1.HotConfig;
      reader.readMessage(value,proto.powergate.user.v1.HotConfig.deserializeBinaryFromReader);
      msg.setHot(value);
      break;
    case 2:
      var value = new proto.powergate.user.v1.ColdConfig;
      reader.readMessage(value,proto.powergate.user.v1.ColdConfig.deserializeBinaryFromReader);
      msg.setCold(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRepairable(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.StorageConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.StorageConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.StorageConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.StorageConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHot();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.powergate.user.v1.HotConfig.serializeBinaryToWriter
    );
  }
  f = message.getCold();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.powergate.user.v1.ColdConfig.serializeBinaryToWriter
    );
  }
  f = message.getRepairable();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional HotConfig hot = 1;
 * @return {?proto.powergate.user.v1.HotConfig}
 */
proto.powergate.user.v1.StorageConfig.prototype.getHot = function() {
  return /** @type{?proto.powergate.user.v1.HotConfig} */ (
    jspb.Message.getWrapperField(this, proto.powergate.user.v1.HotConfig, 1));
};


/**
 * @param {?proto.powergate.user.v1.HotConfig|undefined} value
 * @return {!proto.powergate.user.v1.StorageConfig} returns this
*/
proto.powergate.user.v1.StorageConfig.prototype.setHot = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.powergate.user.v1.StorageConfig} returns this
 */
proto.powergate.user.v1.StorageConfig.prototype.clearHot = function() {
  return this.setHot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.powergate.user.v1.StorageConfig.prototype.hasHot = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ColdConfig cold = 2;
 * @return {?proto.powergate.user.v1.ColdConfig}
 */
proto.powergate.user.v1.StorageConfig.prototype.getCold = function() {
  return /** @type{?proto.powergate.user.v1.ColdConfig} */ (
    jspb.Message.getWrapperField(this, proto.powergate.user.v1.ColdConfig, 2));
};


/**
 * @param {?proto.powergate.user.v1.ColdConfig|undefined} value
 * @return {!proto.powergate.user.v1.StorageConfig} returns this
*/
proto.powergate.user.v1.StorageConfig.prototype.setCold = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.powergate.user.v1.StorageConfig} returns this
 */
proto.powergate.user.v1.StorageConfig.prototype.clearCold = function() {
  return this.setCold(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.powergate.user.v1.StorageConfig.prototype.hasCold = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool repairable = 3;
 * @return {boolean}
 */
proto.powergate.user.v1.StorageConfig.prototype.getRepairable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.powergate.user.v1.StorageConfig} returns this
 */
proto.powergate.user.v1.StorageConfig.prototype.setRepairable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.IpfsHotInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.IpfsHotInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.IpfsHotInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.IpfsHotInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    created: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.IpfsHotInfo}
 */
proto.powergate.user.v1.IpfsHotInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.IpfsHotInfo;
  return proto.powergate.user.v1.IpfsHotInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.IpfsHotInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.IpfsHotInfo}
 */
proto.powergate.user.v1.IpfsHotInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreated(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.IpfsHotInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.IpfsHotInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.IpfsHotInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.IpfsHotInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCreated();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 created = 1;
 * @return {number}
 */
proto.powergate.user.v1.IpfsHotInfo.prototype.getCreated = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.powergate.user.v1.IpfsHotInfo} returns this
 */
proto.powergate.user.v1.IpfsHotInfo.prototype.setCreated = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.HotInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.HotInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.HotInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.HotInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    size: jspb.Message.getFieldWithDefault(msg, 2, 0),
    ipfs: (f = msg.getIpfs()) && proto.powergate.user.v1.IpfsHotInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.HotInfo}
 */
proto.powergate.user.v1.HotInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.HotInfo;
  return proto.powergate.user.v1.HotInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.HotInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.HotInfo}
 */
proto.powergate.user.v1.HotInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
      break;
    case 3:
      var value = new proto.powergate.user.v1.IpfsHotInfo;
      reader.readMessage(value,proto.powergate.user.v1.IpfsHotInfo.deserializeBinaryFromReader);
      msg.setIpfs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.HotInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.HotInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.HotInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.HotInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getIpfs();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.powergate.user.v1.IpfsHotInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.powergate.user.v1.HotInfo.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.powergate.user.v1.HotInfo} returns this
 */
proto.powergate.user.v1.HotInfo.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional int64 size = 2;
 * @return {number}
 */
proto.powergate.user.v1.HotInfo.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.powergate.user.v1.HotInfo} returns this
 */
proto.powergate.user.v1.HotInfo.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional IpfsHotInfo ipfs = 3;
 * @return {?proto.powergate.user.v1.IpfsHotInfo}
 */
proto.powergate.user.v1.HotInfo.prototype.getIpfs = function() {
  return /** @type{?proto.powergate.user.v1.IpfsHotInfo} */ (
    jspb.Message.getWrapperField(this, proto.powergate.user.v1.IpfsHotInfo, 3));
};


/**
 * @param {?proto.powergate.user.v1.IpfsHotInfo|undefined} value
 * @return {!proto.powergate.user.v1.HotInfo} returns this
*/
proto.powergate.user.v1.HotInfo.prototype.setIpfs = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.powergate.user.v1.HotInfo} returns this
 */
proto.powergate.user.v1.HotInfo.prototype.clearIpfs = function() {
  return this.setIpfs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.powergate.user.v1.HotInfo.prototype.hasIpfs = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.FilStorage.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.FilStorage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.FilStorage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.FilStorage.toObject = function(includeInstance, msg) {
  var f, obj = {
    dealId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    renewed: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    duration: jspb.Message.getFieldWithDefault(msg, 3, 0),
    startEpoch: jspb.Message.getFieldWithDefault(msg, 4, 0),
    miner: jspb.Message.getFieldWithDefault(msg, 5, ""),
    epochPrice: jspb.Message.getFieldWithDefault(msg, 6, 0),
    pieceCid: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.FilStorage}
 */
proto.powergate.user.v1.FilStorage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.FilStorage;
  return proto.powergate.user.v1.FilStorage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.FilStorage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.FilStorage}
 */
proto.powergate.user.v1.FilStorage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDealId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRenewed(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDuration(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStartEpoch(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMiner(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setEpochPrice(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPieceCid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.FilStorage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.FilStorage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.FilStorage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.FilStorage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDealId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRenewed();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getStartEpoch();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getMiner();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getEpochPrice();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getPieceCid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional int64 deal_id = 1;
 * @return {number}
 */
proto.powergate.user.v1.FilStorage.prototype.getDealId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.powergate.user.v1.FilStorage} returns this
 */
proto.powergate.user.v1.FilStorage.prototype.setDealId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool renewed = 2;
 * @return {boolean}
 */
proto.powergate.user.v1.FilStorage.prototype.getRenewed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.powergate.user.v1.FilStorage} returns this
 */
proto.powergate.user.v1.FilStorage.prototype.setRenewed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional int64 duration = 3;
 * @return {number}
 */
proto.powergate.user.v1.FilStorage.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.powergate.user.v1.FilStorage} returns this
 */
proto.powergate.user.v1.FilStorage.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 start_epoch = 4;
 * @return {number}
 */
proto.powergate.user.v1.FilStorage.prototype.getStartEpoch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.powergate.user.v1.FilStorage} returns this
 */
proto.powergate.user.v1.FilStorage.prototype.setStartEpoch = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string miner = 5;
 * @return {string}
 */
proto.powergate.user.v1.FilStorage.prototype.getMiner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.FilStorage} returns this
 */
proto.powergate.user.v1.FilStorage.prototype.setMiner = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint64 epoch_price = 6;
 * @return {number}
 */
proto.powergate.user.v1.FilStorage.prototype.getEpochPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.powergate.user.v1.FilStorage} returns this
 */
proto.powergate.user.v1.FilStorage.prototype.setEpochPrice = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string piece_cid = 7;
 * @return {string}
 */
proto.powergate.user.v1.FilStorage.prototype.getPieceCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.FilStorage} returns this
 */
proto.powergate.user.v1.FilStorage.prototype.setPieceCid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.powergate.user.v1.FilInfo.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.FilInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.FilInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.FilInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.FilInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataCid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    size: jspb.Message.getFieldWithDefault(msg, 2, 0),
    proposalsList: jspb.Message.toObjectList(msg.getProposalsList(),
    proto.powergate.user.v1.FilStorage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.FilInfo}
 */
proto.powergate.user.v1.FilInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.FilInfo;
  return proto.powergate.user.v1.FilInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.FilInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.FilInfo}
 */
proto.powergate.user.v1.FilInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDataCid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSize(value);
      break;
    case 3:
      var value = new proto.powergate.user.v1.FilStorage;
      reader.readMessage(value,proto.powergate.user.v1.FilStorage.deserializeBinaryFromReader);
      msg.addProposals(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.FilInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.FilInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.FilInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.FilInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataCid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getProposalsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.powergate.user.v1.FilStorage.serializeBinaryToWriter
    );
  }
};


/**
 * optional string data_cid = 1;
 * @return {string}
 */
proto.powergate.user.v1.FilInfo.prototype.getDataCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.FilInfo} returns this
 */
proto.powergate.user.v1.FilInfo.prototype.setDataCid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 size = 2;
 * @return {number}
 */
proto.powergate.user.v1.FilInfo.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.powergate.user.v1.FilInfo} returns this
 */
proto.powergate.user.v1.FilInfo.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated FilStorage proposals = 3;
 * @return {!Array<!proto.powergate.user.v1.FilStorage>}
 */
proto.powergate.user.v1.FilInfo.prototype.getProposalsList = function() {
  return /** @type{!Array<!proto.powergate.user.v1.FilStorage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.powergate.user.v1.FilStorage, 3));
};


/**
 * @param {!Array<!proto.powergate.user.v1.FilStorage>} value
 * @return {!proto.powergate.user.v1.FilInfo} returns this
*/
proto.powergate.user.v1.FilInfo.prototype.setProposalsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.powergate.user.v1.FilStorage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.powergate.user.v1.FilStorage}
 */
proto.powergate.user.v1.FilInfo.prototype.addProposals = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.powergate.user.v1.FilStorage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.powergate.user.v1.FilInfo} returns this
 */
proto.powergate.user.v1.FilInfo.prototype.clearProposalsList = function() {
  return this.setProposalsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.ColdInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.ColdInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.ColdInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.ColdInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    filecoin: (f = msg.getFilecoin()) && proto.powergate.user.v1.FilInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.ColdInfo}
 */
proto.powergate.user.v1.ColdInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.ColdInfo;
  return proto.powergate.user.v1.ColdInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.ColdInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.ColdInfo}
 */
proto.powergate.user.v1.ColdInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 2:
      var value = new proto.powergate.user.v1.FilInfo;
      reader.readMessage(value,proto.powergate.user.v1.FilInfo.deserializeBinaryFromReader);
      msg.setFilecoin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.ColdInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.ColdInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.ColdInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.ColdInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getFilecoin();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.powergate.user.v1.FilInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.powergate.user.v1.ColdInfo.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.powergate.user.v1.ColdInfo} returns this
 */
proto.powergate.user.v1.ColdInfo.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional FilInfo filecoin = 2;
 * @return {?proto.powergate.user.v1.FilInfo}
 */
proto.powergate.user.v1.ColdInfo.prototype.getFilecoin = function() {
  return /** @type{?proto.powergate.user.v1.FilInfo} */ (
    jspb.Message.getWrapperField(this, proto.powergate.user.v1.FilInfo, 2));
};


/**
 * @param {?proto.powergate.user.v1.FilInfo|undefined} value
 * @return {!proto.powergate.user.v1.ColdInfo} returns this
*/
proto.powergate.user.v1.ColdInfo.prototype.setFilecoin = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.powergate.user.v1.ColdInfo} returns this
 */
proto.powergate.user.v1.ColdInfo.prototype.clearFilecoin = function() {
  return this.setFilecoin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.powergate.user.v1.ColdInfo.prototype.hasFilecoin = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.StorageInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.StorageInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.StorageInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.StorageInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    jobId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    created: jspb.Message.getFieldWithDefault(msg, 3, 0),
    hot: (f = msg.getHot()) && proto.powergate.user.v1.HotInfo.toObject(includeInstance, f),
    cold: (f = msg.getCold()) && proto.powergate.user.v1.ColdInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.StorageInfo}
 */
proto.powergate.user.v1.StorageInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.StorageInfo;
  return proto.powergate.user.v1.StorageInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.StorageInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.StorageInfo}
 */
proto.powergate.user.v1.StorageInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setJobId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreated(value);
      break;
    case 4:
      var value = new proto.powergate.user.v1.HotInfo;
      reader.readMessage(value,proto.powergate.user.v1.HotInfo.deserializeBinaryFromReader);
      msg.setHot(value);
      break;
    case 5:
      var value = new proto.powergate.user.v1.ColdInfo;
      reader.readMessage(value,proto.powergate.user.v1.ColdInfo.deserializeBinaryFromReader);
      msg.setCold(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.StorageInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.StorageInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.StorageInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.StorageInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJobId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCreated();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getHot();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.powergate.user.v1.HotInfo.serializeBinaryToWriter
    );
  }
  f = message.getCold();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.powergate.user.v1.ColdInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string job_id = 1;
 * @return {string}
 */
proto.powergate.user.v1.StorageInfo.prototype.getJobId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.StorageInfo} returns this
 */
proto.powergate.user.v1.StorageInfo.prototype.setJobId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string cid = 2;
 * @return {string}
 */
proto.powergate.user.v1.StorageInfo.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.StorageInfo} returns this
 */
proto.powergate.user.v1.StorageInfo.prototype.setCid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 created = 3;
 * @return {number}
 */
proto.powergate.user.v1.StorageInfo.prototype.getCreated = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.powergate.user.v1.StorageInfo} returns this
 */
proto.powergate.user.v1.StorageInfo.prototype.setCreated = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional HotInfo hot = 4;
 * @return {?proto.powergate.user.v1.HotInfo}
 */
proto.powergate.user.v1.StorageInfo.prototype.getHot = function() {
  return /** @type{?proto.powergate.user.v1.HotInfo} */ (
    jspb.Message.getWrapperField(this, proto.powergate.user.v1.HotInfo, 4));
};


/**
 * @param {?proto.powergate.user.v1.HotInfo|undefined} value
 * @return {!proto.powergate.user.v1.StorageInfo} returns this
*/
proto.powergate.user.v1.StorageInfo.prototype.setHot = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.powergate.user.v1.StorageInfo} returns this
 */
proto.powergate.user.v1.StorageInfo.prototype.clearHot = function() {
  return this.setHot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.powergate.user.v1.StorageInfo.prototype.hasHot = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ColdInfo cold = 5;
 * @return {?proto.powergate.user.v1.ColdInfo}
 */
proto.powergate.user.v1.StorageInfo.prototype.getCold = function() {
  return /** @type{?proto.powergate.user.v1.ColdInfo} */ (
    jspb.Message.getWrapperField(this, proto.powergate.user.v1.ColdInfo, 5));
};


/**
 * @param {?proto.powergate.user.v1.ColdInfo|undefined} value
 * @return {!proto.powergate.user.v1.StorageInfo} returns this
*/
proto.powergate.user.v1.StorageInfo.prototype.setCold = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.powergate.user.v1.StorageInfo} returns this
 */
proto.powergate.user.v1.StorageInfo.prototype.clearCold = function() {
  return this.setCold(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.powergate.user.v1.StorageInfo.prototype.hasCold = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.powergate.user.v1.CidInfo.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.CidInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.CidInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.CidInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.CidInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    cid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    latestPushedStorageConfig: (f = msg.getLatestPushedStorageConfig()) && proto.powergate.user.v1.StorageConfig.toObject(includeInstance, f),
    currentStorageInfo: (f = msg.getCurrentStorageInfo()) && proto.powergate.user.v1.StorageInfo.toObject(includeInstance, f),
    queuedStorageJobsList: jspb.Message.toObjectList(msg.getQueuedStorageJobsList(),
    proto.powergate.user.v1.StorageJob.toObject, includeInstance),
    executingStorageJob: (f = msg.getExecutingStorageJob()) && proto.powergate.user.v1.StorageJob.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.CidInfo}
 */
proto.powergate.user.v1.CidInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.CidInfo;
  return proto.powergate.user.v1.CidInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.CidInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.CidInfo}
 */
proto.powergate.user.v1.CidInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    case 2:
      var value = new proto.powergate.user.v1.StorageConfig;
      reader.readMessage(value,proto.powergate.user.v1.StorageConfig.deserializeBinaryFromReader);
      msg.setLatestPushedStorageConfig(value);
      break;
    case 3:
      var value = new proto.powergate.user.v1.StorageInfo;
      reader.readMessage(value,proto.powergate.user.v1.StorageInfo.deserializeBinaryFromReader);
      msg.setCurrentStorageInfo(value);
      break;
    case 4:
      var value = new proto.powergate.user.v1.StorageJob;
      reader.readMessage(value,proto.powergate.user.v1.StorageJob.deserializeBinaryFromReader);
      msg.addQueuedStorageJobs(value);
      break;
    case 5:
      var value = new proto.powergate.user.v1.StorageJob;
      reader.readMessage(value,proto.powergate.user.v1.StorageJob.deserializeBinaryFromReader);
      msg.setExecutingStorageJob(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.CidInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.CidInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.CidInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.CidInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLatestPushedStorageConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.powergate.user.v1.StorageConfig.serializeBinaryToWriter
    );
  }
  f = message.getCurrentStorageInfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.powergate.user.v1.StorageInfo.serializeBinaryToWriter
    );
  }
  f = message.getQueuedStorageJobsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.powergate.user.v1.StorageJob.serializeBinaryToWriter
    );
  }
  f = message.getExecutingStorageJob();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.powergate.user.v1.StorageJob.serializeBinaryToWriter
    );
  }
};


/**
 * optional string cid = 1;
 * @return {string}
 */
proto.powergate.user.v1.CidInfo.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.CidInfo} returns this
 */
proto.powergate.user.v1.CidInfo.prototype.setCid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional StorageConfig latest_pushed_storage_config = 2;
 * @return {?proto.powergate.user.v1.StorageConfig}
 */
proto.powergate.user.v1.CidInfo.prototype.getLatestPushedStorageConfig = function() {
  return /** @type{?proto.powergate.user.v1.StorageConfig} */ (
    jspb.Message.getWrapperField(this, proto.powergate.user.v1.StorageConfig, 2));
};


/**
 * @param {?proto.powergate.user.v1.StorageConfig|undefined} value
 * @return {!proto.powergate.user.v1.CidInfo} returns this
*/
proto.powergate.user.v1.CidInfo.prototype.setLatestPushedStorageConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.powergate.user.v1.CidInfo} returns this
 */
proto.powergate.user.v1.CidInfo.prototype.clearLatestPushedStorageConfig = function() {
  return this.setLatestPushedStorageConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.powergate.user.v1.CidInfo.prototype.hasLatestPushedStorageConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional StorageInfo current_storage_info = 3;
 * @return {?proto.powergate.user.v1.StorageInfo}
 */
proto.powergate.user.v1.CidInfo.prototype.getCurrentStorageInfo = function() {
  return /** @type{?proto.powergate.user.v1.StorageInfo} */ (
    jspb.Message.getWrapperField(this, proto.powergate.user.v1.StorageInfo, 3));
};


/**
 * @param {?proto.powergate.user.v1.StorageInfo|undefined} value
 * @return {!proto.powergate.user.v1.CidInfo} returns this
*/
proto.powergate.user.v1.CidInfo.prototype.setCurrentStorageInfo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.powergate.user.v1.CidInfo} returns this
 */
proto.powergate.user.v1.CidInfo.prototype.clearCurrentStorageInfo = function() {
  return this.setCurrentStorageInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.powergate.user.v1.CidInfo.prototype.hasCurrentStorageInfo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated StorageJob queued_storage_jobs = 4;
 * @return {!Array<!proto.powergate.user.v1.StorageJob>}
 */
proto.powergate.user.v1.CidInfo.prototype.getQueuedStorageJobsList = function() {
  return /** @type{!Array<!proto.powergate.user.v1.StorageJob>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.powergate.user.v1.StorageJob, 4));
};


/**
 * @param {!Array<!proto.powergate.user.v1.StorageJob>} value
 * @return {!proto.powergate.user.v1.CidInfo} returns this
*/
proto.powergate.user.v1.CidInfo.prototype.setQueuedStorageJobsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.powergate.user.v1.StorageJob=} opt_value
 * @param {number=} opt_index
 * @return {!proto.powergate.user.v1.StorageJob}
 */
proto.powergate.user.v1.CidInfo.prototype.addQueuedStorageJobs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.powergate.user.v1.StorageJob, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.powergate.user.v1.CidInfo} returns this
 */
proto.powergate.user.v1.CidInfo.prototype.clearQueuedStorageJobsList = function() {
  return this.setQueuedStorageJobsList([]);
};


/**
 * optional StorageJob executing_storage_job = 5;
 * @return {?proto.powergate.user.v1.StorageJob}
 */
proto.powergate.user.v1.CidInfo.prototype.getExecutingStorageJob = function() {
  return /** @type{?proto.powergate.user.v1.StorageJob} */ (
    jspb.Message.getWrapperField(this, proto.powergate.user.v1.StorageJob, 5));
};


/**
 * @param {?proto.powergate.user.v1.StorageJob|undefined} value
 * @return {!proto.powergate.user.v1.CidInfo} returns this
*/
proto.powergate.user.v1.CidInfo.prototype.setExecutingStorageJob = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.powergate.user.v1.CidInfo} returns this
 */
proto.powergate.user.v1.CidInfo.prototype.clearExecutingStorageJob = function() {
  return this.setExecutingStorageJob(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.powergate.user.v1.CidInfo.prototype.hasExecutingStorageJob = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.DealInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.DealInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.DealInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.DealInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    proposalCid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    stateId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    stateName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    miner: jspb.Message.getFieldWithDefault(msg, 4, ""),
    pieceCid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    size: jspb.Message.getFieldWithDefault(msg, 6, 0),
    pricePerEpoch: jspb.Message.getFieldWithDefault(msg, 7, 0),
    startEpoch: jspb.Message.getFieldWithDefault(msg, 8, 0),
    duration: jspb.Message.getFieldWithDefault(msg, 9, 0),
    dealId: jspb.Message.getFieldWithDefault(msg, 10, 0),
    activationEpoch: jspb.Message.getFieldWithDefault(msg, 11, 0),
    message: jspb.Message.getFieldWithDefault(msg, 12, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.DealInfo}
 */
proto.powergate.user.v1.DealInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.DealInfo;
  return proto.powergate.user.v1.DealInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.DealInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.DealInfo}
 */
proto.powergate.user.v1.DealInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProposalCid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStateId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStateName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMiner(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPieceCid(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSize(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPricePerEpoch(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStartEpoch(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDuration(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDealId(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setActivationEpoch(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.DealInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.DealInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.DealInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.DealInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProposalCid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStateId();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getStateName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMiner();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPieceCid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getPricePerEpoch();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getStartEpoch();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = message.getDealId();
  if (f !== 0) {
    writer.writeUint64(
      10,
      f
    );
  }
  f = message.getActivationEpoch();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string proposal_cid = 1;
 * @return {string}
 */
proto.powergate.user.v1.DealInfo.prototype.getProposalCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.DealInfo} returns this
 */
proto.powergate.user.v1.DealInfo.prototype.setProposalCid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 state_id = 2;
 * @return {number}
 */
proto.powergate.user.v1.DealInfo.prototype.getStateId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.powergate.user.v1.DealInfo} returns this
 */
proto.powergate.user.v1.DealInfo.prototype.setStateId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string state_name = 3;
 * @return {string}
 */
proto.powergate.user.v1.DealInfo.prototype.getStateName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.DealInfo} returns this
 */
proto.powergate.user.v1.DealInfo.prototype.setStateName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string miner = 4;
 * @return {string}
 */
proto.powergate.user.v1.DealInfo.prototype.getMiner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.DealInfo} returns this
 */
proto.powergate.user.v1.DealInfo.prototype.setMiner = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string piece_cid = 5;
 * @return {string}
 */
proto.powergate.user.v1.DealInfo.prototype.getPieceCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.DealInfo} returns this
 */
proto.powergate.user.v1.DealInfo.prototype.setPieceCid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint64 size = 6;
 * @return {number}
 */
proto.powergate.user.v1.DealInfo.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.powergate.user.v1.DealInfo} returns this
 */
proto.powergate.user.v1.DealInfo.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 price_per_epoch = 7;
 * @return {number}
 */
proto.powergate.user.v1.DealInfo.prototype.getPricePerEpoch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.powergate.user.v1.DealInfo} returns this
 */
proto.powergate.user.v1.DealInfo.prototype.setPricePerEpoch = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint64 start_epoch = 8;
 * @return {number}
 */
proto.powergate.user.v1.DealInfo.prototype.getStartEpoch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.powergate.user.v1.DealInfo} returns this
 */
proto.powergate.user.v1.DealInfo.prototype.setStartEpoch = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint64 duration = 9;
 * @return {number}
 */
proto.powergate.user.v1.DealInfo.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.powergate.user.v1.DealInfo} returns this
 */
proto.powergate.user.v1.DealInfo.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint64 deal_id = 10;
 * @return {number}
 */
proto.powergate.user.v1.DealInfo.prototype.getDealId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.powergate.user.v1.DealInfo} returns this
 */
proto.powergate.user.v1.DealInfo.prototype.setDealId = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int64 activation_epoch = 11;
 * @return {number}
 */
proto.powergate.user.v1.DealInfo.prototype.getActivationEpoch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.powergate.user.v1.DealInfo} returns this
 */
proto.powergate.user.v1.DealInfo.prototype.setActivationEpoch = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional string message = 12;
 * @return {string}
 */
proto.powergate.user.v1.DealInfo.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.DealInfo} returns this
 */
proto.powergate.user.v1.DealInfo.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.powergate.user.v1.StorageJob.repeatedFields_ = [6,7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.StorageJob.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.StorageJob.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.StorageJob} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.StorageJob.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    apiId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    cid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    status: jspb.Message.getFieldWithDefault(msg, 4, 0),
    errorCause: jspb.Message.getFieldWithDefault(msg, 5, ""),
    dealInfoList: jspb.Message.toObjectList(msg.getDealInfoList(),
    proto.powergate.user.v1.DealInfo.toObject, includeInstance),
    dealErrorsList: jspb.Message.toObjectList(msg.getDealErrorsList(),
    proto.powergate.user.v1.DealError.toObject, includeInstance),
    createdAt: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.StorageJob}
 */
proto.powergate.user.v1.StorageJob.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.StorageJob;
  return proto.powergate.user.v1.StorageJob.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.StorageJob} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.StorageJob}
 */
proto.powergate.user.v1.StorageJob.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setApiId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    case 4:
      var value = /** @type {!proto.powergate.user.v1.JobStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorCause(value);
      break;
    case 6:
      var value = new proto.powergate.user.v1.DealInfo;
      reader.readMessage(value,proto.powergate.user.v1.DealInfo.deserializeBinaryFromReader);
      msg.addDealInfo(value);
      break;
    case 7:
      var value = new proto.powergate.user.v1.DealError;
      reader.readMessage(value,proto.powergate.user.v1.DealError.deserializeBinaryFromReader);
      msg.addDealErrors(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.StorageJob.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.StorageJob.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.StorageJob} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.StorageJob.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getApiId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getErrorCause();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDealInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.powergate.user.v1.DealInfo.serializeBinaryToWriter
    );
  }
  f = message.getDealErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.powergate.user.v1.DealError.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.powergate.user.v1.StorageJob.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.StorageJob} returns this
 */
proto.powergate.user.v1.StorageJob.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string api_id = 2;
 * @return {string}
 */
proto.powergate.user.v1.StorageJob.prototype.getApiId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.StorageJob} returns this
 */
proto.powergate.user.v1.StorageJob.prototype.setApiId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string cid = 3;
 * @return {string}
 */
proto.powergate.user.v1.StorageJob.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.StorageJob} returns this
 */
proto.powergate.user.v1.StorageJob.prototype.setCid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional JobStatus status = 4;
 * @return {!proto.powergate.user.v1.JobStatus}
 */
proto.powergate.user.v1.StorageJob.prototype.getStatus = function() {
  return /** @type {!proto.powergate.user.v1.JobStatus} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.powergate.user.v1.JobStatus} value
 * @return {!proto.powergate.user.v1.StorageJob} returns this
 */
proto.powergate.user.v1.StorageJob.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string error_cause = 5;
 * @return {string}
 */
proto.powergate.user.v1.StorageJob.prototype.getErrorCause = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.StorageJob} returns this
 */
proto.powergate.user.v1.StorageJob.prototype.setErrorCause = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated DealInfo deal_info = 6;
 * @return {!Array<!proto.powergate.user.v1.DealInfo>}
 */
proto.powergate.user.v1.StorageJob.prototype.getDealInfoList = function() {
  return /** @type{!Array<!proto.powergate.user.v1.DealInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.powergate.user.v1.DealInfo, 6));
};


/**
 * @param {!Array<!proto.powergate.user.v1.DealInfo>} value
 * @return {!proto.powergate.user.v1.StorageJob} returns this
*/
proto.powergate.user.v1.StorageJob.prototype.setDealInfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.powergate.user.v1.DealInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.powergate.user.v1.DealInfo}
 */
proto.powergate.user.v1.StorageJob.prototype.addDealInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.powergate.user.v1.DealInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.powergate.user.v1.StorageJob} returns this
 */
proto.powergate.user.v1.StorageJob.prototype.clearDealInfoList = function() {
  return this.setDealInfoList([]);
};


/**
 * repeated DealError deal_errors = 7;
 * @return {!Array<!proto.powergate.user.v1.DealError>}
 */
proto.powergate.user.v1.StorageJob.prototype.getDealErrorsList = function() {
  return /** @type{!Array<!proto.powergate.user.v1.DealError>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.powergate.user.v1.DealError, 7));
};


/**
 * @param {!Array<!proto.powergate.user.v1.DealError>} value
 * @return {!proto.powergate.user.v1.StorageJob} returns this
*/
proto.powergate.user.v1.StorageJob.prototype.setDealErrorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.powergate.user.v1.DealError=} opt_value
 * @param {number=} opt_index
 * @return {!proto.powergate.user.v1.DealError}
 */
proto.powergate.user.v1.StorageJob.prototype.addDealErrors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.powergate.user.v1.DealError, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.powergate.user.v1.StorageJob} returns this
 */
proto.powergate.user.v1.StorageJob.prototype.clearDealErrorsList = function() {
  return this.setDealErrorsList([]);
};


/**
 * optional int64 created_at = 8;
 * @return {number}
 */
proto.powergate.user.v1.StorageJob.prototype.getCreatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.powergate.user.v1.StorageJob} returns this
 */
proto.powergate.user.v1.StorageJob.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.DealError.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.DealError.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.DealError} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.DealError.toObject = function(includeInstance, msg) {
  var f, obj = {
    proposalCid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    miner: jspb.Message.getFieldWithDefault(msg, 2, ""),
    message: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.DealError}
 */
proto.powergate.user.v1.DealError.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.DealError;
  return proto.powergate.user.v1.DealError.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.DealError} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.DealError}
 */
proto.powergate.user.v1.DealError.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProposalCid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMiner(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.DealError.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.DealError.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.DealError} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.DealError.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProposalCid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMiner();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string proposal_cid = 1;
 * @return {string}
 */
proto.powergate.user.v1.DealError.prototype.getProposalCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.DealError} returns this
 */
proto.powergate.user.v1.DealError.prototype.setProposalCid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string miner = 2;
 * @return {string}
 */
proto.powergate.user.v1.DealError.prototype.getMiner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.DealError} returns this
 */
proto.powergate.user.v1.DealError.prototype.setMiner = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.powergate.user.v1.DealError.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.DealError} returns this
 */
proto.powergate.user.v1.DealError.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.LogEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.LogEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.LogEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.LogEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    cid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    jobId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    time: jspb.Message.getFieldWithDefault(msg, 3, 0),
    message: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.LogEntry}
 */
proto.powergate.user.v1.LogEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.LogEntry;
  return proto.powergate.user.v1.LogEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.LogEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.LogEntry}
 */
proto.powergate.user.v1.LogEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setJobId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTime(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.LogEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.LogEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.LogEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.LogEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getJobId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTime();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string cid = 1;
 * @return {string}
 */
proto.powergate.user.v1.LogEntry.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.LogEntry} returns this
 */
proto.powergate.user.v1.LogEntry.prototype.setCid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string job_id = 2;
 * @return {string}
 */
proto.powergate.user.v1.LogEntry.prototype.getJobId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.LogEntry} returns this
 */
proto.powergate.user.v1.LogEntry.prototype.setJobId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 time = 3;
 * @return {number}
 */
proto.powergate.user.v1.LogEntry.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.powergate.user.v1.LogEntry} returns this
 */
proto.powergate.user.v1.LogEntry.prototype.setTime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.powergate.user.v1.LogEntry.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.LogEntry} returns this
 */
proto.powergate.user.v1.LogEntry.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.powergate.user.v1.DealRecordsConfig.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.DealRecordsConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.DealRecordsConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.DealRecordsConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.DealRecordsConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    fromAddrsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    dataCidsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    includePending: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    includeFinal: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    ascending: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    includeFailed: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.DealRecordsConfig}
 */
proto.powergate.user.v1.DealRecordsConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.DealRecordsConfig;
  return proto.powergate.user.v1.DealRecordsConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.DealRecordsConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.DealRecordsConfig}
 */
proto.powergate.user.v1.DealRecordsConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addFromAddrs(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addDataCids(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludePending(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeFinal(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAscending(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeFailed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.DealRecordsConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.DealRecordsConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.DealRecordsConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.DealRecordsConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFromAddrsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getDataCidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getIncludePending();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getIncludeFinal();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getAscending();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getIncludeFailed();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * repeated string from_addrs = 1;
 * @return {!Array<string>}
 */
proto.powergate.user.v1.DealRecordsConfig.prototype.getFromAddrsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.powergate.user.v1.DealRecordsConfig} returns this
 */
proto.powergate.user.v1.DealRecordsConfig.prototype.setFromAddrsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.powergate.user.v1.DealRecordsConfig} returns this
 */
proto.powergate.user.v1.DealRecordsConfig.prototype.addFromAddrs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.powergate.user.v1.DealRecordsConfig} returns this
 */
proto.powergate.user.v1.DealRecordsConfig.prototype.clearFromAddrsList = function() {
  return this.setFromAddrsList([]);
};


/**
 * repeated string data_cids = 2;
 * @return {!Array<string>}
 */
proto.powergate.user.v1.DealRecordsConfig.prototype.getDataCidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.powergate.user.v1.DealRecordsConfig} returns this
 */
proto.powergate.user.v1.DealRecordsConfig.prototype.setDataCidsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.powergate.user.v1.DealRecordsConfig} returns this
 */
proto.powergate.user.v1.DealRecordsConfig.prototype.addDataCids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.powergate.user.v1.DealRecordsConfig} returns this
 */
proto.powergate.user.v1.DealRecordsConfig.prototype.clearDataCidsList = function() {
  return this.setDataCidsList([]);
};


/**
 * optional bool include_pending = 3;
 * @return {boolean}
 */
proto.powergate.user.v1.DealRecordsConfig.prototype.getIncludePending = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.powergate.user.v1.DealRecordsConfig} returns this
 */
proto.powergate.user.v1.DealRecordsConfig.prototype.setIncludePending = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool include_final = 4;
 * @return {boolean}
 */
proto.powergate.user.v1.DealRecordsConfig.prototype.getIncludeFinal = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.powergate.user.v1.DealRecordsConfig} returns this
 */
proto.powergate.user.v1.DealRecordsConfig.prototype.setIncludeFinal = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool ascending = 5;
 * @return {boolean}
 */
proto.powergate.user.v1.DealRecordsConfig.prototype.getAscending = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.powergate.user.v1.DealRecordsConfig} returns this
 */
proto.powergate.user.v1.DealRecordsConfig.prototype.setAscending = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool include_failed = 6;
 * @return {boolean}
 */
proto.powergate.user.v1.DealRecordsConfig.prototype.getIncludeFailed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.powergate.user.v1.DealRecordsConfig} returns this
 */
proto.powergate.user.v1.DealRecordsConfig.prototype.setIncludeFailed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.StorageDealInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.StorageDealInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.StorageDealInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.StorageDealInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    proposalCid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    stateId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    stateName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    miner: jspb.Message.getFieldWithDefault(msg, 4, ""),
    pieceCid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    size: jspb.Message.getFieldWithDefault(msg, 6, 0),
    pricePerEpoch: jspb.Message.getFieldWithDefault(msg, 7, 0),
    startEpoch: jspb.Message.getFieldWithDefault(msg, 8, 0),
    duration: jspb.Message.getFieldWithDefault(msg, 9, 0),
    dealId: jspb.Message.getFieldWithDefault(msg, 10, 0),
    activationEpoch: jspb.Message.getFieldWithDefault(msg, 11, 0),
    message: jspb.Message.getFieldWithDefault(msg, 12, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.StorageDealInfo}
 */
proto.powergate.user.v1.StorageDealInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.StorageDealInfo;
  return proto.powergate.user.v1.StorageDealInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.StorageDealInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.StorageDealInfo}
 */
proto.powergate.user.v1.StorageDealInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProposalCid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStateId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStateName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMiner(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPieceCid(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSize(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPricePerEpoch(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStartEpoch(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDuration(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDealId(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setActivationEpoch(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.StorageDealInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.StorageDealInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.StorageDealInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.StorageDealInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProposalCid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStateId();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getStateName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMiner();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPieceCid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getPricePerEpoch();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getStartEpoch();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = message.getDealId();
  if (f !== 0) {
    writer.writeUint64(
      10,
      f
    );
  }
  f = message.getActivationEpoch();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string proposal_cid = 1;
 * @return {string}
 */
proto.powergate.user.v1.StorageDealInfo.prototype.getProposalCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.StorageDealInfo} returns this
 */
proto.powergate.user.v1.StorageDealInfo.prototype.setProposalCid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 state_id = 2;
 * @return {number}
 */
proto.powergate.user.v1.StorageDealInfo.prototype.getStateId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.powergate.user.v1.StorageDealInfo} returns this
 */
proto.powergate.user.v1.StorageDealInfo.prototype.setStateId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string state_name = 3;
 * @return {string}
 */
proto.powergate.user.v1.StorageDealInfo.prototype.getStateName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.StorageDealInfo} returns this
 */
proto.powergate.user.v1.StorageDealInfo.prototype.setStateName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string miner = 4;
 * @return {string}
 */
proto.powergate.user.v1.StorageDealInfo.prototype.getMiner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.StorageDealInfo} returns this
 */
proto.powergate.user.v1.StorageDealInfo.prototype.setMiner = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string piece_cid = 5;
 * @return {string}
 */
proto.powergate.user.v1.StorageDealInfo.prototype.getPieceCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.StorageDealInfo} returns this
 */
proto.powergate.user.v1.StorageDealInfo.prototype.setPieceCid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint64 size = 6;
 * @return {number}
 */
proto.powergate.user.v1.StorageDealInfo.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.powergate.user.v1.StorageDealInfo} returns this
 */
proto.powergate.user.v1.StorageDealInfo.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 price_per_epoch = 7;
 * @return {number}
 */
proto.powergate.user.v1.StorageDealInfo.prototype.getPricePerEpoch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.powergate.user.v1.StorageDealInfo} returns this
 */
proto.powergate.user.v1.StorageDealInfo.prototype.setPricePerEpoch = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint64 start_epoch = 8;
 * @return {number}
 */
proto.powergate.user.v1.StorageDealInfo.prototype.getStartEpoch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.powergate.user.v1.StorageDealInfo} returns this
 */
proto.powergate.user.v1.StorageDealInfo.prototype.setStartEpoch = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint64 duration = 9;
 * @return {number}
 */
proto.powergate.user.v1.StorageDealInfo.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.powergate.user.v1.StorageDealInfo} returns this
 */
proto.powergate.user.v1.StorageDealInfo.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint64 deal_id = 10;
 * @return {number}
 */
proto.powergate.user.v1.StorageDealInfo.prototype.getDealId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.powergate.user.v1.StorageDealInfo} returns this
 */
proto.powergate.user.v1.StorageDealInfo.prototype.setDealId = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int64 activation_epoch = 11;
 * @return {number}
 */
proto.powergate.user.v1.StorageDealInfo.prototype.getActivationEpoch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.powergate.user.v1.StorageDealInfo} returns this
 */
proto.powergate.user.v1.StorageDealInfo.prototype.setActivationEpoch = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional string message = 12;
 * @return {string}
 */
proto.powergate.user.v1.StorageDealInfo.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.StorageDealInfo} returns this
 */
proto.powergate.user.v1.StorageDealInfo.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.StorageDealRecord.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.StorageDealRecord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.StorageDealRecord} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.StorageDealRecord.toObject = function(includeInstance, msg) {
  var f, obj = {
    rootCid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    address: jspb.Message.getFieldWithDefault(msg, 2, ""),
    time: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pending: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    dealInfo: (f = msg.getDealInfo()) && proto.powergate.user.v1.StorageDealInfo.toObject(includeInstance, f),
    transferSize: jspb.Message.getFieldWithDefault(msg, 6, 0),
    dataTransferStart: (f = msg.getDataTransferStart()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    dataTransferEnd: (f = msg.getDataTransferEnd()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    sealingStart: (f = msg.getSealingStart()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    sealingEnd: (f = msg.getSealingEnd()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    errMsg: jspb.Message.getFieldWithDefault(msg, 11, ""),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.StorageDealRecord}
 */
proto.powergate.user.v1.StorageDealRecord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.StorageDealRecord;
  return proto.powergate.user.v1.StorageDealRecord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.StorageDealRecord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.StorageDealRecord}
 */
proto.powergate.user.v1.StorageDealRecord.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRootCid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTime(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPending(value);
      break;
    case 5:
      var value = new proto.powergate.user.v1.StorageDealInfo;
      reader.readMessage(value,proto.powergate.user.v1.StorageDealInfo.deserializeBinaryFromReader);
      msg.setDealInfo(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTransferSize(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDataTransferStart(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDataTransferEnd(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setSealingStart(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setSealingEnd(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrMsg(value);
      break;
    case 12:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.StorageDealRecord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.StorageDealRecord.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.StorageDealRecord} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.StorageDealRecord.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRootCid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTime();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getPending();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getDealInfo();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.powergate.user.v1.StorageDealInfo.serializeBinaryToWriter
    );
  }
  f = message.getTransferSize();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getDataTransferStart();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDataTransferEnd();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSealingStart();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSealingEnd();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getErrMsg();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string root_cid = 1;
 * @return {string}
 */
proto.powergate.user.v1.StorageDealRecord.prototype.getRootCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.StorageDealRecord} returns this
 */
proto.powergate.user.v1.StorageDealRecord.prototype.setRootCid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string address = 2;
 * @return {string}
 */
proto.powergate.user.v1.StorageDealRecord.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.StorageDealRecord} returns this
 */
proto.powergate.user.v1.StorageDealRecord.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 time = 3;
 * @return {number}
 */
proto.powergate.user.v1.StorageDealRecord.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.powergate.user.v1.StorageDealRecord} returns this
 */
proto.powergate.user.v1.StorageDealRecord.prototype.setTime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool pending = 4;
 * @return {boolean}
 */
proto.powergate.user.v1.StorageDealRecord.prototype.getPending = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.powergate.user.v1.StorageDealRecord} returns this
 */
proto.powergate.user.v1.StorageDealRecord.prototype.setPending = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional StorageDealInfo deal_info = 5;
 * @return {?proto.powergate.user.v1.StorageDealInfo}
 */
proto.powergate.user.v1.StorageDealRecord.prototype.getDealInfo = function() {
  return /** @type{?proto.powergate.user.v1.StorageDealInfo} */ (
    jspb.Message.getWrapperField(this, proto.powergate.user.v1.StorageDealInfo, 5));
};


/**
 * @param {?proto.powergate.user.v1.StorageDealInfo|undefined} value
 * @return {!proto.powergate.user.v1.StorageDealRecord} returns this
*/
proto.powergate.user.v1.StorageDealRecord.prototype.setDealInfo = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.powergate.user.v1.StorageDealRecord} returns this
 */
proto.powergate.user.v1.StorageDealRecord.prototype.clearDealInfo = function() {
  return this.setDealInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.powergate.user.v1.StorageDealRecord.prototype.hasDealInfo = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int64 transfer_size = 6;
 * @return {number}
 */
proto.powergate.user.v1.StorageDealRecord.prototype.getTransferSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.powergate.user.v1.StorageDealRecord} returns this
 */
proto.powergate.user.v1.StorageDealRecord.prototype.setTransferSize = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp data_transfer_start = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.powergate.user.v1.StorageDealRecord.prototype.getDataTransferStart = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.powergate.user.v1.StorageDealRecord} returns this
*/
proto.powergate.user.v1.StorageDealRecord.prototype.setDataTransferStart = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.powergate.user.v1.StorageDealRecord} returns this
 */
proto.powergate.user.v1.StorageDealRecord.prototype.clearDataTransferStart = function() {
  return this.setDataTransferStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.powergate.user.v1.StorageDealRecord.prototype.hasDataTransferStart = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp data_transfer_end = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.powergate.user.v1.StorageDealRecord.prototype.getDataTransferEnd = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.powergate.user.v1.StorageDealRecord} returns this
*/
proto.powergate.user.v1.StorageDealRecord.prototype.setDataTransferEnd = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.powergate.user.v1.StorageDealRecord} returns this
 */
proto.powergate.user.v1.StorageDealRecord.prototype.clearDataTransferEnd = function() {
  return this.setDataTransferEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.powergate.user.v1.StorageDealRecord.prototype.hasDataTransferEnd = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Timestamp sealing_start = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.powergate.user.v1.StorageDealRecord.prototype.getSealingStart = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.powergate.user.v1.StorageDealRecord} returns this
*/
proto.powergate.user.v1.StorageDealRecord.prototype.setSealingStart = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.powergate.user.v1.StorageDealRecord} returns this
 */
proto.powergate.user.v1.StorageDealRecord.prototype.clearSealingStart = function() {
  return this.setSealingStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.powergate.user.v1.StorageDealRecord.prototype.hasSealingStart = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.Timestamp sealing_end = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.powergate.user.v1.StorageDealRecord.prototype.getSealingEnd = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.powergate.user.v1.StorageDealRecord} returns this
*/
proto.powergate.user.v1.StorageDealRecord.prototype.setSealingEnd = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.powergate.user.v1.StorageDealRecord} returns this
 */
proto.powergate.user.v1.StorageDealRecord.prototype.clearSealingEnd = function() {
  return this.setSealingEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.powergate.user.v1.StorageDealRecord.prototype.hasSealingEnd = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string err_msg = 11;
 * @return {string}
 */
proto.powergate.user.v1.StorageDealRecord.prototype.getErrMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.StorageDealRecord} returns this
 */
proto.powergate.user.v1.StorageDealRecord.prototype.setErrMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional google.protobuf.Timestamp updated_at = 12;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.powergate.user.v1.StorageDealRecord.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 12));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.powergate.user.v1.StorageDealRecord} returns this
*/
proto.powergate.user.v1.StorageDealRecord.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.powergate.user.v1.StorageDealRecord} returns this
 */
proto.powergate.user.v1.StorageDealRecord.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.powergate.user.v1.StorageDealRecord.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 12) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.RetrievalDealInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.RetrievalDealInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.RetrievalDealInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.RetrievalDealInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    rootCid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    size: jspb.Message.getFieldWithDefault(msg, 2, 0),
    minPrice: jspb.Message.getFieldWithDefault(msg, 3, 0),
    paymentInterval: jspb.Message.getFieldWithDefault(msg, 4, 0),
    paymentIntervalIncrease: jspb.Message.getFieldWithDefault(msg, 5, 0),
    miner: jspb.Message.getFieldWithDefault(msg, 6, ""),
    minerPeerId: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.RetrievalDealInfo}
 */
proto.powergate.user.v1.RetrievalDealInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.RetrievalDealInfo;
  return proto.powergate.user.v1.RetrievalDealInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.RetrievalDealInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.RetrievalDealInfo}
 */
proto.powergate.user.v1.RetrievalDealInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRootCid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSize(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMinPrice(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPaymentInterval(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPaymentIntervalIncrease(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMiner(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setMinerPeerId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.RetrievalDealInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.RetrievalDealInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.RetrievalDealInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.RetrievalDealInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRootCid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getMinPrice();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getPaymentInterval();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getPaymentIntervalIncrease();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getMiner();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getMinerPeerId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string root_cid = 1;
 * @return {string}
 */
proto.powergate.user.v1.RetrievalDealInfo.prototype.getRootCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.RetrievalDealInfo} returns this
 */
proto.powergate.user.v1.RetrievalDealInfo.prototype.setRootCid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 size = 2;
 * @return {number}
 */
proto.powergate.user.v1.RetrievalDealInfo.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.powergate.user.v1.RetrievalDealInfo} returns this
 */
proto.powergate.user.v1.RetrievalDealInfo.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 min_price = 3;
 * @return {number}
 */
proto.powergate.user.v1.RetrievalDealInfo.prototype.getMinPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.powergate.user.v1.RetrievalDealInfo} returns this
 */
proto.powergate.user.v1.RetrievalDealInfo.prototype.setMinPrice = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 payment_interval = 4;
 * @return {number}
 */
proto.powergate.user.v1.RetrievalDealInfo.prototype.getPaymentInterval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.powergate.user.v1.RetrievalDealInfo} returns this
 */
proto.powergate.user.v1.RetrievalDealInfo.prototype.setPaymentInterval = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 payment_interval_increase = 5;
 * @return {number}
 */
proto.powergate.user.v1.RetrievalDealInfo.prototype.getPaymentIntervalIncrease = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.powergate.user.v1.RetrievalDealInfo} returns this
 */
proto.powergate.user.v1.RetrievalDealInfo.prototype.setPaymentIntervalIncrease = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string miner = 6;
 * @return {string}
 */
proto.powergate.user.v1.RetrievalDealInfo.prototype.getMiner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.RetrievalDealInfo} returns this
 */
proto.powergate.user.v1.RetrievalDealInfo.prototype.setMiner = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string miner_peer_id = 7;
 * @return {string}
 */
proto.powergate.user.v1.RetrievalDealInfo.prototype.getMinerPeerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.RetrievalDealInfo} returns this
 */
proto.powergate.user.v1.RetrievalDealInfo.prototype.setMinerPeerId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.powergate.user.v1.RetrievalDealRecord.prototype.toObject = function(opt_includeInstance) {
  return proto.powergate.user.v1.RetrievalDealRecord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.powergate.user.v1.RetrievalDealRecord} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.RetrievalDealRecord.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    time: jspb.Message.getFieldWithDefault(msg, 2, 0),
    dealInfo: (f = msg.getDealInfo()) && proto.powergate.user.v1.RetrievalDealInfo.toObject(includeInstance, f),
    dataTransferStart: (f = msg.getDataTransferStart()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    dataTransferEnd: (f = msg.getDataTransferEnd()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    errMsg: jspb.Message.getFieldWithDefault(msg, 6, ""),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    id: jspb.Message.getFieldWithDefault(msg, 8, ""),
    bytesReceived: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.powergate.user.v1.RetrievalDealRecord}
 */
proto.powergate.user.v1.RetrievalDealRecord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.powergate.user.v1.RetrievalDealRecord;
  return proto.powergate.user.v1.RetrievalDealRecord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.powergate.user.v1.RetrievalDealRecord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.powergate.user.v1.RetrievalDealRecord}
 */
proto.powergate.user.v1.RetrievalDealRecord.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTime(value);
      break;
    case 3:
      var value = new proto.powergate.user.v1.RetrievalDealInfo;
      reader.readMessage(value,proto.powergate.user.v1.RetrievalDealInfo.deserializeBinaryFromReader);
      msg.setDealInfo(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDataTransferStart(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDataTransferEnd(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrMsg(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBytesReceived(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.powergate.user.v1.RetrievalDealRecord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.powergate.user.v1.RetrievalDealRecord.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.powergate.user.v1.RetrievalDealRecord} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.powergate.user.v1.RetrievalDealRecord.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTime();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getDealInfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.powergate.user.v1.RetrievalDealInfo.serializeBinaryToWriter
    );
  }
  f = message.getDataTransferStart();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDataTransferEnd();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getErrMsg();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getBytesReceived();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.powergate.user.v1.RetrievalDealRecord.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.RetrievalDealRecord} returns this
 */
proto.powergate.user.v1.RetrievalDealRecord.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 time = 2;
 * @return {number}
 */
proto.powergate.user.v1.RetrievalDealRecord.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.powergate.user.v1.RetrievalDealRecord} returns this
 */
proto.powergate.user.v1.RetrievalDealRecord.prototype.setTime = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional RetrievalDealInfo deal_info = 3;
 * @return {?proto.powergate.user.v1.RetrievalDealInfo}
 */
proto.powergate.user.v1.RetrievalDealRecord.prototype.getDealInfo = function() {
  return /** @type{?proto.powergate.user.v1.RetrievalDealInfo} */ (
    jspb.Message.getWrapperField(this, proto.powergate.user.v1.RetrievalDealInfo, 3));
};


/**
 * @param {?proto.powergate.user.v1.RetrievalDealInfo|undefined} value
 * @return {!proto.powergate.user.v1.RetrievalDealRecord} returns this
*/
proto.powergate.user.v1.RetrievalDealRecord.prototype.setDealInfo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.powergate.user.v1.RetrievalDealRecord} returns this
 */
proto.powergate.user.v1.RetrievalDealRecord.prototype.clearDealInfo = function() {
  return this.setDealInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.powergate.user.v1.RetrievalDealRecord.prototype.hasDealInfo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp data_transfer_start = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.powergate.user.v1.RetrievalDealRecord.prototype.getDataTransferStart = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.powergate.user.v1.RetrievalDealRecord} returns this
*/
proto.powergate.user.v1.RetrievalDealRecord.prototype.setDataTransferStart = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.powergate.user.v1.RetrievalDealRecord} returns this
 */
proto.powergate.user.v1.RetrievalDealRecord.prototype.clearDataTransferStart = function() {
  return this.setDataTransferStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.powergate.user.v1.RetrievalDealRecord.prototype.hasDataTransferStart = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp data_transfer_end = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.powergate.user.v1.RetrievalDealRecord.prototype.getDataTransferEnd = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.powergate.user.v1.RetrievalDealRecord} returns this
*/
proto.powergate.user.v1.RetrievalDealRecord.prototype.setDataTransferEnd = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.powergate.user.v1.RetrievalDealRecord} returns this
 */
proto.powergate.user.v1.RetrievalDealRecord.prototype.clearDataTransferEnd = function() {
  return this.setDataTransferEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.powergate.user.v1.RetrievalDealRecord.prototype.hasDataTransferEnd = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string err_msg = 6;
 * @return {string}
 */
proto.powergate.user.v1.RetrievalDealRecord.prototype.getErrMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.RetrievalDealRecord} returns this
 */
proto.powergate.user.v1.RetrievalDealRecord.prototype.setErrMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp updated_at = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.powergate.user.v1.RetrievalDealRecord.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.powergate.user.v1.RetrievalDealRecord} returns this
*/
proto.powergate.user.v1.RetrievalDealRecord.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.powergate.user.v1.RetrievalDealRecord} returns this
 */
proto.powergate.user.v1.RetrievalDealRecord.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.powergate.user.v1.RetrievalDealRecord.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string id = 8;
 * @return {string}
 */
proto.powergate.user.v1.RetrievalDealRecord.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.powergate.user.v1.RetrievalDealRecord} returns this
 */
proto.powergate.user.v1.RetrievalDealRecord.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional uint64 bytes_received = 9;
 * @return {number}
 */
proto.powergate.user.v1.RetrievalDealRecord.prototype.getBytesReceived = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.powergate.user.v1.RetrievalDealRecord} returns this
 */
proto.powergate.user.v1.RetrievalDealRecord.prototype.setBytesReceived = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * @enum {number}
 */
proto.powergate.user.v1.JobStatus = {
  JOB_STATUS_UNSPECIFIED: 0,
  JOB_STATUS_QUEUED: 1,
  JOB_STATUS_EXECUTING: 2,
  JOB_STATUS_FAILED: 3,
  JOB_STATUS_CANCELED: 4,
  JOB_STATUS_SUCCESS: 5
};

/**
 * @enum {number}
 */
proto.powergate.user.v1.StorageJobsSelector = {
  STORAGE_JOBS_SELECTOR_UNSPECIFIED: 0,
  STORAGE_JOBS_SELECTOR_ALL: 1,
  STORAGE_JOBS_SELECTOR_QUEUED: 2,
  STORAGE_JOBS_SELECTOR_EXECUTING: 3,
  STORAGE_JOBS_SELECTOR_FINAL: 4
};

goog.object.extend(exports, proto.powergate.user.v1);
