import type { Events } from "../events";
import { Process } from "../types";
import { ErrorController, ConstructorOptions as ErrorControllerConstructorOptions, IErrorController } from "./ErrorController";
export declare namespace Options {
    interface Update {
        payload?: string;
    }
    interface Resolve {
        resolution?: any;
        payload?: string;
    }
    interface Extend {
        identifier: string;
        message?: string;
    }
}
export interface ConstructorOptions extends ErrorControllerConstructorOptions {
}
export interface IValueResolutionController extends IErrorController {
    resolve(options: Options.Resolve): Process<void, Events.Resolve>;
    extend(options: Options.Extend): Process<IErrorController, Events.Declare>;
}
export declare class ValueResolutionController extends ErrorController implements IValueResolutionController {
    constructor(options: ConstructorOptions);
    update({ payload }?: Options.Update): AsyncGenerator<Events.Update, void, unknown>;
    resolve({ resolution, payload }?: Options.Resolve): AsyncGenerator<Events.Resolve, void, unknown>;
    extend({ identifier, message }: Options.Extend): AsyncGenerator<Events.Declare, ValueResolutionController, unknown>;
}
