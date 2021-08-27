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

const graphql = require('graphql');
const utils = require('@graphql-tools/utils');
const graphqlTagPluck = require('@graphql-tools/graphql-tag-pluck');
const path = require('path');
const process = require('process');
const fs = require('fs');

/**
 * @internal
 */
function pick(obj, keys) {
    for (const key of keys) {
        if (obj[key]) {
            return obj[key];
        }
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
    const json = obj;
    return json.data !== undefined && json.data.__schema !== undefined;
}
/**
 * @internal
 */
function isSchemaJson(obj) {
    const json = obj;
    return json !== undefined && json.__schema !== undefined;
}
/**
 * @internal
 */
function isSchemaAst(obj) {
    return obj.kind !== undefined;
}

const identifiersToLookFor = ['default', 'schema', 'typeDefs', 'data'];
// Pick exports
/**
 * @internal
 */
function pickExportFromModule({ module, filepath }) {
    ensureModule({ module, filepath });
    return resolveModule(ensureExports({ module, filepath }));
}
/**
 * @internal
 */
function pickExportFromModuleSync({ module, filepath }) {
    ensureModule({ module, filepath });
    return resolveModuleSync(ensureExports({ module, filepath }));
}
// module
async function resolveModule(identifiers) {
    const exportValue = await pick(await identifiers, identifiersToLookFor);
    return resolveExport(exportValue);
}
function resolveModuleSync(identifiers) {
    const exportValue = pick(identifiers, identifiersToLookFor);
    return resolveExport(exportValue);
}
// validate
function ensureModule({ module, filepath }) {
    if (!module) {
        throw new Error(`Invalid export from export file ${filepath}: empty export!`);
    }
}
function ensureExports({ module, filepath }) {
    const identifiers = pick(module, identifiersToLookFor);
    if (!identifiers) {
        throw new Error(`Invalid export from export file ${filepath}: missing default export or 'schema' export!`);
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
async function tryToLoadFromExport(rawFilePath) {
    try {
        const filepath = ensureFilepath(rawFilePath);
        const mod = await new Promise(function (resolve) { resolve(_interopNamespace(require(filepath))); });
        return await pickExportFromModule({ module: mod, filepath });
    }
    catch (e) {
        throw new Error(`Unable to load from file "${rawFilePath}": ${e.message}`);
    }
}
/**
 * @internal
 */
function tryToLoadFromExportSync(rawFilePath) {
    try {
        const filepath = ensureFilepath(rawFilePath);
        const mod = require(filepath);
        return pickExportFromModuleSync({ module: mod, filepath });
    }
    catch (e) {
        throw new Error(`Unable to load from file "${rawFilePath}": ${e.message}`);
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

const { readFile, access } = fs.promises;
const FILE_EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx', '.vue'];
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
class CodeFileLoader {
    loaderId() {
        return 'code-file';
    }
    async canLoad(pointer, options) {
        if (utils.isValidPath(pointer)) {
            if (FILE_EXTENSIONS.find(extension => pointer.endsWith(extension))) {
                const normalizedFilePath = path.isAbsolute(pointer) ? pointer : path.resolve(options.cwd || process.cwd(), pointer);
                try {
                    await access(normalizedFilePath);
                    return true;
                }
                catch (_a) {
                    return false;
                }
            }
        }
        return false;
    }
    canLoadSync(pointer, options) {
        if (utils.isValidPath(pointer)) {
            if (FILE_EXTENSIONS.find(extension => pointer.endsWith(extension))) {
                const normalizedFilePath = path.isAbsolute(pointer) ? pointer : path.resolve(options.cwd || process.cwd(), pointer);
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
    }
    async load(pointer, options) {
        const normalizedFilePath = ensureAbsolutePath(pointer, options);
        const errors = [];
        if (!options.noPluck) {
            try {
                const content = await readFile(normalizedFilePath, { encoding: 'utf-8' });
                const sdl = await graphqlTagPluck.gqlPluckFromCodeString(normalizedFilePath, content, options.pluckConfig);
                if (sdl) {
                    return parseSDL({ pointer, sdl, options });
                }
            }
            catch (e) {
                utils.debugLog(`Failed to load schema from code file "${normalizedFilePath}": ${e.message}`);
                errors.push(e);
            }
        }
        if (!options.noRequire) {
            try {
                if (options && options.require) {
                    await Promise.all(utils.asArray(options.require).map(m => new Promise(function (resolve) { resolve(_interopNamespace(require(m))); })));
                }
                const loaded = await tryToLoadFromExport(normalizedFilePath);
                const source = resolveSource(pointer, loaded, options);
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
    }
    loadSync(pointer, options) {
        const normalizedFilePath = ensureAbsolutePath(pointer, options);
        const errors = [];
        if (!options.noPluck) {
            try {
                const content = fs.readFileSync(normalizedFilePath, { encoding: 'utf-8' });
                const sdl = graphqlTagPluck.gqlPluckFromCodeStringSync(normalizedFilePath, content, options.pluckConfig);
                if (sdl) {
                    return parseSDL({ pointer, sdl, options });
                }
            }
            catch (e) {
                utils.debugLog(`Failed to load schema from code file "${normalizedFilePath}": ${e.message}`);
                errors.push(e);
            }
        }
        if (!options.noRequire) {
            try {
                if (options && options.require) {
                    utils.asArray(options.require).forEach(m => require(m));
                }
                const loaded = tryToLoadFromExportSync(normalizedFilePath);
                const source = resolveSource(pointer, loaded, options);
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
    }
}
function parseSDL({ pointer, sdl, options }) {
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
