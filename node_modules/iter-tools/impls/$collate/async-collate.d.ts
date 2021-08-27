import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';
declare function asyncCollate<T>(...sources: Array<AsyncWrappable<T>>): AsyncIterableIterator<T>;
declare function asyncCollate<T>(compare: (a: T, b: T) => number, ...sources: Array<AsyncWrappable<T>>): AsyncIterableIterator<T>;
declare function asyncCollate<T>(compare: (a: T, b: T) => number): (...sources: Array<AsyncWrappable<T>>) => AsyncIterableIterator<T>;
export { asyncCollate };