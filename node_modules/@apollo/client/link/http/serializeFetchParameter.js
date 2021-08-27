import { InvariantError } from 'ts-invariant';
export var serializeFetchParameter = function (p, label) {
    var serialized;
    try {
        serialized = JSON.stringify(p);
    }
    catch (e) {
        var parseError = __DEV__ ? new InvariantError("Network request failed. " + label + " is not serializable: " + e.message) : new InvariantError(26);
        parseError.parseError = e;
        throw parseError;
    }
    return serialized;
};
//# sourceMappingURL=serializeFetchParameter.js.map