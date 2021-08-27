"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateGasForMessage = exports.getMessages = exports.sendMessage = exports.signMessageRaw = exports.signMessage = exports.configure = exports.exportPrivateKey = exports.getBalance = exports.getPublicKey = exports.getAddress = void 0;
function sendSnapMethod(request, snapId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield window.ethereum.send({
            method: snapId,
            params: [
                request
            ]
        });
    });
}
function getAddress() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield sendSnapMethod({ method: "getAddress" }, this.snapId);
    });
}
exports.getAddress = getAddress;
function getPublicKey() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield sendSnapMethod({ method: "getPublicKey" }, this.snapId);
    });
}
exports.getPublicKey = getPublicKey;
function getBalance(denomination) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield sendSnapMethod({ method: "getBalance", params: { denomination: denomination } }, this.snapId);
    });
}
exports.getBalance = getBalance;
function exportPrivateKey() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield sendSnapMethod({ method: "exportPrivateKey" }, this.snapId);
    });
}
exports.exportPrivateKey = exportPrivateKey;
function configure(configuration) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield sendSnapMethod({ method: "configure", params: { configuration: configuration } }, this.snapId);
    });
}
exports.configure = configure;
function signMessage(message) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield sendSnapMethod({ method: "signMessage", params: { message: message } }, this.snapId);
    });
}
exports.signMessage = signMessage;
function signMessageRaw(rawMessage) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield sendSnapMethod({ method: "signMessageRaw", params: { message: rawMessage } }, this.snapId);
    });
}
exports.signMessageRaw = signMessageRaw;
function sendMessage(signedMessage) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield sendSnapMethod({ method: "sendMessage", params: { signedMessage: signedMessage } }, this.snapId);
    });
}
exports.sendMessage = sendMessage;
function getMessages() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield sendSnapMethod({ method: "getMessages" }, this.snapId);
    });
}
exports.getMessages = getMessages;
function calculateGasForMessage(message) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield sendSnapMethod({ method: "getGasForMessage", params: { message: message } }, this.snapId);
    });
}
exports.calculateGasForMessage = calculateGasForMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0aG9kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRob2RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVNBLFNBQWUsY0FBYyxDQUFJLE9BQW1DLEVBQUUsTUFBYzs7UUFDbEYsT0FBTyxNQUFNLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2hDLE1BQU0sRUFBRSxNQUFNO1lBQ2QsTUFBTSxFQUFFO2dCQUNOLE9BQU87YUFDUjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FBQTtBQUVELFNBQXNCLFVBQVU7O1FBQzlCLE9BQU8sTUFBTSxjQUFjLENBQUMsRUFBQyxNQUFNLEVBQUUsWUFBWSxFQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25FLENBQUM7Q0FBQTtBQUZELGdDQUVDO0FBRUQsU0FBc0IsWUFBWTs7UUFDaEMsT0FBTyxNQUFNLGNBQWMsQ0FBQyxFQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckUsQ0FBQztDQUFBO0FBRkQsb0NBRUM7QUFFRCxTQUFzQixVQUFVLENBQTZCLFlBQWtDOztRQUM3RixPQUFPLE1BQU0sY0FBYyxDQUFDLEVBQUMsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsRUFBQyxZQUFZLEVBQUUsWUFBWSxFQUFDLEVBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekcsQ0FBQztDQUFBO0FBRkQsZ0NBRUM7QUFFRCxTQUFzQixnQkFBZ0I7O1FBQ3BDLE9BQU8sTUFBTSxjQUFjLENBQUMsRUFBQyxNQUFNLEVBQUUsa0JBQWtCLEVBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekUsQ0FBQztDQUFBO0FBRkQsNENBRUM7QUFFRCxTQUFzQixTQUFTLENBQTZCLGFBQXlCOztRQUNuRixPQUFPLE1BQU0sY0FBYyxDQUFDLEVBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsRUFBQyxhQUFhLEVBQUUsYUFBYSxFQUFDLEVBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUcsQ0FBQztDQUFBO0FBRkQsOEJBRUM7QUFFRCxTQUFzQixXQUFXLENBQTZCLE9BQXVCOztRQUNuRixPQUFPLE1BQU0sY0FBYyxDQUFDLEVBQUMsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLEVBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEcsQ0FBQztDQUFBO0FBRkQsa0NBRUM7QUFFRCxTQUFzQixjQUFjLENBQTZCLFVBQWtCOztRQUNqRixPQUFPLE1BQU0sY0FBYyxDQUFDLEVBQUMsTUFBTSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUMsRUFBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0RyxDQUFDO0NBQUE7QUFGRCx3Q0FFQztBQUVELFNBQXNCLFdBQVcsQ0FBNkIsYUFBNEI7O1FBQ3hGLE9BQU8sTUFBTSxjQUFjLENBQUMsRUFBQyxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxFQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUMsRUFBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1RyxDQUFDO0NBQUE7QUFGRCxrQ0FFQztBQUVELFNBQXNCLFdBQVc7O1FBQy9CLE9BQU8sTUFBTSxjQUFjLENBQUMsRUFBQyxNQUFNLEVBQUUsYUFBYSxFQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Q0FBQTtBQUZELGtDQUVDO0FBRUQsU0FBc0Isc0JBQXNCLENBQ2QsT0FBdUI7O1FBRW5ELE9BQU8sTUFBTSxjQUFjLENBQUMsRUFBQyxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxFQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JHLENBQUM7Q0FBQTtBQUpELHdEQUlDIn0=