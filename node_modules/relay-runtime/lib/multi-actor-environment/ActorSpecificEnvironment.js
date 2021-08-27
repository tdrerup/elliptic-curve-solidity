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

var RelayOperationTracker = require('../store/RelayOperationTracker');

function todo() {
  throw new Error('Not implementd');
}

var ActorSpecificEnvironment = /*#__PURE__*/function () {
  // Actor specific properties
  function ActorSpecificEnvironment(config) {
    this.actorIdentifier = config.actorIdentifier;
    this.multiActorEnvironment = config.multiActorEnvironment;
    this.__log = config.logFn;
    this.requiredFieldLogger = config.requiredFieldLogger;
    this._operationTracker = new RelayOperationTracker();
    this._store = config.store;
    this._network = config.network;
  }

  var _proto = ActorSpecificEnvironment.prototype;

  _proto.UNSTABLE_getDefaultRenderPolicy = function UNSTABLE_getDefaultRenderPolicy() {
    return todo();
  };

  _proto.applyMutation = function applyMutation(optimisticConfig) {
    return this.multiActorEnvironment.applyMutation(this.actorIdentifier, optimisticConfig);
  };

  _proto.applyUpdate = function applyUpdate(optimisticUpdate) {
    return this.multiActorEnvironment.applyUpdate(this.actorIdentifier, optimisticUpdate);
  };

  _proto.check = function check(operation) {
    return this.multiActorEnvironment.check(this.actorIdentifier, operation);
  };

  _proto.subscribe = function subscribe(snapshot, callback) {
    return this.multiActorEnvironment.subscribe(this.actorIdentifier, snapshot, callback);
  };

  _proto.retain = function retain(operation) {
    return this.multiActorEnvironment.retain(this.actorIdentifier, operation);
  };

  _proto.commitUpdate = function commitUpdate(updater) {
    return this.multiActorEnvironment.commitUpdate(this.actorIdentifier, updater);
  }
  /**
   * Commit a payload to the environment using the given operation selector.
   */
  ;

  _proto.commitPayload = function commitPayload(operationDescriptor, payload) {
    return this.multiActorEnvironment.commitPayload(this.actorIdentifier, operationDescriptor, payload);
  };

  _proto.getNetwork = function getNetwork() {
    return this._network;
  };

  _proto.getStore = function getStore() {
    return this._store;
  };

  _proto.getOperationTracker = function getOperationTracker() {
    return this._operationTracker;
  };

  _proto.lookup = function lookup(selector) {
    return this.multiActorEnvironment.lookup(this.actorIdentifier, selector);
  };

  _proto.execute = function execute(config) {
    return this.multiActorEnvironment.execute(this.actorIdentifier, config);
  };

  _proto.executeMutation = function executeMutation(options) {
    return this.multiActorEnvironment.executeMutation(this.actorIdentifier, options);
  };

  _proto.executeWithSource = function executeWithSource(options) {
    return this.multiActorEnvironment.executeWithSource(this.actorIdentifier, options);
  };

  _proto.isRequestActive = function isRequestActive(requestIdentifier) {
    return this.multiActorEnvironment.isRequestActive(this.actorIdentifier, requestIdentifier);
  };

  _proto.isServer = function isServer() {
    return todo();
  };

  return ActorSpecificEnvironment;
}();

module.exports = ActorSpecificEnvironment;