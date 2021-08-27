/**
 * @packageDocumentation
 * @module Utils-Constants
 */
import BN from "bn.js";
export declare const PrivateKeyPrefix: string;
export declare const NodeIDPrefix: string;
export declare const PrimaryAssetAlias: string;
export declare const MainnetAPI: string;
export declare const FujiAPI: string;
export declare const NetworkIDToHRP: object;
export declare const HRPToNetworkID: object;
export declare const NetworkIDToNetworkNames: object;
export declare const NetworkNameToNetworkID: object;
export declare const FallbackHRP: string;
export declare const FallbackNetworkName: string;
export declare const FallbackEVMChainID: number;
export declare const DefaultNetworkID: number;
export declare const PlatformChainID: string;
export declare const PrimaryNetworkID: string;
export declare const XChainAlias: string;
export declare const CChainAlias: string;
export declare const PChainAlias: string;
export declare const XChainVMName: string;
export declare const CChainVMName: string;
export declare const PChainVMName: string;
export declare const DefaultLocalGenesisPrivateKey: string;
export declare const DefaultEVMLocalGenesisPrivateKey: string;
export declare const DefaultEVMLocalGenesisAddress: string;
export declare const mnemonic: string;
export declare const ONEAVAX: BN;
export declare const DECIAVAX: BN;
export declare const CENTIAVAX: BN;
export declare const MILLIAVAX: BN;
export declare const MICROAVAX: BN;
export declare const NANOAVAX: BN;
export declare const WEI: BN;
export declare const GWEI: BN;
export declare const AVAXGWEI: BN;
export declare const AVAXSTAKECAP: BN;
export declare class Defaults {
    static network: {
        0: {
            hrp: any;
            X: object;
            "2vrXWHgGxh5n3YsLHMV16YVVJTpT4z45Fmb4y3bL6si8kLCyg9": object;
            P: object;
            "11111111111111111111111111111111LpoYY": object;
            C: object;
            "2fFZQibQXcd6LTE4rpBPBAkLVXFE91Kit8pgxaBG1mRnh5xqbb": object;
        };
        1: {
            hrp: any;
            X: object;
            "2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM": object;
            P: object;
            "11111111111111111111111111111111LpoYY": object;
            C: object;
            "2q9e4r6Mu3U68nU1fYjgbR6JvwrRx36CohpAX5UQxse55x1Q5": object;
        };
        2: {
            hrp: any;
            X: object;
            "4ktRjsAKxgMr2aEzv9SWmrU7Xk5FniHUrVCX4P1TZSfTLZWFM": object;
            P: object;
            "11111111111111111111111111111111LpoYY": object;
            C: object;
            "2mUYSXfLrDtigwbzj1LxKVsHwELghc5sisoXrzJwLqAAQHF4i": object;
        };
        3: {
            hrp: any;
            X: object;
            rrEWX7gc7D9mwcdrdBxBTdqh1a7WDVsMuadhTZgyXfFcRz45L: object;
            P: object;
            "11111111111111111111111111111111LpoYY": object;
            C: object;
            zJytnh96Pc8rM337bBrtMvJDbEdDNjcXG3WkTNCiLp18ergm9: object;
        };
        4: {
            hrp: any;
            X: object;
            jnUjZSRt16TcRnZzmh5aMhavwVHz3zBrSN8GfFMTQkzUnoBxC: object;
            P: object;
            "11111111111111111111111111111111LpoYY": object;
            C: object;
            saMG5YgNsFxzjz4NMkEkt3bAH6hVxWdZkWcEnGB3Z15pcAmsK: object;
        };
        5: {
            hrp: any;
            X: object;
            "2JVSBoinj9C2J33VntvzYtVJNZdN2NKiwwKjcumHUWEb5DbBrm": object;
            P: object;
            "11111111111111111111111111111111LpoYY": object;
            C: object;
            yH8D7ThNJkxmtkuv2jgBa4P1Rn3Qpr4pPr7QYNfcdoS6k6HWp: object;
        };
        12345: {
            hrp: any;
            X: any;
            "2eNy1mUFdmaxXNj1eQHUe7Np4gju9sJsEtWQ4MX3ToiNKuADed": any;
            P: any;
            "11111111111111111111111111111111LpoYY": any;
            C: any;
            "2CA6j5zYzasynPsFeNoqWkmTCt3VScMvXUZHbfDJ8k3oGzAPtU": any;
        };
    };
}
/**
 * Rules used when merging sets
 */
export declare type MergeRule = "intersection" | "differenceSelf" | "differenceNew" | "symDifference" | "union" | "unionMinusNew" | "unionMinusSelf" | "ERROR";
//# sourceMappingURL=constants.d.ts.map