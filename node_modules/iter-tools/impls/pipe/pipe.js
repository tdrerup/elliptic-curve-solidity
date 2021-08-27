var identity = function identity(x) {
  return x;
};

function pipe() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  if (!fns.length) fns = [identity];
  return fns.reduce(function (f, g) {
    return function () {
      return g(f.apply(void 0, arguments));
    };
  });
}

exports.pipe = pipe;