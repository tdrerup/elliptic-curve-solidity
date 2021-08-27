import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';
import { IterableIterator as SyncIterableIterator } from '../../types/iterable';
declare function asyncWindowAhead<T>(opts: {
  useFiller: false;
  readonly filler?: any;
}, size: number, source: AsyncWrappable<T>): AsyncIterableIterator<SyncIterableIterator<T>>;
declare function asyncWindowAhead<T, Filler = undefined>(opts: {
  useFiller?: boolean;
  readonly filler?: Filler;
}, size: number, source: AsyncWrappable<T>): AsyncIterableIterator<SyncIterableIterator<T | Filler>>;
declare function asyncWindowAhead<T>(size: number, source: AsyncWrappable<T>): AsyncIterableIterator<SyncIterableIterator<T | undefined>>;
declare function asyncWindowAhead(opts: {
  useFiller: false;
  readonly filler?: any;
}, size: number): <T>(source: AsyncWrappable<T>) => AsyncIterableIterator<SyncIterableIterator<T>>;
declare function asyncWindowAhead<Filler = undefined>(opts: {
  useFiller?: boolean;
  readonly filler?: Filler;
}, size: number): <T>(source: AsyncWrappable<T>) => AsyncIterableIterator<SyncIterableIterator<T | Filler>>;
declare function asyncWindowAhead(size: number): <T>(source: AsyncWrappable<T>) => AsyncIterableIterator<SyncIterableIterator<T | undefined>>;
export { asyncWindowAhead };