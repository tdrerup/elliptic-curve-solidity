'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('./core');
var react = require('./react');



Object.keys(core).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) exports[k] = core[k];
});
Object.keys(react).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) exports[k] = react[k];
});
//# sourceMappingURL=main.cjs.js.map
