var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");

var _createClass = require("@babel/runtime/helpers/createClass");

var _inherits = require("@babel/runtime/helpers/inherits");

var _possibleConstructorReturn = require("@babel/runtime/helpers/possibleConstructorReturn");

var _getPrototypeOf = require("@babel/runtime/helpers/getPrototypeOf");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _require = require('./parts-iterator.js'),
    PartsIterator = _require.PartsIterator,
    PartIterator = _require.PartIterator;

var _require2 = require('./symbols.js'),
    split = _require2.split;

var GroupsIterator = /*#__PURE__*/function (_PartsIterator) {
  _inherits(GroupsIterator, _PartsIterator);

  var _super = _createSuper(GroupsIterator);

  function GroupsIterator() {
    _classCallCheck(this, GroupsIterator);

    return _super.apply(this, arguments);
  }

  _createClass(GroupsIterator, [{
    key: "next",
    value: function next() {
      if (!this.initialized) this.init();
      var spliterator = this.spliterator;

      if (this.currentPart !== null) {
        if (spliterator.value !== split || spliterator.current === this.splitStep) {
          this.currentPart.inactive = true;

          while (!spliterator.done && spliterator.value !== split) {
            spliterator.advance();
          }
        }
      }

      if (spliterator.done) {
        return {
          value: undefined,
          done: true
        };
      }

      spliterator.advance();

      if (spliterator.done || spliterator.value === split) {
        throw new Error('Unexpected empty group');
      }

      var key = spliterator.value;
      spliterator.advance();
      this.splitStep = spliterator.current;
      this.currentPart = new PartIterator(this);
      return {
        value: [key, this.currentPart],
        done: false
      };
    }
  }]);

  return GroupsIterator;
}(PartsIterator);

exports.GroupsIterator = GroupsIterator;