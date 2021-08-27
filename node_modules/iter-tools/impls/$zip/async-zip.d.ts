import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';
declare function asyncZip<T, U>(source1: AsyncWrappable<T>, source2: AsyncWrappable<U>): AsyncIterableIterator<[T, U]>;
declare function asyncZip<T, U, V>(source1: AsyncWrappable<T>, source2: AsyncWrappable<U>, source3: AsyncWrappable<V>): AsyncIterableIterator<[T, U, V]>;
declare function asyncZip<T>(...sources: Array<AsyncWrappable<T>>): AsyncIterableIterator<T[]>;
export { asyncZip };