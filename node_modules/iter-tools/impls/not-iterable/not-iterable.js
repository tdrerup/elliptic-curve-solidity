var _require = require('../is-undefined/is-undefined.js'),
    isUndefined = _require.isUndefined;

function notIterable(value) {
  return value == null || isUndefined(value[Symbol.iterator]);
}

exports.notIterable = notIterable;