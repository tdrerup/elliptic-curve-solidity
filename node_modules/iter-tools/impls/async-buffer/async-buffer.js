var _asyncToGenerator = require("@babel/runtime/helpers/asyncToGenerator");

var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");

var _createClass = require("@babel/runtime/helpers/createClass");

var _inherits = require("@babel/runtime/helpers/inherits");

var _possibleConstructorReturn = require("@babel/runtime/helpers/possibleConstructorReturn");

var _getPrototypeOf = require("@babel/runtime/helpers/getPrototypeOf");

var _regeneratorRuntime = require("@babel/runtime/regenerator");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _awaitAsyncGenerator = require("@babel/runtime/helpers/awaitAsyncGenerator");

var _wrapAsyncGenerator = require("@babel/runtime/helpers/wrapAsyncGenerator");

var _require = require('../../internal/curry.js'),
    curry = _require.curry;

var _require2 = require('../../internal/async-iterable.js'),
    asyncCallReturn = _require2.asyncCallReturn;

var _require3 = require('../../internal/async-iterable-iterator.js'),
    AsyncIterableIterator = _require3.AsyncIterableIterator;

var _require4 = require('../../internal/circular-buffer.js'),
    CircularBuffer = _require4.CircularBuffer;

var _require5 = require('../../internal/number.js'),
    isPositiveInteger = _require5.isPositiveInteger;

var _require6 = require('../is-async-iterable/is-async-iterable.js'),
    isAsyncIterable = _require6.isAsyncIterable;

var _require7 = require('../../internal/iterable.js'),
    isIterable = _require7.isIterable;

function empty() {
  return _empty.apply(this, arguments);
}

function _empty() {
  _empty = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _empty.apply(this, arguments);
}

function getIterator(iterable) {
  if (iterable == null) {
    return empty();
  } else if (isAsyncIterable(iterable)) {
    return iterable[Symbol.asyncIterator]();
  } else if (isIterable(iterable)) {
    return iterable[Symbol.iterator]();
  } else {
    throw new Error("asyncBuffer expected an iterable but received ".concat(iterable, "."));
  }
}

var Bufferator = /*#__PURE__*/function (_AsyncIterableIterato) {
  _inherits(Bufferator, _AsyncIterableIterato);

  var _super = _createSuper(Bufferator);

  function Bufferator(iterable, concurrency) {
    var _this;

    _classCallCheck(this, Bufferator);

    _this = _super.call(this);
    _this.iterator = getIterator(iterable);
    _this.buffer = new CircularBuffer(concurrency);

    while (!_this.buffer.isFull()) {
      _this.buffer.push(Promise.resolve(_this.iterator.next()));
    }

    return _this;
  }

  _createClass(Bufferator, [{
    key: "next",
    value: function () {
      var _next = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
        var buffer, iterator;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                buffer = this.buffer, iterator = this.iterator;
                _context2.next = 3;
                return buffer.push(Promise.resolve(iterator.next()));

              case 3:
                return _context2.abrupt("return", _context2.sent);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function next() {
        return _next.apply(this, arguments);
      }

      return next;
    }()
  }, {
    key: "return",
    value: function () {
      var _return2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return asyncCallReturn(this.iterator);

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function _return() {
        return _return2.apply(this, arguments);
      }

      return _return;
    }()
  }]);

  return Bufferator;
}(AsyncIterableIterator);

exports.Bufferator = Bufferator;

function __asyncBuffer(source, n) {
  return new Bufferator(source, n);
}

exports.__asyncBuffer = __asyncBuffer;
var asyncBuffer = /*#__PURE__*/curry(function asyncBuffer(n, source) {
  if (n === undefined) return;

  if (n !== Infinity && !isPositiveInteger(n)) {
    throw new Error('Concurrency must be an integer > 0');
  } else if (n > 1024) {
    throw new Error('Concurrency argument to asyncBuffer must be <= 1024');
  }

  return __asyncBuffer(source, n);
});
exports.asyncBuffer = asyncBuffer;