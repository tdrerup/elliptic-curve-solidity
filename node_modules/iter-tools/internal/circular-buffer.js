var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");

var _createClass = require("@babel/runtime/helpers/createClass");

var _sourceBuffer = Symbol('sourceBuffer');

var ReadOnlyCircularBuffer = /*#__PURE__*/function () {
  function ReadOnlyCircularBuffer(sourceBuffer) {
    _classCallCheck(this, ReadOnlyCircularBuffer);

    this[_sourceBuffer] = sourceBuffer;
  }

  _createClass(ReadOnlyCircularBuffer, [{
    key: "get",
    value: function get(idx) {
      return this[_sourceBuffer].get(idx);
    }
  }, {
    key: "peek",
    value: function peek() {
      return this[_sourceBuffer].peek();
    }
  }, {
    key: "isFull",
    value: function isFull() {
      return this[_sourceBuffer].isFull();
    }
  }, {
    key: Symbol.iterator,
    value: function value() {
      return this[_sourceBuffer][Symbol.iterator]();
    }
  }, {
    key: "size",
    get: function get() {
      return this[_sourceBuffer].size;
    }
  }, {
    key: "capacity",
    get: function get() {
      return this[_sourceBuffer].capacity;
    }
  }]);

  return ReadOnlyCircularBuffer;
}();

exports.ReadOnlyCircularBuffer = ReadOnlyCircularBuffer;

var CircularBuffer = /*#__PURE__*/function () {
  function CircularBuffer(size) {
    _classCallCheck(this, CircularBuffer);

    this._array = new Array(size);
    this._head = size - 1;
    this.size = 0;
  }

  _createClass(CircularBuffer, [{
    key: "push",
    value: function push(value) {
      var array = this._array;
      var head = this._head = (this._head + 1) % array.length;
      var displacedValue = array[head];
      array[head] = value;

      if (this.isFull()) {
        return displacedValue;
      } else {
        this.size++;
        return undefined;
      }
    }
  }, {
    key: "shift",
    value: function shift() {
      if (!this.size) return undefined;
      var value = this.get(0);
      this.size--;
      return value;
    }
  }, {
    key: "peek",
    value: function peek() {
      return this.get(0);
    }
  }, {
    key: "fill",
    value: function fill(filler) {
      this._array.fill(filler);

      this.size = this._array.length;
    }
  }, {
    key: "get",
    value: function get(idx) {
      if (idx >= this.size) return undefined;
      var array = this._array;
      var head = this._head;
      var index = (array.length + head - this.size + 1 + idx) % array.length;
      return array[index];
    }
  }, {
    key: "isFull",
    value: function isFull() {
      return this.size === this._array.length;
    }
  }, {
    key: Symbol.iterator,
    value: /*#__PURE__*/_regeneratorRuntime.mark(function value() {
      var i;
      return _regeneratorRuntime.wrap(function value$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              i = 0;

            case 1:
              if (!(i < this.size)) {
                _context.next = 7;
                break;
              }

              _context.next = 4;
              return this.get(i);

            case 4:
              i++;
              _context.next = 1;
              break;

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, value, this);
    })
  }, {
    key: "capacity",
    get: function get() {
      return this._array.length;
    }
  }]);

  return CircularBuffer;
}();

exports.CircularBuffer = CircularBuffer;