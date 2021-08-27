import { IterableIterator as SyncIterableIterator } from '../../types/iterable';
import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';
declare function asyncSplit<T>(source: AsyncWrappable<T>): AsyncIterableIterator<SyncIterableIterator<T>>;
export { asyncSplit };