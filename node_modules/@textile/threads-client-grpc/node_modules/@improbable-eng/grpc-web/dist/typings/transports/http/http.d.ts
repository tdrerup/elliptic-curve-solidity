import { TransportFactory } from "../Transport";
export interface CrossBrowserHttpTransportInit {
    withCredentials?: boolean;
}
export declare function CrossBrowserHttpTransport(init: CrossBrowserHttpTransportInit): TransportFactory;
