var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry,
    callReturn = _require.callReturn;

function __firstOr(iterable, whenEmpty) {
  var iter = iterable[Symbol.iterator]();

  var _iter$next = iter.next(),
      value = _iter$next.value,
      done = _iter$next.done;

  if (done) return whenEmpty;
  callReturn(iter);
  return value;
}

exports.__firstOr = __firstOr;
var firstOr = /*#__PURE__*/iterableCurry(__firstOr, {
  reduces: true
});
exports.firstOr = firstOr;