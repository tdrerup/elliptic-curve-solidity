import { PreconditionFailure } from '../precondition/PreconditionFailure.js';
export class SkipAfterProperty {
    constructor(property, getTime, timeLimit, interruptExecution) {
        this.property = property;
        this.getTime = getTime;
        this.interruptExecution = interruptExecution;
        this.isAsync = () => this.property.isAsync();
        this.generate = (mrng, runId) => this.property.generate(mrng, runId);
        this.run = (v) => {
            if (this.getTime() >= this.skipAfterTime) {
                const preconditionFailure = new PreconditionFailure(this.interruptExecution);
                if (this.isAsync()) {
                    return Promise.resolve(preconditionFailure);
                }
                else {
                    return preconditionFailure;
                }
            }
            return this.property.run(v);
        };
        this.skipAfterTime = this.getTime() + timeLimit;
    }
}
