var _require = require('../../internal/async-iterable.js'),
    asyncWrapWithIterableIterator = _require.asyncWrapWithIterableIterator;

var _require2 = require('../../internal/async-wrap.js'),
    __asyncWrap = _require2.asyncNullableWrap;

exports.__asyncWrap = __asyncWrap;
var asyncWrap = /*#__PURE__*/asyncWrapWithIterableIterator(__asyncWrap);
exports.asyncWrap = asyncWrap;