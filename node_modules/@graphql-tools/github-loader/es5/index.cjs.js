'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const tslib = require('tslib');
const utils = require('@graphql-tools/utils/es5');
const crossFetch = require('cross-fetch');
const graphqlTagPluck = require('@graphql-tools/graphql-tag-pluck/es5');

// github:owner/name#ref:path/to/file
function extractData(pointer) {
    var _a = tslib.__read(pointer.split('#'), 2), repo = _a[0], file = _a[1];
    var _b = tslib.__read(repo.split(':')[1].split('/'), 2), owner = _b[0], name = _b[1];
    var _c = tslib.__read(file.split(':'), 2), ref = _c[0], path = _c[1];
    return {
        owner: owner,
        name: name,
        ref: ref,
        path: path,
    };
}
/**
 * This loader loads a file from GitHub.
 *
 * ```js
 * const typeDefs = await loadTypedefs('github:githubUser/githubRepo#branchName:path/to/file.ts', {
 *   loaders: [new GithubLoader()],
 *   token: YOUR_GITHUB_TOKEN,
 * })
 * ```
 */
var GithubLoader = /** @class */ (function () {
    function GithubLoader() {
    }
    GithubLoader.prototype.loaderId = function () {
        return 'github-loader';
    };
    GithubLoader.prototype.canLoad = function (pointer) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_a) {
                return [2 /*return*/, typeof pointer === 'string' && pointer.toLowerCase().startsWith('github:')];
            });
        });
    };
    GithubLoader.prototype.canLoadSync = function () {
        return false;
    };
    GithubLoader.prototype.load = function (pointer, options) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var _a, owner, name, ref, path, request, response, errorMessage, content, rawSDL;
            return tslib.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = extractData(pointer), owner = _a.owner, name = _a.name, ref = _a.ref, path = _a.path;
                        return [4 /*yield*/, crossFetch.fetch('https://api.github.com/graphql', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json; charset=utf-8',
                                    Authorization: "bearer " + options.token,
                                },
                                body: JSON.stringify({
                                    query: "\n          query GetGraphQLSchemaForGraphQLtools($owner: String!, $name: String!, $expression: String!) {\n            repository(owner: $owner, name: $name) {\n              object(expression: $expression) {\n                ... on Blob {\n                  text\n                }\n              }\n            }\n          }\n        ",
                                    variables: {
                                        owner: owner,
                                        name: name,
                                        expression: ref + ':' + path,
                                    },
                                    operationName: 'GetGraphQLSchemaForGraphQLtools',
                                }),
                            })];
                    case 1:
                        request = _b.sent();
                        return [4 /*yield*/, request.json()];
                    case 2:
                        response = _b.sent();
                        errorMessage = null;
                        if (response.errors && response.errors.length > 0) {
                            errorMessage = response.errors.map(function (item) { return item.message; }).join(', ');
                        }
                        else if (!response.data) {
                            errorMessage = response;
                        }
                        if (errorMessage) {
                            throw new Error('Unable to download schema from github: ' + errorMessage);
                        }
                        content = response.data.repository.object.text;
                        if (/\.(gql|graphql)s?$/i.test(path)) {
                            return [2 /*return*/, utils.parseGraphQLSDL(pointer, content, options)];
                        }
                        if (/\.json$/i.test(path)) {
                            return [2 /*return*/, utils.parseGraphQLJSON(pointer, content, options)];
                        }
                        return [4 /*yield*/, graphqlTagPluck.gqlPluckFromCodeString(pointer, content, options.pluckConfig)];
                    case 3:
                        rawSDL = _b.sent();
                        if (rawSDL) {
                            return [2 /*return*/, {
                                    location: pointer,
                                    rawSDL: rawSDL,
                                }];
                        }
                        throw new Error("Invalid file extension: " + path);
                }
            });
        });
    };
    GithubLoader.prototype.loadSync = function () {
        throw new Error('Loader GitHub has no sync mode');
    };
    return GithubLoader;
}());

exports.GithubLoader = GithubLoader;
//# sourceMappingURL=index.cjs.js.map
