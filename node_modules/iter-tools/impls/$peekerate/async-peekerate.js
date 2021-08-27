var _require = require('../../internal/async-iterable.js'),
    asyncEnsureIterable = _require.asyncEnsureIterable;

var _require2 = require('../../internal/async-peekerator.js'),
    AsyncPeekerator = _require2.AsyncPeekerator;

function __asyncPeekerate(source) {
  return AsyncPeekerator.from(source);
}

exports.__asyncPeekerate = __asyncPeekerate;

function asyncWrapWithEnsureIterable(fn) {
  return function (source) {
    return fn(asyncEnsureIterable(source));
  };
}

var asyncPeekerate = asyncWrapWithEnsureIterable(__asyncPeekerate);
exports.asyncPeekerate = asyncPeekerate;