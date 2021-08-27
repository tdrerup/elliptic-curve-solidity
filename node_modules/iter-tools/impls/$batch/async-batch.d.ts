import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';
declare function asyncBatch(size: number): <T>(source: AsyncWrappable<T>) => AsyncIterableIterator<T[]>;
declare function asyncBatch<T>(size: number, source: AsyncWrappable<T>): AsyncIterableIterator<T[]>;
export { asyncBatch };