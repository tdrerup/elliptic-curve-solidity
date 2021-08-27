var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _asyncToGenerator = require("@babel/runtime/helpers/asyncToGenerator");

var _defineProperty = require("@babel/runtime/helpers/defineProperty");

var _asyncIterator = require("@babel/runtime/helpers/asyncIterator");

var _require = require('../impls/is-async-iterable/is-async-iterable.js'),
    isAsyncIterable = _require.isAsyncIterable;

var _require2 = require('../impls/is-async-loopable/is-async-loopable.js'),
    isAsyncLoopable = _require2.isAsyncLoopable;

var _require3 = require('../impls/is-async-wrappable/is-async-wrappable.js'),
    isAsyncWrappable = _require3.isAsyncWrappable;

var _require4 = require('./async-wrap.js'),
    asyncWrap = _require4.asyncNullableWrap;

var _require5 = require('./iterable.js'),
    BaseIterableIterator = _require5.BaseIterableIterator,
    IterableIterator = _require5.IterableIterator;

var _require6 = require('./curry.js'),
    variadicCurryWithValidation = _require6.variadicCurryWithValidation;

var _require7 = require('./symbols.js'),
    __iterate = _require7.__iterate;

exports.asyncWrap = asyncWrap;
exports.asyncIsIterable = isAsyncIterable;
exports.asyncIsLoopable = isAsyncLoopable;
exports.asyncIsWrappable = isAsyncWrappable;

function asyncCallReturn(_x) {
  return _asyncCallReturn.apply(this, arguments);
}

function _asyncCallReturn() {
  _asyncCallReturn = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(iterator) {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!('return' in iterator)) {
              _context.next = 3;
              break;
            }

            _context.next = 3;
            return iterator["return"]();

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _asyncCallReturn.apply(this, arguments);
}

exports.asyncCallReturn = asyncCallReturn;

function asyncEnsureIterable(value) {
  if (!isAsyncWrappable(value)) {
    if (typeof value.next === 'function') {
      throw new TypeError('iter-tools received a value that looked like an iterator but was not async iterable. Get help fixing this: https://github.com/iter-tools/iter-tools/wiki/Making-iterators-iterable#async-iterators');
    } else throw new TypeError('Expected an async iterable, sync iterable, null or undefined');
  } else if (isAsyncIterable(value)) {
    return value;
  } else {
    return asyncWrap(value);
  }
}

exports.asyncEnsureIterable = asyncEnsureIterable;

function AsyncIterableIterator() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  BaseIterableIterator.apply(this, args);
}

exports.AsyncIterableIterator = AsyncIterableIterator;
AsyncIterableIterator.prototype = Object.assign(Object.create(BaseIterableIterator.prototype), _defineProperty({
  constructor: AsyncIterableIterator
}, Symbol.asyncIterator, function () {
  return this[__iterate]();
}));

function makeFunctionConfig(fn) {
  var fnConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _fnConfig$validateArg = fnConfig.validateArgs,
      validateArgs = _fnConfig$validateArg === void 0 ? function (_) {} : _fnConfig$validateArg,
      _fnConfig$variadic = fnConfig.variadic,
      variadic = _fnConfig$variadic === void 0 ? false : _fnConfig$variadic,
      _fnConfig$reduces = fnConfig.reduces,
      reduces = _fnConfig$reduces === void 0 ? false : _fnConfig$reduces,
      _fnConfig$growRight = fnConfig.growRight,
      growRight = _fnConfig$growRight === void 0 ? false : _fnConfig$growRight,
      _fnConfig$minArgs = fnConfig.minArgs,
      minArgs = _fnConfig$minArgs === void 0 ? fn.length - 1 : _fnConfig$minArgs,
      _fnConfig$maxArgs = fnConfig.maxArgs,
      maxArgs = _fnConfig$maxArgs === void 0 ? fn.length - 1 : _fnConfig$maxArgs,
      _fnConfig$forceSync = fnConfig.forceSync,
      forceSync = _fnConfig$forceSync === void 0 ? false : _fnConfig$forceSync,
      _fnConfig$applyOnIter = fnConfig.applyOnIterableArgs,
      applyOnIterableArgs = _fnConfig$applyOnIter === void 0 ? asyncEnsureIterable : _fnConfig$applyOnIter;
  return {
    fn: fn,
    validateArgs: validateArgs,
    variadic: variadic,
    reduces: reduces,
    growRight: growRight,
    minArgs: minArgs,
    maxArgs: maxArgs,
    isIterable: isAsyncWrappable,
    iterableType: 'asyncIterable',
    applyOnIterableArgs: applyOnIterableArgs,
    IterableClass: forceSync ? IterableIterator : AsyncIterableIterator
  };
}

function asyncCache(_x2) {
  return _asyncCache.apply(this, arguments);
}

function _asyncCache() {
  _asyncCache = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(it) {
    var arr, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, value;

    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            arr = [];
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context2.prev = 3;
            _iterator = _asyncIterator(it);

          case 5:
            _context2.next = 7;
            return _iterator.next();

          case 7:
            _step = _context2.sent;
            _iteratorNormalCompletion = _step.done;
            _context2.next = 11;
            return _step.value;

          case 11:
            _value = _context2.sent;

            if (_iteratorNormalCompletion) {
              _context2.next = 18;
              break;
            }

            value = _value;
            arr.push(value);

          case 15:
            _iteratorNormalCompletion = true;
            _context2.next = 5;
            break;

          case 18:
            _context2.next = 24;
            break;

          case 20:
            _context2.prev = 20;
            _context2.t0 = _context2["catch"](3);
            _didIteratorError = true;
            _iteratorError = _context2.t0;

          case 24:
            _context2.prev = 24;
            _context2.prev = 25;

            if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
              _context2.next = 29;
              break;
            }

            _context2.next = 29;
            return _iterator["return"]();

          case 29:
            _context2.prev = 29;

            if (!_didIteratorError) {
              _context2.next = 32;
              break;
            }

            throw _iteratorError;

          case 32:
            return _context2.finish(29);

          case 33:
            return _context2.finish(24);

          case 34:
            return _context2.abrupt("return", asyncWrapWithIterableIterator(asyncWrap)(arr));

          case 35:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 20, 24, 34], [25,, 29, 33]]);
  }));
  return _asyncCache.apply(this, arguments);
}

exports.asyncCache = asyncCache;

function asyncWrapWithIterableIterator(fn) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$validateArgs = _ref.validateArgs,
      validateArgs = _ref$validateArgs === void 0 ? function (_) {
    return _;
  } : _ref$validateArgs;

  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    validateArgs(args);
    return new AsyncIterableIterator(fn, args);
  };
}

exports.asyncWrapWithIterableIterator = asyncWrapWithIterableIterator;

var asyncIterableCurry = function asyncIterableCurry(fn, config) {
  return variadicCurryWithValidation(makeFunctionConfig(fn, config));
};

exports.asyncIterableCurry = asyncIterableCurry;