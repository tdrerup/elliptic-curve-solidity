var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _asyncToGenerator = require("@babel/runtime/helpers/asyncToGenerator");

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

var _require2 = require('../$first-or/async-first-or.js'),
    __asyncFirstOr = _require2.__asyncFirstOr;

var none = Symbol('none');

function __asyncStartsWith(_x, _x2) {
  return _asyncStartsWith.apply(this, arguments);
}

function _asyncStartsWith() {
  _asyncStartsWith = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(iterable, value) {
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
            return _context.abrupt("return", same(value, first));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _asyncStartsWith.apply(this, arguments);
}

exports.__asyncStartsWith = __asyncStartsWith;
var asyncStartsWith = /*#__PURE__*/asyncIterableCurry(__asyncStartsWith, {
  minArgs: 1,
  maxArgs: 2,
  reduces: true,
  validateArgs: function validateArgs(args) {}
});
exports.asyncStartsWith = asyncStartsWith;