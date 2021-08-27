import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';
declare function asyncTake<T>(n: number, iterable: AsyncWrappable<T>): AsyncIterableIterator<T>;
declare function asyncTake<T>(n: number): (iterable: AsyncWrappable<T>) => AsyncIterableIterator<T>;
export { asyncTake };