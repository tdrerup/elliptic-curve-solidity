'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopNamespace(e) {
    if (e && e.__esModule) { return e; } else {
        var n = {};
        if (e) {
            Object.keys(e).forEach(function (k) {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () {
                        return e[k];
                    }
                });
            });
        }
        n['default'] = e;
        return n;
    }
}

const tslib = require('tslib');
const graphql = require('graphql');
const utils = require('@graphql-tools/utils/es5');
const graphqlTagPluck = require('@graphql-tools/graphql-tag-pluck/es5');
const path = require('path');
const process = require('process');
const fs = require('fs');

/**
 * @internal
 */
function pick(obj, keys) {
    var e_1, _a;
    try {
        for (var keys_1 = tslib.__values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
            var key = keys_1_1.value;
            if (obj[key]) {
                return obj[key];
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return obj;
}
// checkers
/**
 * @internal
 */
function isSchemaText(obj) {
    return typeof obj === 'string';
}
/**
 * @internal
 */
function isWrappedSchemaJson(obj) {
    var json = obj;
    return json.data !== undefined && json.data.__schema !== undefined;
}
/**
 * @internal
 */
function isSchemaJson(obj) {
    var json = obj;
    return json !== undefined && json.__schema !== undefined;
}
/**
 * @internal
 */
function isSchemaAst(obj) {
    return obj.kind !== undefined;
}

var identifiersToLookFor = ['default', 'schema', 'typeDefs', 'data'];
// Pick exports
/**
 * @internal
 */
function pickExportFromModule(_a) {
    var module = _a.module, filepath = _a.filepath;
    ensureModule({ module: module, filepath: filepath });
    return resolveModule(ensureExports({ module: module, filepath: filepath }));
}
/**
 * @internal
 */
function pickExportFromModuleSync(_a) {
    var module = _a.module, filepath = _a.filepath;
    ensureModule({ module: module, filepath: filepath });
    return resolveModuleSync(ensureExports({ module: module, filepath: filepath }));
}
// module
function resolveModule(identifiers) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var exportValue, _a;
        return tslib.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = pick;
                    return [4 /*yield*/, identifiers];
                case 1: return [4 /*yield*/, _a.apply(void 0, [_b.sent(), identifiersToLookFor])];
                case 2:
                    exportValue = _b.sent();
                    return [2 /*return*/, resolveExport(exportValue)];
            }
        });
    });
}
function resolveModuleSync(identifiers) {
    var exportValue = pick(identifiers, identifiersToLookFor);
    return resolveExport(exportValue);
}
// validate
function ensureModule(_a) {
    var module = _a.module, filepath = _a.filepath;
    if (!module) {
        throw new Error("Invalid export from export file " + filepath + ": empty export!");
    }
}
function ensureExports(_a) {
    var module = _a.module, filepath = _a.filepath;
    var identifiers = pick(module, identifiersToLookFor);
    if (!identifiers) {
        throw new Error("Invalid export from export file " + filepath + ": missing default export or 'schema' export!");
    }
    return identifiers;
}
// Decide what to do with an exported value
function resolveExport(fileExport) {
    try {
        if (graphql.isSchema(fileExport)) {
            return fileExport;
        }
        if (isSchemaText(fileExport)) {
            return graphql.parse(fileExport);
        }
        if (isWrappedSchemaJson(fileExport)) {
            return graphql.buildClientSchema(fileExport.data);
        }
        if (isSchemaJson(fileExport)) {
            return graphql.buildClientSchema(fileExport);
        }
        if (isSchemaAst(fileExport)) {
            return fileExport;
        }
        return null;
    }
    catch (e) {
        throw new Error('Exported schema must be of type GraphQLSchema, text, AST, or introspection JSON.');
    }
}

/**
 * @internal
 */
function tryToLoadFromExport(rawFilePath) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var filepath, mod, e_1;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    filepath = ensureFilepath(rawFilePath);
                    return [4 /*yield*/, new Promise(function (resolve) { resolve(_interopNamespace(require(filepath))); })];
                case 1:
                    mod = _a.sent();
                    return [4 /*yield*/, pickExportFromModule({ module: mod, filepath: filepath })];
                case 2: return [2 /*return*/, _a.sent()];
                case 3:
                    e_1 = _a.sent();
                    throw new Error("Unable to load from file \"" + rawFilePath + "\": " + e_1.message);
                case 4: return [2 /*return*/];
            }
        });
    });
}
/**
 * @internal
 */
function tryToLoadFromExportSync(rawFilePath) {
    try {
        var filepath = ensureFilepath(rawFilePath);
        var mod = require(filepath);
        return pickExportFromModuleSync({ module: mod, filepath: filepath });
    }
    catch (e) {
        throw new Error("Unable to load from file \"" + rawFilePath + "\": " + e.message);
    }
}
/**
 * @internal
 */
function ensureFilepath(filepath) {
    if (typeof require !== 'undefined' && require.cache) {
        filepath = require.resolve(filepath);
        if (require.cache[filepath]) {
            delete require.cache[filepath];
        }
    }
    return filepath;
}

var readFile = fs.promises.readFile, access = fs.promises.access;
var FILE_EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx', '.vue'];
/**
 * This loader loads GraphQL documents and type definitions from code files
 * using `graphql-tag-pluck`.
 *
 * ```js
 * const documents = await loadDocuments('queries/*.js', {
 *   loaders: [
 *     new CodeFileLoader()
 *   ]
 * });
 * ```
 *
 * Supported extensions include: `.ts`, `.tsx`, `.js`, `.jsx`, `.vue`
 */
var CodeFileLoader = /** @class */ (function () {
    function CodeFileLoader() {
    }
    CodeFileLoader.prototype.loaderId = function () {
        return 'code-file';
    };
    CodeFileLoader.prototype.canLoad = function (pointer, options) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var normalizedFilePath, _a;
            return tslib.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!utils.isValidPath(pointer)) return [3 /*break*/, 4];
                        if (!FILE_EXTENSIONS.find(function (extension) { return pointer.endsWith(extension); })) return [3 /*break*/, 4];
                        normalizedFilePath = path.isAbsolute(pointer) ? pointer : path.resolve(options.cwd || process.cwd(), pointer);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, access(normalizedFilePath)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, true];
                    case 3:
                        _a = _b.sent();
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/, false];
                }
            });
        });
    };
    CodeFileLoader.prototype.canLoadSync = function (pointer, options) {
        if (utils.isValidPath(pointer)) {
            if (FILE_EXTENSIONS.find(function (extension) { return pointer.endsWith(extension); })) {
                var normalizedFilePath = path.isAbsolute(pointer) ? pointer : path.resolve(options.cwd || process.cwd(), pointer);
                try {
                    fs.accessSync(normalizedFilePath);
                    return true;
                }
                catch (_a) {
                    return false;
                }
            }
        }
        return false;
    };
    CodeFileLoader.prototype.load = function (pointer, options) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var normalizedFilePath, errors, content, sdl, e_1, loaded, source, e_2;
            return tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        normalizedFilePath = ensureAbsolutePath(pointer, options);
                        errors = [];
                        if (!!options.noPluck) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, readFile(normalizedFilePath, { encoding: 'utf-8' })];
                    case 2:
                        content = _a.sent();
                        return [4 /*yield*/, graphqlTagPluck.gqlPluckFromCodeString(normalizedFilePath, content, options.pluckConfig)];
                    case 3:
                        sdl = _a.sent();
                        if (sdl) {
                            return [2 /*return*/, parseSDL({ pointer: pointer, sdl: sdl, options: options })];
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        utils.debugLog("Failed to load schema from code file \"" + normalizedFilePath + "\": " + e_1.message);
                        errors.push(e_1);
                        return [3 /*break*/, 5];
                    case 5:
                        if (!!options.noRequire) return [3 /*break*/, 11];
                        _a.label = 6;
                    case 6:
                        _a.trys.push([6, 10, , 11]);
                        if (!(options && options.require)) return [3 /*break*/, 8];
                        return [4 /*yield*/, Promise.all(utils.asArray(options.require).map(function (m) { return new Promise(function (resolve) { resolve(_interopNamespace(require(m))); }); }))];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8: return [4 /*yield*/, tryToLoadFromExport(normalizedFilePath)];
                    case 9:
                        loaded = _a.sent();
                        source = resolveSource(pointer, loaded, options);
                        if (source) {
                            return [2 /*return*/, source];
                        }
                        return [3 /*break*/, 11];
                    case 10:
                        e_2 = _a.sent();
                        errors.push(e_2);
                        return [3 /*break*/, 11];
                    case 11:
                        if (errors.length > 0) {
                            throw errors[0];
                        }
                        return [2 /*return*/, null];
                }
            });
        });
    };
    CodeFileLoader.prototype.loadSync = function (pointer, options) {
        var normalizedFilePath = ensureAbsolutePath(pointer, options);
        var errors = [];
        if (!options.noPluck) {
            try {
                var content = fs.readFileSync(normalizedFilePath, { encoding: 'utf-8' });
                var sdl = graphqlTagPluck.gqlPluckFromCodeStringSync(normalizedFilePath, content, options.pluckConfig);
                if (sdl) {
                    return parseSDL({ pointer: pointer, sdl: sdl, options: options });
                }
            }
            catch (e) {
                utils.debugLog("Failed to load schema from code file \"" + normalizedFilePath + "\": " + e.message);
                errors.push(e);
            }
        }
        if (!options.noRequire) {
            try {
                if (options && options.require) {
                    utils.asArray(options.require).forEach(function (m) { return require(m); });
                }
                var loaded = tryToLoadFromExportSync(normalizedFilePath);
                var source = resolveSource(pointer, loaded, options);
                if (source) {
                    return source;
                }
            }
            catch (e) {
                errors.push(e);
            }
        }
        if (errors.length > 0) {
            throw errors[0];
        }
        return null;
    };
    return CodeFileLoader;
}());
function parseSDL(_a) {
    var pointer = _a.pointer, sdl = _a.sdl, options = _a.options;
    return utils.parseGraphQLSDL(pointer, sdl, options);
}
function resolveSource(pointer, value, options) {
    if (graphql.isSchema(value)) {
        return {
            location: pointer,
            rawSDL: utils.printSchemaWithDirectives(value, options),
            schema: value,
        };
    }
    else if ((value === null || value === void 0 ? void 0 : value.kind) === graphql.Kind.DOCUMENT) {
        return {
            location: pointer,
            rawSDL: graphql.print(value),
            document: value,
        };
    }
    else if (typeof value === 'string') {
        return utils.parseGraphQLSDL(pointer, value, options);
    }
    return null;
}
function ensureAbsolutePath(pointer, options) {
    return path.isAbsolute(pointer) ? pointer : path.resolve(options.cwd || process.cwd(), pointer);
}

exports.CodeFileLoader = CodeFileLoader;
//# sourceMappingURL=index.cjs.js.map
