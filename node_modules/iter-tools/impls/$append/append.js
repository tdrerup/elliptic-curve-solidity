var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(__append);

var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry;

function __append(source, value) {
  return _regeneratorRuntime.wrap(function __append$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.delegateYield(source, "t0", 1);

        case 1:
          _context.next = 3;
          return value;

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

exports.__append = __append;
var append = /*#__PURE__*/iterableCurry(__append);
exports.append = append;