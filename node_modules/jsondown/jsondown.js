var AbstractLevelDOWN = require("abstract-leveldown").AbstractLevelDOWN;
var os = require("os");
var util = require("util");
var path = require("path");
var mkdirp = require("mkdirp");
var MemDOWN = require("memdown");
var fs = os.hostname() === "runtime" ? require("./runtime-fs") : require("fs");

function serializeRBTree(tree) {
  var result = {};
  tree.forEach((key, value) => {
    result[key] = value;
  });
  return result;
}

function serializeStore(store) {
  var result = {};
  Object.keys(store).forEach(location => {
    result[location] = serializeRBTree(store[location]);
  });
  return JSON.stringify(result);
}

function jsonToBatchOps(data) {
  if (!data) {
    throw new Error();
  }
  return Object.keys(data).map(function(key) {
    var value = data[key];
    if (typeof value != "string") {
      try {
        value = new Buffer(value);
      } catch (e) {
        throw new Error(
          "Error parsing value " + JSON.stringify(value) + " as a buffer"
        );
      }
    }
    return { type: "put", key: key, value: value };
  });
}

function reviver(k, v) {
  if (
    v != null &&
    typeof v === "object" &&
    "type" in v &&
    v.type === "Buffer" &&
    "data" in v &&
    Array.isArray(v.data)
  ) {
    return new Buffer(v.data);
  } else {
    return v;
  }
}

function noop() {}

function JsonDOWN(location) {
  if (!(this instanceof JsonDOWN)) return new JsonDOWN(location);
  AbstractLevelDOWN.call(this, location);
  MemDOWN.call(this, location);
  this._isLoadingFromFile = false;
  this._isWriting = false;
  this._queuedWrites = [];
}

util.inherits(JsonDOWN, MemDOWN);

JsonDOWN.prototype._open = function(options, callback) {
  var self = this;
  var loc = this.location.slice(-5) === ".json" ?
    this.location :
    path.join(this.location, "data.json");
  var separator = os.platform() === "win32" ? "\\" : "/";
  var subdir =
    this.location.slice(-5) === ".json"
      ? this.location.split(separator).slice(0, -1).join(separator)
      : this.location;

  mkdirp(subdir, function(errMkdirp) {
    if (errMkdirp)
      return callback(errMkdirp);

    fs.exists(loc, function(exists) {
      if (!exists && options.createIfMissing === false)
        callback(new Error(loc + " does not exist (createIfMissing is false)"));
      else if (exists && options.errorIfExists)
        callback(new Error(loc + " exists (errorIfExists is true)"));
      else if (!exists)
        fs.open(loc, "w", callback);
      else
        fs.readFile(loc, { encoding: "utf-8", flag: "r" }, function(err, data) {
          if (err)
            return callback(err, data);
          try {
            data = JSON.parse(data, reviver);
          } catch (e) {
            return callback(
              new Error("Error parsing JSON in " + loc + ": " + e.message)
            );
          }
          self._isLoadingFromFile = true;
          try {
            try {
              self._batch(jsonToBatchOps(data[self._location]), {}, noop);
            } finally {
              self._isLoadingFromFile = false;
            }
          } catch (e) {
            return callback(e);
          }
          callback(null, self);
        });
    });
  });
};

JsonDOWN.prototype._close = function(cb) {
  this._writeToDisk(cb);
};

JsonDOWN.prototype._writeToDisk = function(cb) {
  if (this._isWriting) return this._queuedWrites.push(cb);
  this._isWriting = true;
  var loc = this.location.slice(-5) === ".json" ?
    this.location :
    path.join(this.location, "data.json");
  fs.writeFile(loc, serializeStore(this._store), { encoding: "utf-8" },
    function(err) {
      var queuedWrites = this._queuedWrites.splice(0);
      this._isWriting = false;
      if (queuedWrites.length)
        this._writeToDisk(function(err) {
          queuedWrites.forEach(function(cb) {
            cb(err);
          });
        });
      cb(err);
    }.bind(this)
  );
};

JsonDOWN.prototype._put = function(key, value, options, cb) {
  MemDOWN.prototype._put.call(this, key, value, options, noop);
  if (!this._isLoadingFromFile) this._writeToDisk(cb);
};

JsonDOWN.prototype._batch = function(array, options, cb) {
  MemDOWN.prototype._batch.call(this, array, options, noop);
  if (!this._isLoadingFromFile) this._writeToDisk(cb);
};

JsonDOWN.prototype._del = function(key, options, cb) {
  MemDOWN.prototype._del.call(this, key, options, noop);
  this._writeToDisk(cb);
};

module.exports = JsonDOWN;
