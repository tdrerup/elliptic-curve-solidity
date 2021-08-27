import { FilecoinSnapApi } from "@nodefactory/filsnap-types";
export declare class MetamaskFilecoinSnap {
    protected readonly pluginOrigin: string;
    protected readonly snapId: string;
    constructor(pluginOrigin: string);
    getFilecoinSnapApi: () => Promise<FilecoinSnapApi>;
}
