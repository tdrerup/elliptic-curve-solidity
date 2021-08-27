var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry;

var _require2 = require('../$first-or/first-or.js'),
    __firstOr = _require2.__firstOr;

var none = Symbol('none');

function __isEmpty(iterable) {
  return __firstOr(iterable, none) === none;
}

exports.__isEmpty = __isEmpty;
var isEmpty = /*#__PURE__*/iterableCurry(__isEmpty, {
  reduces: true
});
exports.isEmpty = isEmpty;