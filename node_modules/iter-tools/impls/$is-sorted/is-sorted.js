var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry;

var _require2 = require('../../internal/compare.js'),
    defaultCompareOrder = _require2.defaultCompareOrder;

var _require3 = require('../$peekerate/peekerate.js'),
    __peekerate = _require3.__peekerate;

function __isSorted(iterable) {
  var compare = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultCompareOrder;

  var peekr = __peekerate(iterable);

  while (!peekr.done) {
    var value = peekr.value;
    peekr.advance();

    if (!peekr.done && compare(value, peekr.value) > 0) {
      peekr["return"]();
      return false;
    }
  }

  return true;
}

exports.__isSorted = __isSorted;
var isSorted = /*#__PURE__*/iterableCurry(__isSorted, {
  reduces: true,
  minArgs: 0,
  maxArgs: 1
});
exports.isSorted = isSorted;