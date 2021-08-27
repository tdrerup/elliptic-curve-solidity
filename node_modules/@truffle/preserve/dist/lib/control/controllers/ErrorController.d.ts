import type { Events } from "../events";
import { Process } from "../types";
import { BaseController, ConstructorOptions as BaseConstructorOptions, IBaseController } from "./BaseController";
export declare namespace Options {
    interface Fail {
        cascade?: boolean;
        error?: Error;
    }
    interface Abort {
        cascade?: boolean;
    }
    interface Stop {
    }
}
export interface ConstructorOptions extends BaseConstructorOptions {
    parent?: IErrorController;
}
export interface IErrorController extends IBaseController {
    fail(options: Options.Fail): Process<void, Events.Fail | Events.Abort | Events.Stop>;
    abort(options: Options.Abort): Process<void, Events.Abort | Events.Stop>;
    stop(options?: Options.Stop): Process<void, Events.Stop>;
}
export declare abstract class ErrorController extends BaseController implements IErrorController {
    protected parent?: IErrorController;
    protected children: IErrorController[];
    constructor(options: ConstructorOptions);
    fail({ error, cascade }?: Options.Fail): AsyncGenerator<Events.Fail | Events.Abort | Events.Stop, void, void>;
    abort({ cascade }?: Options.Abort): AsyncGenerator<Events.Abort | Events.Stop, void, void>;
    stop({}?: Options.Stop): AsyncGenerator<Events.Stop, void, void>;
}
