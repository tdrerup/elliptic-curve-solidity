var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _wrapAsyncGenerator = require("@babel/runtime/helpers/wrapAsyncGenerator");

var _awaitAsyncGenerator = require("@babel/runtime/helpers/awaitAsyncGenerator");

var _asyncIterator = require("@babel/runtime/helpers/asyncIterator");

var _asyncGeneratorDelegate = require("@babel/runtime/helpers/asyncGeneratorDelegate");

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

function __asyncPrepend(_x, _x2) {
  return _asyncPrepend.apply(this, arguments);
}

exports.__asyncPrepend = __asyncPrepend;

function _asyncPrepend() {
  _asyncPrepend = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(source, value) {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return value;

          case 2:
            return _context.delegateYield(_asyncGeneratorDelegate(_asyncIterator(source), _awaitAsyncGenerator), "t0", 3);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _asyncPrepend.apply(this, arguments);
}

var asyncPrepend = /*#__PURE__*/asyncIterableCurry(__asyncPrepend);
exports.asyncPrepend = asyncPrepend;