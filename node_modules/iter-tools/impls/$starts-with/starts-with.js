var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry;

var _require2 = require('../$first-or/first-or.js'),
    __firstOr = _require2.__firstOr;

var none = Symbol('none');

function __startsWith(iterable, value) {
  var same = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Object.is;

  var first = __firstOr(iterable, none);

  if (first === none) return false;
  return same(value, first);
}

exports.__startsWith = __startsWith;
var startsWith = /*#__PURE__*/iterableCurry(__startsWith, {
  minArgs: 1,
  maxArgs: 2,
  reduces: true,
  validateArgs: function validateArgs(args) {
    if (true && typeof args[0] === 'string') {
      console.warn('For string inputs use startsWithSeq instead of startsWith');
    }
  }
});
exports.startsWith = startsWith;