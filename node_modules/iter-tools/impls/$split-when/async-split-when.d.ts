import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';
declare function asyncSplitWhen<T>(predicate: (value: T, i: number) => any): (source: AsyncWrappable<T>) => AsyncIterableIterator<AsyncIterableIterator<T>>;
declare function asyncSplitWhen<T>(predicate: (value: T, i: number) => any, source: AsyncWrappable<T>): AsyncIterableIterator<AsyncIterableIterator<T>>;
export { asyncSplitWhen };