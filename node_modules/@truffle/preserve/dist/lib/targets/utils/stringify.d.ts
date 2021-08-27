import * as Common from "..";
export declare namespace Stringified {
    namespace Sources {
        type Content = string;
        interface Entry extends Common.Sources.Entry {
            path: string;
            source: Source;
        }
        interface Container extends Common.Sources.Container {
            entries: Entry[];
        }
        type Source = Content | Container;
    }
    type Source = Sources.Source;
    interface Target extends Common.Target {
        source: Source;
    }
}
export declare const stringify: (target: Common.Target) => Promise<Stringified.Target>;
