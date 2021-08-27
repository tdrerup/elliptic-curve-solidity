var _require = require('../../internal/iterable.js'),
    ensureIterable = _require.ensureIterable;

var _require2 = require('../../internal/peekerator.js'),
    Peekerator = _require2.Peekerator;

function __peekerate(source) {
  return Peekerator.from(source);
}

exports.__peekerate = __peekerate;

function wrapWithEnsureIterable(fn) {
  return function (source) {
    return fn(ensureIterable(source));
  };
}

var peekerate = wrapWithEnsureIterable(__peekerate);
exports.peekerate = peekerate;