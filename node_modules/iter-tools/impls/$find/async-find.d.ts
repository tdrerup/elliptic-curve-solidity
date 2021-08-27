import { AsyncWrappable } from '../../types/async-iterable';
declare function asyncFind<T, S extends T>(predicate: (value: T, i: number) => value is S): (iterable: AsyncWrappable<T>) => Promise<S | undefined>;
declare function asyncFind<T>(predicate: (value: T, i: number) => boolean | Promise<boolean>): (iterable: AsyncWrappable<T>) => Promise<T | undefined>;
declare function asyncFind<T, S extends T>(predicate: (value: T, i: number) => value is S, iterable: AsyncWrappable<T>): Promise<S | undefined>;
declare function asyncFind<T>(predicate: (value: T, i: number) => boolean | Promise<boolean>, iterable: AsyncWrappable<T>): Promise<T | undefined>;
export { asyncFind };