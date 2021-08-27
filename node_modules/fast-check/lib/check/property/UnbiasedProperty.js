"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnbiasedProperty = void 0;
class UnbiasedProperty {
    constructor(property) {
        this.property = property;
        this.isAsync = () => this.property.isAsync();
        this.generate = (mrng, _runId) => this.property.generate(mrng);
        this.run = (v) => this.property.run(v);
    }
}
exports.UnbiasedProperty = UnbiasedProperty;
