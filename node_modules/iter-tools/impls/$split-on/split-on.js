var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry;

var _require2 = require('../$split-when/split-when.js'),
    __splitWhen = _require2.__splitWhen;

function __splitOn(source, separator) {
  var same = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Object.is;
  return __splitWhen(source, function (value) {
    return same(separator, value);
  });
}

exports.__splitOn = __splitOn;
var splitOn = /*#__PURE__*/iterableCurry(__splitOn, {
  minArgs: 1,
  maxArgs: 2,
  validateArgs: function validateArgs(args) {
    if (true && typeof args[0] === 'string') {
      console.warn("For string inputs use splitOnSeq instead of splitOn");
    }
  }
});
exports.splitOn = splitOn;