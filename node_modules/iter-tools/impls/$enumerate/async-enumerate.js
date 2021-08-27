var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

var _require2 = require('../$map/async-map.js'),
    __asyncMap = _require2.__asyncMap;

function __asyncEnumerate(source) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return __asyncMap(source, function (value, i) {
    return [start + i, value];
  });
}

exports.__asyncEnumerate = __asyncEnumerate;
var asyncEnumerate = /*#__PURE__*/asyncIterableCurry(__asyncEnumerate, {
  minArgs: 0,
  maxArgs: 1
});
exports.asyncEnumerate = asyncEnumerate;