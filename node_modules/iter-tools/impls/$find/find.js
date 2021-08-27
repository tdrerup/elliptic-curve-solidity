var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry;

var _require2 = require('../$find-or/find-or.js'),
    __findOr = _require2.__findOr;

function __find(iterable, predicate) {
  return __findOr(iterable, undefined, predicate);
}

exports.__find = __find;
var find = /*#__PURE__*/iterableCurry(__find, {
  reduces: true
});
exports.find = find;