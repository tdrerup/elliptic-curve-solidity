import { Wrappable as SyncWrappable, Wrappable, IterableIterator } from '../../types/iterable';
declare function joinWithSeq<W, T>(seq: SyncWrappable<W>, source: Wrappable<Wrappable<T>>): IterableIterator<T | W>;
declare function joinWithSeq<W>(seq: SyncWrappable<W>): <T>(source: Wrappable<Wrappable<T>>) => IterableIterator<T | W>;
export { joinWithSeq };