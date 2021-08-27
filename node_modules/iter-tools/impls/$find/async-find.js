var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

var _require2 = require('../$find-or/async-find-or.js'),
    __asyncFindOr = _require2.__asyncFindOr;

function __asyncFind(iterable, predicate) {
  return __asyncFindOr(iterable, undefined, predicate);
}

exports.__asyncFind = __asyncFind;
var asyncFind = /*#__PURE__*/asyncIterableCurry(__asyncFind, {
  reduces: true
});
exports.asyncFind = asyncFind;