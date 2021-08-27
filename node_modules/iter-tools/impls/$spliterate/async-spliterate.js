var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

var _require2 = require('../../internal/async-parts-iterator.js'),
    AsyncPartsIterator = _require2.AsyncPartsIterator;

var _require3 = require('../$map/async-map.js'),
    __asyncMap = _require3.__asyncMap;

var _require4 = require('../$wrap/async-wrap.js'),
    __asyncWrap = _require4.__asyncWrap;

function __asyncSpliterate(source, strategy) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return new AsyncPartsIterator(source, strategy, options);
}

exports.__asyncSpliterate = __asyncSpliterate;
var asyncSpliterate = /*#__PURE__*/asyncIterableCurry(function $spliterate() {
  return __asyncMap(__asyncSpliterate.apply(void 0, arguments), __asyncWrap);
}, {
  minArgs: 1,
  maxArgs: 2,
  growRight: true
});
exports.asyncSpliterate = asyncSpliterate;