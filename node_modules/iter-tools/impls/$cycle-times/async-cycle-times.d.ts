import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';
declare function asyncCycleTimes<T>(n: number, source: AsyncWrappable<T>): AsyncIterableIterator<T>;
declare function asyncCycleTimes<T>(n: number): (source: AsyncWrappable<T>) => AsyncIterableIterator<T>;
export { asyncCycleTimes };