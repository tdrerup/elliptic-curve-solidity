var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _asyncToGenerator = require("@babel/runtime/helpers/asyncToGenerator");

var _require = require('./async-iterable.js'),
    asyncEnsureIterable = _require.asyncEnsureIterable;

var _require2 = require('../impls/$to-array/async-to-array.js'),
    __asyncToArray = _require2.__asyncToArray;

var _require3 = require('../impls/$map/async-map.js'),
    __asyncMap = _require3.__asyncMap;

function asyncSeqsToArray(_x) {
  return _asyncSeqsToArray.apply(this, arguments);
}

function _asyncSeqsToArray() {
  _asyncSeqsToArray = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(values) {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return __asyncToArray(__asyncMap(values, function (value) {
              return __asyncToArray(asyncEnsureIterable(value));
            }), function (arr) {
              return arr.length > 0;
            });

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _asyncSeqsToArray.apply(this, arguments);
}

exports.asyncSeqsToArray = asyncSeqsToArray;