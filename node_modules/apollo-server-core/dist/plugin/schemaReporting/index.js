"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeCoreSchemaHash = exports.ApolloServerPluginSchemaReporting = void 0;
const os_1 = __importDefault(require("os"));
const uuid_1 = require("uuid");
const graphql_1 = require("graphql");
const schemaReporter_1 = require("./schemaReporter");
const createSHA_1 = __importDefault(require("../../utils/createSHA"));
const schemaIsFederated_1 = require("../schemaIsFederated");
function ApolloServerPluginSchemaReporting({ initialDelayMaxMs, overrideReportedSchema, endpointUrl, fetcher, } = Object.create(null)) {
    const bootId = uuid_1.v4();
    return {
        __internal_plugin_id__() {
            return 'SchemaReporting';
        },
        serverWillStart({ apollo, schema, logger }) {
            return __awaiter(this, void 0, void 0, function* () {
                const { key, graphRef } = apollo;
                if (!key) {
                    throw Error('To use ApolloServerPluginSchemaReporting, you must provide an Apollo API ' +
                        'key, via the APOLLO_KEY environment variable or via `new ApolloServer({apollo: {key})`');
                }
                if (!graphRef) {
                    throw Error('To use ApolloServerPluginSchemaReporting, you must provide your graph ref (eg, ' +
                        "'my-graph-id@my-graph-variant'). Try setting the APOLLO_GRAPH_REF environment " +
                        'variable or passing `new ApolloServer({apollo: {graphRef}})`.');
                }
                if (overrideReportedSchema) {
                    try {
                        const validationErrors = graphql_1.validateSchema(graphql_1.buildSchema(overrideReportedSchema, { noLocation: true }));
                        if (validationErrors.length) {
                            throw new Error(validationErrors.map((error) => error.message).join('\n'));
                        }
                    }
                    catch (err) {
                        throw new Error('The schema provided to overrideReportedSchema failed to parse or ' +
                            `validate: ${err.message}`);
                    }
                }
                if (schemaIsFederated_1.schemaIsFederated(schema)) {
                    throw Error([
                        'Schema reporting is not yet compatible with federated services.',
                        "If you're interested in using schema reporting with federated",
                        'services, please contact Apollo support. To set up managed federation, see',
                        'https://go.apollo.dev/s/managed-federation',
                    ].join(' '));
                }
                const coreSchema = overrideReportedSchema !== null && overrideReportedSchema !== void 0 ? overrideReportedSchema : graphql_1.printSchema(schema);
                const coreSchemaHash = computeCoreSchemaHash(coreSchema);
                if (overrideReportedSchema !== undefined) {
                    logger.info('Apollo schema reporting: schema to report has been overridden');
                }
                if (endpointUrl !== undefined) {
                    logger.info(`Apollo schema reporting: schema reporting URL override: ${endpointUrl}`);
                }
                const schemaReport = {
                    bootId,
                    graphRef,
                    platform: process.env.APOLLO_SERVER_PLATFORM || 'local',
                    runtimeVersion: `node ${process.version}`,
                    coreSchemaHash,
                    userVersion: process.env.APOLLO_SERVER_USER_VERSION,
                    serverId: process.env.APOLLO_SERVER_ID || process.env.HOSTNAME || os_1.default.hostname(),
                    libraryVersion: `apollo-server-core@${require('../../../package.json').version}`,
                };
                logger.info('Apollo schema reporting starting! See your graph at ' +
                    `https://studio.apollographql.com/graph/${encodeURI(graphRef)}/ with server info ${JSON.stringify(schemaReport)}`);
                const schemaReporter = new schemaReporter_1.SchemaReporter({
                    schemaReport,
                    coreSchema,
                    apiKey: key,
                    endpointUrl,
                    logger,
                    initialReportingDelayInMs: Math.floor(Math.random() * (initialDelayMaxMs !== null && initialDelayMaxMs !== void 0 ? initialDelayMaxMs : 10000)),
                    fallbackReportingDelayInMs: 20000,
                    fetcher,
                });
                schemaReporter.start();
                return {
                    serverWillStop() {
                        return __awaiter(this, void 0, void 0, function* () {
                            schemaReporter.stop();
                        });
                    },
                };
            });
        },
    };
}
exports.ApolloServerPluginSchemaReporting = ApolloServerPluginSchemaReporting;
function computeCoreSchemaHash(schema) {
    return createSHA_1.default('sha256').update(schema).digest('hex');
}
exports.computeCoreSchemaHash = computeCoreSchemaHash;
//# sourceMappingURL=index.js.map