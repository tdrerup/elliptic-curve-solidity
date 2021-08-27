var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

var _require2 = require('../$split-when/async-split-when.js'),
    __asyncSplitWhen = _require2.__asyncSplitWhen;

var _require3 = require('../$includes/includes.js'),
    __includes = _require3.__includes;

function __asyncSplitOnAny(source, separators) {
  var same = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Object.is;
  return __asyncSplitWhen(source, function (value) {
    return __includes(separators, value, function (a, b) {
      return same(b, a);
    });
  });
}

exports.__asyncSplitOnAny = __asyncSplitOnAny;
var asyncSplitOnAny = /*#__PURE__*/asyncIterableCurry(__asyncSplitOnAny, {
  minArgs: 1,
  maxArgs: 2,
  validateArgs: function validateArgs(args) {}
});
exports.asyncSplitOnAny = asyncSplitOnAny;