import { invariant } from "ts-invariant";
import { DEV } from "../utilities/index.js";
__DEV__ ? invariant("boolean" === typeof DEV, DEV) : invariant("boolean" === typeof DEV, 1);
export { ApolloCache } from "./core/cache.js";
export { Cache } from "./core/types/Cache.js";
export { MissingFieldError } from "./core/types/common.js";
export { isReference, makeReference, } from "../utilities/index.js";
export { EntityStore } from "./inmemory/entityStore.js";
export { fieldNameFromStoreName } from "./inmemory/helpers.js";
export { InMemoryCache, } from "./inmemory/inMemoryCache.js";
export { makeVar, cacheSlot, } from "./inmemory/reactiveVars.js";
export { defaultDataIdFromObject, Policies, } from "./inmemory/policies.js";
export { canonicalStringify, } from "./inmemory/object-canon.js";
export * from "./inmemory/types.js";
//# sourceMappingURL=index.js.map