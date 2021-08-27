var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _asyncToGenerator = require("@babel/runtime/helpers/asyncToGenerator");

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry,
    asyncCallReturn = _require.asyncCallReturn;

function __asyncFirstOr(_x, _x2) {
  return _asyncFirstOr.apply(this, arguments);
}

function _asyncFirstOr() {
  _asyncFirstOr = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(iterable, whenEmpty) {
    var iter, _yield$iter$next, value, done;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            iter = iterable[Symbol.asyncIterator]();
            _context.next = 3;
            return iter.next();

          case 3:
            _yield$iter$next = _context.sent;
            value = _yield$iter$next.value;
            done = _yield$iter$next.done;

            if (!done) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", whenEmpty);

          case 8:
            _context.next = 10;
            return asyncCallReturn(iter);

          case 10:
            return _context.abrupt("return", value);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _asyncFirstOr.apply(this, arguments);
}

exports.__asyncFirstOr = __asyncFirstOr;
var asyncFirstOr = /*#__PURE__*/asyncIterableCurry(__asyncFirstOr, {
  reduces: true
});
exports.asyncFirstOr = asyncFirstOr;