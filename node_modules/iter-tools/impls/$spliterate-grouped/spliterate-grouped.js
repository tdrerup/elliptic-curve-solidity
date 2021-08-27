var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry;

var _require2 = require('../../internal/groups-iterator.js'),
    GroupsIterator = _require2.GroupsIterator;

var _require3 = require('../$map/map.js'),
    __map = _require3.__map;

var _require4 = require('../$wrap/wrap.js'),
    __wrap = _require4.__wrap;

function __spliterateGrouped(source, strategy) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return new GroupsIterator(source, strategy, options);
}

exports.__spliterateGrouped = __spliterateGrouped;
var spliterateGrouped = /*#__PURE__*/iterableCurry(function $spliterateGrouped() {
  return __map(__spliterateGrouped.apply(void 0, arguments), __wrap);
}, {
  minArgs: 1,
  maxArgs: 2,
  growRight: true
});
exports.spliterateGrouped = spliterateGrouped;