var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _wrapAsyncGenerator = require("@babel/runtime/helpers/wrapAsyncGenerator");

var _awaitAsyncGenerator = require("@babel/runtime/helpers/awaitAsyncGenerator");

var _asyncIterator = require("@babel/runtime/helpers/asyncIterator");

var _asyncGeneratorDelegate = require("@babel/runtime/helpers/asyncGeneratorDelegate");

var _require = require('../../internal/async-iterable.js'),
    asyncWrapWithIterableIterator = _require.asyncWrapWithIterableIterator,
    asyncEnsureIterable = _require.asyncEnsureIterable;

function __asyncConcat() {
  return _asyncConcat.apply(this, arguments);
}

exports.__asyncConcat = __asyncConcat;

function _asyncConcat() {
  _asyncConcat = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var _len,
        sources,
        _key,
        _i,
        _sources,
        iterable,
        _args = arguments;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            for (_len = _args.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
              sources[_key] = _args[_key];
            }

            _i = 0, _sources = sources;

          case 2:
            if (!(_i < _sources.length)) {
              _context.next = 8;
              break;
            }

            iterable = _sources[_i];
            return _context.delegateYield(_asyncGeneratorDelegate(_asyncIterator(asyncEnsureIterable(iterable)), _awaitAsyncGenerator), "t0", 5);

          case 5:
            _i++;
            _context.next = 2;
            break;

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _asyncConcat.apply(this, arguments);
}

var asyncConcat = /*#__PURE__*/asyncWrapWithIterableIterator(__asyncConcat);
exports.asyncConcat = asyncConcat;