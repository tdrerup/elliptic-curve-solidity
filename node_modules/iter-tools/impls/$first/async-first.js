var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

var _require2 = require('../$first-or/async-first-or.js'),
    __asyncFirstOr = _require2.__asyncFirstOr;

function __asyncFirst(iterable) {
  return __asyncFirstOr(iterable, undefined);
}

exports.__asyncFirst = __asyncFirst;
var asyncFirst = /*#__PURE__*/asyncIterableCurry(__asyncFirst, {
  reduces: true
});
exports.asyncFirst = asyncFirst;