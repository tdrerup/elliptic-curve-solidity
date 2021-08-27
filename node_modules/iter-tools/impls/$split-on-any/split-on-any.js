var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry;

var _require2 = require('../$split-when/split-when.js'),
    __splitWhen = _require2.__splitWhen;

var _require3 = require('../$includes/includes.js'),
    __includes = _require3.__includes;

function __splitOnAny(source, separators) {
  var same = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Object.is;
  return __splitWhen(source, function (value) {
    return __includes(separators, value, function (a, b) {
      return same(b, a);
    });
  });
}

exports.__splitOnAny = __splitOnAny;
var splitOnAny = /*#__PURE__*/iterableCurry(__splitOnAny, {
  minArgs: 1,
  maxArgs: 2,
  validateArgs: function validateArgs(args) {
    if (true && typeof args[0] === 'string') {
      console.warn("For string inputs use splitOnAnySeq instead of splitOnAny");
    }
  }
});
exports.splitOnAny = splitOnAny;