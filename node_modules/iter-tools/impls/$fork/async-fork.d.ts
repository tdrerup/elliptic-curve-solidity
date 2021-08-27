import { IterableIterator as SyncIterableIterator } from '../../types/iterable';
import { AsyncWrappable, AsyncSingletonIterableIterator } from '../../types/async-iterable';
declare function asyncFork<T>(source: AsyncWrappable<T>): SyncIterableIterator<AsyncSingletonIterableIterator<T>>;
export { asyncFork };