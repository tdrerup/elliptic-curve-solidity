import { DocumentNode, GraphQLSchema } from 'graphql';
/**
 * @internal
 */
export declare function tryToLoadFromExport(rawFilePath: string): Promise<GraphQLSchema | DocumentNode>;
/**
 * @internal
 */
export declare function tryToLoadFromExportSync(rawFilePath: string): GraphQLSchema | DocumentNode;
