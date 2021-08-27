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
exports.isSnapInstalled = exports.isMetamaskSnapsSupported = exports.hasMetaMask = void 0;
function hasMetaMask() {
    if (!window.ethereum) {
        return false;
    }
    return window.ethereum.isMetaMask;
}
exports.hasMetaMask = hasMetaMask;
function getWalletPlugins() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield window.ethereum.send({
            method: 'wallet_getPlugins',
        });
    });
}
function isMetamaskSnapsSupported() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield getWalletPlugins();
            return true;
        }
        catch (e) {
            return false;
        }
    });
}
exports.isMetamaskSnapsSupported = isMetamaskSnapsSupported;
function isSnapInstalled(pluginOrigin) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return !!Object
                .values(yield getWalletPlugins())
                .find((permission) => permission.permissionName === pluginOrigin);
        }
        catch (e) {
            console.log("Failed to obtain installed plugins", e);
            return false;
        }
    });
}
exports.isSnapInstalled = isSnapInstalled;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsU0FBZ0IsV0FBVztJQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtRQUNwQixPQUFPLEtBQUssQ0FBQztLQUNkO0lBQ0QsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztBQUNwQyxDQUFDO0FBTEQsa0NBS0M7QUFFRCxTQUFlLGdCQUFnQjs7UUFDN0IsT0FBTyxNQUFNLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2hDLE1BQU0sRUFBRSxtQkFBbUI7U0FDNUIsQ0FBZ0QsQ0FBQztJQUNwRCxDQUFDO0NBQUE7QUFFRCxTQUFzQix3QkFBd0I7O1FBQzVDLElBQUk7WUFDRixNQUFNLGdCQUFnQixFQUFFLENBQUM7WUFDekIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7Q0FBQTtBQVBELDREQU9DO0FBRUQsU0FBc0IsZUFBZSxDQUFDLFlBQW9COztRQUN4RCxJQUFJO1lBQ0YsT0FBTyxDQUFDLENBQUMsTUFBTTtpQkFDWixNQUFNLENBQUMsTUFBTSxnQkFBZ0IsRUFBRSxDQUFDO2lCQUNoQyxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEtBQUssWUFBWSxDQUFDLENBQUM7U0FDckU7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0NBQW9DLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDckQsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7Q0FBQTtBQVRELDBDQVNDIn0=