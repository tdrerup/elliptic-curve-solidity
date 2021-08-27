var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _asyncIterator = require("@babel/runtime/helpers/asyncIterator");

var _awaitAsyncGenerator = require("@babel/runtime/helpers/awaitAsyncGenerator");

var _wrapAsyncGenerator = require("@babel/runtime/helpers/wrapAsyncGenerator");

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

var _require2 = require('../../internal/async-bisector.js'),
    AsyncBisector = _require2.AsyncBisector;

var _require3 = require('../$to-array/async-to-array.js'),
    __asyncToArray = _require3.__asyncToArray;

var _require4 = require('../$peekerate/async-peekerate.js'),
    __asyncPeekerate = _require4.__asyncPeekerate;

function asyncIndexStrategy(_x, _x2, _x3) {
  return _asyncIndexStrategy.apply(this, arguments);
}

exports.asyncIndexStrategy = asyncIndexStrategy;

function _asyncIndexStrategy() {
  _asyncIndexStrategy = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(split, _ref, source) {
    var at, _source, idx, peekr;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            at = _ref.at;

            if (!(at < 0)) {
              _context.next = 7;
              break;
            }

            _context.next = 4;
            return _awaitAsyncGenerator(__asyncToArray(source));

          case 4:
            _context.t0 = _context.sent;
            _context.next = 8;
            break;

          case 7:
            _context.t0 = source;

          case 8:
            _source = _context.t0;
            idx = at < 0 ? _source.length + at : at;
            _context.next = 12;
            return _awaitAsyncGenerator(__asyncPeekerate(_source));

          case 12:
            peekr = _context.sent;
            _context.prev = 13;

          case 14:
            if (peekr.done) {
              _context.next = 24;
              break;
            }

            if (!(peekr.index === idx)) {
              _context.next = 18;
              break;
            }

            _context.next = 18;
            return split;

          case 18:
            _context.next = 20;
            return peekr.value;

          case 20:
            _context.next = 22;
            return _awaitAsyncGenerator(peekr.advance());

          case 22:
            _context.next = 14;
            break;

          case 24:
            _context.prev = 24;
            peekr["return"]();
            return _context.finish(24);

          case 27:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[13,, 24, 27]]);
  }));
  return _asyncIndexStrategy.apply(this, arguments);
}

function asyncConditionStrategy(_x4, _x5, _x6) {
  return _asyncConditionStrategy.apply(this, arguments);
}

exports.asyncConditionStrategy = asyncConditionStrategy;

function _asyncConditionStrategy() {
  _asyncConditionStrategy = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(split, _ref2, source) {
    var predicate, i, splat, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, value;

    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            predicate = _ref2.at;
            i = 0;
            splat = false;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context2.prev = 5;
            _iterator = _asyncIterator(source);

          case 7:
            _context2.next = 9;
            return _awaitAsyncGenerator(_iterator.next());

          case 9:
            _step = _context2.sent;
            _iteratorNormalCompletion = _step.done;
            _context2.next = 13;
            return _awaitAsyncGenerator(_step.value);

          case 13:
            _value = _context2.sent;

            if (_iteratorNormalCompletion) {
              _context2.next = 30;
              break;
            }

            value = _value;
            _context2.t0 = !splat;

            if (!_context2.t0) {
              _context2.next = 21;
              break;
            }

            _context2.next = 20;
            return _awaitAsyncGenerator(predicate(value, i++));

          case 20:
            _context2.t0 = _context2.sent;

          case 21:
            if (!_context2.t0) {
              _context2.next = 25;
              break;
            }

            _context2.next = 24;
            return split;

          case 24:
            splat = true;

          case 25:
            _context2.next = 27;
            return value;

          case 27:
            _iteratorNormalCompletion = true;
            _context2.next = 7;
            break;

          case 30:
            _context2.next = 36;
            break;

          case 32:
            _context2.prev = 32;
            _context2.t1 = _context2["catch"](5);
            _didIteratorError = true;
            _iteratorError = _context2.t1;

          case 36:
            _context2.prev = 36;
            _context2.prev = 37;

            if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
              _context2.next = 41;
              break;
            }

            _context2.next = 41;
            return _awaitAsyncGenerator(_iterator["return"]());

          case 41:
            _context2.prev = 41;

            if (!_didIteratorError) {
              _context2.next = 44;
              break;
            }

            throw _iteratorError;

          case 44:
            return _context2.finish(41);

          case 45:
            return _context2.finish(36);

          case 46:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[5, 32, 36, 46], [37,, 41, 45]]);
  }));
  return _asyncConditionStrategy.apply(this, arguments);
}

function __asyncBisect(source, at) {
  var strategy = typeof at === 'number' ? asyncIndexStrategy : asyncConditionStrategy;
  return new AsyncBisector(source, strategy, {
    at: at
  });
}

exports.__asyncBisect = __asyncBisect;
var asyncBisect = /*#__PURE__*/asyncIterableCurry(__asyncBisect, {
  forceSync: true
});
exports.asyncBisect = asyncBisect;