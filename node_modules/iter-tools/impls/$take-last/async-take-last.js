var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

var _require2 = require('../$take-last-or/async-take-last-or.js'),
    __asyncTakeLastOr = _require2.__asyncTakeLastOr;

function __asyncTakeLast(iterable) {
  return __asyncTakeLastOr(iterable, undefined);
}

exports.__asyncTakeLast = __asyncTakeLast;
var asyncTakeLast = /*#__PURE__*/asyncIterableCurry(__asyncTakeLast, {
  reduces: true
});
exports.asyncTakeLast = asyncTakeLast;