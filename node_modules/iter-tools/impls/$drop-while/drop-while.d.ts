import { Wrappable, IterableIterator } from '../../types/iterable';
declare function dropWhile<T>(predicate: (value: T, i: number) => boolean): (source: Wrappable<T>) => IterableIterator<T>;
declare function dropWhile<T>(predicate: (value: T, i: number) => boolean, source: Wrappable<T>): IterableIterator<T>;
export { dropWhile };