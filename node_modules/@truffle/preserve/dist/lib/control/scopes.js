"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromKey = exports.toKey = void 0;
const separator = "␟"; // ASCII delimiter: unit separator
const toKey = (scope) => scope.join(separator);
exports.toKey = toKey;
const fromKey = (key) => key.split(separator);
exports.fromKey = fromKey;
//# sourceMappingURL=scopes.js.map