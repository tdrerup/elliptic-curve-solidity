var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry;

var _require2 = require('../$first-or/first-or.js'),
    __firstOr = _require2.__firstOr;

var _require3 = require('../$includes/includes.js'),
    __includes = _require3.__includes;

var none = Symbol('none');

function __startsWithAny(iterable, values) {
  var same = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Object.is;

  var first = __firstOr(iterable, none);

  if (first === none) return false;
  return __includes(values, first, function (a, b) {
    return same(b, a);
  });
}

exports.__startsWithAny = __startsWithAny;
var startsWithAny = /*#__PURE__*/iterableCurry(__startsWithAny, {
  minArgs: 1,
  maxArgs: 2,
  reduces: true,
  validateArgs: function validateArgs(args) {
    if (true && typeof args[0] === 'string') {
      console.warn('For string inputs use startsWithAnySeq instead of startsWithAny');
    }
  }
});
exports.startsWithAny = startsWithAny;