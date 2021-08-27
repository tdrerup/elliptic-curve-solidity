declare type Input = {
    ref: string;
    path: string;
};
/**
 * @internal
 */
export declare function loadFromGit(input: Input): Promise<string | never>;
/**
 * @internal
 */
export declare function loadFromGitSync(input: Input): string | never;
export {};
