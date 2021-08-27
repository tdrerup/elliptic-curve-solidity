var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _wrapAsyncGenerator = require("@babel/runtime/helpers/wrapAsyncGenerator");

var _awaitAsyncGenerator = require("@babel/runtime/helpers/awaitAsyncGenerator");

var _asyncIterator = require("@babel/runtime/helpers/asyncIterator");

var _asyncGeneratorDelegate = require("@babel/runtime/helpers/asyncGeneratorDelegate");

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

var _require2 = require('../$to-array/async-to-array.js'),
    __asyncToArray = _require2.__asyncToArray;

function __asyncReverse(_x) {
  return _asyncReverse.apply(this, arguments);
}

exports.__asyncReverse = __asyncReverse;

function _asyncReverse() {
  _asyncReverse = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(source) {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = _asyncGeneratorDelegate;
            _context.t1 = _asyncIterator;
            _context.next = 4;
            return _awaitAsyncGenerator(__asyncToArray(source));

          case 4:
            _context.t2 = _context.sent.reverse();
            _context.t3 = (0, _context.t1)(_context.t2);
            _context.t4 = _awaitAsyncGenerator;
            return _context.delegateYield((0, _context.t0)(_context.t3, _context.t4), "t5", 8);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _asyncReverse.apply(this, arguments);
}

var asyncReverse = /*#__PURE__*/asyncIterableCurry(__asyncReverse);
exports.asyncReverse = asyncReverse;