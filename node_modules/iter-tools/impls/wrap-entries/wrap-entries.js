var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(__wrapEntries);

var _require = require('../../internal/iterable.js'),
    wrapWithIterableIterator = _require.wrapWithIterableIterator;

function __wrapEntries(entriesable) {
  return _regeneratorRuntime.wrap(function __wrapEntries$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(entriesable != null)) {
            _context.next = 2;
            break;
          }

          return _context.delegateYield(entriesable.entries(), "t0", 2);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

exports.__wrapEntries = __wrapEntries;
var wrapEntries = /*#__PURE__*/wrapWithIterableIterator(__wrapEntries);
exports.wrapEntries = wrapEntries;