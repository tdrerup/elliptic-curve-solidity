var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(__wrapKeys);

var _require = require('../../internal/iterable.js'),
    wrapWithIterableIterator = _require.wrapWithIterableIterator;

function __wrapKeys(keysable) {
  return _regeneratorRuntime.wrap(function __wrapKeys$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(keysable != null)) {
            _context.next = 2;
            break;
          }

          return _context.delegateYield(keysable.keys(), "t0", 2);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

exports.__wrapKeys = __wrapKeys;
var wrapKeys = /*#__PURE__*/wrapWithIterableIterator(__wrapKeys);
exports.wrapKeys = wrapKeys;