var _require = require('../../../internal/number.js'),
    isInteger = _require.isInteger;

var _require2 = require('../../is-object/is-object.js'),
    isObject = _require2.isObject;

var _require3 = require('../../not-undefined/not-undefined.js'),
    notUndefined = _require3.notUndefined;

var makeValidateArgs = function makeValidateArgs(methodName) {
  return function validateArgs(args) {
    if (isObject(args[1])) {
      var _args$ = args[1],
          start = _args$.start,
          step = _args$.step;
      args[1] = start;
      args[2] = step;
    }

    if (notUndefined(args[2])) {
      args[2] = Number(args[2]);

      if (!isInteger(args[2], true)) {
        throw new Error("step argument to ".concat(methodName, " must be a non-zero integer"));
      }
    }
  };
};

exports.makeValidateArgs = makeValidateArgs;