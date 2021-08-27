var _require = require('../is-undefined/is-undefined.js'),
    isUndefined = _require.isUndefined;

function notAsyncLoopable(value) {
  return value == null || isUndefined(value[Symbol.asyncIterator]) && isUndefined(value[Symbol.iterator]);
}

exports.notAsyncLoopable = notAsyncLoopable;