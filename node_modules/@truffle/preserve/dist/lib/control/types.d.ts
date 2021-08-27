import type { StepsController } from "./controllers";
import type { Event } from "./events";
export declare enum State {
    Pending = "pending",
    Active = "active",
    Done = "done",
    Error = "error"
}
export interface HasControls {
    controls: Controls;
}
export declare type Controls = Pick<StepsController, "update" | "declare" | "step">;
export declare type Process<R extends any = any, E extends Event = Event> = AsyncGenerator<E, R, void>;
