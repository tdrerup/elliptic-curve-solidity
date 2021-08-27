import { Wrappable } from '../../types/iterable';
declare function findOr<N, T, S extends T>(notFoundValue: N, predicate: (value: T, i: number) => value is S): (iterable: Wrappable<T>) => S | N;
declare function findOr<N, T>(notFoundValue: N, predicate: (value: T, i: number) => boolean): (iterable: Wrappable<T>) => T | N;
declare function findOr<N, T, S extends T>(notFoundValue: N, predicate: (value: T, i: number) => value is S, iterable: Wrappable<T>): S | N;
declare function findOr<N, T>(notFoundValue: N, predicate: (value: T, i: number) => boolean, iterable: Wrappable<T>): T | N;
export { findOr };