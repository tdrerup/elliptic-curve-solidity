var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _asyncToGenerator = require("@babel/runtime/helpers/asyncToGenerator");

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

var _require2 = require('../$peekerate/async-peekerate.js'),
    __asyncPeekerate = _require2.__asyncPeekerate;

function __asyncReduce(_x, _x2) {
  return _asyncReduce.apply(this, arguments);
}

function _asyncReduce() {
  _asyncReduce = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(iterable, reducer) {
    var initial,
        c,
        result,
        peekr,
        _args = arguments;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            initial = _args.length > 2 && _args[2] !== undefined ? _args[2] : undefined;
            c = 0;
            result = initial;
            _context.next = 5;
            return __asyncPeekerate(iterable);

          case 5:
            peekr = _context.sent;
            _context.prev = 6;

            if (!(initial === undefined)) {
              _context.next = 14;
              break;
            }

            if (!peekr.done) {
              _context.next = 10;
              break;
            }

            throw new Error('Cannot reduce: no initial value specified and iterable was empty');

          case 10:
            result = peekr.value;
            _context.next = 13;
            return peekr.advance();

          case 13:
            c = 1;

          case 14:
            if (peekr.done) {
              _context.next = 22;
              break;
            }

            _context.next = 17;
            return reducer(result, peekr.value, c++);

          case 17:
            result = _context.sent;
            _context.next = 20;
            return peekr.advance();

          case 20:
            _context.next = 14;
            break;

          case 22:
            return _context.abrupt("return", result);

          case 23:
            _context.prev = 23;
            peekr["return"]();
            return _context.finish(23);

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[6,, 23, 26]]);
  }));
  return _asyncReduce.apply(this, arguments);
}

exports.__asyncReduce = __asyncReduce;
var asyncReduce = /*#__PURE__*/asyncIterableCurry(__asyncReduce, {
  reduces: true,
  minArgs: 1,
  maxArgs: 2
});
exports.asyncReduce = asyncReduce;