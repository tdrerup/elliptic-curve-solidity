import { Wrappable, IterableIterator } from '../../types/iterable';
declare function filter<T, S extends T>(predicate: (value: T, i: number) => value is S): (source: Wrappable<T>) => IterableIterator<S>;
declare function filter<T>(predicate: (value: T, i: number) => boolean): (source: Wrappable<T>) => IterableIterator<T>;
declare function filter<T, S extends T>(predicate: (value: T, i: number) => value is S, source: Wrappable<T>): IterableIterator<S>;
declare function filter<T>(predicate: (value: T, i: number) => boolean, source: Wrappable<T>): IterableIterator<T>;
export { filter };