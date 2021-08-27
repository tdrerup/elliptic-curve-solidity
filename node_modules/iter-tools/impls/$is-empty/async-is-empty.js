var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _asyncToGenerator = require("@babel/runtime/helpers/asyncToGenerator");

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

var _require2 = require('../$first-or/async-first-or.js'),
    __asyncFirstOr = _require2.__asyncFirstOr;

var none = Symbol('none');

function __asyncIsEmpty(_x) {
  return _asyncIsEmpty.apply(this, arguments);
}

function _asyncIsEmpty() {
  _asyncIsEmpty = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(iterable) {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return __asyncFirstOr(iterable, none);

          case 2:
            _context.t0 = _context.sent;
            _context.t1 = none;
            return _context.abrupt("return", _context.t0 === _context.t1);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _asyncIsEmpty.apply(this, arguments);
}

exports.__asyncIsEmpty = __asyncIsEmpty;
var asyncIsEmpty = /*#__PURE__*/asyncIterableCurry(__asyncIsEmpty, {
  reduces: true
});
exports.asyncIsEmpty = asyncIsEmpty;