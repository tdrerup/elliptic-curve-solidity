'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tsInvariant = require('ts-invariant');
var utilities = require('../utilities');
var zenObservableTs = require('zen-observable-ts');
require('symbol-observable');
var tslib = require('tslib');
var React = require('react');
var core$1 = require('../core');
var cache = require('../cache');
var context = require('../react/context');
var graphql = require('graphql');
var equality = require('@wry/equality');
var core = require('../link/core');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            n[k] = e[k];
        });
    }
    n['default'] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

function requestToKey(request, addTypename) {
    var queryString = request.query &&
        graphql.print(addTypename ? utilities.addTypenameToDocument(request.query) : request.query);
    var requestKey = { query: queryString };
    return JSON.stringify(requestKey);
}
var MockLink = (function (_super) {
    tslib.__extends(MockLink, _super);
    function MockLink(mockedResponses, addTypename) {
        if (addTypename === void 0) { addTypename = true; }
        var _this = _super.call(this) || this;
        _this.addTypename = true;
        _this.mockedResponsesByKey = {};
        _this.addTypename = addTypename;
        if (mockedResponses) {
            mockedResponses.forEach(function (mockedResponse) {
                _this.addMockedResponse(mockedResponse);
            });
        }
        return _this;
    }
    MockLink.prototype.addMockedResponse = function (mockedResponse) {
        var normalizedMockedResponse = this.normalizeMockedResponse(mockedResponse);
        var key = requestToKey(normalizedMockedResponse.request, this.addTypename);
        var mockedResponses = this.mockedResponsesByKey[key];
        if (!mockedResponses) {
            mockedResponses = [];
            this.mockedResponsesByKey[key] = mockedResponses;
        }
        mockedResponses.push(normalizedMockedResponse);
    };
    MockLink.prototype.request = function (operation) {
        var _this = this;
        this.operation = operation;
        var key = requestToKey(operation, this.addTypename);
        var unmatchedVars = [];
        var requestVariables = operation.variables || {};
        var mockedResponses = this.mockedResponsesByKey[key];
        var responseIndex = mockedResponses ? mockedResponses.findIndex(function (res, index) {
            var mockedResponseVars = res.request.variables || {};
            if (equality.equal(requestVariables, mockedResponseVars)) {
                return true;
            }
            unmatchedVars.push(mockedResponseVars);
            return false;
        }) : -1;
        var response = responseIndex >= 0
            ? mockedResponses[responseIndex]
            : void 0;
        var configError;
        if (!response) {
            configError = new Error("No more mocked responses for the query: " + graphql.print(operation.query) + "\nExpected variables: " + utilities.stringifyForDisplay(operation.variables) + "\n" + (unmatchedVars.length > 0 ? "\nFailed to match " + unmatchedVars.length + " mock" + (unmatchedVars.length === 1 ? "" : "s") + " for this query, which had the following variables:\n" + unmatchedVars.map(function (d) { return "  " + utilities.stringifyForDisplay(d); }).join('\n') + "\n" : ""));
        }
        else {
            mockedResponses.splice(responseIndex, 1);
            var newData = response.newData;
            if (newData) {
                response.result = newData();
                mockedResponses.push(response);
            }
            if (!response.result && !response.error) {
                configError = new Error("Mocked response should contain either result or error: " + key);
            }
        }
        return new utilities.Observable(function (observer) {
            var timer = setTimeout(function () {
                if (configError) {
                    try {
                        if (_this.onError(configError, observer) !== false) {
                            throw configError;
                        }
                    }
                    catch (error) {
                        observer.error(error);
                    }
                }
                else if (response) {
                    if (response.error) {
                        observer.error(response.error);
                    }
                    else {
                        if (response.result) {
                            observer.next(typeof response.result === 'function'
                                ? response.result()
                                : response.result);
                        }
                        observer.complete();
                    }
                }
            }, response && response.delay || 0);
            return function () {
                clearTimeout(timer);
            };
        });
    };
    MockLink.prototype.normalizeMockedResponse = function (mockedResponse) {
        var newMockedResponse = utilities.cloneDeep(mockedResponse);
        var queryWithoutConnection = utilities.removeConnectionDirectiveFromDocument(newMockedResponse.request.query);
        __DEV__ ? tsInvariant.invariant(queryWithoutConnection, "query is required") : tsInvariant.invariant(queryWithoutConnection, 60);
        newMockedResponse.request.query = queryWithoutConnection;
        var query = utilities.removeClientSetsFromDocument(newMockedResponse.request.query);
        if (query) {
            newMockedResponse.request.query = query;
        }
        return newMockedResponse;
    };
    return MockLink;
}(core.ApolloLink));
function mockSingleLink() {
    var mockedResponses = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        mockedResponses[_i] = arguments[_i];
    }
    var maybeTypename = mockedResponses[mockedResponses.length - 1];
    var mocks = mockedResponses.slice(0, mockedResponses.length - 1);
    if (typeof maybeTypename !== 'boolean') {
        mocks = mockedResponses;
        maybeTypename = true;
    }
    return new MockLink(mocks, maybeTypename);
}

var MockedProvider = (function (_super) {
    tslib.__extends(MockedProvider, _super);
    function MockedProvider(props) {
        var _this = _super.call(this, props) || this;
        var _a = _this.props, mocks = _a.mocks, addTypename = _a.addTypename, defaultOptions = _a.defaultOptions, cache$1 = _a.cache, resolvers = _a.resolvers, link = _a.link;
        var client = new core$1.ApolloClient({
            cache: cache$1 || new cache.InMemoryCache({ addTypename: addTypename }),
            defaultOptions: defaultOptions,
            link: link || new MockLink(mocks || [], addTypename),
            resolvers: resolvers,
        });
        _this.state = { client: client };
        return _this;
    }
    MockedProvider.prototype.render = function () {
        var _a = this.props, children = _a.children, childProps = _a.childProps;
        return React__namespace.isValidElement(children) ? (React__namespace.createElement(context.ApolloProvider, { client: this.state.client }, React__namespace.cloneElement(React__namespace.Children.only(children), tslib.__assign({}, childProps)))) : null;
    };
    MockedProvider.prototype.componentWillUnmount = function () {
        this.state.client.stop();
    };
    MockedProvider.defaultProps = {
        addTypename: true
    };
    return MockedProvider;
}(React__namespace.Component));

var MockSubscriptionLink = (function (_super) {
    tslib.__extends(MockSubscriptionLink, _super);
    function MockSubscriptionLink() {
        var _this = _super.call(this) || this;
        _this.unsubscribers = [];
        _this.setups = [];
        _this.observers = [];
        return _this;
    }
    MockSubscriptionLink.prototype.request = function (operation) {
        var _this = this;
        this.operation = operation;
        return new utilities.Observable(function (observer) {
            _this.setups.forEach(function (x) { return x(); });
            _this.observers.push(observer);
            return function () {
                _this.unsubscribers.forEach(function (x) { return x(); });
            };
        });
    };
    MockSubscriptionLink.prototype.simulateResult = function (result, complete) {
        var _this = this;
        if (complete === void 0) { complete = false; }
        setTimeout(function () {
            var observers = _this.observers;
            if (!observers.length)
                throw new Error('subscription torn down');
            observers.forEach(function (observer) {
                if (result.result && observer.next)
                    observer.next(result.result);
                if (result.error && observer.error)
                    observer.error(result.error);
                if (complete && observer.complete)
                    observer.complete();
            });
        }, result.delay || 0);
    };
    MockSubscriptionLink.prototype.simulateComplete = function () {
        var observers = this.observers;
        if (!observers.length)
            throw new Error('subscription torn down');
        observers.forEach(function (observer) {
            if (observer.complete)
                observer.complete();
        });
    };
    MockSubscriptionLink.prototype.onSetup = function (listener) {
        this.setups = this.setups.concat([listener]);
    };
    MockSubscriptionLink.prototype.onUnsubscribe = function (listener) {
        this.unsubscribers = this.unsubscribers.concat([listener]);
    };
    return MockSubscriptionLink;
}(core.ApolloLink));
function mockObservableLink() {
    return new MockSubscriptionLink();
}

function createMockClient(data, query, variables) {
    if (variables === void 0) { variables = {}; }
    return new core$1.ApolloClient({
        link: mockSingleLink({
            request: { query: query, variables: variables },
            result: { data: data },
        }).setOnError(function (error) { throw error; }),
        cache: new cache.InMemoryCache({ addTypename: false }),
    });
}

function asyncMap(observable, mapFn, catchFn) {
    return new zenObservableTs.Observable(function (observer) {
        var next = observer.next, error = observer.error, complete = observer.complete;
        var activeCallbackCount = 0;
        var completed = false;
        var promiseQueue = {
            then: function (callback) {
                return new Promise(function (resolve) { return resolve(callback()); });
            },
        };
        function makeCallback(examiner, delegate) {
            if (examiner) {
                return function (arg) {
                    ++activeCallbackCount;
                    var both = function () { return examiner(arg); };
                    promiseQueue = promiseQueue.then(both, both).then(function (result) {
                        --activeCallbackCount;
                        next && next.call(observer, result);
                        if (completed) {
                            handler.complete();
                        }
                    }, function (error) {
                        --activeCallbackCount;
                        throw error;
                    }).catch(function (caught) {
                        error && error.call(observer, caught);
                    });
                };
            }
            else {
                return function (arg) { return delegate && delegate.call(observer, arg); };
            }
        }
        var handler = {
            next: makeCallback(mapFn, next),
            error: makeCallback(catchFn, error),
            complete: function () {
                completed = true;
                if (!activeCallbackCount) {
                    complete && complete.call(observer);
                }
            },
        };
        var sub = observable.subscribe(handler);
        return function () { return sub.unsubscribe(); };
    });
}

function subscribeAndCount(reject, observable, cb) {
    var queue = Promise.resolve();
    var handleCount = 0;
    var subscription = asyncMap(observable, function (result) {
        return queue = queue.then(function () {
            return cb(++handleCount, result);
        }).catch(error);
    }).subscribe({ error: error });
    function error(e) {
        subscription.unsubscribe();
        reject(e);
    }
    return subscription;
}

function wrap(key) {
    return function (message, callback, timeout) { return (key ? it[key] : it)(message, function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return callback.call(_this, resolve, reject); });
    }, timeout); };
}
var wrappedIt = wrap();
var itAsync = Object.assign(function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return wrappedIt.apply(this, args);
}, {
    only: wrap("only"),
    skip: wrap("skip"),
    todo: wrap("todo"),
});

function wrapTestFunction(fn, consoleMethodName) {
    return function () {
        var _this = this;
        var args = arguments;
        var spy = jest.spyOn(console, consoleMethodName);
        spy.mockImplementation(function () { });
        return new Promise(function (resolve) {
            resolve(fn === null || fn === void 0 ? void 0 : fn.apply(_this, args));
        }).finally(function () {
            expect(spy).toMatchSnapshot();
            spy.mockReset();
        });
    };
}
function withErrorSpy(it) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    args[1] = wrapTestFunction(args[1], "error");
    return it.apply(void 0, args);
}
function withWarningSpy(it) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    args[1] = wrapTestFunction(args[1], "warn");
    return it.apply(void 0, args);
}
function withLogSpy(it) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    args[1] = wrapTestFunction(args[1], "log");
    return it.apply(void 0, args);
}

__DEV__ ? tsInvariant.invariant("boolean" === typeof utilities.DEV, utilities.DEV) : tsInvariant.invariant("boolean" === typeof utilities.DEV, 42);

exports.MockLink = MockLink;
exports.MockSubscriptionLink = MockSubscriptionLink;
exports.MockedProvider = MockedProvider;
exports.createMockClient = createMockClient;
exports.itAsync = itAsync;
exports.mockObservableLink = mockObservableLink;
exports.mockSingleLink = mockSingleLink;
exports.subscribeAndCount = subscribeAndCount;
exports.withErrorSpy = withErrorSpy;
exports.withLogSpy = withLogSpy;
exports.withWarningSpy = withWarningSpy;
//# sourceMappingURL=testing.cjs.js.map
