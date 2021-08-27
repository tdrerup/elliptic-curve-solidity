var _require = require('../not-undefined/not-undefined.js'),
    notUndefined = _require.notUndefined;

function isAsyncWrappable(value) {
  return value == null || notUndefined(value[Symbol.asyncIterator]) || notUndefined(value[Symbol.iterator]);
}

exports.isAsyncWrappable = isAsyncWrappable;