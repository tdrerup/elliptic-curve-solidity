import type { Event } from "../events";
import type { Scope } from "../scopes";
import { State } from "../types";
export interface ConstructorOptions {
    scope: Scope;
    state?: State;
}
export interface IBaseController {
    readonly state: State;
    emit<E extends Event>(event: Omit<E, "scope">): E;
}
export declare abstract class BaseController implements IBaseController {
    protected _state: State;
    protected scope: Scope;
    get state(): State;
    constructor(options: ConstructorOptions);
    emit<E extends Event>(event: Omit<E, "scope">): E;
}
