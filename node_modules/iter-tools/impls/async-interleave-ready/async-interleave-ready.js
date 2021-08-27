var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _awaitAsyncGenerator = require("@babel/runtime/helpers/awaitAsyncGenerator");

var _wrapAsyncGenerator = require("@babel/runtime/helpers/wrapAsyncGenerator");

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

var _require2 = require('./internal/race-to.js'),
    raceTo = _require2.raceTo;

function __asyncInterleaveReady(_x) {
  return _asyncInterleaveReady.apply(this, arguments);
}

exports.__asyncInterleaveReady = __asyncInterleaveReady;

function _asyncInterleaveReady() {
  _asyncInterleaveReady = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(sources) {
    var iterators, stepPromises, ready, _loop;

    return _regeneratorRuntime.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            iterators = sources.map(function (iterable) {
              return iterable[Symbol.asyncIterator]();
            });
            stepPromises = iterators.map(function (iter, idx) {
              return iter.next().then(function (step) {
                return {
                  idx: idx,
                  step: step
                };
              });
            });
            _loop = /*#__PURE__*/_regeneratorRuntime.mark(function _loop() {
              var _ready, idx, step;

              return _regeneratorRuntime.wrap(function _loop$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _ready = ready, idx = _ready.idx, step = _ready.step;
                      _context.next = 3;
                      return step.value;

                    case 3:
                      stepPromises[idx] = iterators[idx].next().then(function (step) {
                        return {
                          idx: idx,
                          step: step
                        };
                      });

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _loop);
            });

          case 3:
            _context2.next = 5;
            return _awaitAsyncGenerator(raceTo(function (_ref) {
              var step = _ref.step;
              return !step.done;
            }, null, stepPromises));

          case 5:
            _context2.t0 = ready = _context2.sent;

            if (!(_context2.t0 !== null)) {
              _context2.next = 10;
              break;
            }

            return _context2.delegateYield(_loop(), "t1", 8);

          case 8:
            _context2.next = 3;
            break;

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee);
  }));
  return _asyncInterleaveReady.apply(this, arguments);
}

var asyncInterleaveReady = /*#__PURE__*/asyncIterableCurry(__asyncInterleaveReady, {
  variadic: true
});
exports.asyncInterleaveReady = asyncInterleaveReady;