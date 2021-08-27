var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry;

var _require2 = require('../$find-or/find-or.js'),
    __findOr = _require2.__findOr;

var none = Symbol('none');

function __includes(iterable, value) {
  var same = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Object.is;
  return __findOr(iterable, none, function (v) {
    return same(value, v);
  }) !== none;
}

exports.__includes = __includes;
var includes = /*#__PURE__*/iterableCurry(__includes, {
  minArgs: 1,
  maxArgs: 2,
  reduces: true,
  validateArgs: function validateArgs(args) {
    if (true && typeof args[0] === 'string') {
      console.warn("For string inputs use includesSeq instead of includes");
    }
  }
});
exports.includes = includes;