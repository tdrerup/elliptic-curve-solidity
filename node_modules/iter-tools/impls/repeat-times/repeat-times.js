var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(__repeatTimes);

var _require = require('../../internal/curry.js'),
    curry = _require.curry;

var _require2 = require('../../internal/iterable.js'),
    wrapWithIterableIterator = _require2.wrapWithIterableIterator;

function __repeatTimes(n, value) {
  return _regeneratorRuntime.wrap(function __repeatTimes$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!n--) {
            _context.next = 5;
            break;
          }

          _context.next = 3;
          return value;

        case 3:
          _context.next = 0;
          break;

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

exports.__repeatTimes = __repeatTimes;
var repeatTimes = /*#__PURE__*/curry( /*#__PURE__*/wrapWithIterableIterator(__repeatTimes), __repeatTimes.length);
exports.repeatTimes = repeatTimes;