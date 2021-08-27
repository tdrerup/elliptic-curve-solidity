import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';
declare function asyncTakeSorted<T>(iterable: AsyncWrappable<T>): AsyncIterableIterator<T>;
declare function asyncTakeSorted<T>(n: number): (source: AsyncWrappable<T>) => AsyncIterableIterator<T>;
declare function asyncTakeSorted<T>(n: number, compare: (a: T, b: T) => number): (source: AsyncWrappable<T>) => AsyncIterableIterator<T>;
declare function asyncTakeSorted<T>(compare: (a: T, b: T) => number): (source: AsyncWrappable<T>) => AsyncIterableIterator<T>;
declare function asyncTakeSorted<T>(n: number, source: AsyncWrappable<T>): AsyncIterableIterator<T>;
declare function asyncTakeSorted<T>(n: number, compare: (a: T, b: T) => number, source: AsyncWrappable<T>): AsyncIterableIterator<T>;
declare function asyncTakeSorted<T>(compare: (a: T, b: T) => number, source: AsyncWrappable<T>): AsyncIterableIterator<T>;
export { asyncTakeSorted };