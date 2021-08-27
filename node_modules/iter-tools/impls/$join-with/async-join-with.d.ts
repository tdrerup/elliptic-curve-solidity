import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';
declare function asyncJoinWith<W, T>(separator: W, source: AsyncWrappable<AsyncWrappable<T>>): AsyncIterableIterator<T | W>;
declare function asyncJoinWith<W>(separator: W): <T>(source: AsyncWrappable<AsyncWrappable<T>>) => AsyncIterableIterator<T | W>;
export { asyncJoinWith };