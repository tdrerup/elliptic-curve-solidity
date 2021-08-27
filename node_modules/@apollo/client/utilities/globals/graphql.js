import { remove } from 'ts-invariant/process';
import { isType } from 'graphql';
export function removeTemporaryGlobals() {
    isType(null);
    return remove();
}
//# sourceMappingURL=graphql.js.map