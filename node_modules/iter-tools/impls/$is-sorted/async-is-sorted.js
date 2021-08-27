var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _asyncToGenerator = require("@babel/runtime/helpers/asyncToGenerator");

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

var _require2 = require('../../internal/compare.js'),
    defaultCompareOrder = _require2.defaultCompareOrder;

var _require3 = require('../$peekerate/async-peekerate.js'),
    __asyncPeekerate = _require3.__asyncPeekerate;

function __asyncIsSorted(_x) {
  return _asyncIsSorted.apply(this, arguments);
}

function _asyncIsSorted() {
  _asyncIsSorted = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(iterable) {
    var compare,
        peekr,
        value,
        _args = arguments;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            compare = _args.length > 1 && _args[1] !== undefined ? _args[1] : defaultCompareOrder;
            _context.next = 3;
            return __asyncPeekerate(iterable);

          case 3:
            peekr = _context.sent;

          case 4:
            if (peekr.done) {
              _context.next = 14;
              break;
            }

            value = peekr.value;
            _context.next = 8;
            return peekr.advance();

          case 8:
            if (!(!peekr.done && compare(value, peekr.value) > 0)) {
              _context.next = 12;
              break;
            }

            _context.next = 11;
            return peekr["return"]();

          case 11:
            return _context.abrupt("return", false);

          case 12:
            _context.next = 4;
            break;

          case 14:
            return _context.abrupt("return", true);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _asyncIsSorted.apply(this, arguments);
}

exports.__asyncIsSorted = __asyncIsSorted;
var asyncIsSorted = /*#__PURE__*/asyncIterableCurry(__asyncIsSorted, {
  reduces: true,
  minArgs: 0,
  maxArgs: 1
});
exports.asyncIsSorted = asyncIsSorted;