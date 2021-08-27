import { SchemaPointerSingle, DocumentPointerSingle, SingleFileOptions, Source, UniversalLoader } from '@graphql-tools/utils';
import { GraphQLTagPluckOptions } from '@graphql-tools/graphql-tag-pluck';
/**
 * Additional options for loading from a code file
 */
export declare type CodeFileLoaderOptions = {
    require?: string | string[];
    pluckConfig?: GraphQLTagPluckOptions;
    noPluck?: boolean;
    noRequire?: boolean;
} & SingleFileOptions;
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
export declare class CodeFileLoader implements UniversalLoader<CodeFileLoaderOptions> {
    loaderId(): string;
    canLoad(pointer: SchemaPointerSingle | DocumentPointerSingle, options: CodeFileLoaderOptions): Promise<boolean>;
    canLoadSync(pointer: SchemaPointerSingle | DocumentPointerSingle, options: CodeFileLoaderOptions): boolean;
    load(pointer: SchemaPointerSingle | DocumentPointerSingle, options: CodeFileLoaderOptions): Promise<Source>;
    loadSync(pointer: SchemaPointerSingle | DocumentPointerSingle, options: CodeFileLoaderOptions): Source;
}
