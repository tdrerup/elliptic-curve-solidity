/**
 * Utility type that takes IPFS Core API function type (with 0 to 4 arguments
 * & last **optional** `options` parameter) and derives a function type with
 * `options` parameter extended with given `Extra` options.
 *
 * **Caution**: API Functions with more than for arguments ahead of `options`
 * will result to `never` type. API function that does not take `options` will
 * result in function whose last argument is extended with `Extra` which would
 * be an error.
 */
export declare type APIWithExtraOptions<API extends (...args: any[]) => any, Extra> = (...args: WithExtendedOptions<Parameters<API>, Extra>) => ReturnType<API>;
declare type End = never[];
declare type WithExtendedOptions<Params, Ext> = Params extends [...End] ? [] : Params extends [options?: infer Options, ...end: End] ? [options?: Options & Ext] : Params extends [a1: infer A1, options?: infer Options, ...end: End] ? [a1: A1, options?: Options & Ext] : Params extends [a1?: infer A1, options?: infer Options, ...end: End] ? [a1?: A1, options?: Options & Ext] : Params extends [a1: infer A1, a2: infer A2, options?: infer Options, ...end: End] ? [a1: A1, a2: A2, options?: Options & Ext] : Params extends [a1: infer A1, a2?: infer A2, options?: infer Options, ...end: End] ? [a1: A1, a2?: A2, options?: Options & Ext] : Params extends [a1?: infer A1, a2?: infer A2, options?: infer Options, ...end: End] ? [a1?: A1, a2?: A2, options?: Options & Ext] : Params extends [a1: infer A1, a2: infer A2, a3: infer A3, options?: infer Options, ...end: End] ? [a1: A1, a2: A2, a3: A3, options?: Options & Ext] : Params extends [a1: infer A1, a2: infer A2, a3?: infer A3, options?: infer Options, ...end: End] ? [a1: A1, a2: A2, a3?: A3, options?: Options & Ext] : Params extends [a1: infer A1, a2?: infer A2, a3?: infer A3, options?: infer Options, ...end: End] ? [a1: A1, a2?: A2, a3?: A3, options?: Options & Ext] : Params extends [a1?: infer A1, a2?: infer A2, a3?: infer A3, options?: infer Options, ...end: End] ? [a1?: A1, a2?: A2, a3?: A3, options?: Options & Ext] : never;
export declare type APIMethodWithExtraOptions<API, Key extends keyof API, Extra> = API[Key] extends (...args: any[]) => any ? APIWithExtraOptions<API[Key], Extra> : never;
export {};
//# sourceMappingURL=interface.d.ts.map