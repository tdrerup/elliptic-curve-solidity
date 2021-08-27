var _require = require('./iterable.js'),
    ensureIterable = _require.ensureIterable;

var _require2 = require('../impls/$to-array/to-array.js'),
    __toArray = _require2.__toArray;

var _require3 = require('../impls/$map/map.js'),
    __map = _require3.__map;

function seqsToArray(values) {
  return __toArray(__map(values, function (value) {
    return __toArray(ensureIterable(value));
  }), function (arr) {
    return arr.length > 0;
  });
}

exports.seqsToArray = seqsToArray;