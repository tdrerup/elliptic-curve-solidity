import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';
declare function asyncInterposeSeq<V>(seq: AsyncWrappable<V>): <T>(source: AsyncWrappable<T>) => AsyncIterableIterator<T | V>;
declare function asyncInterposeSeq<V, T>(seq: AsyncWrappable<V>, source: AsyncWrappable<T>): AsyncIterableIterator<T | V>;
export { asyncInterposeSeq };