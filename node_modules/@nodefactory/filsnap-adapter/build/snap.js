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
exports.MetamaskFilecoinSnap = void 0;
const methods_1 = require("./methods");
class MetamaskFilecoinSnap {
    constructor(pluginOrigin) {
        this.getFilecoinSnapApi = () => __awaiter(this, void 0, void 0, function* () {
            return {
                calculateGasForMessage: methods_1.calculateGasForMessage.bind(this),
                configure: methods_1.configure.bind(this),
                exportPrivateKey: methods_1.exportPrivateKey.bind(this),
                getAddress: methods_1.getAddress.bind(this),
                getBalance: methods_1.getBalance.bind(this),
                getMessages: methods_1.getMessages.bind(this),
                getPublicKey: methods_1.getPublicKey.bind(this),
                sendMessage: methods_1.sendMessage.bind(this),
                signMessage: methods_1.signMessage.bind(this),
                signMessageRaw: methods_1.signMessageRaw.bind(this),
            };
        });
        this.pluginOrigin = pluginOrigin;
        this.snapId = `wallet_plugin_${this.pluginOrigin}`;
    }
}
exports.MetamaskFilecoinSnap = MetamaskFilecoinSnap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9zbmFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBLHVDQVNtQjtBQUVuQixNQUFhLG9CQUFvQjtJQU0vQixZQUFtQixZQUFvQjtRQUtoQyx1QkFBa0IsR0FBRyxHQUFtQyxFQUFFO1lBQy9ELE9BQU87Z0JBQ0wsc0JBQXNCLEVBQUUsZ0NBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDekQsU0FBUyxFQUFFLG1CQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDL0IsZ0JBQWdCLEVBQUUsMEJBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDN0MsVUFBVSxFQUFFLG9CQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDakMsVUFBVSxFQUFFLG9CQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDakMsV0FBVyxFQUFFLHFCQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDbkMsWUFBWSxFQUFFLHNCQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDckMsV0FBVyxFQUFFLHFCQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDbkMsV0FBVyxFQUFFLHFCQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDbkMsY0FBYyxFQUFFLHdCQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUMxQyxDQUFDO1FBQ0osQ0FBQyxDQUFBLENBQUM7UUFqQkEsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxpQkFBaUIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JELENBQUM7Q0FlRTtBQXhCTCxvREF3QksifQ==