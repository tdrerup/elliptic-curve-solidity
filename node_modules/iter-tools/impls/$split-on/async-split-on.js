var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

var _require2 = require('../$split-when/async-split-when.js'),
    __asyncSplitWhen = _require2.__asyncSplitWhen;

function __asyncSplitOn(source, separator) {
  var same = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Object.is;
  return __asyncSplitWhen(source, function (value) {
    return same(separator, value);
  });
}

exports.__asyncSplitOn = __asyncSplitOn;
var asyncSplitOn = /*#__PURE__*/asyncIterableCurry(__asyncSplitOn, {
  minArgs: 1,
  maxArgs: 2,
  validateArgs: function validateArgs(args) {}
});
exports.asyncSplitOn = asyncSplitOn;