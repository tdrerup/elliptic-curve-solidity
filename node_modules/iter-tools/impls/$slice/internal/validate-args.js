var _slicedToArray = require("@babel/runtime/helpers/slicedToArray");

var _require = require('../../../internal/number.js'),
    isInteger = _require.isInteger,
    isPositiveInteger = _require.isPositiveInteger,
    isIntegerOrInfinite = _require.isIntegerOrInfinite;

var _require2 = require('../../is-object/is-object.js'),
    isObject = _require2.isObject;

var makeValidateArgs = function makeValidateArgs(methodName) {
  return function validateArgs(args) {
    var _args = _slicedToArray(args, 4),
        _args$ = _args[1],
        optsOrStart = _args$ === void 0 ? 0 : _args$,
        _args$2 = _args[2],
        end = _args$2 === void 0 ? Infinity : _args$2,
        _args$3 = _args[3],
        step = _args$3 === void 0 ? 1 : _args$3;

    var start = typeof optsOrStart === 'number' ? optsOrStart : undefined;

    if (isObject(optsOrStart)) {
      var _optsOrStart$start = optsOrStart.start;
      start = _optsOrStart$start === void 0 ? 0 : _optsOrStart$start;
      var _optsOrStart$end = optsOrStart.end;
      end = _optsOrStart$end === void 0 ? Infinity : _optsOrStart$end;
      var _optsOrStart$step = optsOrStart.step;
      step = _optsOrStart$step === void 0 ? 1 : _optsOrStart$step;
    }

    if (!isInteger(start)) {
      throw new TypeError("start argument to ".concat(methodName, " must be a number"));
    }

    if (!isIntegerOrInfinite(end)) {
      throw new TypeError("end argument to ".concat(methodName, " must be an integer or infinte"));
    }

    if (!isPositiveInteger(step)) {
      throw new TypeError("step argument to ".concat(methodName, " must be a integer > 0"));
    }

    args[1] = start;
    args[2] = end;
    args[3] = step;
  };
};

exports.makeValidateArgs = makeValidateArgs;