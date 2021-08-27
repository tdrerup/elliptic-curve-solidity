var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(wrap),
    _marked2 = /*#__PURE__*/_regeneratorRuntime.mark(nullableWrap);

function wrap(source) {
  return _regeneratorRuntime.wrap(function wrap$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.delegateYield(source, "t0", 1);

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

exports.wrap = wrap;

function nullableWrap(source) {
  return _regeneratorRuntime.wrap(function nullableWrap$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!(source != null)) {
            _context2.next = 2;
            break;
          }

          return _context2.delegateYield(source, "t0", 2);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

exports.nullableWrap = nullableWrap;