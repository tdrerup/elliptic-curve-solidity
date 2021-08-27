var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _asyncToGenerator = require("@babel/runtime/helpers/asyncToGenerator");

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry,
    asyncEnsureIterable = _require.asyncEnsureIterable;

var _require2 = require('../$zip-all/async-zip-all.js'),
    __asyncZipAll = _require2.__asyncZipAll;

var _require3 = require('../$peekerate/async-peekerate.js'),
    __asyncPeekerate = _require3.__asyncPeekerate;

var none = Symbol('none');

function _asyncStartsWithAnySeq(_x, _x2, _x3) {
  return _asyncStartsWithAnySeq2.apply(this, arguments);
}

function _asyncStartsWithAnySeq2() {
  _asyncStartsWithAnySeq2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(peekr, subseqPeekr, same) {
    var matches, value, seqValue, i;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(subseqPeekr.done || subseqPeekr.value.includes(none))) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", true);

          case 2:
            matches = subseqPeekr.value.map(function () {
              return true;
            });

          case 3:
            if (!(!peekr.done && !subseqPeekr.done)) {
              _context.next = 22;
              break;
            }

            value = peekr.value;
            seqValue = subseqPeekr.value;
            i = 0;

          case 7:
            if (!(i < seqValue.length)) {
              _context.next = 18;
              break;
            }

            if (matches[i]) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("continue", 15);

          case 10:
            if (!(seqValue[i] === none)) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("return", true);

          case 14:
            matches[i] = same(seqValue[i], value);

          case 15:
            i++;
            _context.next = 7;
            break;

          case 18:
            _context.next = 20;
            return Promise.all([subseqPeekr.advance(), peekr.advance()]);

          case 20:
            _context.next = 3;
            break;

          case 22:
            return _context.abrupt("return", subseqPeekr.done && matches.includes(true));

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _asyncStartsWithAnySeq2.apply(this, arguments);
}

exports._asyncStartsWithAnySeq = _asyncStartsWithAnySeq;

function __asyncStartsWithAnySeq(_x4, _x5) {
  return _asyncStartsWithAnySeq3.apply(this, arguments);
}

function _asyncStartsWithAnySeq3() {
  _asyncStartsWithAnySeq3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(iterable, seqs) {
    var same,
        peekr,
        subseqPeekr,
        seqFound,
        _args2 = arguments;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            same = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : Object.is;

            if (seqs.length) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", false);

          case 3:
            _context2.next = 5;
            return __asyncPeekerate(iterable);

          case 5:
            peekr = _context2.sent;
            _context2.next = 8;
            return __asyncPeekerate(__asyncZipAll(seqs, {
              filler: none
            }));

          case 8:
            subseqPeekr = _context2.sent;
            _context2.next = 11;
            return _asyncStartsWithAnySeq(peekr, subseqPeekr, same);

          case 11:
            seqFound = _context2.sent;
            _context2.next = 14;
            return subseqPeekr["return"]();

          case 14:
            _context2.next = 16;
            return peekr["return"]();

          case 16:
            return _context2.abrupt("return", seqFound);

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _asyncStartsWithAnySeq3.apply(this, arguments);
}

exports.__asyncStartsWithAnySeq = __asyncStartsWithAnySeq;
var asyncStartsWithAnySeq = /*#__PURE__*/asyncIterableCurry(__asyncStartsWithAnySeq, {
  minArgs: 1,
  maxArgs: 2,
  reduces: true,
  validateArgs: function validateArgs(args) {
    args[1] = args[1].map(function (arg) {
      return asyncEnsureIterable(arg);
    });
  }
});
exports.asyncStartsWithAnySeq = asyncStartsWithAnySeq;