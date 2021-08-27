var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

var _require2 = require('../../internal/async-groups-iterator.js'),
    AsyncGroupsIterator = _require2.AsyncGroupsIterator;

var _require3 = require('../$map/async-map.js'),
    __asyncMap = _require3.__asyncMap;

var _require4 = require('../$wrap/async-wrap.js'),
    __asyncWrap = _require4.__asyncWrap;

function __asyncSpliterateGrouped(source, strategy) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return new AsyncGroupsIterator(source, strategy, options);
}

exports.__asyncSpliterateGrouped = __asyncSpliterateGrouped;
var asyncSpliterateGrouped = /*#__PURE__*/asyncIterableCurry(function $spliterateGrouped() {
  return __asyncMap(__asyncSpliterateGrouped.apply(void 0, arguments), __asyncWrap);
}, {
  minArgs: 1,
  maxArgs: 2,
  growRight: true
});
exports.asyncSpliterateGrouped = asyncSpliterateGrouped;