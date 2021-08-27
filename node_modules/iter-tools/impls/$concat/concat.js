var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(__concat);

var _require = require('../../internal/iterable.js'),
    wrapWithIterableIterator = _require.wrapWithIterableIterator,
    ensureIterable = _require.ensureIterable;

function __concat() {
  var _len,
      sources,
      _key,
      _i,
      _sources,
      iterable,
      _args = arguments;

  return _regeneratorRuntime.wrap(function __concat$(_context) {
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
          return _context.delegateYield(ensureIterable(iterable), "t0", 5);

        case 5:
          _i++;
          _context.next = 2;
          break;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

exports.__concat = __concat;
var concat = /*#__PURE__*/wrapWithIterableIterator(__concat);
exports.concat = concat;