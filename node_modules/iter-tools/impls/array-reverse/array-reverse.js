var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(__arrayReverse);

var _require = require('../../internal/iterable.js'),
    wrapWithIterableIterator = _require.wrapWithIterableIterator;

function __arrayReverse(source) {
  var i;
  return _regeneratorRuntime.wrap(function __arrayReverse$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(source == null)) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return");

        case 2:
          i = source.length - 1;

        case 3:
          if (!(i >= 0)) {
            _context.next = 9;
            break;
          }

          _context.next = 6;
          return source[i];

        case 6:
          i--;
          _context.next = 3;
          break;

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

exports.__arrayReverse = __arrayReverse;
var arrayReverse = /*#__PURE__*/wrapWithIterableIterator(__arrayReverse, {
  validateArgs: function validateArgs(args) {
    if (!(Array.isArray(args[0]) || typeof args[0] === 'string' || args[0] == null)) {
      throw new Error('arrayReverse only works arrays and strings');
    }
  }
});
exports.arrayReverse = arrayReverse;