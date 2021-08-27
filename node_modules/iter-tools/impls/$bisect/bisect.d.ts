import { IterableIterator as SyncIterableIterator, Wrappable, IterableIterator } from '../../types/iterable';
declare function bisect<T>(idx: number): (source: Wrappable<T>) => SyncIterableIterator<IterableIterator<T>>;
declare function bisect<T>(predicate: (value: T, i: number) => any): (source: Wrappable<T>) => SyncIterableIterator<IterableIterator<T>>;
declare function bisect<T>(idx: number, source: Wrappable<T>): SyncIterableIterator<IterableIterator<T>>;
declare function bisect<T>(predicate: (value: T, i: number) => any, source: Wrappable<T>): SyncIterableIterator<IterableIterator<T>>;
export { bisect };