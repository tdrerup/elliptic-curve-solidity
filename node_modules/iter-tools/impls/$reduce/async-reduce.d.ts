import { AsyncWrappable } from '../../types/async-iterable';
declare function asyncReduce<T>(reducer: (result: T, value: T, i: number) => T | Promise<T>): (iterable: AsyncWrappable<T>) => Promise<T>;
declare function asyncReduce<O, T>(reducer: (result: O, value: T, i: number) => O | Promise<O>): (iterable: AsyncWrappable<T>) => Promise<O>;
declare function asyncReduce<O, T>(initial: O, reducer: (result: O, value: T, i: number) => O | Promise<O>): (iterable: AsyncWrappable<T>) => Promise<O>;
declare function asyncReduce<T>(reducer: (result: T, value: T, i: number) => T | Promise<T>, iterable: AsyncWrappable<T>): Promise<T>;
declare function asyncReduce<O, T>(reducer: (result: O, value: T, i: number) => O | Promise<O>, iterable: AsyncWrappable<T>): Promise<O>;
declare function asyncReduce<O, T>(initial: O, reducer: (result: O, value: T, i: number) => O | Promise<O>, iterable: AsyncWrappable<T>): Promise<O>;
export { asyncReduce };