var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _wrapAsyncGenerator = require("@babel/runtime/helpers/wrapAsyncGenerator");

var _awaitAsyncGenerator = require("@babel/runtime/helpers/awaitAsyncGenerator");

var _asyncGeneratorDelegate = require("@babel/runtime/helpers/asyncGeneratorDelegate");

var _asyncIterator = require("@babel/runtime/helpers/asyncIterator");

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

var _require2 = require('../$to-array/async-to-array.js'),
    __asyncToArray = _require2.__asyncToArray;

function __asyncJoinWithSeq(_x, _x2) {
  return _asyncJoinWithSeq.apply(this, arguments);
}

exports.__asyncJoinWithSeq = __asyncJoinWithSeq;

function _asyncJoinWithSeq() {
  _asyncJoinWithSeq = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(source, separatorSeq) {
    var _separatorSeq, isFirst, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, value;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _awaitAsyncGenerator(__asyncToArray(separatorSeq));

          case 2:
            _separatorSeq = _context.sent;
            isFirst = true;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context.prev = 6;
            _iterator = _asyncIterator(source);

          case 8:
            _context.next = 10;
            return _awaitAsyncGenerator(_iterator.next());

          case 10:
            _step = _context.sent;
            _iteratorNormalCompletion = _step.done;
            _context.next = 14;
            return _awaitAsyncGenerator(_step.value);

          case 14:
            _value = _context.sent;

            if (_iteratorNormalCompletion) {
              _context.next = 24;
              break;
            }

            value = _value;

            if (isFirst) {
              _context.next = 19;
              break;
            }

            return _context.delegateYield(_asyncGeneratorDelegate(_asyncIterator(_separatorSeq), _awaitAsyncGenerator), "t0", 19);

          case 19:
            return _context.delegateYield(_asyncGeneratorDelegate(_asyncIterator(value), _awaitAsyncGenerator), "t1", 20);

          case 20:
            isFirst = false;

          case 21:
            _iteratorNormalCompletion = true;
            _context.next = 8;
            break;

          case 24:
            _context.next = 30;
            break;

          case 26:
            _context.prev = 26;
            _context.t2 = _context["catch"](6);
            _didIteratorError = true;
            _iteratorError = _context.t2;

          case 30:
            _context.prev = 30;
            _context.prev = 31;

            if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
              _context.next = 35;
              break;
            }

            _context.next = 35;
            return _awaitAsyncGenerator(_iterator["return"]());

          case 35:
            _context.prev = 35;

            if (!_didIteratorError) {
              _context.next = 38;
              break;
            }

            throw _iteratorError;

          case 38:
            return _context.finish(35);

          case 39:
            return _context.finish(30);

          case 40:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[6, 26, 30, 40], [31,, 35, 39]]);
  }));
  return _asyncJoinWithSeq.apply(this, arguments);
}

var asyncJoinWithSeq = /*#__PURE__*/asyncIterableCurry(__asyncJoinWithSeq);
exports.asyncJoinWithSeq = asyncJoinWithSeq;