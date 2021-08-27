import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';
declare function asyncDrop<T>(n: number, iterable: AsyncWrappable<T>): AsyncIterableIterator<T>;
declare function asyncDrop<T>(n: number): (iterable: AsyncWrappable<T>) => AsyncIterableIterator<T>;
export { asyncDrop };