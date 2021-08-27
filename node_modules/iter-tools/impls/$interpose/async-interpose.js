var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

var _require2 = require('../$interpose-seq/async-interpose-seq.js'),
    __asyncInterposeSeq = _require2.__asyncInterposeSeq;

function __asyncInterpose(source, value) {
  return __asyncInterposeSeq(source, [value]);
}

exports.__asyncInterpose = __asyncInterpose;
var asyncInterpose = /*#__PURE__*/asyncIterableCurry(__asyncInterpose, {
  validateArgs: function validateArgs(args) {}
});
exports.asyncInterpose = asyncInterpose;