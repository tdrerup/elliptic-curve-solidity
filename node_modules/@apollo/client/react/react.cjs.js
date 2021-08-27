'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tsInvariant = require('ts-invariant');
var utilities = require('../utilities');
var context = require('./context');
var hooks = require('./hooks');
var parser = require('./parser');

__DEV__ ? tsInvariant.invariant("boolean" === typeof utilities.DEV, utilities.DEV) : tsInvariant.invariant("boolean" === typeof utilities.DEV, 37);

exports.ApolloConsumer = context.ApolloConsumer;
exports.ApolloProvider = context.ApolloProvider;
exports.getApolloContext = context.getApolloContext;
exports.resetApolloContext = context.resetApolloContext;
exports.DocumentType = parser.DocumentType;
exports.operationName = parser.operationName;
exports.parser = parser.parser;
Object.keys(hooks).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) exports[k] = hooks[k];
});
//# sourceMappingURL=react.cjs.js.map
