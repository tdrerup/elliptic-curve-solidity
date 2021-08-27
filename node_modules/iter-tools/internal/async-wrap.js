var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _wrapAsyncGenerator = require("@babel/runtime/helpers/wrapAsyncGenerator");

var _awaitAsyncGenerator = require("@babel/runtime/helpers/awaitAsyncGenerator");

var _asyncIterator = require("@babel/runtime/helpers/asyncIterator");

var _asyncGeneratorDelegate = require("@babel/runtime/helpers/asyncGeneratorDelegate");

function asyncWrap(_x) {
  return _asyncWrap.apply(this, arguments);
}

exports.asyncWrap = asyncWrap;

function _asyncWrap() {
  _asyncWrap = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(source) {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.delegateYield(_asyncGeneratorDelegate(_asyncIterator(source), _awaitAsyncGenerator), "t0", 1);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _asyncWrap.apply(this, arguments);
}

function asyncNullableWrap(_x2) {
  return _asyncNullableWrap.apply(this, arguments);
}

exports.asyncNullableWrap = asyncNullableWrap;

function _asyncNullableWrap() {
  _asyncNullableWrap = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(source) {
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(source != null)) {
              _context2.next = 2;
              break;
            }

            return _context2.delegateYield(_asyncGeneratorDelegate(_asyncIterator(source), _awaitAsyncGenerator), "t0", 2);

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _asyncNullableWrap.apply(this, arguments);
}