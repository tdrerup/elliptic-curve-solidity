import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';
declare function asyncEnumerate<T>(iterable: AsyncWrappable<T>): AsyncIterableIterator<[number, T]>;
declare function asyncEnumerate<T>(firstIdx: number, source: AsyncWrappable<T>): AsyncIterableIterator<[number, T]>;
declare function asyncEnumerate(firstIdx: number): <T>(source: AsyncWrappable<T>) => AsyncIterableIterator<[number, T]>;
export { asyncEnumerate };