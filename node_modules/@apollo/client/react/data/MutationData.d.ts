import { MutationDataOptions, MutationTuple, MutationResult } from '../types/types';
import { OperationData } from './OperationData';
import { ApolloCache, OperationVariables, DefaultContext } from '../../core';
declare type MutationResultWithoutClient<TData = any> = Omit<MutationResult<TData>, 'client'>;
export declare class MutationData<TData = any, TVariables = OperationVariables, TContext = DefaultContext, TCache extends ApolloCache<any> = ApolloCache<any>> extends OperationData<MutationDataOptions<TData, TVariables, TContext, TCache>> {
    private mostRecentMutationId;
    private result;
    private previousResult?;
    private setResult;
    constructor({ options, context, result, setResult }: {
        options: MutationDataOptions<TData, TVariables, TContext, TCache>;
        context: any;
        result: MutationResultWithoutClient<TData>;
        setResult: (result: MutationResultWithoutClient<TData>) => any;
    });
    execute(result: MutationResultWithoutClient<TData>): MutationTuple<TData, TVariables, TContext, TCache>;
    afterExecute(): any;
    cleanup(): void;
    private runMutation;
    private mutate;
    private onMutationStart;
    private onMutationCompleted;
    private onMutationError;
    private generateNewMutationId;
    private isMostRecentMutation;
    private updateResult;
}
export {};
//# sourceMappingURL=MutationData.d.ts.map