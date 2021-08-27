var _require = require('../../internal/iterable.js'),
    wrapWithIterableIterator = _require.wrapWithIterableIterator;

var _require2 = require('../../internal/wrap.js'),
    __wrap = _require2.nullableWrap;

exports.__wrap = __wrap;
var wrap = /*#__PURE__*/wrapWithIterableIterator(__wrap);
exports.wrap = wrap;