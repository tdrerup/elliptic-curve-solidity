// package: api.hubd.pb
// file: api/hubd/pb/hubd.proto

var api_hubd_pb_hubd_pb = require("../../../api/hubd/pb/hubd_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var APIService = (function () {
  function APIService() {}
  APIService.serviceName = "api.hubd.pb.APIService";
  return APIService;
}());

APIService.BuildInfo = {
  methodName: "BuildInfo",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_hubd_pb_hubd_pb.BuildInfoRequest,
  responseType: api_hubd_pb_hubd_pb.BuildInfoResponse
};

APIService.Signup = {
  methodName: "Signup",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_hubd_pb_hubd_pb.SignupRequest,
  responseType: api_hubd_pb_hubd_pb.SignupResponse
};

APIService.Signin = {
  methodName: "Signin",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_hubd_pb_hubd_pb.SigninRequest,
  responseType: api_hubd_pb_hubd_pb.SigninResponse
};

APIService.Signout = {
  methodName: "Signout",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_hubd_pb_hubd_pb.SignoutRequest,
  responseType: api_hubd_pb_hubd_pb.SignoutResponse
};

APIService.GetSessionInfo = {
  methodName: "GetSessionInfo",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_hubd_pb_hubd_pb.GetSessionInfoRequest,
  responseType: api_hubd_pb_hubd_pb.GetSessionInfoResponse
};

APIService.GetIdentity = {
  methodName: "GetIdentity",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_hubd_pb_hubd_pb.GetIdentityRequest,
  responseType: api_hubd_pb_hubd_pb.GetIdentityResponse
};

APIService.CreateKey = {
  methodName: "CreateKey",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_hubd_pb_hubd_pb.CreateKeyRequest,
  responseType: api_hubd_pb_hubd_pb.CreateKeyResponse
};

APIService.ListKeys = {
  methodName: "ListKeys",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_hubd_pb_hubd_pb.ListKeysRequest,
  responseType: api_hubd_pb_hubd_pb.ListKeysResponse
};

APIService.InvalidateKey = {
  methodName: "InvalidateKey",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_hubd_pb_hubd_pb.InvalidateKeyRequest,
  responseType: api_hubd_pb_hubd_pb.InvalidateKeyResponse
};

APIService.CreateOrg = {
  methodName: "CreateOrg",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_hubd_pb_hubd_pb.CreateOrgRequest,
  responseType: api_hubd_pb_hubd_pb.CreateOrgResponse
};

APIService.GetOrg = {
  methodName: "GetOrg",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_hubd_pb_hubd_pb.GetOrgRequest,
  responseType: api_hubd_pb_hubd_pb.GetOrgResponse
};

APIService.ListOrgs = {
  methodName: "ListOrgs",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_hubd_pb_hubd_pb.ListOrgsRequest,
  responseType: api_hubd_pb_hubd_pb.ListOrgsResponse
};

APIService.RemoveOrg = {
  methodName: "RemoveOrg",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_hubd_pb_hubd_pb.RemoveOrgRequest,
  responseType: api_hubd_pb_hubd_pb.RemoveOrgResponse
};

APIService.InviteToOrg = {
  methodName: "InviteToOrg",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_hubd_pb_hubd_pb.InviteToOrgRequest,
  responseType: api_hubd_pb_hubd_pb.InviteToOrgResponse
};

APIService.LeaveOrg = {
  methodName: "LeaveOrg",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_hubd_pb_hubd_pb.LeaveOrgRequest,
  responseType: api_hubd_pb_hubd_pb.LeaveOrgResponse
};

APIService.SetupBilling = {
  methodName: "SetupBilling",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_hubd_pb_hubd_pb.SetupBillingRequest,
  responseType: api_hubd_pb_hubd_pb.SetupBillingResponse
};

APIService.GetBillingSession = {
  methodName: "GetBillingSession",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_hubd_pb_hubd_pb.GetBillingSessionRequest,
  responseType: api_hubd_pb_hubd_pb.GetBillingSessionResponse
};

APIService.ListBillingUsers = {
  methodName: "ListBillingUsers",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_hubd_pb_hubd_pb.ListBillingUsersRequest,
  responseType: api_hubd_pb_hubd_pb.ListBillingUsersResponse
};

APIService.IsUsernameAvailable = {
  methodName: "IsUsernameAvailable",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_hubd_pb_hubd_pb.IsUsernameAvailableRequest,
  responseType: api_hubd_pb_hubd_pb.IsUsernameAvailableResponse
};

APIService.IsOrgNameAvailable = {
  methodName: "IsOrgNameAvailable",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_hubd_pb_hubd_pb.IsOrgNameAvailableRequest,
  responseType: api_hubd_pb_hubd_pb.IsOrgNameAvailableResponse
};

APIService.DestroyAccount = {
  methodName: "DestroyAccount",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_hubd_pb_hubd_pb.DestroyAccountRequest,
  responseType: api_hubd_pb_hubd_pb.DestroyAccountResponse
};

exports.APIService = APIService;

function APIServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

APIServiceClient.prototype.buildInfo = function buildInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.BuildInfo, {
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

APIServiceClient.prototype.signup = function signup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.Signup, {
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

APIServiceClient.prototype.signin = function signin(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.Signin, {
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

APIServiceClient.prototype.signout = function signout(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.Signout, {
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

APIServiceClient.prototype.getSessionInfo = function getSessionInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.GetSessionInfo, {
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

APIServiceClient.prototype.getIdentity = function getIdentity(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.GetIdentity, {
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

APIServiceClient.prototype.createKey = function createKey(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.CreateKey, {
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

APIServiceClient.prototype.listKeys = function listKeys(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.ListKeys, {
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

APIServiceClient.prototype.invalidateKey = function invalidateKey(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.InvalidateKey, {
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

APIServiceClient.prototype.createOrg = function createOrg(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.CreateOrg, {
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

APIServiceClient.prototype.getOrg = function getOrg(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.GetOrg, {
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

APIServiceClient.prototype.listOrgs = function listOrgs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.ListOrgs, {
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

APIServiceClient.prototype.removeOrg = function removeOrg(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.RemoveOrg, {
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

APIServiceClient.prototype.inviteToOrg = function inviteToOrg(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.InviteToOrg, {
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

APIServiceClient.prototype.leaveOrg = function leaveOrg(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.LeaveOrg, {
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

APIServiceClient.prototype.setupBilling = function setupBilling(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.SetupBilling, {
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

APIServiceClient.prototype.getBillingSession = function getBillingSession(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.GetBillingSession, {
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

APIServiceClient.prototype.listBillingUsers = function listBillingUsers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.ListBillingUsers, {
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

APIServiceClient.prototype.isUsernameAvailable = function isUsernameAvailable(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.IsUsernameAvailable, {
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

APIServiceClient.prototype.isOrgNameAvailable = function isOrgNameAvailable(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.IsOrgNameAvailable, {
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

APIServiceClient.prototype.destroyAccount = function destroyAccount(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.DestroyAccount, {
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

exports.APIServiceClient = APIServiceClient;

