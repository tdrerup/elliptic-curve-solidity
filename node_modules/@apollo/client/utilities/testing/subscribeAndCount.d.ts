import { ObservableQuery } from '../../core/ObservableQuery';
import { ApolloQueryResult, OperationVariables } from '../../core/types';
import { ObservableSubscription } from '../../utilities/observables/Observable';
export default function subscribeAndCount<TData, TVariables = OperationVariables>(reject: (reason: any) => any, observable: ObservableQuery<TData, TVariables>, cb: (handleCount: number, result: ApolloQueryResult<TData>) => any): ObservableSubscription;
//# sourceMappingURL=subscribeAndCount.d.ts.map