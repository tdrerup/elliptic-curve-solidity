import type { Scope } from "./scopes";
export declare type EventName = "fail" | "abort" | "stop" | "begin" | "succeed" | "step" | "declare" | "resolve" | "update";
export interface Event {
    type: EventName;
    scope: Scope;
}
export declare namespace Events {
    interface Fail extends Event {
        type: "fail";
        error: Error;
    }
    interface Abort extends Event {
        type: "abort";
    }
    interface Stop extends Event {
        type: "stop";
    }
    interface Begin extends Event {
        type: "begin";
        message?: string;
    }
    interface Succeed extends Event {
        type: "succeed";
        result?: any;
        message?: string;
    }
    interface Step extends Event {
        type: "step";
        message?: string;
    }
    interface Declare extends Event {
        type: "declare";
        message: string;
    }
    interface Resolve extends Event {
        type: "resolve";
        resolution?: any;
        payload?: string;
    }
    interface Update extends Event {
        type: "update";
        payload?: string;
        message?: string;
    }
}
