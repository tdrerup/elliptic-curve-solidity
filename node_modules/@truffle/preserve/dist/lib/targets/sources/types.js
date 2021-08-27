"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isContent = exports.isContainer = void 0;
const isContainer = (source) => source &&
    typeof source === "object" &&
    "entries" in source &&
    typeof source.entries === "object";
exports.isContainer = isContainer;
const isContent = (source) => !exports.isContainer(source);
exports.isContent = isContent;
//# sourceMappingURL=types.js.map