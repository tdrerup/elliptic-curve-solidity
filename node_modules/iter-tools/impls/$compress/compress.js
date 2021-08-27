var _slicedToArray = require("@babel/runtime/helpers/slicedToArray");

var _require = require('../../internal/iterable.js'),
    ensureIterable = _require.ensureIterable;

var _require2 = require('../../internal/curry.js'),
    curry = _require2.curry;

var _require3 = require('../$zip/zip.js'),
    __zip = _require3.__zip;

var _require4 = require('../$filter/filter.js'),
    __filter = _require4.__filter;

var _require5 = require('../$map/map.js'),
    __map = _require5.__map;

function __compress(source, included) {
  return __map(__filter(__zip([source, included]), function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        isIncluded = _ref2[1];

    return isIncluded;
  }), function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 1),
        value = _ref4[0];

    return value;
  });
}

exports.__compress = __compress;
var compress = /*#__PURE__*/curry(function $compress(source, included) {
  return __compress(ensureIterable(source), ensureIterable(included));
});
exports.compress = compress;