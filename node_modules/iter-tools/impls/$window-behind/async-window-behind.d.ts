import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';
import { IterableIterator as SyncIterableIterator } from '../../types/iterable';
declare function asyncWindowBehind<T, Filler = undefined>(opts: {
  readonly filler?: Filler;
}, size: number, source: AsyncWrappable<T>): AsyncIterableIterator<SyncIterableIterator<T | Filler>>;
declare function asyncWindowBehind<T>(size: number, source: AsyncWrappable<T>): AsyncIterableIterator<SyncIterableIterator<T | undefined>>;
declare function asyncWindowBehind(opts: {
  readonly filler: any;
}, size: number): <T>(source: AsyncWrappable<T>) => AsyncIterableIterator<SyncIterableIterator<T>>;
declare function asyncWindowBehind(size: number): <T>(source: AsyncWrappable<T>) => AsyncIterableIterator<SyncIterableIterator<T | undefined>>;
export { asyncWindowBehind };