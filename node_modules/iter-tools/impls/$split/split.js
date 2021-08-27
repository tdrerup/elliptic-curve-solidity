var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(iterableOf);

var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry;

var _require2 = require('../$map/map.js'),
    __map = _require2.__map;

function iterableOf(value) {
  return _regeneratorRuntime.wrap(function iterableOf$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return value;

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function __split(source) {
  return __map(source, function (value) {
    return iterableOf(value);
  });
}

exports.__split = __split;
var split = /*#__PURE__*/iterableCurry(__split);
exports.split = split;