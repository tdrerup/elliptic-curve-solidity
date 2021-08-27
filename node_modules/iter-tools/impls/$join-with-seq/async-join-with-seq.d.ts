import { Wrappable as SyncWrappable } from '../../types/iterable';
import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';
declare function asyncJoinWithSeq<W, T>(seq: SyncWrappable<W>, source: AsyncWrappable<AsyncWrappable<T>>): AsyncIterableIterator<T | W>;
declare function asyncJoinWithSeq<W>(seq: SyncWrappable<W>): <T>(source: AsyncWrappable<AsyncWrappable<T>>) => AsyncIterableIterator<T | W>;
export { asyncJoinWithSeq };