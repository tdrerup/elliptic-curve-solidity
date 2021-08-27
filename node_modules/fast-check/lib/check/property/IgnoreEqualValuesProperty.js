"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IgnoreEqualValuesProperty = void 0;
const stringify_1 = require("../../utils/stringify");
const PreconditionFailure_1 = require("../precondition/PreconditionFailure");
function fromSyncCached(cachedValue) {
    return cachedValue === null ? new PreconditionFailure_1.PreconditionFailure() : cachedValue;
}
function fromCached(...data) {
    if (data[1])
        return data[0].then(fromSyncCached);
    return fromSyncCached(data[0]);
}
function fromCachedUnsafe(cachedValue, isAsync) {
    return fromCached(cachedValue, isAsync);
}
class IgnoreEqualValuesProperty {
    constructor(property, skipRuns) {
        this.property = property;
        this.skipRuns = skipRuns;
        this.coveredCases = new Map();
        this.isAsync = () => this.property.isAsync();
        this.generate = (mrng, runId) => this.property.generate(mrng, runId);
        this.run = (v) => {
            const stringifiedValue = stringify_1.stringify(v);
            if (this.coveredCases.has(stringifiedValue)) {
                const lastOutput = this.coveredCases.get(stringifiedValue);
                if (!this.skipRuns) {
                    return lastOutput;
                }
                return fromCachedUnsafe(lastOutput, this.property.isAsync());
            }
            const out = this.property.run(v);
            this.coveredCases.set(stringifiedValue, out);
            return out;
        };
    }
}
exports.IgnoreEqualValuesProperty = IgnoreEqualValuesProperty;
