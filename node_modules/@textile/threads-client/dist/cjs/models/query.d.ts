/**
 * @packageDocumentation
 * @module @textile/threads-client/models
 */
/**
 * Filter parameters for db subscription
 */
export interface Filter {
    /** The collection name */
    collectionName?: string;
    /** The instance ID */
    instanceID?: string;
    /** The action type: ALL (default), CREATE, SAVE, DELETE */
    actionTypes?: string[];
}
/**
 * Value represents a valid JSON data type.
 */
export declare type Value = string | boolean | number;
/**
 * JSONValue is used by the gRPC server to handle JSON data types.
 */
export interface ValueJSON {
    string?: string;
    bool?: boolean;
    float?: number;
}
/**
 * JSONOperation defines the set of possible operations to be used in a Query.
 */
export declare enum ComparisonJSON {
    Eq = 0,
    Ne = 1,
    Gt = 2,
    Lt = 3,
    Ge = 4,
    Le = 5
}
/**
 * CriterionJSON represents a single Query criteria.
 */
export interface CriterionJSON {
    fieldPath?: string;
    operation?: ComparisonJSON;
    value?: ValueJSON;
    query?: QueryJSON;
}
/**
 * SortJSON describes how and what field on which to sort a query.
 */
export interface SortJSON {
    fieldPath: string;
    desc: boolean;
}
/**
 * QueryJSON represents a single store Query.
 */
export interface QueryJSON {
    ands?: CriterionJSON[];
    ors?: QueryJSON[];
    sort?: SortJSON;
    seek?: string;
    limit?: number;
    skip?: number;
    index?: string;
}
/**
 * Criterion is a partial condition that can specify comparison operator for a field.
 */
export declare class Criterion implements CriterionJSON {
    fieldPath: string;
    operation?: ComparisonJSON | undefined;
    value?: ValueJSON | undefined;
    query?: Query | undefined;
    constructor(fieldPath: string, operation?: ComparisonJSON | undefined, value?: ValueJSON | undefined, query?: Query | undefined);
    /**
     * eq is an equality operator against a field
     * @param value The value to query against. Must be a valid JSON data type.
     */
    eq(value: Value): Query;
    /**
     * ne is a not equal operator against a field
     * @param value The value to query against. Must be a valid JSON data type.
     */
    ne(value: Value): Query;
    /**
     * gt is a greater operator against a field
     * @param value The value to query against. Must be a valid JSON data type.
     */
    gt(value: Value): Query;
    /** lt is a less operation against a field
     * @param value The value to query against. Must be a valid JSON data type.
     */
    lt(value: Value): Query;
    /** ge is a greater or equal operator against a field
     * @param value The value to query against. Must be a valid JSON data type.
     */
    ge(value: Value): Query;
    /** le is a less or equal operator against a field
     * @param value The value to query against. Must be a valid JSON data type.
     */
    le(value: Value): Query;
    /**
     * create updates this Criterion with a new Operation and returns the corresponding query.
     * @param op
     * @param value
     */
    private create;
    /**
     * toJSON converts the Criterion to JSONCriterion, dropping circular references to internal Queries.
     */
    toJSON(): CriterionJSON;
}
/**
 * Alias Criterion to Where for a slightly nicer API (see example below)
 */
declare const Where: typeof Criterion;
export { Where };
/**
 * Query allows to build queries to be used to fetch data from a model.
 */
export declare class Query implements QueryJSON {
    ands: CriterionJSON[];
    ors: QueryJSON[];
    sort?: SortJSON | undefined;
    limit?: number;
    skip?: number;
    index?: string;
    seek?: string;
    /**
     * Query creates a new generic query object.
     * @param ands An array of top-level Criterions to be included in the query.
     * @param ors An array of internal queries.
     * @param sort An object describing how to sort the query.
     */
    constructor(ands?: CriterionJSON[], ors?: QueryJSON[], sort?: SortJSON | undefined);
    /**
     * where starts to create a query condition for a field
     * @param fieldPath The field name to query on. Can be a hierarchical path.
     */
    static where(fieldPath: string): Criterion;
    /**
     * and concatenates a new condition in an existing field.
     * @param fieldPath The field name to query on. Can be a hierarchical path.
     */
    and(fieldPath: string): Criterion;
    /**
     * useIndex specifies the index to use when running this query.
     * @param fieldPath The path to the indexed field.
     * @note fieldPath must be a valid field for which an index has been created.
     */
    useIndex(fieldPath: string): Query;
    /**
     * or concatenates a new condition that is sufficient for an instance to
     * satisfy, independent of the current Query. Has left-associativity as:
     * (a And b) Or c
     * @param query The 'sub-query' to concat to the existing query.
     */
    or(query: Query): Query;
    /**
     * orderBy specify ascending order for the query results.
     * On multiple calls, only the last one is considered.
     * @param fieldPath The field name to query on. Can be a hierarchical path.
     */
    orderBy(fieldPath: string): Query;
    /**
     * orderByID specifies ascending ID order for the query results.
     * On multiple calls, only the last one is considered.
     */
    orderByID(): Query;
    /**
     * orderByDesc specify descending order for the query results.
     * On multiple calls, only the last one is considered.
     * @param fieldPath The field name to query on. Can be a hierarchical path.
     */
    orderByDesc(fieldPath: string): Query;
    /**
     * orderByIDDesc specifies descending ID order for the query results.
     * On multiple calls, only the last one is considered.
     */
    orderByIDDesc(): Query;
    /**
     * seekID seeks to the given ID before returning query results.
     * @param id The instance id to seek.
     */
    seekID(id: string): Query;
    /**
     * limitTo sets the maximum number of results.
     * @param limit The max number of instances to return.
     */
    limitTo(limit: number): Query;
    /**
     * skipNum skips the given number of results.
     * @param num The number of instances to skip.
     */
    skipNum(num: number): Query;
}
