/// <reference types="node" />
import * as Common from "..";
export declare namespace Normalized {
    namespace Sources {
        type Content = AsyncIterable<Buffer>;
        interface Entry extends Common.Sources.Entry {
            path: string;
            source: Source;
        }
        interface Container extends Common.Sources.Container {
            entries: AsyncIterable<Entry>;
        }
        type Source = Content | Container;
    }
    type Source = Sources.Source;
    interface Target extends Common.Target {
        source: Source;
    }
}
export declare const normalize: (target: Common.Target) => Normalized.Target;
