import global from "../common/global.js";
import { maybe } from "../common/maybe.js";
var __ = "__";
var GLOBAL_KEY = [__, __].join("DEV");
function getDEV() {
    try {
        return Boolean(__DEV__);
    }
    catch (_a) {
        Object.defineProperty(global, GLOBAL_KEY, {
            value: maybe(function () { return process.env.NODE_ENV; }) !== "production",
            enumerable: false,
            configurable: true,
            writable: true,
        });
        return global[GLOBAL_KEY];
    }
}
export default getDEV();
//# sourceMappingURL=DEV.js.map