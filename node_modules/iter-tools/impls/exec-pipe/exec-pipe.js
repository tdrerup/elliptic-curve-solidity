function execPipe(initial) {
  for (var _len = arguments.length, fns = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    fns[_key - 1] = arguments[_key];
  }

  return fns.reduce(function (value, fn) {
    return fn(value);
  }, initial);
}

exports.execPipe = execPipe;