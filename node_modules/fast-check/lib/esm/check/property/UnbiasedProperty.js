export class UnbiasedProperty {
    constructor(property) {
        this.property = property;
        this.isAsync = () => this.property.isAsync();
        this.generate = (mrng, _runId) => this.property.generate(mrng);
        this.run = (v) => this.property.run(v);
    }
}
