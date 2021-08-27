import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';
declare function asyncTakeWhile<T>(predicate: (value: T, i: number) => boolean | Promise<boolean>): (source: AsyncWrappable<T>) => AsyncIterableIterator<T>;
declare function asyncTakeWhile<T>(predicate: (value: T, i: number) => boolean | Promise<boolean>, source: AsyncWrappable<T>): AsyncIterableIterator<T>;
export { asyncTakeWhile };