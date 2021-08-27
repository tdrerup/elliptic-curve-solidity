function arrayFirstOr(whenEmpty, array) {
  return array && array.length ? array[0] : whenEmpty;
}

exports.arrayFirstOr = arrayFirstOr;