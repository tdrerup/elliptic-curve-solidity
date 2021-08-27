var _toConsumableArray = require("@babel/runtime/helpers/toConsumableArray");

var _require = require('../../internal/curry.js'),
    curry = _require.curry;

function __apply(fn) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return fn.apply(void 0, _toConsumableArray(args === null ? [] : args));
}

exports.__apply = __apply;
var apply = /*#__PURE__*/curry(__apply, 2);
exports.apply = apply;