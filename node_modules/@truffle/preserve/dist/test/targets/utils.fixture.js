"use strict";
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tests = void 0;
const arrayToAsyncIterable = function (array) {
    return __asyncGenerator(this, arguments, function* () {
        for (const element of array) {
            yield yield __await(element);
        }
    });
};
exports.tests = [
    {
        name: "Simple source",
        raw: {
            source: Buffer.from("c0ffee", "hex")
        },
        normalized: {
            source: arrayToAsyncIterable([Buffer.from("c0ffee", "hex")])
        },
        stringified: {
            source: Buffer.from("c0ffee", "hex").toString("utf8")
        }
    },
    {
        name: "Simple directory without nesting",
        raw: {
            source: {
                entries: [
                    {
                        path: "a",
                        source: Buffer.from("Coffee", "utf8")
                    }
                ]
            }
        },
        normalized: {
            source: {
                entries: arrayToAsyncIterable([
                    {
                        path: "a",
                        source: arrayToAsyncIterable([Buffer.from("Coffee", "utf8")])
                    }
                ])
            }
        },
        stringified: {
            source: {
                entries: [
                    {
                        path: "a",
                        source: "Coffee"
                    }
                ]
            }
        }
    },
    {
        name: "Complex nested directory with inconsistent types",
        raw: {
            source: {
                entries: [
                    {
                        path: "a",
                        source: {
                            entries: [
                                {
                                    path: "a/a",
                                    source: Buffer.from("c0ffee", "hex")
                                },
                                {
                                    path: "a/b",
                                    source: "Coffee"
                                }
                            ]
                        }
                    },
                    {
                        path: "b",
                        source: Buffer.from("Coffee", "utf8")
                    },
                    {
                        path: "c",
                        source: {
                            entries: [
                                {
                                    path: "c/a",
                                    source: new Uint8Array([0, 0, 0, 0])
                                }
                            ]
                        }
                    }
                ]
            }
        },
        normalized: {
            source: {
                entries: arrayToAsyncIterable([
                    {
                        path: "a",
                        source: {
                            entries: arrayToAsyncIterable([
                                {
                                    path: "a/a",
                                    source: arrayToAsyncIterable([Buffer.from("c0ffee", "hex")])
                                },
                                {
                                    path: "a/b",
                                    source: arrayToAsyncIterable([Buffer.from("Coffee", "utf8")])
                                }
                            ])
                        }
                    },
                    {
                        path: "b",
                        source: arrayToAsyncIterable([Buffer.from("Coffee", "utf8")])
                    },
                    {
                        path: "c",
                        source: {
                            entries: arrayToAsyncIterable([
                                {
                                    path: "c/a",
                                    source: arrayToAsyncIterable([Buffer.from("00000000", "hex")])
                                }
                            ])
                        }
                    }
                ])
            }
        },
        stringified: {
            source: {
                entries: [
                    {
                        path: "a",
                        source: {
                            entries: [
                                {
                                    path: "a/a",
                                    source: Buffer.from("c0ffee", "hex").toString("utf8")
                                },
                                {
                                    path: "a/b",
                                    source: "Coffee"
                                }
                            ]
                        }
                    },
                    {
                        path: "b",
                        source: "Coffee"
                    },
                    {
                        path: "c",
                        source: {
                            entries: [
                                {
                                    path: "c/a",
                                    source: Buffer.from("00000000", "hex").toString("utf8")
                                }
                            ]
                        }
                    }
                ]
            }
        }
    }
];
//# sourceMappingURL=utils.fixture.js.map