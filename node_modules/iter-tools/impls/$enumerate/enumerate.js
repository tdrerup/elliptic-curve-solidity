var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry;

var _require2 = require('../$map/map.js'),
    __map = _require2.__map;

function __enumerate(source) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return __map(source, function (value, i) {
    return [start + i, value];
  });
}

exports.__enumerate = __enumerate;
var enumerate = /*#__PURE__*/iterableCurry(__enumerate, {
  minArgs: 0,
  maxArgs: 1
});
exports.enumerate = enumerate;