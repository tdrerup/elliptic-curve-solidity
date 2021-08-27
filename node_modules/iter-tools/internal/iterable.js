var _defineProperty = require("@babel/runtime/helpers/defineProperty");

var _toConsumableArray = require("@babel/runtime/helpers/toConsumableArray");

var _Object$assign;

var _require = require('../impls/is-iterable/is-iterable.js'),
    isIterable = _require.isIterable;

var _require2 = require('../impls/is-loopable/is-loopable.js'),
    isLoopable = _require2.isLoopable;

var _require3 = require('../impls/is-wrappable/is-wrappable.js'),
    isWrappable = _require3.isWrappable;

var _require4 = require('./wrap.js'),
    wrap = _require4.nullableWrap;

var _require5 = require('./curry.js'),
    variadicCurryWithValidation = _require5.variadicCurryWithValidation;

var _require6 = require('./symbols.js'),
    _ = _require6._,
    __iterate = _require6.__iterate;

exports.wrap = wrap;
exports.isIterable = isIterable;
exports.isLoopable = isLoopable;
exports.isWrappable = isWrappable;

function ensureIterable(value) {
  if (!isWrappable(value)) {
    if (typeof value.next === 'function') {
      throw new TypeError('iter-tools received a value that looked like an iterator but was not iterable. Get help fixing this: https://github.com/iter-tools/iter-tools/wiki/Making-iterators-iterable');
    } else throw new TypeError('Expected an iterable, null, or undefined');
  } else if (isIterable(value)) {
    return value;
  } else {
    return wrap(value);
  }
}

exports.ensureIterable = ensureIterable;

function callReturn(iterator) {
  if ('return' in iterator) iterator["return"]();
}

exports.callReturn = callReturn;

function BaseIterableIterator(fn, args) {
  this[_] = {
    fn: fn,
    args: args,
    staticIterator: null
  };
}

exports.BaseIterableIterator = BaseIterableIterator;
Object.assign(BaseIterableIterator.prototype, (_Object$assign = {
  constructor: BaseIterableIterator
}, _defineProperty(_Object$assign, __iterate, function () {
  var _this$_ = this[_],
      fn = _this$_.fn,
      args = _this$_.args;
  return fn.apply(void 0, _toConsumableArray(args));
}), _defineProperty(_Object$assign, "next", function next() {
  var this_ = this[_];
  this_.staticIterator = this_.staticIterator || this[__iterate]();
  return this_.staticIterator.next();
}), _defineProperty(_Object$assign, "return", function _return(value) {
  var this_ = this[_];
  this_.staticIterator = this_.staticIterator || this[__iterate]();
  return this_.staticIterator["return"](value);
}), _defineProperty(_Object$assign, "throw", function _throw(error) {
  var this_ = this[_];
  this_.staticIterator = this_.staticIterator || this[__iterate]();
  return this_.staticIterator["throw"](error);
}), _Object$assign));

function IterableIterator() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  BaseIterableIterator.apply(this, args);
}

exports.IterableIterator = IterableIterator;
IterableIterator.prototype = Object.assign(Object.create(BaseIterableIterator.prototype), _defineProperty({
  constructor: IterableIterator
}, Symbol.iterator, function () {
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
      _fnConfig$applyOnIter = fnConfig.applyOnIterableArgs,
      applyOnIterableArgs = _fnConfig$applyOnIter === void 0 ? ensureIterable : _fnConfig$applyOnIter;
  return {
    fn: fn,
    validateArgs: validateArgs,
    variadic: variadic,
    reduces: reduces,
    growRight: growRight,
    minArgs: minArgs,
    maxArgs: maxArgs,
    isIterable: isWrappable,
    iterableType: 'iterable',
    applyOnIterableArgs: applyOnIterableArgs,
    IterableClass: IterableIterator
  };
}

function cache(it) {
  return _toConsumableArray(it);
}

exports.cache = cache;

function wrapWithIterableIterator(fn) {
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
    return new IterableIterator(fn, args);
  };
}

exports.wrapWithIterableIterator = wrapWithIterableIterator;

var iterableCurry = function iterableCurry(fn, config) {
  return variadicCurryWithValidation(makeFunctionConfig(fn, config));
};

exports.iterableCurry = iterableCurry;