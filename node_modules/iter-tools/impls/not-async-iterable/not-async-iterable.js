var _require = require('../is-undefined/is-undefined.js'),
    isUndefined = _require.isUndefined;

function notAsyncIterable(value) {
  return value == null || isUndefined(value[Symbol.asyncIterator]);
}

exports.notAsyncIterable = notAsyncIterable;