var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(__cycleTimes);

var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry;

var _require2 = require('../$to-array/to-array.js'),
    __toArray = _require2.__toArray;

function __cycleTimes(source, n) {
  var arr;
  return _regeneratorRuntime.wrap(function __cycleTimes$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          arr = Array.isArray(source) ? source : __toArray(source);

          if (arr.length) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return");

        case 3:
          if (!n--) {
            _context.next = 7;
            break;
          }

          return _context.delegateYield(arr, "t0", 5);

        case 5:
          _context.next = 3;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

exports.__cycleTimes = __cycleTimes;
var cycleTimes = /*#__PURE__*/iterableCurry(__cycleTimes);
exports.cycleTimes = cycleTimes;