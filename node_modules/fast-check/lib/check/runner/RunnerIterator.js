"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunnerIterator = void 0;
const RunExecution_1 = require("./reporter/RunExecution");
class RunnerIterator {
    constructor(sourceValues, verbose, interruptedAsFailure) {
        this.sourceValues = sourceValues;
        this.runExecution = new RunExecution_1.RunExecution(verbose, interruptedAsFailure);
        this.currentIdx = -1;
        this.nextValues = sourceValues;
    }
    [Symbol.iterator]() {
        return this;
    }
    next() {
        const nextValue = this.nextValues.next();
        if (nextValue.done || this.runExecution.interrupted) {
            return { done: true, value: undefined };
        }
        this.currentShrinkable = nextValue.value;
        ++this.currentIdx;
        return { done: false, value: nextValue.value.value_ };
    }
    handleResult(result) {
        if (result != null && typeof result === 'string') {
            this.runExecution.fail(this.currentShrinkable.value_, this.currentIdx, result);
            this.currentIdx = -1;
            this.nextValues = this.currentShrinkable.shrink();
        }
        else if (result != null) {
            if (!result.interruptExecution) {
                this.runExecution.skip(this.currentShrinkable.value_);
                this.sourceValues.skippedOne();
            }
            else {
                this.runExecution.interrupt();
            }
        }
        else {
            this.runExecution.success(this.currentShrinkable.value_);
        }
    }
}
exports.RunnerIterator = RunnerIterator;
