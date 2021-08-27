'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var tsInvariant = require('ts-invariant');
var context = require('../context');
var tslib = require('tslib');
var data = require('../data');
var equality = require('@wry/equality');

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

function useApolloClient() {
    var client = React__namespace.useContext(context.getApolloContext()).client;
    __DEV__ ? tsInvariant.invariant(client, 'No Apollo Client instance can be found. Please ensure that you ' +
        'have called `ApolloProvider` higher up in your tree.') : tsInvariant.invariant(client, 36);
    return client;
}

function useDeepMemo(memoFn, key) {
    var ref = React.useRef();
    if (!ref.current || !equality.equal(key, ref.current.key)) {
        ref.current = { key: key, value: memoFn() };
    }
    return ref.current.value;
}

function useAfterFastRefresh(effectFn) {
    if (__DEV__) {
        var didRefresh_1 = React.useRef(false);
        React.useEffect(function () {
            return function () {
                didRefresh_1.current = true;
            };
        }, []);
        React.useEffect(function () {
            if (didRefresh_1.current === true) {
                didRefresh_1.current = false;
                effectFn();
            }
        }, []);
    }
}

function useBaseQuery(query, options, lazy) {
    if (lazy === void 0) { lazy = false; }
    var context$1 = React.useContext(context.getApolloContext());
    var _a = React.useReducer(function (x) { return x + 1; }, 0), tick = _a[0], forceUpdate = _a[1];
    var updatedOptions = options ? tslib.__assign(tslib.__assign({}, options), { query: query }) : { query: query };
    var queryDataRef = React.useRef();
    var queryData = queryDataRef.current || (queryDataRef.current = new data.QueryData({
        options: updatedOptions,
        context: context$1,
        onNewData: function () {
            if (!queryData.ssrInitiated()) {
                Promise.resolve().then(function () { return queryDataRef.current && queryDataRef.current.isMounted && forceUpdate(); });
            }
            else {
                forceUpdate();
            }
        }
    }));
    queryData.setOptions(updatedOptions);
    queryData.context = context$1;
    var memo = {
        options: tslib.__assign(tslib.__assign({}, updatedOptions), { onError: void 0, onCompleted: void 0 }),
        context: context$1,
        tick: tick
    };
    var result = useDeepMemo(function () { return (lazy ? queryData.executeLazy() : queryData.execute()); }, memo);
    var queryResult = lazy
        ? result[1]
        : result;
    if (__DEV__) {
        useAfterFastRefresh(forceUpdate);
    }
    React.useEffect(function () {
        return function () {
            queryData.cleanup();
            queryDataRef.current = void 0;
        };
    }, []);
    React.useEffect(function () { return queryData.afterExecute({ lazy: lazy }); }, [
        queryResult.loading,
        queryResult.networkStatus,
        queryResult.error,
        queryResult.data,
        queryData.currentObservable,
    ]);
    return result;
}

function useLazyQuery(query, options) {
    return useBaseQuery(query, options, true);
}

function useMutation(mutation, options) {
    var context$1 = React.useContext(context.getApolloContext());
    var _a = React.useState({ called: false, loading: false }), result = _a[0], setResult = _a[1];
    var updatedOptions = options ? tslib.__assign(tslib.__assign({}, options), { mutation: mutation }) : { mutation: mutation };
    var mutationDataRef = React.useRef();
    function getMutationDataRef() {
        if (!mutationDataRef.current) {
            mutationDataRef.current = new data.MutationData({
                options: updatedOptions,
                context: context$1,
                result: result,
                setResult: setResult
            });
        }
        return mutationDataRef.current;
    }
    var mutationData = getMutationDataRef();
    mutationData.setOptions(updatedOptions);
    mutationData.context = context$1;
    React.useEffect(function () { return mutationData.afterExecute(); });
    return mutationData.execute(result);
}

function useQuery(query, options) {
    return useBaseQuery(query, options, false);
}

function useSubscription(subscription, options) {
    var _a = React.useReducer(function (x) { return x + 1; }, 0), forceUpdate = _a[1];
    var context$1 = React.useContext(context.getApolloContext());
    var updatedOptions = options
        ? tslib.__assign(tslib.__assign({}, options), { subscription: subscription }) : { subscription: subscription };
    var _b = React.useState({
        loading: !updatedOptions.skip,
        error: void 0,
        data: void 0,
    }), result = _b[0], setResult = _b[1];
    var subscriptionDataRef = React.useRef();
    function getSubscriptionDataRef() {
        if (!subscriptionDataRef.current) {
            subscriptionDataRef.current = new data.SubscriptionData({
                options: updatedOptions,
                context: context$1,
                setResult: setResult
            });
        }
        return subscriptionDataRef.current;
    }
    var subscriptionData = getSubscriptionDataRef();
    subscriptionData.setOptions(updatedOptions, true);
    subscriptionData.context = context$1;
    if (__DEV__) {
        useAfterFastRefresh(forceUpdate);
    }
    React.useEffect(function () { return subscriptionData.afterExecute(); });
    React.useEffect(function () {
        return function () {
            subscriptionData.cleanup();
            subscriptionDataRef.current = void 0;
        };
    }, []);
    return subscriptionData.execute(result);
}

function useReactiveVar(rv) {
    var value = rv();
    var setValue = React.useState(value)[1];
    React.useEffect(function () {
        var probablySameValue = rv();
        if (value !== probablySameValue) {
            setValue(probablySameValue);
        }
        else {
            return rv.onNextChange(setValue);
        }
    }, [value]);
    return value;
}

exports.useApolloClient = useApolloClient;
exports.useLazyQuery = useLazyQuery;
exports.useMutation = useMutation;
exports.useQuery = useQuery;
exports.useReactiveVar = useReactiveVar;
exports.useSubscription = useSubscription;
//# sourceMappingURL=hooks.cjs.js.map
