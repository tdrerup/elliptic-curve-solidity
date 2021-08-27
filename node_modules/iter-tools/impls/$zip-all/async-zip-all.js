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

var _require5 = require('../$every/every.js'),
    __every = _require5.__every;

var _require6 = require('../$to-array/async-to-array.js'),
    __asyncToArray = _require6.__asyncToArray;

var isDone = function isDone(peekr) {
  return peekr.done;
};

function __asyncZipAll(_x) {
  return _asyncZipAll.apply(this, arguments);
}

exports.__asyncZipAll = __asyncZipAll;

function _asyncZipAll() {
  _asyncZipAll = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(sources) {
    var _ref,
        filler,
        peekrs,
        done,
        _args = arguments;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref = _args.length > 1 && _args[1] !== undefined ? _args[1] : {}, filler = _ref.filler;
            _context.next = 3;
            return _awaitAsyncGenerator(__asyncToArray(__asyncMap(sources, __asyncPeekerate)));

          case 3:
            peekrs = _context.sent;
            done = __every(peekrs, isDone);
            _context.prev = 5;

          case 6:
            if (done) {
              _context.next = 14;
              break;
            }

            _context.next = 9;
            return peekrs.map(function (_ref2) {
              var value = _ref2.value,
                  done = _ref2.done;
              return done ? filler : value;
            });

          case 9:
            _context.next = 11;
            return _awaitAsyncGenerator(asyncParallelEach(peekrs, function (peekr) {
              return peekr.advance();
            }));

          case 11:
            done = __every(peekrs, isDone);
            _context.next = 6;
            break;

          case 14:
            _context.prev = 14;
            _context.next = 17;
            return _awaitAsyncGenerator(asyncParallelEach(peekrs, function (peekr) {
              return peekr["return"]();
            }));

          case 17:
            return _context.finish(14);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5,, 14, 18]]);
  }));
  return _asyncZipAll.apply(this, arguments);
}

var asyncZipAll = /*#__PURE__*/asyncIterableCurry(__asyncZipAll, {
  variadic: true,
  minArgs: 0,
  maxArgs: 1
});
exports.asyncZipAll = asyncZipAll;