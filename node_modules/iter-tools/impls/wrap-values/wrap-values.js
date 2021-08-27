var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(__wrapValues);

var _require = require('../../internal/iterable.js'),
    wrapWithIterableIterator = _require.wrapWithIterableIterator;

function __wrapValues(valuesable) {
  return _regeneratorRuntime.wrap(function __wrapValues$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(valuesable != null)) {
            _context.next = 2;
            break;
          }

          return _context.delegateYield(valuesable.values(), "t0", 2);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

exports.__wrapValues = __wrapValues;
var wrapValues = /*#__PURE__*/wrapWithIterableIterator(__wrapValues);
exports.wrapValues = wrapValues;