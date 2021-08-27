var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(__reverse);

var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry;

var _require2 = require('../$to-array/to-array.js'),
    __toArray = _require2.__toArray;

function __reverse(source) {
  return _regeneratorRuntime.wrap(function __reverse$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.delegateYield(__toArray(source).reverse(), "t0", 1);

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

exports.__reverse = __reverse;
var reverse = /*#__PURE__*/iterableCurry(__reverse);
exports.reverse = reverse;