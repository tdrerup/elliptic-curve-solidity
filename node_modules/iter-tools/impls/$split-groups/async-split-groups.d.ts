import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';
declare function asyncSplitGroups<T>(source: AsyncWrappable<T>): AsyncIterableIterator<[T, AsyncIterableIterator<T>]>;
declare function asyncSplitGroups<K, T>(key: (value: T, i: number) => K | Promise<K>): (source: AsyncWrappable<T>) => AsyncIterableIterator<[K, AsyncIterableIterator<T>]>;
declare function asyncSplitGroups<K, T>(key: (value: T, i: number) => K | Promise<K>, source: AsyncWrappable<T>): AsyncIterableIterator<[K, AsyncIterableIterator<T>]>;
export { asyncSplitGroups };