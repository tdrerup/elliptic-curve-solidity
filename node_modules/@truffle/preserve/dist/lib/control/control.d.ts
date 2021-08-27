import { Process, HasControls } from "./types";
export interface ControlOptions<R, O extends HasControls> {
    name?: string;
    method: (options: O) => Process<R>;
}
export declare function control<R, O extends HasControls>(controlOptions: ControlOptions<R, O>, methodOptions: Omit<O, "controls">): Process<R>;
export declare const run: <R, O extends HasControls>(controlOptions: ControlOptions<R, O>, methodOptions: Pick<O, Exclude<keyof O, "controls">>) => Promise<R>;
