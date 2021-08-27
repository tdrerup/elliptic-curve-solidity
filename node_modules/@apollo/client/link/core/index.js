import { invariant } from "ts-invariant";
import { DEV } from "../../utilities/index.js";
__DEV__ ? invariant("boolean" === typeof DEV, DEV) : invariant("boolean" === typeof DEV, 24);
export { empty } from "./empty.js";
export { from } from "./from.js";
export { split } from "./split.js";
export { concat } from "./concat.js";
export { execute } from "./execute.js";
export { ApolloLink } from "./ApolloLink.js";
export * from "./types.js";
//# sourceMappingURL=index.js.map