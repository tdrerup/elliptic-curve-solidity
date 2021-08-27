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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __asyncDelegator = (this && this.__asyncDelegator) || function (o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expectedEventsForVowelsCounterRecipe = exports.expectedEventsForVowelsRecipe = exports.vowelsCounterRecipe = exports.vowelsRecipe = exports.simpleLoader = exports.simpleTarget = void 0;
exports.simpleTarget = "hello, world!";
exports.simpleLoader = {
    name: "simple-loader",
    inputLabels: [],
    outputLabels: ["string"],
    execute() {
        return __asyncGenerator(this, arguments, function* execute_1() {
            return yield __await({ string: exports.simpleTarget });
        });
    }
};
exports.vowelsRecipe = {
    name: "vowels-recipe",
    inputLabels: ["string"],
    outputLabels: ["vowels"],
    execute({ inputs, controls }) {
        return __asyncGenerator(this, arguments, function* execute_2() {
            const { update, step } = controls;
            yield __await(yield* __asyncDelegator(__asyncValues(update({ message: "Filtering vowels..." }))));
            const vowels = new Set(["a", "e", "i", "o", "u"]);
            const finalize = yield __await(yield* __asyncDelegator(__asyncValues(step({
                identifier: "finalize",
                message: "Finalizing string..."
            }))));
            yield __await(yield* __asyncDelegator(__asyncValues(finalize.succeed())));
            return yield __await({
                vowels: inputs.string
                    .split("")
                    .filter(character => vowels.has(character))
                    .join("")
            });
        });
    }
};
exports.vowelsCounterRecipe = {
    name: "vowels-counter-recipe",
    inputLabels: ["vowels"],
    outputLabels: ["vowels-count"],
    execute({ inputs, controls }) {
        return __asyncGenerator(this, arguments, function* execute_3() {
            const { update, declare } = controls;
            yield __await(yield* __asyncDelegator(__asyncValues(update({ message: "Counting vowels..." }))));
            const allVowels = ["a", "e", "i", "o", "u"];
            const valueResolutions = {};
            for (const vowel of allVowels) {
                valueResolutions[vowel] = yield __await(yield* __asyncDelegator(__asyncValues(declare({
                    identifier: vowel,
                    message: `# of ${vowel}'s`
                }))));
            }
            const { vowels } = inputs;
            const counts = allVowels
                .map(vowel => ({ [vowel]: { count: 0 } }))
                .reduce((a, b) => (Object.assign(Object.assign({}, a), b)), {});
            for (const vowel of vowels) {
                counts[vowel].count++;
            }
            for (const [vowel, valueResolution] of Object.entries(valueResolutions)) {
                yield __await(yield* __asyncDelegator(__asyncValues(valueResolution.resolve({
                    resolution: counts[vowel]
                }))));
            }
            return yield __await({
                "vowels-count": vowels.length
            });
        });
    }
};
exports.expectedEventsForVowelsRecipe = [
    {
        type: "begin",
        scope: ["simple-loader"]
    },
    {
        type: "succeed",
        scope: ["simple-loader"],
        result: { string: "hello, world!" }
    },
    {
        type: "begin",
        scope: ["vowels-recipe"]
    },
    {
        type: "update",
        scope: ["vowels-recipe"],
        message: "Filtering vowels..."
    },
    {
        type: "step",
        scope: ["vowels-recipe", "finalize"],
        message: "Finalizing string..."
    },
    {
        type: "succeed",
        scope: ["vowels-recipe", "finalize"]
    },
    {
        type: "succeed",
        scope: ["vowels-recipe"],
        result: { vowels: "eoo" }
    }
];
exports.expectedEventsForVowelsCounterRecipe = [
    {
        type: "begin",
        scope: ["vowels-counter-recipe"]
    },
    {
        type: "update",
        scope: ["vowels-counter-recipe"],
        message: "Counting vowels..."
    },
    {
        type: "declare",
        scope: ["vowels-counter-recipe", "a"],
        message: "# of a's"
    },
    {
        type: "declare",
        scope: ["vowels-counter-recipe", "e"],
        message: "# of e's"
    },
    {
        type: "declare",
        scope: ["vowels-counter-recipe", "i"],
        message: "# of i's"
    },
    {
        type: "declare",
        scope: ["vowels-counter-recipe", "o"],
        message: "# of o's"
    },
    {
        type: "declare",
        scope: ["vowels-counter-recipe", "u"],
        message: "# of u's"
    },
    {
        type: "resolve",
        scope: ["vowels-counter-recipe", "a"],
        resolution: { count: 0 }
    },
    {
        type: "resolve",
        scope: ["vowels-counter-recipe", "e"],
        resolution: { count: 1 }
    },
    {
        type: "resolve",
        scope: ["vowels-counter-recipe", "i"],
        resolution: { count: 0 }
    },
    {
        type: "resolve",
        scope: ["vowels-counter-recipe", "o"],
        resolution: { count: 2 }
    },
    {
        type: "resolve",
        scope: ["vowels-counter-recipe", "u"],
        resolution: { count: 0 }
    },
    {
        type: "succeed",
        scope: ["vowels-counter-recipe"],
        result: { "vowels-count": 3 }
    }
];
//# sourceMappingURL=preserve.fixture.js.map