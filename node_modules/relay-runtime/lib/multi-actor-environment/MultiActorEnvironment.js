/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+relay
 * 
 * @format
 */
'use strict';

var ActorSpecificEnvironment = require('./ActorSpecificEnvironment');

var OperationExecutor = require('../store/OperationExecutor');

var RelayDefaultHandlerProvider = require('../handlers/RelayDefaultHandlerProvider');

var RelayModernStore = require('../store/RelayModernStore');

var RelayObservable = require('../network/RelayObservable');

var RelayPublishQueue = require('../store/RelayPublishQueue');

var RelayRecordSource = require('../store/RelayRecordSource');

var defaultGetDataID = require('../store/defaultGetDataID');

function todo(what) {
  throw new Error("Not implementd: ".concat(what));
}

var MultiActorEnvironment = /*#__PURE__*/function () {
  function MultiActorEnvironment(config) {
    var _config$getDataID, _config$treatMissingF;

    this._actorEnvironments = new Map();
    this._createNetworkForActor = config.createNetworkForActor;
    this._getDataID = (_config$getDataID = config.getDataID) !== null && _config$getDataID !== void 0 ? _config$getDataID : defaultGetDataID;
    this._handlerProvider = config.handlerProvider ? config.handlerProvider : RelayDefaultHandlerProvider;
    this._logFn = config.logFn;
    this._operationExecutions = new Map();
    this._requiredFieldLogger = config.requiredFieldLogger;
    this._treatMissingFieldsAsNull = (_config$treatMissingF = config.treatMissingFieldsAsNull) !== null && _config$treatMissingF !== void 0 ? _config$treatMissingF : false;
  }
  /**
   * This method will create an actor specfic environment. It will create a new instance
   * and store it in the internal maps. If will return a memozied version
   * of the environment if we already created one for actor.
   */


  var _proto = MultiActorEnvironment.prototype;

  _proto.forActor = function forActor(actorIdentifier) {
    var environment = this._actorEnvironments.get(actorIdentifier);

    if (environment == null) {
      var newEnvironment = new ActorSpecificEnvironment({
        actorIdentifier: actorIdentifier,
        multiActorEnvironment: this,
        logFn: this._logFn,
        requiredFieldLogger: this._requiredFieldLogger,
        store: new RelayModernStore(RelayRecordSource.create()),
        network: this._createNetworkForActor(actorIdentifier)
      });

      this._actorEnvironments.set(actorIdentifier, newEnvironment);

      return newEnvironment;
    } else {
      return environment;
    }
  };

  _proto.check = function check(actorIdentifier, operation) {
    return todo('check');
  };

  _proto.subscribe = function subscribe(actorIdentifier, snapshot, callback) {
    return todo('subscribe');
  };

  _proto.retain = function retain(actorIdentifier, operation) {
    return todo('retain');
  };

  _proto.applyUpdate = function applyUpdate(actorIdentifier, optimisticUpdate) {
    return todo('applyUpdate');
  };

  _proto.applyMutation = function applyMutation(actorIdentifier, optimisticConfig) {
    return todo('applyMutation');
  };

  _proto.commitUpdate = function commitUpdate(actorIdentifier, updater) {
    return todo('commitUpdate');
  };

  _proto.commitPayload = function commitPayload(actorIdentifier, operationDescriptor, payload) {
    return todo('commitPayload');
  };

  _proto.lookup = function lookup(actorIdentifier, selector) {
    return todo('lookup');
  };

  _proto.execute = function execute(actorIdentifier, config) {
    var _this = this;

    var operation = config.operation,
        updater = config.updater;
    return RelayObservable.create(function (sink) {
      var actorEnvironemnt = _this.forActor(actorIdentifier);

      var source = actorEnvironemnt.getNetwork().execute(operation.request.node.params, operation.request.variables, operation.request.cacheConfig || {}, null);
      var executor = OperationExecutor.execute({
        operation: operation,
        operationExecutions: _this._operationExecutions,
        operationLoader: null,
        optimisticConfig: null,
        publishQueue: new RelayPublishQueue(actorEnvironemnt.getStore(), _this._handlerProvider, _this._getDataID),
        reactFlightPayloadDeserializer: null,
        reactFlightServerErrorHandler: null,
        scheduler: null,
        sink: sink,
        source: source,
        store: actorEnvironemnt.getStore(),
        updater: updater,
        operationTracker: actorEnvironemnt.getOperationTracker(),
        getDataID: _this._getDataID,
        treatMissingFieldsAsNull: _this._treatMissingFieldsAsNull,
        shouldProcessClientComponents: false
      });
      return function () {
        return executor.cancel();
      };
    });
  };

  _proto.executeMutation = function executeMutation(actorIdentifier, config) {
    return todo('executeMutation');
  };

  _proto.executeWithSource = function executeWithSource(actorIdentifier, config) {
    return todo('executeWithSource');
  };

  _proto.isRequestActive = function isRequestActive(actorIdentifier, requestIdentifier) {
    return todo('isRequestActive');
  };

  return MultiActorEnvironment;
}();

module.exports = MultiActorEnvironment;