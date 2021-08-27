import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';
declare function asyncTap<T>(callback: (value: T, i: number) => any | Promise<any>): (source: AsyncWrappable<T>) => AsyncIterableIterator<T>;
declare function asyncTap<T>(callback: (value: T, i: number) => any | Promise<any>, source: AsyncWrappable<T>): AsyncIterableIterator<T>;
export { asyncTap };