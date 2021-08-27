function isInteger(value) {
  var nonZero = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return typeof value === 'number' && !isNaN(value) && isFinite(value) && !(nonZero && value === 0);
}

exports.isInteger = isInteger;

function isPositiveInteger(value) {
  var nonZero = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return isInteger(value) && (nonZero ? value > 0 : value >= 0);
}

exports.isPositiveInteger = isPositiveInteger;

function isIntegerOrInfinite(value) {
  var nonZero = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return typeof value === 'number' && !isNaN(value) && !(nonZero && value === 0);
}

exports.isIntegerOrInfinite = isIntegerOrInfinite;