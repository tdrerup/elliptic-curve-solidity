import { __values, __awaiter, __generator } from 'tslib';
import { isSchema, parse, buildClientSchema, Kind, print } from 'graphql';
import { isValidPath, asArray, debugLog, parseGraphQLSDL, printSchemaWithDirectives } from '@graphql-tools/utils/es5';
import { gqlPluckFromCodeString, gqlPluckFromCodeStringSync } from '@graphql-tools/graphql-tag-pluck/es5';
import { isAbsolute, resolve } from 'path';
import { cwd } from 'process';
import { promises, accessSync, readFileSync } from 'fs';

/**
 * @internal
 */
function pick(obj, keys) {
    var e_1, _a;
    try {
        for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
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
    return __awaiter(this, void 0, void 0, function () {
        var exportValue, _a;
        return __generator(this, function (_b) {
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
        if (isSchema(fileExport)) {
            return fileExport;
        }
        if (isSchemaText(fileExport)) {
            return parse(fileExport);
        }
        if (isWrappedSchemaJson(fileExport)) {
            return buildClientSchema(fileExport.data);
        }
        if (isSchemaJson(fileExport)) {
            return buildClientSchema(fileExport);
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
    return __awaiter(this, void 0, void 0, function () {
        var filepath, mod, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    filepath = ensureFilepath(rawFilePath);
                    return [4 /*yield*/, import(filepath)];
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

var readFile = promises.readFile, access = promises.access;
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
        return __awaiter(this, void 0, void 0, function () {
            var normalizedFilePath, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!isValidPath(pointer)) return [3 /*break*/, 4];
                        if (!FILE_EXTENSIONS.find(function (extension) { return pointer.endsWith(extension); })) return [3 /*break*/, 4];
                        normalizedFilePath = isAbsolute(pointer) ? pointer : resolve(options.cwd || cwd(), pointer);
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
        if (isValidPath(pointer)) {
            if (FILE_EXTENSIONS.find(function (extension) { return pointer.endsWith(extension); })) {
                var normalizedFilePath = isAbsolute(pointer) ? pointer : resolve(options.cwd || cwd(), pointer);
                try {
                    accessSync(normalizedFilePath);
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
        return __awaiter(this, void 0, void 0, function () {
            var normalizedFilePath, errors, content, sdl, e_1, loaded, source, e_2;
            return __generator(this, function (_a) {
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
                        return [4 /*yield*/, gqlPluckFromCodeString(normalizedFilePath, content, options.pluckConfig)];
                    case 3:
                        sdl = _a.sent();
                        if (sdl) {
                            return [2 /*return*/, parseSDL({ pointer: pointer, sdl: sdl, options: options })];
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        debugLog("Failed to load schema from code file \"" + normalizedFilePath + "\": " + e_1.message);
                        errors.push(e_1);
                        return [3 /*break*/, 5];
                    case 5:
                        if (!!options.noRequire) return [3 /*break*/, 11];
                        _a.label = 6;
                    case 6:
                        _a.trys.push([6, 10, , 11]);
                        if (!(options && options.require)) return [3 /*break*/, 8];
                        return [4 /*yield*/, Promise.all(asArray(options.require).map(function (m) { return import(m); }))];
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
                var content = readFileSync(normalizedFilePath, { encoding: 'utf-8' });
                var sdl = gqlPluckFromCodeStringSync(normalizedFilePath, content, options.pluckConfig);
                if (sdl) {
                    return parseSDL({ pointer: pointer, sdl: sdl, options: options });
                }
            }
            catch (e) {
                debugLog("Failed to load schema from code file \"" + normalizedFilePath + "\": " + e.message);
                errors.push(e);
            }
        }
        if (!options.noRequire) {
            try {
                if (options && options.require) {
                    asArray(options.require).forEach(function (m) { return require(m); });
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
    return parseGraphQLSDL(pointer, sdl, options);
}
function resolveSource(pointer, value, options) {
    if (isSchema(value)) {
        return {
            location: pointer,
            rawSDL: printSchemaWithDirectives(value, options),
            schema: value,
        };
    }
    else if ((value === null || value === void 0 ? void 0 : value.kind) === Kind.DOCUMENT) {
        return {
            location: pointer,
            rawSDL: print(value),
            document: value,
        };
    }
    else if (typeof value === 'string') {
        return parseGraphQLSDL(pointer, value, options);
    }
    return null;
}
function ensureAbsolutePath(pointer, options) {
    return isAbsolute(pointer) ? pointer : resolve(options.cwd || cwd(), pointer);
}

export { CodeFileLoader };
//# sourceMappingURL=index.esm.js.map
