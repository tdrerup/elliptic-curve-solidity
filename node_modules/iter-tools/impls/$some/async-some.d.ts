import { AsyncWrappable } from '../../types/async-iterable';
declare function asyncSome<T>(func: (value: T, i: number) => boolean | Promise<boolean>): (iterable: AsyncWrappable<T>) => Promise<boolean>;
declare function asyncSome<T>(func: (value: T, i: number) => boolean | Promise<boolean>, iterable: AsyncWrappable<T>): Promise<boolean>;
export { asyncSome };