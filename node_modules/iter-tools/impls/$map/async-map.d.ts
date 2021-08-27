import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';
declare function asyncMap<O, T>(func: (value: T, i: number) => O | Promise<O>): (source: AsyncWrappable<T>) => AsyncIterableIterator<O>;
declare function asyncMap<O, T>(func: (value: T, i: number) => O | Promise<O>, source: AsyncWrappable<T>): AsyncIterableIterator<O>;
export { asyncMap };