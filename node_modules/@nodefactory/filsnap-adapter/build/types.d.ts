import { SnapRpcMethodRequest } from "@nodefactory/filsnap-types";
declare global {
    interface Window {
        ethereum: {
            isMetaMask: boolean;
            send: <T>(request: SnapRpcMethodRequest | {
                method: string;
                params?: any[];
            }) => Promise<T>;
            on: (eventName: unknown, callback: unknown) => unknown;
        };
    }
}
