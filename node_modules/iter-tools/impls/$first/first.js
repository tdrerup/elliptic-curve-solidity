var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry;

var _require2 = require('../$first-or/first-or.js'),
    __firstOr = _require2.__firstOr;

function __first(iterable) {
  return __firstOr(iterable, undefined);
}

exports.__first = __first;
var first = /*#__PURE__*/iterableCurry(__first, {
  reduces: true
});
exports.first = first;