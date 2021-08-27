var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _asyncToGenerator = require("@babel/runtime/helpers/asyncToGenerator");

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

var _require2 = require('../$find-or/async-find-or.js'),
    __asyncFindOr = _require2.__asyncFindOr;

var none = Symbol('none');

function __asyncIncludes(_x, _x2) {
  return _asyncIncludes.apply(this, arguments);
}

function _asyncIncludes() {
  _asyncIncludes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(iterable, value) {
    var same,
        _args = arguments;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            same = _args.length > 2 && _args[2] !== undefined ? _args[2] : Object.is;
            _context.next = 3;
            return __asyncFindOr(iterable, none, function (v) {
              return same(value, v);
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
  return _asyncIncludes.apply(this, arguments);
}

exports.__asyncIncludes = __asyncIncludes;
var asyncIncludes = /*#__PURE__*/asyncIterableCurry(__asyncIncludes, {
  minArgs: 1,
  maxArgs: 2,
  reduces: true,
  validateArgs: function validateArgs(args) {}
});
exports.asyncIncludes = asyncIncludes;