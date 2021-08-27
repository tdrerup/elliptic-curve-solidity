var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _asyncToGenerator = require("@babel/runtime/helpers/asyncToGenerator");

var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");

var _createClass = require("@babel/runtime/helpers/createClass");

var _inherits = require("@babel/runtime/helpers/inherits");

var _possibleConstructorReturn = require("@babel/runtime/helpers/possibleConstructorReturn");

var _getPrototypeOf = require("@babel/runtime/helpers/getPrototypeOf");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _require = require('./async-parts-iterator.js'),
    AsyncPartsIterator = _require.AsyncPartsIterator,
    AsyncPartIterator = _require.AsyncPartIterator;

var _require2 = require('./symbols.js'),
    split = _require2.split;

var AsyncGroupsIterator = /*#__PURE__*/function (_AsyncPartsIterator) {
  _inherits(AsyncGroupsIterator, _AsyncPartsIterator);

  var _super = _createSuper(AsyncGroupsIterator);

  function AsyncGroupsIterator() {
    _classCallCheck(this, AsyncGroupsIterator);

    return _super.apply(this, arguments);
  }

  _createClass(AsyncGroupsIterator, [{
    key: "next",
    value: function () {
      var _next = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var spliterator, key;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.initialized) {
                  _context.next = 3;
                  break;
                }

                _context.next = 3;
                return this.init();

              case 3:
                spliterator = this.spliterator;

                if (!(this.currentPart !== null)) {
                  _context.next = 12;
                  break;
                }

                if (!(spliterator.value !== split || spliterator.current === this.splitStep)) {
                  _context.next = 12;
                  break;
                }

                this.currentPart.inactive = true;

              case 7:
                if (!(!spliterator.done && spliterator.value !== split)) {
                  _context.next = 12;
                  break;
                }

                _context.next = 10;
                return spliterator.advance();

              case 10:
                _context.next = 7;
                break;

              case 12:
                if (!spliterator.done) {
                  _context.next = 14;
                  break;
                }

                return _context.abrupt("return", {
                  value: undefined,
                  done: true
                });

              case 14:
                _context.next = 16;
                return spliterator.advance();

              case 16:
                if (!(spliterator.done || spliterator.value === split)) {
                  _context.next = 18;
                  break;
                }

                throw new Error('Unexpected empty group');

              case 18:
                key = spliterator.value;
                _context.next = 21;
                return spliterator.advance();

              case 21:
                this.splitStep = spliterator.current;
                this.currentPart = new AsyncPartIterator(this);
                return _context.abrupt("return", {
                  value: [key, this.currentPart],
                  done: false
                });

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function next() {
        return _next.apply(this, arguments);
      }

      return next;
    }()
  }]);

  return AsyncGroupsIterator;
}(AsyncPartsIterator);

exports.AsyncGroupsIterator = AsyncGroupsIterator;