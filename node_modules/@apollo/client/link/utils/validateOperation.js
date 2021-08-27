import { InvariantError } from 'ts-invariant';
export function validateOperation(operation) {
    var OPERATION_FIELDS = [
        'query',
        'operationName',
        'variables',
        'extensions',
        'context',
    ];
    for (var _i = 0, _a = Object.keys(operation); _i < _a.length; _i++) {
        var key = _a[_i];
        if (OPERATION_FIELDS.indexOf(key) < 0) {
            throw __DEV__ ? new InvariantError("illegal argument: " + key) : new InvariantError(29);
        }
    }
    return operation;
}
//# sourceMappingURL=validateOperation.js.map