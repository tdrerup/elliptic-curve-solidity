import { ErrorController, ConstructorOptions as ErrorControllerConstructorOptions, IErrorController } from "./ErrorController";
import type { Events } from "../events";
import { IValueResolutionController, ValueResolutionController } from "./ValueResolutionController";
import { Process } from "../types";
export declare namespace Options {
    interface Begin {
        message?: string;
    }
    interface Update {
        message: string;
    }
    interface Succeed {
        result?: any;
        message?: string;
    }
    interface Declare {
        identifier: string;
        message?: string;
    }
    interface Step {
        identifier?: string;
        message?: string;
    }
}
export interface ConstructorOptions extends ErrorControllerConstructorOptions {
}
export interface IStepsController extends IErrorController {
    begin(options?: Options.Begin): Process<void, Events.Begin>;
    update(options: Options.Update): Process<void, Events.Update>;
    succeed(options?: Options.Succeed): Process<void, Events.Succeed>;
    declare(options: Options.Declare): Process<IValueResolutionController, Events.Declare>;
    step(options: Options.Step): Process<IStepsController, Events.Step>;
}
export declare class StepsController extends ErrorController implements IStepsController {
    constructor(options: ConstructorOptions);
    begin(): AsyncGenerator<Events.Begin, void, unknown>;
    succeed({ result, message }?: Options.Succeed): AsyncGenerator<Events.Succeed, void, unknown>;
    update({ message }: Options.Update): AsyncGenerator<Events.Update, void, unknown>;
    declare({ identifier, message }: Options.Declare): AsyncGenerator<Events.Declare, ValueResolutionController, unknown>;
    step({ identifier, message }: Options.Step): AsyncGenerator<Events.Step, StepsController, unknown>;
}
