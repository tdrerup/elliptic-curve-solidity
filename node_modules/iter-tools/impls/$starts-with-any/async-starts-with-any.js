var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _asyncToGenerator = require("@babel/runtime/helpers/asyncToGenerator");

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

var _require2 = require('../$first-or/async-first-or.js'),
    __asyncFirstOr = _require2.__asyncFirstOr;

var _require3 = require('../$includes/includes.js'),
    __includes = _require3.__includes;

var none = Symbol('none');

function __asyncStartsWithAny(_x, _x2) {
  return _asyncStartsWithAny.apply(this, arguments);
}

function _asyncStartsWithAny() {
  _asyncStartsWithAny = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(iterable, values) {
    var same,
        first,
        _args = arguments;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            same = _args.length > 2 && _args[2] !== undefined ? _args[2] : Object.is;
            _context.next = 3;
            return __asyncFirstOr(iterable, none);

          case 3:
            first = _context.sent;

            if (!(first === none)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", false);

          case 6:
            return _context.abrupt("return", __includes(values, first, function (a, b) {
              return same(b, a);
            }));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _asyncStartsWithAny.apply(this, arguments);
}

exports.__asyncStartsWithAny = __asyncStartsWithAny;
var asyncStartsWithAny = /*#__PURE__*/asyncIterableCurry(__asyncStartsWithAny, {
  minArgs: 1,
  maxArgs: 2,
  reduces: true,
  validateArgs: function validateArgs(args) {}
});
exports.asyncStartsWithAny = asyncStartsWithAny;