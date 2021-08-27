(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(3);
function isBrowserHeaders(arg) {
    return typeof arg === "object" && typeof arg.headersMap === "object" && typeof arg.forEach === "function";
}
var BrowserHeaders = (function () {
    function BrowserHeaders(init, options) {
        if (init === void 0) { init = {}; }
        if (options === void 0) { options = { splitValues: false }; }
        var _this = this;
        this.headersMap = {};
        if (init) {
            if (typeof Headers !== "undefined" && init instanceof Headers) {
                var keys = util_1.getHeaderKeys(init);
                keys.forEach(function (key) {
                    var values = util_1.getHeaderValues(init, key);
                    values.forEach(function (value) {
                        if (options.splitValues) {
                            _this.append(key, util_1.splitHeaderValue(value));
                        }
                        else {
                            _this.append(key, value);
                        }
                    });
                });
            }
            else if (isBrowserHeaders(init)) {
                init.forEach(function (key, values) {
                    _this.append(key, values);
                });
            }
            else if (typeof Map !== "undefined" && init instanceof Map) {
                var asMap = init;
                asMap.forEach(function (value, key) {
                    _this.append(key, value);
                });
            }
            else if (typeof init === "string") {
                this.appendFromString(init);
            }
            else if (typeof init === "object") {
                Object.getOwnPropertyNames(init).forEach(function (key) {
                    var asObject = init;
                    var values = asObject[key];
                    if (Array.isArray(values)) {
                        values.forEach(function (value) {
                            _this.append(key, value);
                        });
                    }
                    else {
                        _this.append(key, values);
                    }
                });
            }
        }
    }
    BrowserHeaders.prototype.appendFromString = function (str) {
        var pairs = str.split("\r\n");
        for (var i = 0; i < pairs.length; i++) {
            var p = pairs[i];
            var index = p.indexOf(":");
            if (index > 0) {
                var key = p.substring(0, index).trim();
                var value = p.substring(index + 1).trim();
                this.append(key, value);
            }
        }
    };
    BrowserHeaders.prototype.delete = function (key, value) {
        var normalizedKey = util_1.normalizeName(key);
        if (value === undefined) {
            delete this.headersMap[normalizedKey];
        }
        else {
            var existing = this.headersMap[normalizedKey];
            if (existing) {
                var index = existing.indexOf(value);
                if (index >= 0) {
                    existing.splice(index, 1);
                }
                if (existing.length === 0) {
                    delete this.headersMap[normalizedKey];
                }
            }
        }
    };
    BrowserHeaders.prototype.append = function (key, value) {
        var _this = this;
        var normalizedKey = util_1.normalizeName(key);
        if (!Array.isArray(this.headersMap[normalizedKey])) {
            this.headersMap[normalizedKey] = [];
        }
        if (Array.isArray(value)) {
            value.forEach(function (arrayValue) {
                _this.headersMap[normalizedKey].push(util_1.normalizeValue(arrayValue));
            });
        }
        else {
            this.headersMap[normalizedKey].push(util_1.normalizeValue(value));
        }
    };
    BrowserHeaders.prototype.set = function (key, value) {
        var normalizedKey = util_1.normalizeName(key);
        if (Array.isArray(value)) {
            var normalized_1 = [];
            value.forEach(function (arrayValue) {
                normalized_1.push(util_1.normalizeValue(arrayValue));
            });
            this.headersMap[normalizedKey] = normalized_1;
        }
        else {
            this.headersMap[normalizedKey] = [util_1.normalizeValue(value)];
        }
    };
    BrowserHeaders.prototype.has = function (key, value) {
        var keyArray = this.headersMap[util_1.normalizeName(key)];
        var keyExists = Array.isArray(keyArray);
        if (!keyExists) {
            return false;
        }
        if (value !== undefined) {
            var normalizedValue = util_1.normalizeValue(value);
            return keyArray.indexOf(normalizedValue) >= 0;
        }
        else {
            return true;
        }
    };
    BrowserHeaders.prototype.get = function (key) {
        var values = this.headersMap[util_1.normalizeName(key)];
        if (values !== undefined) {
            return values.concat();
        }
        return [];
    };
    BrowserHeaders.prototype.forEach = function (callback) {
        var _this = this;
        Object.getOwnPropertyNames(this.headersMap)
            .forEach(function (key) {
            callback(key, _this.headersMap[key]);
        }, this);
    };
    BrowserHeaders.prototype.toHeaders = function () {
        if (typeof Headers !== "undefined") {
            var headers_1 = new Headers();
            this.forEach(function (key, values) {
                values.forEach(function (value) {
                    headers_1.append(key, value);
                });
            });
            return headers_1;
        }
        else {
            throw new Error("Headers class is not defined");
        }
    };
    return BrowserHeaders;
}());
exports.BrowserHeaders = BrowserHeaders;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BrowserHeaders_1 = __webpack_require__(0);
exports.BrowserHeaders = BrowserHeaders_1.BrowserHeaders;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function iterateHeaders(headers, callback) {
    var iterator = headers[Symbol.iterator]();
    var entry = iterator.next();
    while (!entry.done) {
        callback(entry.value[0]);
        entry = iterator.next();
    }
}
exports.iterateHeaders = iterateHeaders;
function iterateHeadersKeys(headers, callback) {
    var iterator = headers.keys();
    var entry = iterator.next();
    while (!entry.done) {
        callback(entry.value);
        entry = iterator.next();
    }
}
exports.iterateHeadersKeys = iterateHeadersKeys;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var iterateHeaders_1 = __webpack_require__(2);
function normalizeName(name) {
    if (typeof name !== "string") {
        name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
        throw new TypeError("Invalid character in header field name");
    }
    return name.toLowerCase();
}
exports.normalizeName = normalizeName;
function normalizeValue(value) {
    if (typeof value !== "string") {
        value = String(value);
    }
    return value;
}
exports.normalizeValue = normalizeValue;
function getHeaderValues(headersAsNative, key) {
    var headers = toWindowHeaders(headersAsNative);
    if (headers instanceof Headers && headers.getAll) {
        return headers.getAll(key);
    }
    var getValue = headers.get(key);
    if (getValue && typeof getValue === "string") {
        return [getValue];
    }
    return getValue;
}
exports.getHeaderValues = getHeaderValues;
function toWindowHeaders(headersAsNative) {
    return headersAsNative;
}
function getHeaderKeys(headersAsNative) {
    var headers = toWindowHeaders(headersAsNative);
    var asMap = {};
    var keys = [];
    if (headers.keys) {
        iterateHeaders_1.iterateHeadersKeys(headers, function (key) {
            if (!asMap[key]) {
                asMap[key] = true;
                keys.push(key);
            }
        });
    }
    else if (headers.forEach) {
        headers.forEach(function (_, key) {
            if (!asMap[key]) {
                asMap[key] = true;
                keys.push(key);
            }
        });
    }
    else {
        iterateHeaders_1.iterateHeaders(headers, function (entry) {
            var key = entry[0];
            if (!asMap[key]) {
                asMap[key] = true;
                keys.push(key);
            }
        });
    }
    return keys;
}
exports.getHeaderKeys = getHeaderKeys;
function splitHeaderValue(str) {
    var values = [];
    var commaSpaceValues = str.split(", ");
    commaSpaceValues.forEach(function (commaSpaceValue) {
        commaSpaceValue.split(",").forEach(function (commaValue) {
            values.push(commaValue);
        });
    });
    return values;
}
exports.splitHeaderValue = splitHeaderValue;


/***/ })
/******/ ])));