var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(__zipAll);

var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry;

var _require2 = require('../../internal/parallel-each.js'),
    parallelEach = _require2.parallelEach;

var _require3 = require('../$peekerate/peekerate.js'),
    __peekerate = _require3.__peekerate;

var _require4 = require('../$map/map.js'),
    __map = _require4.__map;

var _require5 = require('../$every/every.js'),
    __every = _require5.__every;

var _require6 = require('../$to-array/to-array.js'),
    __toArray = _require6.__toArray;

var isDone = function isDone(peekr) {
  return peekr.done;
};

function __zipAll(sources) {
  var _ref,
      filler,
      peekrs,
      done,
      _args = arguments;

  return _regeneratorRuntime.wrap(function __zipAll$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _ref = _args.length > 1 && _args[1] !== undefined ? _args[1] : {}, filler = _ref.filler;
          peekrs = __toArray(__map(sources, __peekerate));
          done = __every(peekrs, isDone);
          _context.prev = 3;

        case 4:
          if (done) {
            _context.next = 11;
            break;
          }

          _context.next = 7;
          return peekrs.map(function (_ref2) {
            var value = _ref2.value,
                done = _ref2.done;
            return done ? filler : value;
          });

        case 7:
          parallelEach(peekrs, function (peekr) {
            return peekr.advance();
          });
          done = __every(peekrs, isDone);
          _context.next = 4;
          break;

        case 11:
          _context.prev = 11;
          parallelEach(peekrs, function (peekr) {
            return peekr["return"]();
          });
          return _context.finish(11);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[3,, 11, 14]]);
}

exports.__zipAll = __zipAll;
var zipAll = /*#__PURE__*/iterableCurry(__zipAll, {
  variadic: true,
  minArgs: 0,
  maxArgs: 1
});
exports.zipAll = zipAll;