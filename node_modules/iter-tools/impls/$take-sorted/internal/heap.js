var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");

var _createClass = require("@babel/runtime/helpers/createClass");

function swap(arr, x, y) {
  var tmp = arr[x];
  arr[x] = arr[y];
  arr[y] = tmp;
}

var Heap = /*#__PURE__*/function () {
  function Heap(compare) {
    _classCallCheck(this, Heap);

    this.compare = compare;
    this.data = [];
  }

  _createClass(Heap, [{
    key: "_bubbleUp",
    value: function _bubbleUp(i) {
      var data = this.data,
          compare = this.compare;
      var parentIndex;

      while (i > 0) {
        parentIndex = Heap.getParentIndex(i);

        if (compare(data[i], data[parentIndex]) < 0) {
          swap(this.data, i, parentIndex);
          i = parentIndex;
        } else {
          return i;
        }
      }
    }
  }, {
    key: "_heapify",
    value: function _heapify(i) {
      var data = this.data,
          compare = this.compare;
      var lIdx = Heap.getLeftIndex(i);
      var rIdx = Heap.getRightIndex(i);
      var leftIsSmaller = this.has(lIdx) ? compare(data[lIdx], data[i]) < 0 : false;
      var rightIsSmaller = this.has(rIdx) ? compare(data[rIdx], data[i]) < 0 : false;

      if (leftIsSmaller && rightIsSmaller) {
        if (compare(data[lIdx], data[rIdx]) < 0) {
          swap(this.data, lIdx, i);
          return lIdx;
        } else {
          swap(this.data, rIdx, i);
          return rIdx;
        }
      } else if (leftIsSmaller) {
        swap(this.data, lIdx, i);
        return lIdx;
      } else if (rightIsSmaller) {
        swap(this.data, rIdx, i);
        return rIdx;
      }
    }
  }, {
    key: "_bubbleDown",
    value: function _bubbleDown(i) {
      var size = this.size;

      while (i !== null && i < size) {
        i = this._heapify(i);
      }
    }
  }, {
    key: "push",
    value: function push(value) {
      this.data.push(value);

      this._bubbleUp(this.size - 1);
    }
  }, {
    key: "pop",
    value: function pop() {
      if (!this.size) return;
      var root = this.data[0];
      var last = this.data.pop();

      if (this.size > 0) {
        this.data[0] = last;

        this._bubbleDown(0);
      }

      return root;
    }
  }, {
    key: "has",
    value: function has(idx) {
      return idx > 0 && idx < this.size;
    }
  }, {
    key: "size",
    get: function get() {
      return this.data.length;
    }
  }], [{
    key: "getParentIndex",
    value: function getParentIndex(i) {
      return i % 2 ? (i - 1) / 2 : Math.floor((i - 1) / 2);
    }
  }, {
    key: "getLeftIndex",
    value: function getLeftIndex(i) {
      return 2 * i + 1;
    }
  }, {
    key: "getRightIndex",
    value: function getRightIndex(i) {
      return 2 * i + 2;
    }
  }]);

  return Heap;
}();

exports.Heap = Heap;