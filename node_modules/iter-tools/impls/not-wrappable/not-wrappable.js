var _require = require('../is-undefined/is-undefined.js'),
    isUndefined = _require.isUndefined;

function notWrappable(value) {
  return value != null && isUndefined(value[Symbol.iterator]);
}

exports.notWrappable = notWrappable;