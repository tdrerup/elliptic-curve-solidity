var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(__repeat);

var _require = require('../../internal/iterable.js'),
    wrapWithIterableIterator = _require.wrapWithIterableIterator;

function __repeat(value) {
  return _regeneratorRuntime.wrap(function __repeat$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!true) {
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

exports.__repeat = __repeat;
var repeat = /*#__PURE__*/wrapWithIterableIterator(__repeat);
exports.repeat = repeat;