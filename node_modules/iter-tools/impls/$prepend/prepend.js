var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(__prepend);

var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry;

function __prepend(source, value) {
  return _regeneratorRuntime.wrap(function __prepend$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return value;

        case 2:
          return _context.delegateYield(source, "t0", 3);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

exports.__prepend = __prepend;
var prepend = /*#__PURE__*/iterableCurry(__prepend);
exports.prepend = prepend;