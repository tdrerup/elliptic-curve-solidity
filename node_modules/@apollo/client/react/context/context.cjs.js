'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var tsInvariant = require('ts-invariant');
var utilities = require('../../utilities');

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

var cache = new (utilities.canUseWeakMap ? WeakMap : Map)();
function getApolloContext() {
    var context = cache.get(React__namespace.createContext);
    if (!context) {
        context = React__namespace.createContext({});
        context.displayName = 'ApolloContext';
        cache.set(React__namespace.createContext, context);
    }
    return context;
}

var ApolloConsumer = function (props) {
    var ApolloContext = getApolloContext();
    return React__namespace.createElement(ApolloContext.Consumer, null, function (context) {
        __DEV__ ? tsInvariant.invariant(context && context.client, 'Could not find "client" in the context of ApolloConsumer. ' +
            'Wrap the root component in an <ApolloProvider>.') : tsInvariant.invariant(context && context.client, 30);
        return props.children(context.client);
    });
};

var ApolloProvider = function (_a) {
    var client = _a.client, children = _a.children;
    var ApolloContext = getApolloContext();
    return React__namespace.createElement(ApolloContext.Consumer, null, function (context) {
        if (context === void 0) { context = {}; }
        if (client && context.client !== client) {
            context = Object.assign({}, context, { client: client });
        }
        __DEV__ ? tsInvariant.invariant(context.client, 'ApolloProvider was not passed a client instance. Make ' +
            'sure you pass in your client via the "client" prop.') : tsInvariant.invariant(context.client, 31);
        return (React__namespace.createElement(ApolloContext.Provider, { value: context }, children));
    });
};

exports.ApolloConsumer = ApolloConsumer;
exports.ApolloProvider = ApolloProvider;
exports.getApolloContext = getApolloContext;
exports.resetApolloContext = getApolloContext;
//# sourceMappingURL=context.cjs.js.map
