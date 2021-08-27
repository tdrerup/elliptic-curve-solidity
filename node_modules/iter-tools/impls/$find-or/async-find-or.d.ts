import { AsyncWrappable } from '../../types/async-iterable';
declare function asyncFindOr<N, T, S extends T>(notFoundValue: N, predicate: (value: T, i: number) => value is S): (iterable: AsyncWrappable<T>) => Promise<S | N>;
declare function asyncFindOr<N, T>(notFoundValue: N, predicate: (value: T, i: number) => boolean | Promise<boolean>): (iterable: AsyncWrappable<T>) => Promise<T | N>;
declare function asyncFindOr<N, T, S extends T>(notFoundValue: N, predicate: (value: T, i: number) => value is S, iterable: AsyncWrappable<T>): Promise<S | N>;
declare function asyncFindOr<N, T>(notFoundValue: N, predicate: (value: T, i: number) => boolean | Promise<boolean>, iterable: AsyncWrappable<T>): Promise<T | N>;
export { asyncFindOr };