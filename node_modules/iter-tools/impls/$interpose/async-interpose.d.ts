import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';
declare function asyncInterpose<V>(value: V): <T>(source: AsyncWrappable<T>) => AsyncIterableIterator<T | V>;
declare function asyncInterpose<V, T>(value: V, source: AsyncWrappable<T>): AsyncIterableIterator<T | V>;
export { asyncInterpose };