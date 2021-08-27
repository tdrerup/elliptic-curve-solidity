// package: api.billingd.pb
// file: api/billingd/pb/billingd.proto

var api_billingd_pb_billingd_pb = require("../../../api/billingd/pb/billingd_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var APIService = (function () {
  function APIService() {}
  APIService.serviceName = "api.billingd.pb.APIService";
  return APIService;
}());

APIService.CheckHealth = {
  methodName: "CheckHealth",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_billingd_pb_billingd_pb.CheckHealthRequest,
  responseType: api_billingd_pb_billingd_pb.CheckHealthResponse
};

APIService.CreateCustomer = {
  methodName: "CreateCustomer",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_billingd_pb_billingd_pb.CreateCustomerRequest,
  responseType: api_billingd_pb_billingd_pb.CreateCustomerResponse
};

APIService.GetCustomer = {
  methodName: "GetCustomer",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_billingd_pb_billingd_pb.GetCustomerRequest,
  responseType: api_billingd_pb_billingd_pb.GetCustomerResponse
};

APIService.ListDependentCustomers = {
  methodName: "ListDependentCustomers",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_billingd_pb_billingd_pb.ListDependentCustomersRequest,
  responseType: api_billingd_pb_billingd_pb.ListDependentCustomersResponse
};

APIService.GetCustomerSession = {
  methodName: "GetCustomerSession",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_billingd_pb_billingd_pb.GetCustomerSessionRequest,
  responseType: api_billingd_pb_billingd_pb.GetCustomerSessionResponse
};

APIService.UpdateCustomer = {
  methodName: "UpdateCustomer",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_billingd_pb_billingd_pb.UpdateCustomerRequest,
  responseType: api_billingd_pb_billingd_pb.UpdateCustomerResponse
};

APIService.UpdateCustomerSubscription = {
  methodName: "UpdateCustomerSubscription",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_billingd_pb_billingd_pb.UpdateCustomerSubscriptionRequest,
  responseType: api_billingd_pb_billingd_pb.UpdateCustomerSubscriptionResponse
};

APIService.RecreateCustomerSubscription = {
  methodName: "RecreateCustomerSubscription",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_billingd_pb_billingd_pb.RecreateCustomerSubscriptionRequest,
  responseType: api_billingd_pb_billingd_pb.RecreateCustomerSubscriptionResponse
};

APIService.DeleteCustomer = {
  methodName: "DeleteCustomer",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_billingd_pb_billingd_pb.DeleteCustomerRequest,
  responseType: api_billingd_pb_billingd_pb.DeleteCustomerResponse
};

APIService.GetCustomerUsage = {
  methodName: "GetCustomerUsage",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_billingd_pb_billingd_pb.GetCustomerUsageRequest,
  responseType: api_billingd_pb_billingd_pb.GetCustomerUsageResponse
};

APIService.IncCustomerUsage = {
  methodName: "IncCustomerUsage",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_billingd_pb_billingd_pb.IncCustomerUsageRequest,
  responseType: api_billingd_pb_billingd_pb.IncCustomerUsageResponse
};

APIService.ReportCustomerUsage = {
  methodName: "ReportCustomerUsage",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_billingd_pb_billingd_pb.ReportCustomerUsageRequest,
  responseType: api_billingd_pb_billingd_pb.ReportCustomerUsageResponse
};

APIService.Identify = {
  methodName: "Identify",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_billingd_pb_billingd_pb.IdentifyRequest,
  responseType: api_billingd_pb_billingd_pb.IdentifyResponse
};

APIService.TrackEvent = {
  methodName: "TrackEvent",
  service: APIService,
  requestStream: false,
  responseStream: false,
  requestType: api_billingd_pb_billingd_pb.TrackEventRequest,
  responseType: api_billingd_pb_billingd_pb.TrackEventResponse
};

exports.APIService = APIService;

function APIServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

APIServiceClient.prototype.checkHealth = function checkHealth(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.CheckHealth, {
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

APIServiceClient.prototype.createCustomer = function createCustomer(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.CreateCustomer, {
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

APIServiceClient.prototype.getCustomer = function getCustomer(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.GetCustomer, {
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

APIServiceClient.prototype.listDependentCustomers = function listDependentCustomers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.ListDependentCustomers, {
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

APIServiceClient.prototype.getCustomerSession = function getCustomerSession(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.GetCustomerSession, {
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

APIServiceClient.prototype.updateCustomer = function updateCustomer(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.UpdateCustomer, {
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

APIServiceClient.prototype.updateCustomerSubscription = function updateCustomerSubscription(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.UpdateCustomerSubscription, {
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

APIServiceClient.prototype.recreateCustomerSubscription = function recreateCustomerSubscription(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.RecreateCustomerSubscription, {
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

APIServiceClient.prototype.deleteCustomer = function deleteCustomer(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.DeleteCustomer, {
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

APIServiceClient.prototype.getCustomerUsage = function getCustomerUsage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.GetCustomerUsage, {
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

APIServiceClient.prototype.incCustomerUsage = function incCustomerUsage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.IncCustomerUsage, {
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

APIServiceClient.prototype.reportCustomerUsage = function reportCustomerUsage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.ReportCustomerUsage, {
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

APIServiceClient.prototype.identify = function identify(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.Identify, {
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

APIServiceClient.prototype.trackEvent = function trackEvent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(APIService.TrackEvent, {
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

