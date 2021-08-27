"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.protocols = void 0;
const multiaddr_1 = require("multiaddr");
Object.defineProperty(exports, "protocols", { enumerable: true, get: function () { return multiaddr_1.protocols; } });
multiaddr_1.protocols.codes[406] = {
    code: 406,
    size: -1,
    name: 'thread',
    resolvable: false,
    path: false,
};
multiaddr_1.protocols.names['thread'] = {
    code: 406,
    size: -1,
    name: 'thread',
    resolvable: false,
    path: false,
};
multiaddr_1.protocols.table.push([406, -1, 'thead']);
//# sourceMappingURL=protocols.js.map