// package: powergate.admin.v1
// file: powergate/admin/v1/admin.proto

var powergate_admin_v1_admin_pb = require("../../../powergate/admin/v1/admin_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AdminService = (function () {
  function AdminService() {}
  AdminService.serviceName = "powergate.admin.v1.AdminService";
  return AdminService;
}());

AdminService.NewAddress = {
  methodName: "NewAddress",
  service: AdminService,
  requestStream: false,
  responseStream: false,
  requestType: powergate_admin_v1_admin_pb.NewAddressRequest,
  responseType: powergate_admin_v1_admin_pb.NewAddressResponse
};

AdminService.Addresses = {
  methodName: "Addresses",
  service: AdminService,
  requestStream: false,
  responseStream: false,
  requestType: powergate_admin_v1_admin_pb.AddressesRequest,
  responseType: powergate_admin_v1_admin_pb.AddressesResponse
};

AdminService.SendFil = {
  methodName: "SendFil",
  service: AdminService,
  requestStream: false,
  responseStream: false,
  requestType: powergate_admin_v1_admin_pb.SendFilRequest,
  responseType: powergate_admin_v1_admin_pb.SendFilResponse
};

AdminService.CreateUser = {
  methodName: "CreateUser",
  service: AdminService,
  requestStream: false,
  responseStream: false,
  requestType: powergate_admin_v1_admin_pb.CreateUserRequest,
  responseType: powergate_admin_v1_admin_pb.CreateUserResponse
};

AdminService.RegenerateAuth = {
  methodName: "RegenerateAuth",
  service: AdminService,
  requestStream: false,
  responseStream: false,
  requestType: powergate_admin_v1_admin_pb.RegenerateAuthRequest,
  responseType: powergate_admin_v1_admin_pb.RegenerateAuthResponse
};

AdminService.Users = {
  methodName: "Users",
  service: AdminService,
  requestStream: false,
  responseStream: false,
  requestType: powergate_admin_v1_admin_pb.UsersRequest,
  responseType: powergate_admin_v1_admin_pb.UsersResponse
};

AdminService.StorageInfo = {
  methodName: "StorageInfo",
  service: AdminService,
  requestStream: false,
  responseStream: false,
  requestType: powergate_admin_v1_admin_pb.StorageInfoRequest,
  responseType: powergate_admin_v1_admin_pb.StorageInfoResponse
};

AdminService.ListStorageInfo = {
  methodName: "ListStorageInfo",
  service: AdminService,
  requestStream: false,
  responseStream: false,
  requestType: powergate_admin_v1_admin_pb.ListStorageInfoRequest,
  responseType: powergate_admin_v1_admin_pb.ListStorageInfoResponse
};

AdminService.ListStorageJobs = {
  methodName: "ListStorageJobs",
  service: AdminService,
  requestStream: false,
  responseStream: false,
  requestType: powergate_admin_v1_admin_pb.ListStorageJobsRequest,
  responseType: powergate_admin_v1_admin_pb.ListStorageJobsResponse
};

AdminService.StorageJobsSummary = {
  methodName: "StorageJobsSummary",
  service: AdminService,
  requestStream: false,
  responseStream: false,
  requestType: powergate_admin_v1_admin_pb.StorageJobsSummaryRequest,
  responseType: powergate_admin_v1_admin_pb.StorageJobsSummaryResponse
};

AdminService.GetUpdatedStorageDealRecordsSince = {
  methodName: "GetUpdatedStorageDealRecordsSince",
  service: AdminService,
  requestStream: false,
  responseStream: false,
  requestType: powergate_admin_v1_admin_pb.GetUpdatedStorageDealRecordsSinceRequest,
  responseType: powergate_admin_v1_admin_pb.GetUpdatedStorageDealRecordsSinceResponse
};

AdminService.GetUpdatedRetrievalRecordsSince = {
  methodName: "GetUpdatedRetrievalRecordsSince",
  service: AdminService,
  requestStream: false,
  responseStream: false,
  requestType: powergate_admin_v1_admin_pb.GetUpdatedRetrievalRecordsSinceRequest,
  responseType: powergate_admin_v1_admin_pb.GetUpdatedRetrievalRecordsSinceResponse
};

AdminService.GCStaged = {
  methodName: "GCStaged",
  service: AdminService,
  requestStream: false,
  responseStream: false,
  requestType: powergate_admin_v1_admin_pb.GCStagedRequest,
  responseType: powergate_admin_v1_admin_pb.GCStagedResponse
};

AdminService.PinnedCids = {
  methodName: "PinnedCids",
  service: AdminService,
  requestStream: false,
  responseStream: false,
  requestType: powergate_admin_v1_admin_pb.PinnedCidsRequest,
  responseType: powergate_admin_v1_admin_pb.PinnedCidsResponse
};

AdminService.GetMiners = {
  methodName: "GetMiners",
  service: AdminService,
  requestStream: false,
  responseStream: false,
  requestType: powergate_admin_v1_admin_pb.GetMinersRequest,
  responseType: powergate_admin_v1_admin_pb.GetMinersResponse
};

AdminService.GetMinerInfo = {
  methodName: "GetMinerInfo",
  service: AdminService,
  requestStream: false,
  responseStream: false,
  requestType: powergate_admin_v1_admin_pb.GetMinerInfoRequest,
  responseType: powergate_admin_v1_admin_pb.GetMinerInfoResponse
};

exports.AdminService = AdminService;

function AdminServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AdminServiceClient.prototype.newAddress = function newAddress(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AdminService.NewAddress, {
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

AdminServiceClient.prototype.addresses = function addresses(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AdminService.Addresses, {
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

AdminServiceClient.prototype.sendFil = function sendFil(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AdminService.SendFil, {
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

AdminServiceClient.prototype.createUser = function createUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AdminService.CreateUser, {
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

AdminServiceClient.prototype.regenerateAuth = function regenerateAuth(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AdminService.RegenerateAuth, {
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

AdminServiceClient.prototype.users = function users(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AdminService.Users, {
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

AdminServiceClient.prototype.storageInfo = function storageInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AdminService.StorageInfo, {
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

AdminServiceClient.prototype.listStorageInfo = function listStorageInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AdminService.ListStorageInfo, {
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

AdminServiceClient.prototype.listStorageJobs = function listStorageJobs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AdminService.ListStorageJobs, {
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

AdminServiceClient.prototype.storageJobsSummary = function storageJobsSummary(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AdminService.StorageJobsSummary, {
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

AdminServiceClient.prototype.getUpdatedStorageDealRecordsSince = function getUpdatedStorageDealRecordsSince(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AdminService.GetUpdatedStorageDealRecordsSince, {
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

AdminServiceClient.prototype.getUpdatedRetrievalRecordsSince = function getUpdatedRetrievalRecordsSince(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AdminService.GetUpdatedRetrievalRecordsSince, {
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

AdminServiceClient.prototype.gCStaged = function gCStaged(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AdminService.GCStaged, {
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

AdminServiceClient.prototype.pinnedCids = function pinnedCids(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AdminService.PinnedCids, {
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

AdminServiceClient.prototype.getMiners = function getMiners(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AdminService.GetMiners, {
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

AdminServiceClient.prototype.getMinerInfo = function getMinerInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AdminService.GetMinerInfo, {
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

exports.AdminServiceClient = AdminServiceClient;

