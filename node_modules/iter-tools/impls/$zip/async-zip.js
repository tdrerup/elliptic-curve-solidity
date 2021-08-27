var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _awaitAsyncGenerator = require("@babel/runtime/helpers/awaitAsyncGenerator");

var _wrapAsyncGenerator = require("@babel/runtime/helpers/wrapAsyncGenerator");

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

var _require2 = require('../../internal/async-parallel-each.js'),
    asyncParallelEach = _require2.asyncParallelEach;

var _require3 = require('../$peekerate/async-peekerate.js'),
    __asyncPeekerate = _require3.__asyncPeekerate;

var _require4 = require('../$map/async-map.js'),
    __asyncMap = _require4.__asyncMap;

var _require5 = require('../$map/map.js'),
    __map = _require5.__map;

var _require6 = require('../$some/some.js'),
    __some = _require6.__some;

var _require7 = require('../$to-array/async-to-array.js'),
    __asyncToArray = _require7.__asyncToArray;

var isDone = function isDone(peekr) {
  return peekr.done;
};

function __asyncZip(_x) {
  return _asyncZip.apply(this, arguments);
}

exports.__asyncZip = __asyncZip;

function _asyncZip() {
  _asyncZip = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(sources) {
    var peekrs, done;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _awaitAsyncGenerator(__asyncToArray(__asyncMap(sources, __asyncPeekerate)));

          case 2:
            peekrs = _context.sent;
            done = __some(peekrs, isDone);
            _context.prev = 4;

          case 5:
            if (done) {
              _context.next = 13;
              break;
            }

            _context.next = 8;
            return peekrs.map(function (_ref) {
              var value = _ref.value;
              return value;
            });

          case 8:
            _context.next = 10;
            return _awaitAsyncGenerator(Promise.all(__map(peekrs, function (peekr) {
              return peekr.advance();
            })));

          case 10:
            done = __some(peekrs, isDone);
            _context.next = 5;
            break;

          case 13:
            _context.prev = 13;
            _context.next = 16;
            return _awaitAsyncGenerator(asyncParallelEach(peekrs, function (peekr) {
              return peekr["return"]();
            }));

          case 16:
            return _context.finish(13);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4,, 13, 17]]);
  }));
  return _asyncZip.apply(this, arguments);
}

var asyncZip = /*#__PURE__*/asyncIterableCurry(__asyncZip, {
  variadic: true
});
exports.asyncZip = asyncZip;