import { AsyncWrappable } from '../../types/async-iterable';
declare function asyncEvery<T>(predicate: (value: T) => boolean | Promise<boolean>): (iterable: AsyncWrappable<T>) => Promise<boolean>;
declare function asyncEvery<T>(predicate: (value: T) => boolean | Promise<boolean>, iterable: AsyncWrappable<T>): Promise<boolean>;
export { asyncEvery };