import { Arbitrary } from './definition/Arbitrary';
/**
 * Constraints for {@link anything} and {@link object}
 * @public
 */
export interface ObjectConstraints {
    /**
     * Maximal depth allowed
     * @remarks Since 0.0.7
     */
    maxDepth?: number;
    /**
     * Maximal number of keys
     * @remarks Since 1.13.0
     */
    maxKeys?: number;
    /**
     * Arbitrary for keys
     *
     * Default for `key` is: {@link string}
     * @remarks Since 0.0.7
     */
    key?: Arbitrary<string>;
    /**
     * Arbitrary for values
     *
     * Default for `values` are:
     * - {@link boolean},
     * - {@link integer},
     * - {@link double},
     * - {@link string}
     * - constants among:
     *  - `null`,
     *  - `undefined`,
     *  - `Number.NaN`,
     *  - `+0`,
     *  - `-0`,
     *  - `Number.EPSILON`,
     *  - `Number.MIN_VALUE`,
     *  - `Number.MAX_VALUE`,
     *  - `Number.MIN_SAFE_INTEGER`,
     *  - `Number.MAX_SAFE_INTEGER`,
     *  - `Number.POSITIVE_INFINITY`,
     *  - `Number.NEGATIVE_INFINITY`
     * @remarks Since 0.0.7
     */
    values?: Arbitrary<unknown>[];
    /**
     * Also generate boxed versions of values
     * @remarks Since 1.11.0
     */
    withBoxedValues?: boolean;
    /**
     * Also generate Set
     * @remarks Since 1.11.0
     */
    withSet?: boolean;
    /**
     * Also generate Map
     * @remarks Since 1.11.0
     */
    withMap?: boolean;
    /**
     * Also generate string representations of object instances
     * @remarks Since 1.17.0
     */
    withObjectString?: boolean;
    /**
     * Also generate object with null prototype
     * @remarks Since 1.23.0
     */
    withNullPrototype?: boolean;
    /**
     * Also generate BigInt
     * @remarks Since 1.26.0
     */
    withBigInt?: boolean;
    /**
     * Also generate Date
     * @remarks Since 2.5.0
     */
    withDate?: boolean;
    /**
     * Also generate typed arrays in: (Uint|Int)(8|16|32)Array and Float(32|64)Array
     * Remark: no typed arrays made of bigint
     * @remarks Since 2.9.0
     */
    withTypedArray?: boolean;
    /**
     * Also generate sparse arrays (arrays with holes)
     * @remarks Since 2.13.0
     */
    withSparseArray?: boolean;
}
/**
 * Shared constraints for:
 * - {@link json},
 * - {@link unicodeJson},
 * - {@link jsonObject},
 * - {@link unicodeJsonObject}
 *
 * @remarks Since 2.5.0
 * @public
 */
export interface JsonSharedConstraints {
    /**
     * Maximal depth allowed
     * @remarks Since 2.5.0
     */
    maxDepth?: number;
}
/**
 * For any type of values
 *
 * You may use {@link sample} to preview the values that will be generated
 *
 * @example
 * ```javascript
 * null, undefined, 42, 6.5, 'Hello', {}, {k: [{}, 1, 2]}
 * ```
 *
 * @remarks Since 0.0.7
 * @public
 */
declare function anything(): Arbitrary<unknown>;
/**
 * For any type of values following the constraints defined by `settings`
 *
 * You may use {@link sample} to preview the values that will be generated
 *
 * @example
 * ```javascript
 * null, undefined, 42, 6.5, 'Hello', {}, {k: [{}, 1, 2]}
 * ```
 *
 * @example
 * ```typescript
 * // Using custom settings
 * fc.anything({
 *     key: fc.char(),
 *     values: [fc.integer(10,20), fc.constant(42)],
 *     maxDepth: 2
 * });
 * // Can build entries such as:
 * // - 19
 * // - [{"2":12,"k":15,"A":42}]
 * // - {"4":[19,13,14,14,42,11,20,11],"6":42,"7":16,"L":10,"'":[20,11],"e":[42,20,42,14,13,17]}
 * // - [42,42,42]...
 * ```
 *
 * @param constraints - Constraints to apply when building instances
 *
 * @remarks Since 0.0.7
 * @public
 */
declare function anything(constraints: ObjectConstraints): Arbitrary<unknown>;
/**
 * For any objects
 *
 * You may use {@link sample} to preview the values that will be generated
 *
 * @example
 * ```javascript
 * {}, {k: [{}, 1, 2]}
 * ```
 *
 * @remarks Since 0.0.7
 * @public
 */
declare function object(): Arbitrary<Record<string, unknown>>;
/**
 * For any objects following the constraints defined by `settings`
 *
 * You may use {@link sample} to preview the values that will be generated
 *
 * @example
 * ```javascript
 * {}, {k: [{}, 1, 2]}
 * ```
 *
 * @param constraints - Constraints to apply when building instances
 *
 * @remarks Since 0.0.7
 * @public
 */
declare function object(constraints: ObjectConstraints): Arbitrary<Record<string, unknown>>;
/**
 * For any JSON compliant values
 *
 * Keys and string values rely on {@link string}
 *
 * @remarks Since 1.2.3
 * @public
 */
declare function jsonObject(): Arbitrary<unknown>;
/**
 * For any JSON compliant values with a maximal depth
 *
 * Keys and string values rely on {@link string}
 *
 * @param maxDepth - Maximal depth of the generated values
 *
 * @deprecated
 * Superceded by `fc.jsonObject({maxDepth})` - see {@link https://github.com/dubzzz/fast-check/issues/992 | #992}.
 * Ease the migration with {@link https://github.com/dubzzz/fast-check/tree/main/codemods/unify-signatures | our codemod script}.
 *
 * @remarks Since 1.2.3
 * @public
 */
declare function jsonObject(maxDepth: number): Arbitrary<unknown>;
/**
 * For any JSON compliant values
 *
 * Keys and string values rely on {@link string}
 *
 * @param constraints - Constraints to be applied onto the generated instance
 *
 * @remarks Since 2.5.0
 * @public
 */
declare function jsonObject(constraints: JsonSharedConstraints): Arbitrary<unknown>;
/**
 * For any JSON compliant values with unicode support
 *
 * Keys and string values rely on {@link unicode}
 *
 * @remarks Since 1.2.3
 * @public
 */
declare function unicodeJsonObject(): Arbitrary<unknown>;
/**
 * For any JSON compliant values with unicode support and a maximal depth
 *
 * Keys and string values rely on {@link unicode}
 *
 * @param maxDepth - Maximal depth of the generated values
 *
 * @deprecated
 * Superceded by `fc.unicodeJsonObject({maxDepth})` - see {@link https://github.com/dubzzz/fast-check/issues/992 | #992}.
 * Ease the migration with {@link https://github.com/dubzzz/fast-check/tree/main/codemods/unify-signatures | our codemod script}.
 *
 * @remarks Since 1.2.3
 * @public
 */
declare function unicodeJsonObject(maxDepth: number): Arbitrary<unknown>;
/**
 * For any JSON compliant values with unicode support
 *
 * Keys and string values rely on {@link unicode}
 *
 * @param constraints - Constraints to be applied onto the generated instance
 *
 * @remarks Since 2.5.0
 * @public
 */
declare function unicodeJsonObject(constraints: JsonSharedConstraints): Arbitrary<unknown>;
/**
 * For any JSON strings
 *
 * Keys and string values rely on {@link string}
 *
 * @remarks Since 0.0.7
 * @public
 */
declare function json(): Arbitrary<string>;
/**
 * For any JSON strings with a maximal depth
 *
 * Keys and string values rely on {@link string}
 *
 * @param maxDepth - Maximal depth of the generated objects
 *
 * @deprecated
 * Superceded by `fc.json({maxDepth})` - see {@link https://github.com/dubzzz/fast-check/issues/992 | #992}.
 * Ease the migration with {@link https://github.com/dubzzz/fast-check/tree/main/codemods/unify-signatures | our codemod script}.
 *
 * @remarks Since 0.0.7
 * @public
 */
declare function json(maxDepth: number): Arbitrary<string>;
/**
 * For any JSON strings
 *
 * Keys and string values rely on {@link string}
 *
 * @param constraints - Constraints to be applied onto the generated instance
 *
 * @remarks Since 2.5.0
 * @public
 */
declare function json(constraints: JsonSharedConstraints): Arbitrary<unknown>;
/**
 * For any JSON strings with unicode support
 *
 * Keys and string values rely on {@link unicode}
 *
 * @remarks Since 0.0.7
 * @public
 */
declare function unicodeJson(): Arbitrary<string>;
/**
 * For any JSON strings with unicode support and a maximal depth
 *
 * Keys and string values rely on {@link unicode}
 *
 * @param maxDepth - Maximal depth of the generated objects
 *
 * @deprecated
 * Superceded by `fc.unicodeJson({maxDepth})` - see {@link https://github.com/dubzzz/fast-check/issues/992 | #992}.
 * Ease the migration with {@link https://github.com/dubzzz/fast-check/tree/main/codemods/unify-signatures | our codemod script}.
 *
 * @remarks Since 0.0.7
 * @public
 */
declare function unicodeJson(maxDepth: number): Arbitrary<string>;
/**
 * For any JSON strings with unicode support
 *
 * Keys and string values rely on {@link unicode}
 *
 * @param constraints - Constraints to be applied onto the generated instance
 *
 * @remarks Since 2.5.0
 * @public
 */
declare function unicodeJson(constraints: JsonSharedConstraints): Arbitrary<unknown>;
export { anything, object, jsonObject, unicodeJsonObject, json, unicodeJson };
