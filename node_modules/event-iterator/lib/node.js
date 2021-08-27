"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event_iterator_1 = require("./event-iterator");
exports.EventIterator = event_iterator_1.EventIterator;
function stream(evOptions) {
    return new event_iterator_1.EventIterator((push, stop, fail) => {
        this.addListener("data", push);
        this.addListener("end", stop);
        this.addListener("error", fail);
    }, (push, stop, fail) => {
        this.removeListener("data", push);
        this.removeListener("end", stop);
        this.removeListener("error", fail);
        /* We are no longer interested in any data; attempt to close the stream. */
        if (this.destroy) {
            this.destroy();
        }
        else if (typeof this.close == "function") {
            this.close();
        }
    }, evOptions);
}
exports.stream = stream;
exports.default = event_iterator_1.EventIterator;
