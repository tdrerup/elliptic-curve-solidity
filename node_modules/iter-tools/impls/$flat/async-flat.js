var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _wrapAsyncGenerator = require("@babel/runtime/helpers/wrapAsyncGenerator");

var _awaitAsyncGenerator = require("@babel/runtime/helpers/awaitAsyncGenerator");

var _asyncGeneratorDelegate = require("@babel/runtime/helpers/asyncGeneratorDelegate");

var _asyncIterator = require("@babel/runtime/helpers/asyncIterator");

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry,
    asyncIsLoopable = _require.asyncIsLoopable;

var _require2 = require('./internal/validate-args.js'),
    validateArgs = _require2.validateArgs;

var defaultShouldFlat = function defaultShouldFlat(value) {
  return typeof value !== 'string' && asyncIsLoopable(value);
};

function asyncFlatInternal(_x, _x2, _x3, _x4) {
  return _asyncFlatInternal.apply(this, arguments);
}

function _asyncFlatInternal() {
  _asyncFlatInternal = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(shouldFlat, depth, currentDepth, source) {
    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, value;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context.prev = 2;
            _iterator = _asyncIterator(source);

          case 4:
            _context.next = 6;
            return _awaitAsyncGenerator(_iterator.next());

          case 6:
            _step = _context.sent;
            _iteratorNormalCompletion = _step.done;
            _context.next = 10;
            return _awaitAsyncGenerator(_step.value);

          case 10:
            _value = _context.sent;

            if (_iteratorNormalCompletion) {
              _context.next = 27;
              break;
            }

            value = _value;
            _context.t0 = currentDepth < depth;

            if (!_context.t0) {
              _context.next = 18;
              break;
            }

            _context.next = 17;
            return _awaitAsyncGenerator(shouldFlat(value));

          case 17:
            _context.t0 = _context.sent;

          case 18:
            if (!_context.t0) {
              _context.next = 22;
              break;
            }

            return _context.delegateYield(_asyncGeneratorDelegate(_asyncIterator(asyncFlatInternal(shouldFlat, depth, currentDepth + 1, value)), _awaitAsyncGenerator), "t1", 20);

          case 20:
            _context.next = 24;
            break;

          case 22:
            _context.next = 24;
            return value;

          case 24:
            _iteratorNormalCompletion = true;
            _context.next = 4;
            break;

          case 27:
            _context.next = 33;
            break;

          case 29:
            _context.prev = 29;
            _context.t2 = _context["catch"](2);
            _didIteratorError = true;
            _iteratorError = _context.t2;

          case 33:
            _context.prev = 33;
            _context.prev = 34;

            if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
              _context.next = 38;
              break;
            }

            _context.next = 38;
            return _awaitAsyncGenerator(_iterator["return"]());

          case 38:
            _context.prev = 38;

            if (!_didIteratorError) {
              _context.next = 41;
              break;
            }

            throw _iteratorError;

          case 41:
            return _context.finish(38);

          case 42:
            return _context.finish(33);

          case 43:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 29, 33, 43], [34,, 38, 42]]);
  }));
  return _asyncFlatInternal.apply(this, arguments);
}

function __asyncFlat(source) {
  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var shouldFlat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultShouldFlat;
  return asyncFlatInternal(shouldFlat, depth, 0, source);
}

exports.__asyncFlat = __asyncFlat;
var asyncFlat = /*#__PURE__*/asyncIterableCurry(__asyncFlat, {
  minArgs: 0,
  maxArgs: 2,
  validateArgs: validateArgs
});
exports.asyncFlat = asyncFlat;