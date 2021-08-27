/**
 * @packageDocumentation
 * @module @textile/threads-client/models
 */
export * from './query';
export * from './ReadTransaction';
export * from './WriteTransaction';
/**
 * Event represents an update event.
 * It contains information about when the update occurred, the instance id, the collection name,
 * and the update patch itself.
 */
export interface Event {
    /**
     * Unix timestamp.
     */
    timestamp: number;
    /**
     * The instance identifier (_id).
     */
    _id: string;
    /**
     * The collection to which the updated instance belongs.
     */
    collection_name: string;
    /**
     * The underlying patch update information. See {@link Patch} for details.
     */
    patch: Patch;
}
/**
 * PatchType represents the type of instance update. One of delete, create, or save.
 */
export declare type PatchType = 'delete' | 'create' | 'save';
/**
 * Patch represents an update to an instance.
 * It contains information about the update type, the instance that was updated, and the update operation.
 */
export interface Patch {
    /**
     * The type of operation. One of delete, create, or save.
     */
    type: PatchType;
    /**
     * The instance identifier (_id).
     */
    instance_id: string;
    /**
     * The actual JSON patch document or undefined for a delete operation.
     * The patch can either be the state of an instance in the case of a create operation,
     * or a json patch document/array as defined in https://tools.ietf.org/html/rfc6902.
     * See {@link https://github.com/evanphx/json-patch} for implementation details.
     */
    json_patch?: any;
}
