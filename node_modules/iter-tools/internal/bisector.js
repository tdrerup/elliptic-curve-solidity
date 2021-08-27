var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");

var _createClass = require("@babel/runtime/helpers/createClass");

var _inherits = require("@babel/runtime/helpers/inherits");

var _possibleConstructorReturn = require("@babel/runtime/helpers/possibleConstructorReturn");

var _getPrototypeOf = require("@babel/runtime/helpers/getPrototypeOf");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _require = require('./iterable-iterator.js'),
    IterableIterator = _require.IterableIterator;

var _require2 = require('./parts-iterator.js'),
    PartsIterator = _require2.PartsIterator;

var Bisector = /*#__PURE__*/function (_IterableIterator) {
  _inherits(Bisector, _IterableIterator);

  var _super = _createSuper(Bisector);

  function Bisector(source, strategy, options) {
    var _this;

    _classCallCheck(this, Bisector);

    _this = _super.call(this);
    _this.source = source;
    _this.strategy = strategy;
    _this.options = options;
    _this.partsIterator = null;
    _this.firstPart = null;
    _this.secondPart = null;
    _this.currentIdx = 0;
    return _this;
  }

  _createClass(Bisector, [{
    key: "setupFirst",
    value: function setupFirst() {
      var source = this.source,
          strategy = this.strategy,
          options = this.options;
      this.partsIterator = this.partsIterator || new PartsIterator(source, strategy, options);

      if (!this.firstPart) {
        var step = this.partsIterator.next();
        this.firstPart = step.done ? [] : step.value;
      }
    }
  }, {
    key: "next",
    value: function next() {
      var self = this;

      switch (this.currentIdx++) {
        case 0:
          return {
            value: /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
              return _regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      self.setupFirst();
                      return _context.delegateYield(self.firstPart, "t0", 2);

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })(),
            done: false
          };

        case 1:
          return {
            value: /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
              var step;
              return _regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      self.setupFirst();
                      step = self.partsIterator.next();
                      self.secondPart = step.done ? [] : step.value;
                      return _context2.delegateYield(self.secondPart, "t0", 4);

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            })(),
            done: false
          };

        default:
          return {
            value: undefined,
            done: true
          };
      }
    }
  }, {
    key: "return",
    value: function _return() {
      if (this.currentIdx === 1) {
        throw new Error('You must take both parts of a bisector or neither.');
      }

      return {
        value: undefined,
        done: true
      };
    }
  }]);

  return Bisector;
}(IterableIterator);

exports.Bisector = Bisector;