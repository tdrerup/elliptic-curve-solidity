import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';
import { IterableIterator as SyncIterableIterator } from '../../types/iterable';
declare function asyncWindow<T>(size: number, source: AsyncWrappable<T>): AsyncIterableIterator<SyncIterableIterator<T>>;
declare function asyncWindow(size: number): <T>(source: AsyncWrappable<T>) => AsyncIterableIterator<SyncIterableIterator<T>>;
export { asyncWindow };