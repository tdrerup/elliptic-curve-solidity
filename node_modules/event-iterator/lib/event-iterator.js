"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventIterator {
    constructor(listen, remove, options = {}) {
        this.listen = listen;
        this.remove = remove;
        this.options = Object.assign({ highWaterMark: 100 }, options);
        Object.freeze(this);
    }
    [Symbol.asyncIterator]() {
        let placeholder;
        const queue = [];
        const listen = this.listen;
        const remove = this.remove;
        const push = (value) => {
            const resolution = { value, done: false };
            if (placeholder) {
                placeholder.resolve(resolution);
                placeholder = undefined;
            }
            else {
                queue.push(Promise.resolve(resolution));
                const { highWaterMark } = this.options;
                if (highWaterMark !== undefined && queue.length >= highWaterMark && console) {
                    console.warn(`EventIterator queue reached ${queue.length} items`);
                }
            }
        };
        const stop = () => {
            if (remove) {
                remove(push, stop, fail);
            }
            const resolution = { done: true };
            if (placeholder) {
                placeholder.resolve(resolution);
                placeholder = undefined;
            }
            else {
                queue.push(Promise.resolve(resolution));
            }
        };
        const fail = (error) => {
            if (remove) {
                remove(push, stop, fail);
            }
            if (placeholder) {
                placeholder.reject(error);
                placeholder = undefined;
            }
            else {
                const rejection = Promise.reject(error);
                /* Attach error handler to avoid leaking an unhandled promise rejection. */
                rejection.catch(() => { });
                queue.push(rejection);
            }
        };
        listen(push, stop, fail);
        return {
            next(value) {
                if (queue.length) {
                    return queue.shift();
                }
                else {
                    return new Promise((resolve, reject) => {
                        placeholder = { resolve, reject };
                    });
                }
            },
            return() {
                if (remove) {
                    remove(push, stop, fail);
                }
                return Promise.resolve({ done: true });
            },
        };
    }
}
exports.EventIterator = EventIterator;
exports.default = EventIterator;
