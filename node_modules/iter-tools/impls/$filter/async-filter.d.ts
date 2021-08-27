import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';
declare function asyncFilter<T, S extends T>(predicate: (value: T, i: number) => value is S): (source: AsyncWrappable<T>) => AsyncIterableIterator<S>;
declare function asyncFilter<T>(predicate: (value: T, i: number) => boolean | Promise<boolean>): (source: AsyncWrappable<T>) => AsyncIterableIterator<T>;
declare function asyncFilter<T, S extends T>(predicate: (value: T, i: number) => value is S, source: AsyncWrappable<T>): AsyncIterableIterator<S>;
declare function asyncFilter<T>(predicate: (value: T, i: number) => boolean | Promise<boolean>, source: AsyncWrappable<T>): AsyncIterableIterator<T>;
export { asyncFilter };