var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _wrapAsyncGenerator = require("@babel/runtime/helpers/wrapAsyncGenerator");

var _awaitAsyncGenerator = require("@babel/runtime/helpers/awaitAsyncGenerator");

var _asyncIterator = require("@babel/runtime/helpers/asyncIterator");

var _asyncGeneratorDelegate = require("@babel/runtime/helpers/asyncGeneratorDelegate");

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

function __asyncAppend(_x, _x2) {
  return _asyncAppend.apply(this, arguments);
}

exports.__asyncAppend = __asyncAppend;

function _asyncAppend() {
  _asyncAppend = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(source, value) {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.delegateYield(_asyncGeneratorDelegate(_asyncIterator(source), _awaitAsyncGenerator), "t0", 1);

          case 1:
            _context.next = 3;
            return value;

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _asyncAppend.apply(this, arguments);
}

var asyncAppend = /*#__PURE__*/asyncIterableCurry(__asyncAppend);
exports.asyncAppend = asyncAppend;