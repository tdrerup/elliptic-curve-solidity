var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");

var _createClass = require("@babel/runtime/helpers/createClass");

var _inherits = require("@babel/runtime/helpers/inherits");

var _possibleConstructorReturn = require("@babel/runtime/helpers/possibleConstructorReturn");

var _getPrototypeOf = require("@babel/runtime/helpers/getPrototypeOf");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _require = require('./symbols.js'),
    split = _require.split;

var _require2 = require('./iterable-iterator.js'),
    IterableIterator = _require2.IterableIterator;

var _require3 = require('./peekerator.js'),
    Peekerator = _require3.Peekerator;

var PartIterator = /*#__PURE__*/function (_IterableIterator) {
  _inherits(PartIterator, _IterableIterator);

  var _super = _createSuper(PartIterator);

  function PartIterator(partsIterator) {
    var _this;

    _classCallCheck(this, PartIterator);

    _this = _super.call(this);
    _this.partsIterator = partsIterator;
    _this.inactive = false;
    _this.done = false;
    return _this;
  }

  _createClass(PartIterator, [{
    key: "assertActive",
    value: function assertActive() {
      if (this.inactive && !this.done) {
        throw new Error('Cannot take from this split part. It is no longer the active part.');
      }
    }
  }, {
    key: "next",
    value: function next() {
      var spliterator = this.partsIterator.spliterator;
      var current = spliterator.current;
      this.assertActive();

      if (this.done || current.done || current.value === split) {
        this.done = true;
        this.partsIterator.maybeReturnSource();
        return {
          value: undefined,
          done: true
        };
      } else {
        spliterator.advance();
        return current;
      }
    }
  }, {
    key: "return",
    value: function _return() {
      this.done = true;
      this.partsIterator.maybeReturnSource();
      return {
        value: undefined,
        done: true
      };
    }
  }, {
    key: "throw",
    value: function _throw() {
      return this["return"]();
    }
  }]);

  return PartIterator;
}(IterableIterator);

exports.PartIterator = PartIterator;

var PartsIterator = /*#__PURE__*/function (_IterableIterator2) {
  _inherits(PartsIterator, _IterableIterator2);

  var _super2 = _createSuper(PartsIterator);

  function PartsIterator(source, strategy, options) {
    var _this2;

    _classCallCheck(this, PartsIterator);

    _this2 = _super2.call(this);
    _this2.source = source;
    _this2.strategy = strategy;
    _this2.options = options;
    _this2.initialized = false;
    _this2.returned = false;
    _this2.spliterator = null;
    _this2.currentPart = null;
    _this2.splitStep = null;
    return _this2;
  }

  _createClass(PartsIterator, [{
    key: "init",
    value: function init() {
      this.initialized = true;
      var source = this.source,
          strategy = this.strategy,
          options = this.options;
      this.spliterator = Peekerator.from(strategy(split, options, source));
    }
  }, {
    key: "maybeReturnSource",
    value: function maybeReturnSource() {
      if (this.spliterator && this.returned && this.currentPart.done) {
        this.spliterator["return"]();
      }
    }
  }, {
    key: "next",
    value: function next() {
      if (!this.initialized) this.init();
      var spliterator = this.spliterator;

      if (spliterator.done) {
        return {
          value: undefined,
          done: true
        };
      }

      if (this.currentPart !== null) {
        if (spliterator.value !== split || spliterator.current === this.splitStep) {
          this.currentPart.inactive = true;

          while (!spliterator.done && spliterator.value !== split) {
            spliterator.advance();
          }
        }

        spliterator.advance();
      }

      this.splitStep = spliterator.current;
      this.currentPart = new PartIterator(this);
      return {
        value: this.currentPart,
        done: false
      };
    }
  }, {
    key: "return",
    value: function _return(value) {
      this.returned = true;
      this.maybeReturnSource();
      return {
        value: value,
        done: true
      };
    }
  }, {
    key: "throw",
    value: function _throw() {
      return this["return"]();
    }
  }]);

  return PartsIterator;
}(IterableIterator);

exports.PartsIterator = PartsIterator;