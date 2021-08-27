import { UniversalLoader, SingleFileOptions } from '@graphql-tools/utils';
import { GraphQLTagPluckOptions } from '@graphql-tools/graphql-tag-pluck';
/**
 * Additional options for loading from git
 */
export declare type GitLoaderOptions = SingleFileOptions & {
    /**
     * Additional options to pass to `graphql-tag-pluck`
     */
    pluckConfig?: GraphQLTagPluckOptions;
};
/**
 * This loader loads a file from git.
 *
 * ```js
 * const typeDefs = await loadTypedefs('git:someBranch:some/path/to/file.js', {
 *   loaders: [new GitLoader()],
 * })
 * ```
 */
export declare class GitLoader implements UniversalLoader {
    loaderId(): string;
    canLoad(pointer: string): Promise<boolean>;
    canLoadSync(pointer: string): boolean;
    load(pointer: string, options: GitLoaderOptions): Promise<import("@graphql-tools/utils").Source>;
    loadSync(pointer: string, options: GitLoaderOptions): import("@graphql-tools/utils").Source;
}
