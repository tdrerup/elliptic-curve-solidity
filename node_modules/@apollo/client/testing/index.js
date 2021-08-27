import { invariant } from "ts-invariant";
import { DEV } from "../utilities/index.js";
__DEV__ ? invariant("boolean" === typeof DEV, DEV) : invariant("boolean" === typeof DEV, 42);
export * from "../utilities/testing/index.js";
//# sourceMappingURL=index.js.map