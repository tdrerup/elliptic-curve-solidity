import { Wrappable, IterableIterator } from '../../types/iterable';
declare function takeWhile<T>(predicate: (value: T, i: number) => boolean): (source: Wrappable<T>) => IterableIterator<T>;
declare function takeWhile<T>(predicate: (value: T, i: number) => boolean, source: Wrappable<T>): IterableIterator<T>;
export { takeWhile };