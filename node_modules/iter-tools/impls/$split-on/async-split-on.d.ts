import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';
declare function asyncSplitOn(same: (a: any, b: any) => boolean, separatorValue: any): <T>(source: AsyncWrappable<T>) => AsyncIterableIterator<AsyncIterableIterator<T>>;
declare function asyncSplitOn<T>(same: (a: any, b: any) => boolean, separatorValue: any, source: AsyncWrappable<T>): AsyncIterableIterator<AsyncIterableIterator<T>>;
declare function asyncSplitOn<T>(separatorValue: any, source: AsyncWrappable<T>): AsyncIterableIterator<AsyncIterableIterator<T>>;
export { asyncSplitOn };