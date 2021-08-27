import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';
declare function asyncAppend<T, V>(value: V, source: AsyncWrappable<T>): AsyncIterableIterator<V | T>;
declare function asyncAppend<V>(value: V): <T>(source: AsyncWrappable<T>) => AsyncIterableIterator<V | T>;
export { asyncAppend };