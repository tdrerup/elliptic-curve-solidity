var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");

var _createClass = require("@babel/runtime/helpers/createClass");

var _inherits = require("@babel/runtime/helpers/inherits");

var _possibleConstructorReturn = require("@babel/runtime/helpers/possibleConstructorReturn");

var _get = require("@babel/runtime/helpers/get");

var _getPrototypeOf = require("@babel/runtime/helpers/getPrototypeOf");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _require = require('../../internal/iterable.js'),
    ensureIterable = _require.ensureIterable;

var _require2 = require('../../internal/fork.js'),
    Exchange = _require2.Exchange;

var _require3 = require('../../internal/peekerator.js'),
    Peekerator = _require3.Peekerator;

var _ = Symbol["for"]('_');

var Forkerator = /*#__PURE__*/function (_Peekerator) {
  _inherits(Forkerator, _Peekerator);

  var _super = _createSuper(Forkerator);

  _createClass(Forkerator, null, [{
    key: "from",
    value: function from(source) {
      var exchange = new Exchange(ensureIterable(source)[Symbol.iterator]());
      return _get(_getPrototypeOf(Forkerator), "from", this).call(this, exchange.fork(), exchange);
    }
  }]);

  function Forkerator(iterator, first, exchange) {
    var _this;

    _classCallCheck(this, Forkerator);

    _this = _super.call(this, iterator, first);
    _this[_].exchange = exchange;
    return _this;
  }

  _createClass(Forkerator, [{
    key: "advance",
    value: function advance() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      for (var i = 0; i < n; i++) {
        _get(_getPrototypeOf(Forkerator.prototype), "advance", this).call(this);

        this[_].exchange.advance();
      }

      return this;
    }
  }, {
    key: "fork",
    value: function fork() {
      return this[_].exchange.fork();
    }
  }]);

  return Forkerator;
}(Peekerator);

function __forkerate(source) {
  return Forkerator.from(source);
}

exports.__forkerate = __forkerate;

function wrapWithEnsureIterable(fn) {
  return function (source) {
    return fn(ensureIterable(source));
  };
}

var forkerate = wrapWithEnsureIterable(__forkerate);
exports.forkerate = forkerate;