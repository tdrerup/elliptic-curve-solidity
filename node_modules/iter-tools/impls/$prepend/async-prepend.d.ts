import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';
declare function asyncPrepend<T, V>(value: V, source: AsyncWrappable<T>): AsyncIterableIterator<V | T>;
declare function asyncPrepend<V>(value: V): <T>(source: AsyncWrappable<T>) => AsyncIterableIterator<V | T>;
export { asyncPrepend };