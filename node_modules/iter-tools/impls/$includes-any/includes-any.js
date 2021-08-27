var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry;

var _require2 = require('../$find-or/find-or.js'),
    __findOr = _require2.__findOr;

var _require3 = require('../$includes/includes.js'),
    __includes = _require3.__includes;

var none = Symbol('none');

function __includesAny(iterable, values) {
  var same = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Object.is;
  return __findOr(iterable, none, function (value) {
    return __includes(values, value, function (a, b) {
      return same(b, a);
    });
  }) !== none;
}

exports.__includesAny = __includesAny;
var includesAny = /*#__PURE__*/iterableCurry(__includesAny, {
  minArgs: 1,
  maxArgs: 2,
  reduces: true,
  validateArgs: function validateArgs(args) {
    if (true && typeof args[0] === 'string') {
      console.warn("For string inputs use includesAnySeq instead of includesAny");
    }
  }
});
exports.includesAny = includesAny;