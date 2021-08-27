import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';
declare function asyncSplitOnAny(same: (a: any, b: any) => boolean, separatorValues: any): <T>(source: AsyncWrappable<T>) => AsyncIterableIterator<AsyncIterableIterator<T>>;
declare function asyncSplitOnAny<T>(same: (a: any, b: any) => boolean, separatorValues: any, source: AsyncWrappable<T>): AsyncIterableIterator<AsyncIterableIterator<T>>;
declare function asyncSplitOnAny<T>(separatorValues: any, source: AsyncWrappable<T>): AsyncIterableIterator<AsyncIterableIterator<T>>;
export { asyncSplitOnAny };