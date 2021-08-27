import { MetamaskFilecoinSnap as MFSnap } from "./snap";
import { SnapConfig } from "@nodefactory/filsnap-types";
export declare type MetamaskFilecoinSnap = MFSnap;
export { hasMetaMask, isMetamaskSnapsSupported } from "./utils";
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
export declare function enableFilecoinSnap(config: Partial<SnapConfig>, pluginOrigin?: string): Promise<MetamaskFilecoinSnap>;
