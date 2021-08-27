var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _wrapAsyncGenerator = require("@babel/runtime/helpers/wrapAsyncGenerator");

var _awaitAsyncGenerator = require("@babel/runtime/helpers/awaitAsyncGenerator");

var _asyncIterator = require("@babel/runtime/helpers/asyncIterator");

var _asyncGeneratorDelegate = require("@babel/runtime/helpers/asyncGeneratorDelegate");

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

var _require2 = require('../$to-array/async-to-array.js'),
    __asyncToArray = _require2.__asyncToArray;

var _require3 = require('./cycle-times.js'),
    __cycleTimes = _require3.__cycleTimes;

function __asyncCycleTimes(_x, _x2) {
  return _asyncCycleTimes.apply(this, arguments);
}

exports.__asyncCycleTimes = __asyncCycleTimes;

function _asyncCycleTimes() {
  _asyncCycleTimes = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(source, n) {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = _asyncGeneratorDelegate;
            _context.t1 = _asyncIterator;
            _context.t2 = __cycleTimes;
            _context.next = 5;
            return _awaitAsyncGenerator(__asyncToArray(source));

          case 5:
            _context.t3 = _context.sent;
            _context.t4 = n;
            _context.t5 = (0, _context.t2)(_context.t3, _context.t4);
            _context.t6 = (0, _context.t1)(_context.t5);
            _context.t7 = _awaitAsyncGenerator;
            return _context.delegateYield((0, _context.t0)(_context.t6, _context.t7), "t8", 11);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _asyncCycleTimes.apply(this, arguments);
}

var asyncCycleTimes = /*#__PURE__*/asyncIterableCurry(__asyncCycleTimes);
exports.asyncCycleTimes = asyncCycleTimes;