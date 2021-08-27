// package: api.usersd.pb
// file: api/usersd/pb/usersd.proto

var api_usersd_pb_usersd_pb = require("../../../api/usersd/pb/usersd_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var APIService = (function () {
  function APIService() {}
  APIService.serviceName = "api.usersd.pb.APIService";
  return APIService;
}());

APIService.GetThread = {
  methodName: "GetThread",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_usersd_pb_usersd_pb.GetThreadRequest,
  responseType: api_usersd_pb_usersd_pb.GetThreadResponse
};

APIService.ListThreads = {
  methodName: "ListThreads",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_usersd_pb_usersd_pb.ListThreadsRequest,
  responseType: api_usersd_pb_usersd_pb.ListThreadsResponse
};

APIService.SetupMailbox = {
  methodName: "SetupMailbox",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_usersd_pb_usersd_pb.SetupMailboxRequest,
  responseType: api_usersd_pb_usersd_pb.SetupMailboxResponse
};

APIService.SendMessage = {
  methodName: "SendMessage",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_usersd_pb_usersd_pb.SendMessageRequest,
  responseType: api_usersd_pb_usersd_pb.SendMessageResponse
};

APIService.ListInboxMessages = {
  methodName: "ListInboxMessages",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_usersd_pb_usersd_pb.ListInboxMessagesRequest,
  responseType: api_usersd_pb_usersd_pb.ListInboxMessagesResponse
};

APIService.ListSentboxMessages = {
  methodName: "ListSentboxMessages",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_usersd_pb_usersd_pb.ListSentboxMessagesRequest,
  responseType: api_usersd_pb_usersd_pb.ListSentboxMessagesResponse
};

APIService.ReadInboxMessage = {
  methodName: "ReadInboxMessage",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_usersd_pb_usersd_pb.ReadInboxMessageRequest,
  responseType: api_usersd_pb_usersd_pb.ReadInboxMessageResponse
};

APIService.DeleteInboxMessage = {
  methodName: "DeleteInboxMessage",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_usersd_pb_usersd_pb.DeleteInboxMessageRequest,
  responseType: api_usersd_pb_usersd_pb.DeleteInboxMessageResponse
};

APIService.DeleteSentboxMessage = {
  methodName: "DeleteSentboxMessage",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_usersd_pb_usersd_pb.DeleteSentboxMessageRequest,
  responseType: api_usersd_pb_usersd_pb.DeleteSentboxMessageResponse
};

APIService.GetUsage = {
  methodName: "GetUsage",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_usersd_pb_usersd_pb.GetUsageRequest,
  responseType: api_usersd_pb_usersd_pb.GetUsageResponse
};

APIService.ArchivesLs = {
  methodName: "ArchivesLs",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_usersd_pb_usersd_pb.ArchivesLsRequest,
  responseType: api_usersd_pb_usersd_pb.ArchivesLsResponse
};

APIService.ArchivesImport = {
  methodName: "ArchivesImport",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_usersd_pb_usersd_pb.ArchivesImportRequest,
  responseType: api_usersd_pb_usersd_pb.ArchivesImportResponse
};

APIService.ArchiveRetrievalLs = {
  methodName: "ArchiveRetrievalLs",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_usersd_pb_usersd_pb.ArchiveRetrievalLsRequest,
  responseType: api_usersd_pb_usersd_pb.ArchiveRetrievalLsResponse
};

APIService.ArchiveRetrievalLogs = {
  methodName: "ArchiveRetrievalLogs",
  service: APIService,
  requestStream: false,
  responseStream: true,
  requestType: api_usersd_pb_usersd_pb.ArchiveRetrievalLogsRequest,
  responseType: api_usersd_pb_usersd_pb.ArchiveRetrievalLogsResponse
};

exports.APIService = APIService;

function APIServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

APIServiceClient.prototype.getThread = function getThread(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.GetThread, {
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

APIServiceClient.prototype.listThreads = function listThreads(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.ListThreads, {
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

APIServiceClient.prototype.setupMailbox = function setupMailbox(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.SetupMailbox, {
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

APIServiceClient.prototype.sendMessage = function sendMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.SendMessage, {
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

APIServiceClient.prototype.listInboxMessages = function listInboxMessages(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.ListInboxMessages, {
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

APIServiceClient.prototype.listSentboxMessages = function listSentboxMessages(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.ListSentboxMessages, {
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

APIServiceClient.prototype.readInboxMessage = function readInboxMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.ReadInboxMessage, {
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

APIServiceClient.prototype.deleteInboxMessage = function deleteInboxMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.DeleteInboxMessage, {
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

APIServiceClient.prototype.deleteSentboxMessage = function deleteSentboxMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.DeleteSentboxMessage, {
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

APIServiceClient.prototype.getUsage = function getUsage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.GetUsage, {
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

APIServiceClient.prototype.archivesLs = function archivesLs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.ArchivesLs, {
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

APIServiceClient.prototype.archivesImport = function archivesImport(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.ArchivesImport, {
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

APIServiceClient.prototype.archiveRetrievalLs = function archiveRetrievalLs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.ArchiveRetrievalLs, {
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

APIServiceClient.prototype.archiveRetrievalLogs = function archiveRetrievalLogs(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(APIService.ArchiveRetrievalLogs, {
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

