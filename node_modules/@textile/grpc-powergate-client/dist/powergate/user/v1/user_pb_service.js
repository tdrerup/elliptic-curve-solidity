// package: powergate.user.v1
// file: powergate/user/v1/user.proto

var powergate_user_v1_user_pb = require("../../../powergate/user/v1/user_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var UserService = (function () {
  function UserService() {}
  UserService.serviceName = "powergate.user.v1.UserService";
  return UserService;
}());

UserService.BuildInfo = {
  methodName: "BuildInfo",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: powergate_user_v1_user_pb.BuildInfoRequest,
  responseType: powergate_user_v1_user_pb.BuildInfoResponse
};

UserService.UserIdentifier = {
  methodName: "UserIdentifier",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: powergate_user_v1_user_pb.UserIdentifierRequest,
  responseType: powergate_user_v1_user_pb.UserIdentifierResponse
};

UserService.DefaultStorageConfig = {
  methodName: "DefaultStorageConfig",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: powergate_user_v1_user_pb.DefaultStorageConfigRequest,
  responseType: powergate_user_v1_user_pb.DefaultStorageConfigResponse
};

UserService.SetDefaultStorageConfig = {
  methodName: "SetDefaultStorageConfig",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: powergate_user_v1_user_pb.SetDefaultStorageConfigRequest,
  responseType: powergate_user_v1_user_pb.SetDefaultStorageConfigResponse
};

UserService.ApplyStorageConfig = {
  methodName: "ApplyStorageConfig",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: powergate_user_v1_user_pb.ApplyStorageConfigRequest,
  responseType: powergate_user_v1_user_pb.ApplyStorageConfigResponse
};

UserService.Remove = {
  methodName: "Remove",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: powergate_user_v1_user_pb.RemoveRequest,
  responseType: powergate_user_v1_user_pb.RemoveResponse
};

UserService.Stage = {
  methodName: "Stage",
  service: UserService,
  requestStream: true,
  responseStream: false,
  requestType: powergate_user_v1_user_pb.StageRequest,
  responseType: powergate_user_v1_user_pb.StageResponse
};

UserService.StageCid = {
  methodName: "StageCid",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: powergate_user_v1_user_pb.StageCidRequest,
  responseType: powergate_user_v1_user_pb.StageCidResponse
};

UserService.ReplaceData = {
  methodName: "ReplaceData",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: powergate_user_v1_user_pb.ReplaceDataRequest,
  responseType: powergate_user_v1_user_pb.ReplaceDataResponse
};

UserService.Get = {
  methodName: "Get",
  service: UserService,
  requestStream: false,
  responseStream: true,
  requestType: powergate_user_v1_user_pb.GetRequest,
  responseType: powergate_user_v1_user_pb.GetResponse
};

UserService.WatchLogs = {
  methodName: "WatchLogs",
  service: UserService,
  requestStream: false,
  responseStream: true,
  requestType: powergate_user_v1_user_pb.WatchLogsRequest,
  responseType: powergate_user_v1_user_pb.WatchLogsResponse
};

UserService.CidSummary = {
  methodName: "CidSummary",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: powergate_user_v1_user_pb.CidSummaryRequest,
  responseType: powergate_user_v1_user_pb.CidSummaryResponse
};

UserService.CidInfo = {
  methodName: "CidInfo",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: powergate_user_v1_user_pb.CidInfoRequest,
  responseType: powergate_user_v1_user_pb.CidInfoResponse
};

UserService.Balance = {
  methodName: "Balance",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: powergate_user_v1_user_pb.BalanceRequest,
  responseType: powergate_user_v1_user_pb.BalanceResponse
};

UserService.NewAddress = {
  methodName: "NewAddress",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: powergate_user_v1_user_pb.NewAddressRequest,
  responseType: powergate_user_v1_user_pb.NewAddressResponse
};

UserService.Addresses = {
  methodName: "Addresses",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: powergate_user_v1_user_pb.AddressesRequest,
  responseType: powergate_user_v1_user_pb.AddressesResponse
};

UserService.SendFil = {
  methodName: "SendFil",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: powergate_user_v1_user_pb.SendFilRequest,
  responseType: powergate_user_v1_user_pb.SendFilResponse
};

UserService.SignMessage = {
  methodName: "SignMessage",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: powergate_user_v1_user_pb.SignMessageRequest,
  responseType: powergate_user_v1_user_pb.SignMessageResponse
};

UserService.VerifyMessage = {
  methodName: "VerifyMessage",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: powergate_user_v1_user_pb.VerifyMessageRequest,
  responseType: powergate_user_v1_user_pb.VerifyMessageResponse
};

UserService.StorageInfo = {
  methodName: "StorageInfo",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: powergate_user_v1_user_pb.StorageInfoRequest,
  responseType: powergate_user_v1_user_pb.StorageInfoResponse
};

UserService.ListStorageInfo = {
  methodName: "ListStorageInfo",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: powergate_user_v1_user_pb.ListStorageInfoRequest,
  responseType: powergate_user_v1_user_pb.ListStorageInfoResponse
};

UserService.StorageJob = {
  methodName: "StorageJob",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: powergate_user_v1_user_pb.StorageJobRequest,
  responseType: powergate_user_v1_user_pb.StorageJobResponse
};

UserService.StorageConfigForJob = {
  methodName: "StorageConfigForJob",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: powergate_user_v1_user_pb.StorageConfigForJobRequest,
  responseType: powergate_user_v1_user_pb.StorageConfigForJobResponse
};

UserService.ListStorageJobs = {
  methodName: "ListStorageJobs",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: powergate_user_v1_user_pb.ListStorageJobsRequest,
  responseType: powergate_user_v1_user_pb.ListStorageJobsResponse
};

UserService.StorageJobsSummary = {
  methodName: "StorageJobsSummary",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: powergate_user_v1_user_pb.StorageJobsSummaryRequest,
  responseType: powergate_user_v1_user_pb.StorageJobsSummaryResponse
};

UserService.WatchStorageJobs = {
  methodName: "WatchStorageJobs",
  service: UserService,
  requestStream: false,
  responseStream: true,
  requestType: powergate_user_v1_user_pb.WatchStorageJobsRequest,
  responseType: powergate_user_v1_user_pb.WatchStorageJobsResponse
};

UserService.CancelStorageJob = {
  methodName: "CancelStorageJob",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: powergate_user_v1_user_pb.CancelStorageJobRequest,
  responseType: powergate_user_v1_user_pb.CancelStorageJobResponse
};

UserService.StorageDealRecords = {
  methodName: "StorageDealRecords",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: powergate_user_v1_user_pb.StorageDealRecordsRequest,
  responseType: powergate_user_v1_user_pb.StorageDealRecordsResponse
};

UserService.RetrievalDealRecords = {
  methodName: "RetrievalDealRecords",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: powergate_user_v1_user_pb.RetrievalDealRecordsRequest,
  responseType: powergate_user_v1_user_pb.RetrievalDealRecordsResponse
};

exports.UserService = UserService;

function UserServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

UserServiceClient.prototype.buildInfo = function buildInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserService.BuildInfo, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UserServiceClient.prototype.userIdentifier = function userIdentifier(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserService.UserIdentifier, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UserServiceClient.prototype.defaultStorageConfig = function defaultStorageConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserService.DefaultStorageConfig, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UserServiceClient.prototype.setDefaultStorageConfig = function setDefaultStorageConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserService.SetDefaultStorageConfig, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UserServiceClient.prototype.applyStorageConfig = function applyStorageConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserService.ApplyStorageConfig, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UserServiceClient.prototype.remove = function remove(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserService.Remove, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UserServiceClient.prototype.stage = function stage(metadata) {
  var listeners = {
    end: [],
    status: []
  };
  var client = grpc.client(UserService.Stage, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      if (!client.started) {
        client.start(metadata);
      }
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

UserServiceClient.prototype.stageCid = function stageCid(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserService.StageCid, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UserServiceClient.prototype.replaceData = function replaceData(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserService.ReplaceData, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UserServiceClient.prototype.get = function get(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(UserService.Get, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

UserServiceClient.prototype.watchLogs = function watchLogs(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(UserService.WatchLogs, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

UserServiceClient.prototype.cidSummary = function cidSummary(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserService.CidSummary, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UserServiceClient.prototype.cidInfo = function cidInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserService.CidInfo, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UserServiceClient.prototype.balance = function balance(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserService.Balance, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UserServiceClient.prototype.newAddress = function newAddress(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserService.NewAddress, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UserServiceClient.prototype.addresses = function addresses(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserService.Addresses, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UserServiceClient.prototype.sendFil = function sendFil(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserService.SendFil, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UserServiceClient.prototype.signMessage = function signMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserService.SignMessage, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UserServiceClient.prototype.verifyMessage = function verifyMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserService.VerifyMessage, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UserServiceClient.prototype.storageInfo = function storageInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserService.StorageInfo, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UserServiceClient.prototype.listStorageInfo = function listStorageInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserService.ListStorageInfo, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UserServiceClient.prototype.storageJob = function storageJob(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserService.StorageJob, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UserServiceClient.prototype.storageConfigForJob = function storageConfigForJob(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserService.StorageConfigForJob, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UserServiceClient.prototype.listStorageJobs = function listStorageJobs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserService.ListStorageJobs, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UserServiceClient.prototype.storageJobsSummary = function storageJobsSummary(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserService.StorageJobsSummary, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UserServiceClient.prototype.watchStorageJobs = function watchStorageJobs(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(UserService.WatchStorageJobs, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

UserServiceClient.prototype.cancelStorageJob = function cancelStorageJob(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserService.CancelStorageJob, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UserServiceClient.prototype.storageDealRecords = function storageDealRecords(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserService.StorageDealRecords, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UserServiceClient.prototype.retrievalDealRecords = function retrievalDealRecords(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserService.RetrievalDealRecords, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.UserServiceClient = UserServiceClient;

