"use strict";
/**
 * @packageDocumentation
 * @module @textile/threads-client/models
 */
// import { QueryJSON, SortJSON, CriterionJSON, ComparisonJSON, ValueJSON, Value } from './models'
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = exports.Where = exports.Criterion = exports.ComparisonJSON = void 0;
/**
 * JSONOperation defines the set of possible operations to be used in a Query.
 */
var ComparisonJSON;
(function (ComparisonJSON) {
    ComparisonJSON[ComparisonJSON["Eq"] = 0] = "Eq";
    ComparisonJSON[ComparisonJSON["Ne"] = 1] = "Ne";
    ComparisonJSON[ComparisonJSON["Gt"] = 2] = "Gt";
    ComparisonJSON[ComparisonJSON["Lt"] = 3] = "Lt";
    ComparisonJSON[ComparisonJSON["Ge"] = 4] = "Ge";
    ComparisonJSON[ComparisonJSON["Le"] = 5] = "Le";
})(ComparisonJSON = exports.ComparisonJSON || (exports.ComparisonJSON = {}));
/**
 * @hidden
 */
const valueToJSONValue = (value) => {
    switch (typeof value) {
        case 'string':
            return { string: value };
        case 'boolean':
            return { bool: value };
        case 'number':
            return { float: value };
        default:
            throw new Error('unsupported JSON value type');
    }
};
/**
 * Criterion is a partial condition that can specify comparison operator for a field.
 */
class Criterion {
    constructor(fieldPath, operation, value, query) {
        this.fieldPath = fieldPath;
        this.operation = operation;
        this.value = value;
        this.query = query;
    }
    /**
     * eq is an equality operator against a field
     * @param value The value to query against. Must be a valid JSON data type.
     */
    eq(value) {
        return this.create(ComparisonJSON.Eq, value);
    }
    /**
     * ne is a not equal operator against a field
     * @param value The value to query against. Must be a valid JSON data type.
     */
    ne(value) {
        return this.create(ComparisonJSON.Ne, value);
    }
    /**
     * gt is a greater operator against a field
     * @param value The value to query against. Must be a valid JSON data type.
     */
    gt(value) {
        return this.create(ComparisonJSON.Ne, value);
    }
    /** lt is a less operation against a field
     * @param value The value to query against. Must be a valid JSON data type.
     */
    lt(value) {
        return this.create(ComparisonJSON.Lt, value);
    }
    /** ge is a greater or equal operator against a field
     * @param value The value to query against. Must be a valid JSON data type.
     */
    ge(value) {
        return this.create(ComparisonJSON.Ge, value);
    }
    /** le is a less or equal operator against a field
     * @param value The value to query against. Must be a valid JSON data type.
     */
    le(value) {
        return this.create(ComparisonJSON.Le, value);
    }
    /**
     * create updates this Criterion with a new Operation and returns the corresponding query.
     * @param op
     * @param value
     */
    create(op, value) {
        this.operation = op;
        this.value = valueToJSONValue(value);
        if (this.query === undefined) {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            this.query = new Query();
        }
        this.query.ands.push(this);
        return this.query;
    }
    /**
     * toJSON converts the Criterion to JSONCriterion, dropping circular references to internal Queries.
     */
    toJSON() {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _a = this, { query } = _a, rest = __rest(_a, ["query"]);
        return rest;
    }
}
exports.Criterion = Criterion;
/**
 * Alias Criterion to Where for a slightly nicer API (see example below)
 */
const Where = Criterion;
exports.Where = Where;
/**
 * Query allows to build queries to be used to fetch data from a model.
 */
class Query {
    /**
     * Query creates a new generic query object.
     * @param ands An array of top-level Criterions to be included in the query.
     * @param ors An array of internal queries.
     * @param sort An object describing how to sort the query.
     */
    constructor(ands = [], ors = [], sort) {
        this.ands = ands;
        this.ors = ors;
        this.sort = sort;
    }
    /**
     * where starts to create a query condition for a field
     * @param fieldPath The field name to query on. Can be a hierarchical path.
     */
    static where(fieldPath) {
        return new Criterion(fieldPath);
    }
    /**
     * and concatenates a new condition in an existing field.
     * @param fieldPath The field name to query on. Can be a hierarchical path.
     */
    and(fieldPath) {
        return new Criterion(fieldPath, undefined, undefined, this);
    }
    /**
     * useIndex specifies the index to use when running this query.
     * @param fieldPath The path to the indexed field.
     * @note fieldPath must be a valid field for which an index has been created.
     */
    useIndex(fieldPath) {
        this.index = fieldPath;
        return this;
    }
    /**
     * or concatenates a new condition that is sufficient for an instance to
     * satisfy, independent of the current Query. Has left-associativity as:
     * (a And b) Or c
     * @param query The 'sub-query' to concat to the existing query.
     */
    or(query) {
        this.ors.push(query);
        return this;
    }
    /**
     * orderBy specify ascending order for the query results.
     * On multiple calls, only the last one is considered.
     * @param fieldPath The field name to query on. Can be a hierarchical path.
     */
    orderBy(fieldPath) {
        this.sort = { fieldPath, desc: false };
        return this;
    }
    /**
     * orderByID specifies ascending ID order for the query results.
     * On multiple calls, only the last one is considered.
     */
    orderByID() {
        this.sort = { fieldPath: '_id', desc: false };
        return this;
    }
    /**
     * orderByDesc specify descending order for the query results.
     * On multiple calls, only the last one is considered.
     * @param fieldPath The field name to query on. Can be a hierarchical path.
     */
    orderByDesc(fieldPath) {
        this.sort = { fieldPath, desc: true };
        return this;
    }
    /**
     * orderByIDDesc specifies descending ID order for the query results.
     * On multiple calls, only the last one is considered.
     */
    orderByIDDesc() {
        this.sort = { fieldPath: '_id', desc: true };
        return this;
    }
    /**
     * seekID seeks to the given ID before returning query results.
     * @param id The instance id to seek.
     */
    seekID(id) {
        this.seek = id;
        return this;
    }
    /**
     * limitTo sets the maximum number of results.
     * @param limit The max number of instances to return.
     */
    limitTo(limit) {
        this.limit = limit;
        return this;
    }
    /**
     * skipNum skips the given number of results.
     * @param num The number of instances to skip.
     */
    skipNum(num) {
        this.skip = num;
        return this;
    }
}
exports.Query = Query;
//# sourceMappingURL=query.js.map