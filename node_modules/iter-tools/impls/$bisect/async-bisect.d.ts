import { IterableIterator as SyncIterableIterator } from '../../types/iterable';
import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';
declare function asyncBisect<T>(idx: number): (source: AsyncWrappable<T>) => SyncIterableIterator<AsyncIterableIterator<T>>;
declare function asyncBisect<T>(predicate: (value: T, i: number) => any): (source: AsyncWrappable<T>) => SyncIterableIterator<AsyncIterableIterator<T>>;
declare function asyncBisect<T>(idx: number, source: AsyncWrappable<T>): SyncIterableIterator<AsyncIterableIterator<T>>;
declare function asyncBisect<T>(predicate: (value: T, i: number) => any, source: AsyncWrappable<T>): SyncIterableIterator<AsyncIterableIterator<T>>;
export { asyncBisect };