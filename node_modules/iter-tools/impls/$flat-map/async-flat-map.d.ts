import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';
declare function asyncFlatMap<O, T>(func: (value: T, i: number) => AsyncWrappable<O> | Promise<AsyncWrappable<O>>): (source: AsyncWrappable<T>) => AsyncIterableIterator<O>;
declare function asyncFlatMap<O, T>(func: (value: T, i: number) => AsyncWrappable<O> | Promise<AsyncWrappable<O>>, source: AsyncWrappable<T>): AsyncIterableIterator<O>;
export { asyncFlatMap };