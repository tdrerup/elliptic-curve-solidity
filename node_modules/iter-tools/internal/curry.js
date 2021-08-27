var _toConsumableArray = require("@babel/runtime/helpers/toConsumableArray");

function curry(fn) {
  var expectedArgsLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : fn.length;
  var appliedArgs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (expectedArgsLength <= args.length) {
      return fn.apply(void 0, _toConsumableArray(appliedArgs).concat(args));
    }

    return curry(fn, expectedArgsLength - args.length, [].concat(_toConsumableArray(appliedArgs), args));
  };
}

exports.curry = curry;

function variadicCurryWithValidationInner(config, args) {
  var fn = config.fn,
      validateArgs = config.validateArgs,
      variadic = config.variadic,
      reduces = config.reduces,
      growRight = config.growRight,
      minArgs = config.minArgs,
      maxArgs = config.maxArgs,
      isIterable = config.isIterable,
      iterableType = config.iterableType,
      applyOnIterableArgs = config.applyOnIterableArgs,
      IterableClass = config.IterableClass;

  if (args.length > minArgs) {
    var argsIterable = true;
    var iterableArgsStart = variadic ? args.findIndex(function (arg, i) {
      return isIterable(arg) && i >= minArgs;
    }) : Math.min(maxArgs, args.length - 1);
    var iterableArgsEnd = variadic ? args.length : iterableArgsStart + 1;

    if (variadic) {
      for (var i = iterableArgsStart; i < args.length; i++) {
        argsIterable = argsIterable && isIterable(args[i]);
      }
    } else {
      argsIterable = isIterable(args[iterableArgsStart]);
    }

    if (args.length > maxArgs && (iterableArgsStart === -1 || !argsIterable)) {
      var iterableTypeOrNames = variadic ? "...".concat(iterableType, "s") : iterableType;
      var baseMessage = "".concat(fn.name, " takes up to ").concat(maxArgs, " arguments, followed by ").concat(iterableTypeOrNames, ". ") + "You already passed ".concat(args.length, " arguments");

      if (variadic) {
        throw new Error("".concat(baseMessage, " and the following arguments were not all ").concat(iterableType, "s"));
      } else {
        throw new Error("".concat(baseMessage, " and the last argument was not ").concat(iterableType));
      }
    }

    if (iterableArgsStart >= 0 && argsIterable) {
      for (var _i = iterableArgsStart; _i < iterableArgsEnd; _i++) {
        args[_i] = applyOnIterableArgs(args[_i]);
      }

      var iterablesArg = variadic ? args.slice(iterableArgsStart) : args[iterableArgsStart];
      args.splice(iterableArgsStart);

      if (!growRight) {
        args.reverse();
      }

      args.unshift(iterablesArg);
      validateArgs(args);
      return reduces ? fn.apply(void 0, _toConsumableArray(args)) : new IterableClass(fn, args);
    } else {}
  }

  return variadicCurryWithValidation(config, args);
}

function variadicCurryWithValidation(config) {
  var previousArgs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (args.length === 0) {
      throw new Error('Cannot make a partial application with no arguments');
    }

    args.unshift.apply(args, _toConsumableArray(previousArgs));
    return variadicCurryWithValidationInner(config, args);
  };
}

exports.variadicCurryWithValidation = variadicCurryWithValidation;