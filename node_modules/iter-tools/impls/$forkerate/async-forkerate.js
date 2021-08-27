var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _asyncToGenerator = require("@babel/runtime/helpers/asyncToGenerator");

var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");

var _createClass = require("@babel/runtime/helpers/createClass");

var _inherits = require("@babel/runtime/helpers/inherits");

var _possibleConstructorReturn = require("@babel/runtime/helpers/possibleConstructorReturn");

var _get = require("@babel/runtime/helpers/get");

var _getPrototypeOf = require("@babel/runtime/helpers/getPrototypeOf");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _require = require('../../internal/async-iterable.js'),
    asyncEnsureIterable = _require.asyncEnsureIterable;

var _require2 = require('../../internal/async-fork.js'),
    AsyncExchange = _require2.AsyncExchange;

var _require3 = require('../../internal/async-peekerator.js'),
    AsyncPeekerator = _require3.AsyncPeekerator;

var _ = Symbol["for"]('_');

var AsyncForkerator = /*#__PURE__*/function (_AsyncPeekerator) {
  _inherits(AsyncForkerator, _AsyncPeekerator);

  var _super = _createSuper(AsyncForkerator);

  _createClass(AsyncForkerator, null, [{
    key: "from",
    value: function () {
      var _from = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(source) {
        var exchange;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                exchange = new AsyncExchange(asyncEnsureIterable(source)[Symbol.asyncIterator]());
                _context.next = 3;
                return _get(_getPrototypeOf(AsyncForkerator), "from", this).call(this, exchange.fork(), exchange);

              case 3:
                return _context.abrupt("return", _context.sent);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function from(_x) {
        return _from.apply(this, arguments);
      }

      return from;
    }()
  }]);

  function AsyncForkerator(iterator, first, exchange) {
    var _this;

    _classCallCheck(this, AsyncForkerator);

    _this = _super.call(this, iterator, first);
    _this[_].exchange = exchange;
    return _this;
  }

  _createClass(AsyncForkerator, [{
    key: "advance",
    value: function () {
      var _advance = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
        var n,
            i,
            _args2 = arguments;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                n = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : 1;
                i = 0;

              case 2:
                if (!(i < n)) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 5;
                return _get(_getPrototypeOf(AsyncForkerator.prototype), "advance", this).call(this);

              case 5:
                this[_].exchange.advance();

              case 6:
                i++;
                _context2.next = 2;
                break;

              case 9:
                return _context2.abrupt("return", this);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function advance() {
        return _advance.apply(this, arguments);
      }

      return advance;
    }()
  }, {
    key: "fork",
    value: function fork() {
      return this[_].exchange.fork();
    }
  }]);

  return AsyncForkerator;
}(AsyncPeekerator);

function __asyncForkerate(source) {
  return AsyncForkerator.from(source);
}

exports.__asyncForkerate = __asyncForkerate;

function asyncWrapWithEnsureIterable(fn) {
  return function (source) {
    return fn(asyncEnsureIterable(source));
  };
}

var asyncForkerate = asyncWrapWithEnsureIterable(__asyncForkerate);
exports.asyncForkerate = asyncForkerate;