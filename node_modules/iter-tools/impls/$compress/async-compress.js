var _slicedToArray = require("@babel/runtime/helpers/slicedToArray");

var _require = require('../../internal/async-iterable.js'),
    asyncEnsureIterable = _require.asyncEnsureIterable;

var _require2 = require('../../internal/curry.js'),
    curry = _require2.curry;

var _require3 = require('../$zip/async-zip.js'),
    __asyncZip = _require3.__asyncZip;

var _require4 = require('../$filter/async-filter.js'),
    __asyncFilter = _require4.__asyncFilter;

var _require5 = require('../$map/async-map.js'),
    __asyncMap = _require5.__asyncMap;

function __asyncCompress(source, included) {
  return __asyncMap(__asyncFilter(__asyncZip([source, included]), function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        isIncluded = _ref2[1];

    return isIncluded;
  }), function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 1),
        value = _ref4[0];

    return value;
  });
}

exports.__asyncCompress = __asyncCompress;
var asyncCompress = /*#__PURE__*/curry(function $compress(source, included) {
  return __asyncCompress(asyncEnsureIterable(source), asyncEnsureIterable(included));
});
exports.asyncCompress = asyncCompress;