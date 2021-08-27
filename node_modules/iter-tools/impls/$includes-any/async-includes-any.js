var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _asyncToGenerator = require("@babel/runtime/helpers/asyncToGenerator");

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

var _require2 = require('../$find-or/async-find-or.js'),
    __asyncFindOr = _require2.__asyncFindOr;

var _require3 = require('../$includes/includes.js'),
    __includes = _require3.__includes;

var none = Symbol('none');

function __asyncIncludesAny(_x, _x2) {
  return _asyncIncludesAny.apply(this, arguments);
}

function _asyncIncludesAny() {
  _asyncIncludesAny = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(iterable, values) {
    var same,
        _args = arguments;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            same = _args.length > 2 && _args[2] !== undefined ? _args[2] : Object.is;
            _context.next = 3;
            return __asyncFindOr(iterable, none, function (value) {
              return __includes(values, value, function (a, b) {
                return same(b, a);
              });
            });

          case 3:
            _context.t0 = _context.sent;
            _context.t1 = none;
            return _context.abrupt("return", _context.t0 !== _context.t1);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _asyncIncludesAny.apply(this, arguments);
}

exports.__asyncIncludesAny = __asyncIncludesAny;
var asyncIncludesAny = /*#__PURE__*/asyncIterableCurry(__asyncIncludesAny, {
  minArgs: 1,
  maxArgs: 2,
  reduces: true,
  validateArgs: function validateArgs(args) {}
});
exports.asyncIncludesAny = asyncIncludesAny;