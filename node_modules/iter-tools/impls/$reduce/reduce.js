var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry;

var _require2 = require('../$peekerate/peekerate.js'),
    __peekerate = _require2.__peekerate;

function __reduce(iterable, reducer) {
  var initial = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  var c = 0;
  var result = initial;

  var peekr = __peekerate(iterable);

  try {
    if (initial === undefined) {
      if (peekr.done) {
        throw new Error('Cannot reduce: no initial value specified and iterable was empty');
      }

      result = peekr.value;
      peekr.advance();
      c = 1;
    }

    while (!peekr.done) {
      result = reducer(result, peekr.value, c++);
      peekr.advance();
    }

    return result;
  } finally {
    peekr["return"]();
  }
}

exports.__reduce = __reduce;
var reduce = /*#__PURE__*/iterableCurry(__reduce, {
  reduces: true,
  minArgs: 1,
  maxArgs: 2
});
exports.reduce = reduce;