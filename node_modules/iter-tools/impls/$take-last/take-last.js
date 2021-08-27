var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry;

var _require2 = require('../$take-last-or/take-last-or.js'),
    __takeLastOr = _require2.__takeLastOr;

function __takeLast(iterable) {
  return __takeLastOr(iterable, undefined);
}

exports.__takeLast = __takeLast;
var takeLast = /*#__PURE__*/iterableCurry(__takeLast, {
  reduces: true
});
exports.takeLast = takeLast;