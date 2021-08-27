var _require = require('../not-undefined/not-undefined.js'),
    notUndefined = _require.notUndefined;

function isAsyncIterable(value) {
  return value != null && notUndefined(value[Symbol.asyncIterator]);
}

exports.isAsyncIterable = isAsyncIterable;