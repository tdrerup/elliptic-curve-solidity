import * as Preserve from "@truffle/preserve";
import { ExecuteResult } from "../../lib";
export declare const preserve: (inputs: {
    path: string;
}, settings?: {
    verbose?: boolean;
}) => Promise<ExecuteResult>;
export declare const preserveWithEvents: (inputs: {
    path: string;
}, settings?: {
    verbose?: boolean;
}) => Promise<Preserve.Control.Event[]>;
