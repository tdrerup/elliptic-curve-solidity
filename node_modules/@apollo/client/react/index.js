import { invariant } from "ts-invariant";
import { DEV } from "../utilities/index.js";
__DEV__ ? invariant("boolean" === typeof DEV, DEV) : invariant("boolean" === typeof DEV, 37);
export { ApolloProvider, ApolloConsumer, getApolloContext, resetApolloContext } from "./context/index.js";
export * from "./hooks/index.js";
export { DocumentType, operationName, parser } from "./parser/index.js";
export * from "./types/types.js";
//# sourceMappingURL=index.js.map