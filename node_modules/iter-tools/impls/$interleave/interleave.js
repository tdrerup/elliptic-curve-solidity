var _toConsumableArray = require("@babel/runtime/helpers/toConsumableArray");

var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");

var _createClass = require("@babel/runtime/helpers/createClass");

var _get = require("@babel/runtime/helpers/get");

var _inherits = require("@babel/runtime/helpers/inherits");

var _possibleConstructorReturn = require("@babel/runtime/helpers/possibleConstructorReturn");

var _getPrototypeOf = require("@babel/runtime/helpers/getPrototypeOf");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry,
    callReturn = _require.callReturn;

var _require2 = require('../../internal/iterable-iterator.js'),
    IterableIterator = _require2.IterableIterator;

var _require3 = require('../../internal/parallel-each.js'),
    parallelEach = _require3.parallelEach;

var _require4 = require('../../internal/peekerator.js'),
    Peekerator = _require4.Peekerator;

var _require5 = require('../$map/map.js'),
    __map = _require5.__map;

var _require6 = require('../$to-array/to-array.js'),
    __toArray = _require6.__toArray;

var _ = Symbol["for"]('_');

var __advance = Symbol["for"]('__advance');

var SummarizedPeekerator = /*#__PURE__*/function (_Peekerator) {
  _inherits(SummarizedPeekerator, _Peekerator);

  var _super = _createSuper(SummarizedPeekerator);

  function SummarizedPeekerator(iterator, first, inputSummary) {
    var _this;

    _classCallCheck(this, SummarizedPeekerator);

    _this = _super.call(this, iterator, first);
    _this[_].inputSummary = inputSummary;
    return _this;
  }

  _createClass(SummarizedPeekerator, [{
    key: "advance",
    value: function advance() {
      this[_].inputSummary.advanceBuffer(this);
    }
  }, {
    key: __advance,
    value: function value() {
      _get(_getPrototypeOf(SummarizedPeekerator.prototype), "advance", this).call(this);
    }
  }]);

  return SummarizedPeekerator;
}(Peekerator);

var InputSummaryInternal = /*#__PURE__*/function () {
  function InputSummaryInternal() {
    _classCallCheck(this, InputSummaryInternal);

    this.buffers = [];
    this.notDoneBuffer = null;
    this.index = 0;
  }

  _createClass(InputSummaryInternal, [{
    key: "init",
    value: function init(buffers) {
      this.buffers = buffers;
      this.updateNotDone();
    }
  }, {
    key: "updateNotDone",
    value: function updateNotDone() {
      this.notDoneBuffer = this.buffers.find(function (buffer) {
        return !buffer.done;
      });
    }
  }, {
    key: "advanceBuffer",
    value: function advanceBuffer(buffer) {
      var wasDone = buffer.done;

      buffer[__advance]();

      this.index++;

      if (!wasDone && buffer.done) {
        this.updateNotDone();
      }
    }
  }]);

  return InputSummaryInternal;
}();

var InputSummary = /*#__PURE__*/function () {
  function InputSummary(internal) {
    _classCallCheck(this, InputSummary);

    this[_] = internal;
  }

  _createClass(InputSummary, [{
    key: "advance",
    value: function advance() {
      throw new Error('advance() is not supported on an interleave summary');
    }
  }, {
    key: "current",
    get: function get() {
      return {
        value: this.value,
        done: this.done
      };
    }
  }, {
    key: "value",
    get: function get() {
      return this[_].notDoneBuffer;
    }
  }, {
    key: "done",
    get: function get() {
      return this[_].notDoneBuffer === undefined;
    }
  }, {
    key: "index",
    get: function get() {
      return this[_].index;
    }
  }]);

  return InputSummary;
}();

exports.InputSummary = InputSummary;

var Interleaver = /*#__PURE__*/function (_IterableIterator) {
  _inherits(Interleaver, _IterableIterator);

  var _super2 = _createSuper(Interleaver);

  function Interleaver(sources, strategy, options) {
    var _this2;

    _classCallCheck(this, Interleaver);

    _this2 = _super2.call(this);
    _this2.sources = sources;
    _this2.strategy = strategy;
    _this2.options = options;
    _this2.initialized = false;
    _this2.inputSummary = new InputSummaryInternal(sources);
    return _this2;
  }

  _createClass(Interleaver, [{
    key: "init",
    value: function init() {
      this.initialized = true;
      var strategy = this.strategy,
          options = this.options,
          inputSummary = this.inputSummary;
      this.buffers = __toArray(__map(this.sources, function (source) {
        return SummarizedPeekerator.from(source, inputSummary);
      }));
      this.iterator = strategy.apply(void 0, [options, new InputSummary(inputSummary)].concat(_toConsumableArray(this.buffers)));
      inputSummary.init(this.buffers);
    }
  }, {
    key: "returnBuffers",
    value: function returnBuffers() {
      parallelEach(this.buffers, function (buffer) {
        return buffer["return"]();
      });
    }
  }, {
    key: "next",
    value: function next() {
      if (!this.initialized) this.init();
      var step = this.iterator.next();
      if (step.done) this.returnBuffers();
      return step;
    }
  }, {
    key: "return",
    value: function _return() {
      callReturn(this.iterator);
      this.returnBuffers();
    }
  }]);

  return Interleaver;
}(IterableIterator);

function __interleave(sources, strategy) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return new Interleaver(sources, strategy, options);
}

exports.__interleave = __interleave;
var interleave = /*#__PURE__*/iterableCurry(__interleave, {
  variadic: true,
  growRight: true,
  minArgs: 1,
  maxArgs: 2
});
exports.interleave = interleave;