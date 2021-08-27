var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry;

var _require2 = require('../../internal/parts-iterator.js'),
    PartsIterator = _require2.PartsIterator;

var _require3 = require('../$map/map.js'),
    __map = _require3.__map;

var _require4 = require('../$wrap/wrap.js'),
    __wrap = _require4.__wrap;

function __spliterate(source, strategy) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return new PartsIterator(source, strategy, options);
}

exports.__spliterate = __spliterate;
var spliterate = /*#__PURE__*/iterableCurry(function $spliterate() {
  return __map(__spliterate.apply(void 0, arguments), __wrap);
}, {
  minArgs: 1,
  maxArgs: 2,
  growRight: true
});
exports.spliterate = spliterate;