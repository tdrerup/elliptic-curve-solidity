var _require = require('../not-undefined/not-undefined.js'),
    notUndefined = _require.notUndefined;

function isWrappable(value) {
  return value == null || notUndefined(value[Symbol.iterator]);
}

exports.isWrappable = isWrappable;