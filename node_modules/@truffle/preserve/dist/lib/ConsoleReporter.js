"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleReporter = void 0;
const chalk_1 = __importDefault(require("chalk"));
const spinnies_1 = __importDefault(require("spinnies"));
const Control = __importStar(require("./control"));
class ConsoleReporter {
    constructor(options) {
        this.spinners = new spinnies_1.default();
        this.console = options.console;
    }
    report(events) {
        var events_1, events_1_1;
        var e_1, _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                for (events_1 = __asyncValues(events); events_1_1 = yield events_1.next(), !events_1_1.done;) {
                    const event = events_1_1.value;
                    this[event.type].bind(this)(event);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (events_1_1 && !events_1_1.done && (_a = events_1.return)) yield _a.call(events_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
    }
    /*
     * Error events
     */
    fail(event) {
        const { error } = event;
        const { key } = eventProperties(event);
        // get current text
        const { text, indent } = this.spinners.pick(key);
        const errorMessage = error.message ? `Error: ${error.message}` : error.toString();
        const options = error
            ? {
                text: `${text}\n${" ".repeat(indent)}${chalk_1.default.red(errorMessage)}`
            }
            : {};
        this.spinners.fail(key, options);
    }
    abort(event) {
        const { key } = eventProperties(event);
        this.spinners.fail(key);
    }
    stop(event) {
        const { key } = eventProperties(event);
        this.spinners.remove(key);
    }
    /*
     * Step events
     */
    begin(event) {
        this.console.log();
        const { key, indent } = eventProperties(event);
        this.spinners.add(key, {
            succeedColor: "white",
            failColor: "white",
            indent: indent
        });
    }
    succeed(event) {
        const { message } = event;
        const { key } = eventProperties(event);
        const options = message ? { text: message } : {};
        this.spinners.succeed(key, options);
    }
    step(event) {
        const { key, indent } = eventProperties(event);
        const { message } = event;
        this.spinners.add(key, {
            text: message,
            indent,
            succeedColor: "white",
            failColor: "white"
        });
    }
    /*
     * Value resolution events
     */
    declare(event) {
        const { key, indent } = eventProperties(event);
        const { message } = event;
        this.spinners.add(key, {
            text: chalk_1.default.cyan(message),
            indent,
            succeedColor: "white",
            failColor: "white"
        });
    }
    resolve(event) {
        const { payload } = event;
        const { key } = eventProperties(event);
        const { text } = this.spinners.pick(key);
        const [name] = text.split(":");
        const options = payload ? { text: `${name}: ${payload}` } : { text };
        this.spinners.update(key, Object.assign(Object.assign({}, options), { status: "stopped" }));
    }
    update(event) {
        const { payload, message } = event;
        const { key } = eventProperties(event);
        const { text } = this.spinners.pick(key);
        if (!payload && !message)
            return;
        const [name] = text.split(":");
        // Update the value resolution with a payload or the step with message
        const options = message
            ? { text: message }
            : { text: `${name}: ${payload}` };
        this.spinners.update(key, options);
    }
}
exports.ConsoleReporter = ConsoleReporter;
const eventProperties = (event) => ({
    key: Control.Scopes.toKey(event.scope),
    indent: event.scope.length * 2
});
//# sourceMappingURL=ConsoleReporter.js.map