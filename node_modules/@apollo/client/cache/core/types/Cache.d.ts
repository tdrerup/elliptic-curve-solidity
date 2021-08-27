import { DataProxy } from './DataProxy';
import { Modifier, Modifiers } from './common';
import { ApolloCache } from '../cache';
export declare namespace Cache {
    type WatchCallback = (diff: Cache.DiffResult<any>, lastDiff?: Cache.DiffResult<any>) => void;
    interface ReadOptions<TVariables = any, TData = any> extends DataProxy.Query<TVariables, TData> {
        rootId?: string;
        previousResult?: any;
        optimistic: boolean;
        returnPartialData?: boolean;
        canonizeResults?: boolean;
    }
    interface WriteOptions<TResult = any, TVariables = any> extends Omit<DataProxy.Query<TVariables, TResult>, "id">, Omit<DataProxy.WriteOptions<TResult>, "data"> {
        dataId?: string;
        result: TResult;
    }
    interface DiffOptions extends ReadOptions {
    }
    interface WatchOptions<Watcher extends object = Record<string, any>> extends ReadOptions {
        watcher?: Watcher;
        immediate?: boolean;
        callback: WatchCallback;
        lastDiff?: DiffResult<any>;
    }
    interface EvictOptions {
        id?: string;
        fieldName?: string;
        args?: Record<string, any>;
        broadcast?: boolean;
    }
    interface ModifyOptions {
        id?: string;
        fields: Modifiers | Modifier<any>;
        optimistic?: boolean;
        broadcast?: boolean;
    }
    interface BatchOptions<C extends ApolloCache<any>> {
        update(cache: C): void;
        optimistic: string | boolean;
        removeOptimistic?: string;
        onWatchUpdated?: (this: C, watch: Cache.WatchOptions, diff: Cache.DiffResult<any>, lastDiff: Cache.DiffResult<any> | undefined) => any;
    }
    export import DiffResult = DataProxy.DiffResult;
    export import ReadQueryOptions = DataProxy.ReadQueryOptions;
    export import ReadFragmentOptions = DataProxy.ReadFragmentOptions;
    export import WriteQueryOptions = DataProxy.WriteQueryOptions;
    export import WriteFragmentOptions = DataProxy.WriteFragmentOptions;
    export import Fragment = DataProxy.Fragment;
}
//# sourceMappingURL=Cache.d.ts.map