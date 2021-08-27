import { AsyncWrappable } from '../../types/async-iterable';
declare function asyncIsSorted(iterable: AsyncWrappable<any>): Promise<boolean>;
declare function asyncIsSorted<T>(compare: (a: T, b: T) => number, iterable: AsyncWrappable<T>): Promise<boolean>;
export { asyncIsSorted };