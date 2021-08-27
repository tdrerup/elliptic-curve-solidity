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
exports.enableFilecoinSnap = void 0;
const utils_1 = require("./utils");
const snap_1 = require("./snap");
const defaultSnapOrigin = "https://bafybeiaohcwssw43cec54rr23jvxkfki2tttywyvvrru6t4gejq6mlcmhy.ipfs.infura-ipfs.io/";
const defaultSnapId = `wallet_plugin_${defaultSnapOrigin}`;
var utils_2 = require("./utils");
Object.defineProperty(exports, "hasMetaMask", { enumerable: true, get: function () { return utils_2.hasMetaMask; } });
Object.defineProperty(exports, "isMetamaskSnapsSupported", { enumerable: true, get: function () { return utils_2.isMetamaskSnapsSupported; } });
/**
 * Install and enable Filecoin snap
 *
 * Checks for existence of Metamask and version compatibility with snaps before installation.
 *
 * Provided snap configuration must define at least network property so predefined configuration can be selected.
 * All other properties are optional, and if present will overwrite predefined property.
 *
 * @param config - SnapConfig
 * @param pluginOrigin
 *
 * @return MetamaskFilecoinSnap - adapter object that exposes snap API
 */
function enableFilecoinSnap(config, pluginOrigin) {
    return __awaiter(this, void 0, void 0, function* () {
        let snapId = defaultSnapId;
        if (pluginOrigin) {
            snapId = `wallet_plugin_${pluginOrigin}`;
        }
        // check all conditions
        if (!utils_1.hasMetaMask()) {
            throw new Error("Metamask is not installed");
        }
        if (!(yield utils_1.isMetamaskSnapsSupported())) {
            throw new Error("Current Metamask version doesn't support snaps");
        }
        if (!config.network) {
            throw new Error("Configuration must at least define network type");
        }
        // enable snap
        if (!(yield utils_1.isSnapInstalled(snapId))) {
            yield window.ethereum.send({
                method: "wallet_enable",
                params: [{
                        [snapId]: {}
                    }]
            });
        }
        // create snap describer
        const snap = new snap_1.MetamaskFilecoinSnap(pluginOrigin || defaultSnapOrigin);
        // set initial configuration
        yield (yield snap.getFilecoinSnapApi()).configure(config);
        // return snap object
        return snap;
    });
}
exports.enableFilecoinSnap = enableFilecoinSnap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQStFO0FBQy9FLGlDQUFzRDtBQUd0RCxNQUFNLGlCQUFpQixHQUFHLDBGQUEwRixDQUFDO0FBQ3JILE1BQU0sYUFBYSxHQUFHLGlCQUFpQixpQkFBaUIsRUFBRSxDQUFDO0FBSTNELGlDQUE4RDtBQUF0RCxvR0FBQSxXQUFXLE9BQUE7QUFBRSxpSEFBQSx3QkFBd0IsT0FBQTtBQUU3Qzs7Ozs7Ozs7Ozs7O0dBWUc7QUFDSCxTQUFzQixrQkFBa0IsQ0FDdEMsTUFBMkIsRUFBRSxZQUFxQjs7UUFHbEQsSUFBSSxNQUFNLEdBQUcsYUFBYSxDQUFDO1FBQzNCLElBQUksWUFBWSxFQUFFO1lBQ2hCLE1BQU0sR0FBRyxpQkFBaUIsWUFBWSxFQUFFLENBQUM7U0FDMUM7UUFFRCx1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLG1CQUFXLEVBQUUsRUFBRTtZQUNsQixNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFJLENBQUMsQ0FBQSxNQUFNLGdDQUF3QixFQUFFLENBQUEsRUFBRTtZQUNyQyxNQUFNLElBQUksS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7U0FDbkU7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUNuQixNQUFNLElBQUksS0FBSyxDQUFDLGlEQUFpRCxDQUFDLENBQUM7U0FDcEU7UUFFRCxjQUFjO1FBQ2QsSUFBSSxDQUFDLENBQUMsTUFBTSx1QkFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUU7WUFDcEMsTUFBTSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFDekIsTUFBTSxFQUFFLGVBQWU7Z0JBQ3ZCLE1BQU0sRUFBRSxDQUFDO3dCQUNQLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtxQkFDYixDQUFDO2FBQ0gsQ0FBQyxDQUFDO1NBQ0o7UUFFRCx3QkFBd0I7UUFDeEIsTUFBTSxJQUFJLEdBQUcsSUFBSSwyQkFBTSxDQUNyQixZQUFZLElBQUksaUJBQWlCLENBQ2xDLENBQUM7UUFDRiw0QkFBNEI7UUFDNUIsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUQscUJBQXFCO1FBQ3JCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUFBO0FBdENELGdEQXNDQyJ9