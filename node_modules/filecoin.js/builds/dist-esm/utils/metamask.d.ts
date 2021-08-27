import { FilecoinSnapApi } from "@nodefactory/filsnap-types";
import { JsonRpcConnectionOptions } from "../connectors/HttpJsonRpcConnector";
export declare class MetamaskSnapHelper {
    private connection;
    private isInstalled;
    private snap;
    filecoinApi: FilecoinSnapApi | undefined;
    error: string | undefined;
    constructor(connection: JsonRpcConnectionOptions);
    installFilecoinSnap(): Promise<any>;
}
//# sourceMappingURL=metamask.d.ts.map