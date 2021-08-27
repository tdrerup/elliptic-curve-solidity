import { Wrappable } from '../../types/iterable';
declare function find<T, S extends T>(predicate: (value: T, i: number) => value is S): (iterable: Wrappable<T>) => S | undefined;
declare function find<T>(predicate: (value: T, i: number) => boolean): (iterable: Wrappable<T>) => T | undefined;
declare function find<T, S extends T>(predicate: (value: T, i: number) => value is S, iterable: Wrappable<T>): S | undefined;
declare function find<T>(predicate: (value: T, i: number) => boolean, iterable: Wrappable<T>): T | undefined;
export { find };