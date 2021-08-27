// package: api.bucketsd.pb
// file: api/bucketsd/pb/bucketsd.proto

var api_bucketsd_pb_bucketsd_pb = require("../../../api/bucketsd/pb/bucketsd_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var APIService = (function () {
  function APIService() {}
  APIService.serviceName = "api.bucketsd.pb.APIService";
  return APIService;
}());

APIService.List = {
  methodName: "List",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_bucketsd_pb_bucketsd_pb.ListRequest,
  responseType: api_bucketsd_pb_bucketsd_pb.ListResponse
};

APIService.Create = {
  methodName: "Create",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_bucketsd_pb_bucketsd_pb.CreateRequest,
  responseType: api_bucketsd_pb_bucketsd_pb.CreateResponse
};

APIService.Root = {
  methodName: "Root",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_bucketsd_pb_bucketsd_pb.RootRequest,
  responseType: api_bucketsd_pb_bucketsd_pb.RootResponse
};

APIService.Links = {
  methodName: "Links",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_bucketsd_pb_bucketsd_pb.LinksRequest,
  responseType: api_bucketsd_pb_bucketsd_pb.LinksResponse
};

APIService.ListPath = {
  methodName: "ListPath",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_bucketsd_pb_bucketsd_pb.ListPathRequest,
  responseType: api_bucketsd_pb_bucketsd_pb.ListPathResponse
};

APIService.ListIpfsPath = {
  methodName: "ListIpfsPath",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_bucketsd_pb_bucketsd_pb.ListIpfsPathRequest,
  responseType: api_bucketsd_pb_bucketsd_pb.ListIpfsPathResponse
};

APIService.PushPath = {
  methodName: "PushPath",
  service: APIService,
  requestStream: true,
  responseStream: true,
  requestType: api_bucketsd_pb_bucketsd_pb.PushPathRequest,
  responseType: api_bucketsd_pb_bucketsd_pb.PushPathResponse
};

APIService.PushPaths = {
  methodName: "PushPaths",
  service: APIService,
  requestStream: true,
  responseStream: true,
  requestType: api_bucketsd_pb_bucketsd_pb.PushPathsRequest,
  responseType: api_bucketsd_pb_bucketsd_pb.PushPathsResponse
};

APIService.PullPath = {
  methodName: "PullPath",
  service: APIService,
  requestStream: false,
  responseStream: true,
  requestType: api_bucketsd_pb_bucketsd_pb.PullPathRequest,
  responseType: api_bucketsd_pb_bucketsd_pb.PullPathResponse
};

APIService.PullIpfsPath = {
  methodName: "PullIpfsPath",
  service: APIService,
  requestStream: false,
  responseStream: true,
  requestType: api_bucketsd_pb_bucketsd_pb.PullIpfsPathRequest,
  responseType: api_bucketsd_pb_bucketsd_pb.PullIpfsPathResponse
};

APIService.SetPath = {
  methodName: "SetPath",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_bucketsd_pb_bucketsd_pb.SetPathRequest,
  responseType: api_bucketsd_pb_bucketsd_pb.SetPathResponse
};

APIService.MovePath = {
  methodName: "MovePath",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_bucketsd_pb_bucketsd_pb.MovePathRequest,
  responseType: api_bucketsd_pb_bucketsd_pb.MovePathResponse
};

APIService.Remove = {
  methodName: "Remove",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_bucketsd_pb_bucketsd_pb.RemoveRequest,
  responseType: api_bucketsd_pb_bucketsd_pb.RemoveResponse
};

APIService.RemovePath = {
  methodName: "RemovePath",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_bucketsd_pb_bucketsd_pb.RemovePathRequest,
  responseType: api_bucketsd_pb_bucketsd_pb.RemovePathResponse
};

APIService.PushPathAccessRoles = {
  methodName: "PushPathAccessRoles",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_bucketsd_pb_bucketsd_pb.PushPathAccessRolesRequest,
  responseType: api_bucketsd_pb_bucketsd_pb.PushPathAccessRolesResponse
};

APIService.PullPathAccessRoles = {
  methodName: "PullPathAccessRoles",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_bucketsd_pb_bucketsd_pb.PullPathAccessRolesRequest,
  responseType: api_bucketsd_pb_bucketsd_pb.PullPathAccessRolesResponse
};

APIService.DefaultArchiveConfig = {
  methodName: "DefaultArchiveConfig",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_bucketsd_pb_bucketsd_pb.DefaultArchiveConfigRequest,
  responseType: api_bucketsd_pb_bucketsd_pb.DefaultArchiveConfigResponse
};

APIService.SetDefaultArchiveConfig = {
  methodName: "SetDefaultArchiveConfig",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_bucketsd_pb_bucketsd_pb.SetDefaultArchiveConfigRequest,
  responseType: api_bucketsd_pb_bucketsd_pb.SetDefaultArchiveConfigResponse
};

APIService.Archive = {
  methodName: "Archive",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_bucketsd_pb_bucketsd_pb.ArchiveRequest,
  responseType: api_bucketsd_pb_bucketsd_pb.ArchiveResponse
};

APIService.Archives = {
  methodName: "Archives",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_bucketsd_pb_bucketsd_pb.ArchivesRequest,
  responseType: api_bucketsd_pb_bucketsd_pb.ArchivesResponse
};

APIService.ArchiveWatch = {
  methodName: "ArchiveWatch",
  service: APIService,
  requestStream: false,
  responseStream: true,
  requestType: api_bucketsd_pb_bucketsd_pb.ArchiveWatchRequest,
  responseType: api_bucketsd_pb_bucketsd_pb.ArchiveWatchResponse
};

exports.APIService = APIService;

function APIServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

APIServiceClient.prototype.list = function list(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.List, {
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

APIServiceClient.prototype.create = function create(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.Create, {
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

APIServiceClient.prototype.root = function root(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.Root, {
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

APIServiceClient.prototype.links = function links(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.Links, {
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

APIServiceClient.prototype.listPath = function listPath(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.ListPath, {
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

APIServiceClient.prototype.listIpfsPath = function listIpfsPath(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.ListIpfsPath, {
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

APIServiceClient.prototype.pushPath = function pushPath(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(APIService.PushPath, {
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
  client.onMessage(function (message) {
    listeners.data.forEach(function (handler) {
      handler(message);
    })
  });
  client.start(metadata);
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
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

APIServiceClient.prototype.pushPaths = function pushPaths(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(APIService.PushPaths, {
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
  client.onMessage(function (message) {
    listeners.data.forEach(function (handler) {
      handler(message);
    })
  });
  client.start(metadata);
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
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

APIServiceClient.prototype.pullPath = function pullPath(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(APIService.PullPath, {
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

APIServiceClient.prototype.pullIpfsPath = function pullIpfsPath(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(APIService.PullIpfsPath, {
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

APIServiceClient.prototype.setPath = function setPath(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.SetPath, {
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

APIServiceClient.prototype.movePath = function movePath(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.MovePath, {
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

APIServiceClient.prototype.remove = function remove(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.Remove, {
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

APIServiceClient.prototype.removePath = function removePath(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.RemovePath, {
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

APIServiceClient.prototype.pushPathAccessRoles = function pushPathAccessRoles(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.PushPathAccessRoles, {
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

APIServiceClient.prototype.pullPathAccessRoles = function pullPathAccessRoles(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.PullPathAccessRoles, {
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

APIServiceClient.prototype.defaultArchiveConfig = function defaultArchiveConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.DefaultArchiveConfig, {
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

APIServiceClient.prototype.setDefaultArchiveConfig = function setDefaultArchiveConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.SetDefaultArchiveConfig, {
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

APIServiceClient.prototype.archive = function archive(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.Archive, {
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

APIServiceClient.prototype.archives = function archives(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.Archives, {
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

APIServiceClient.prototype.archiveWatch = function archiveWatch(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(APIService.ArchiveWatch, {
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

exports.APIServiceClient = APIServiceClient;

