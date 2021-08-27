import { ObservableQuery } from '../../core';
import { QueryResult, QueryDataOptions, QueryTuple } from '../types/types';
import { OperationData } from './OperationData';
export declare class QueryData<TData, TVariables> extends OperationData<QueryDataOptions<TData, TVariables>> {
    onNewData: () => void;
    currentObservable?: ObservableQuery<TData, TVariables>;
    private currentSubscription?;
    private runLazy;
    private lazyOptions?;
    private previous;
    constructor({ options, context, onNewData }: {
        options: QueryDataOptions<TData, TVariables>;
        context: any;
        onNewData: () => void;
    });
    execute(): QueryResult<TData, TVariables>;
    executeLazy(): QueryTuple<TData, TVariables>;
    fetchData(): Promise<void> | boolean;
    afterExecute({ lazy }?: {
        lazy?: boolean;
    }): any;
    cleanup(): void;
    getOptions(): import("../types/types").CommonOptions<QueryDataOptions<TData, TVariables>>;
    ssrInitiated(): any;
    private runLazyQuery;
    private getExecuteSsrResult;
    private prepareObservableQueryOptions;
    private initializeObservableQuery;
    private updateObservableQuery;
    private startQuerySubscription;
    private resubscribeToQuery;
    private getExecuteResult;
    private handleErrorOrCompleted;
    private removeQuerySubscription;
    private removeObservable;
    private obsRefetch;
    private obsFetchMore;
    private obsUpdateQuery;
    private obsStartPolling;
    private obsStopPolling;
    private obsSubscribeToMore;
    private observableQueryFields;
}
//# sourceMappingURL=QueryData.d.ts.map