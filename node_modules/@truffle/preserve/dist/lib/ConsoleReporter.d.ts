/// <reference types="node" />
import * as Control from "./control";
export interface ConsoleReporterConstructorOptions {
    console: Console;
}
export declare class ConsoleReporter {
    private spinners;
    private console;
    constructor(options: ConsoleReporterConstructorOptions);
    report(events: AsyncIterable<Control.Event>): Promise<void>;
    private fail;
    private abort;
    private stop;
    private begin;
    private succeed;
    private step;
    private declare;
    private resolve;
    private update;
}
