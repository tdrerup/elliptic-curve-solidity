var _require = require('../not-undefined/not-undefined.js'),
    notUndefined = _require.notUndefined;

function isIterable(value) {
  return value != null && notUndefined(value[Symbol.iterator]);
}

exports.isIterable = isIterable;