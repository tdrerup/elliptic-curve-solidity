var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _asyncToGenerator = require("@babel/runtime/helpers/asyncToGenerator");

var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");

var _createClass = require("@babel/runtime/helpers/createClass");

var _inherits = require("@babel/runtime/helpers/inherits");

var _possibleConstructorReturn = require("@babel/runtime/helpers/possibleConstructorReturn");

var _getPrototypeOf = require("@babel/runtime/helpers/getPrototypeOf");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _wrapAsyncGenerator = require("@babel/runtime/helpers/wrapAsyncGenerator");

var _awaitAsyncGenerator = require("@babel/runtime/helpers/awaitAsyncGenerator");

var _asyncIterator = require("@babel/runtime/helpers/asyncIterator");

var _asyncGeneratorDelegate = require("@babel/runtime/helpers/asyncGeneratorDelegate");

var _require = require('./iterable-iterator.js'),
    IterableIterator = _require.IterableIterator;

var _require2 = require('./async-parts-iterator.js'),
    AsyncPartsIterator = _require2.AsyncPartsIterator;

var AsyncBisector = /*#__PURE__*/function (_IterableIterator) {
  _inherits(AsyncBisector, _IterableIterator);

  var _super = _createSuper(AsyncBisector);

  function AsyncBisector(source, strategy, options) {
    var _this;

    _classCallCheck(this, AsyncBisector);

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

  _createClass(AsyncBisector, [{
    key: "setupFirst",
    value: function () {
      var _setupFirst = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var source, strategy, options, step;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                source = this.source, strategy = this.strategy, options = this.options;
                this.partsIterator = this.partsIterator || new AsyncPartsIterator(source, strategy, options);

                if (this.firstPart) {
                  _context.next = 7;
                  break;
                }

                _context.next = 5;
                return this.partsIterator.next();

              case 5:
                step = _context.sent;
                this.firstPart = step.done ? [] : step.value;

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setupFirst() {
        return _setupFirst.apply(this, arguments);
      }

      return setupFirst;
    }()
  }, {
    key: "next",
    value: function next() {
      var self = this;

      switch (this.currentIdx++) {
        case 0:
          return {
            value: _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
              return _regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return _awaitAsyncGenerator(self.setupFirst());

                    case 2:
                      return _context2.delegateYield(_asyncGeneratorDelegate(_asyncIterator(self.firstPart), _awaitAsyncGenerator), "t0", 3);

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }))(),
            done: false
          };

        case 1:
          return {
            value: _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
              var step;
              return _regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return _awaitAsyncGenerator(self.setupFirst());

                    case 2:
                      _context3.next = 4;
                      return _awaitAsyncGenerator(self.partsIterator.next());

                    case 4:
                      step = _context3.sent;
                      self.secondPart = step.done ? [] : step.value;
                      return _context3.delegateYield(_asyncGeneratorDelegate(_asyncIterator(self.secondPart), _awaitAsyncGenerator), "t0", 7);

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }))(),
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

  return AsyncBisector;
}(IterableIterator);

exports.AsyncBisector = AsyncBisector;