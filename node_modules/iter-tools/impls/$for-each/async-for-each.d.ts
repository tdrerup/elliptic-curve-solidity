import { AsyncWrappable } from '../../types/async-iterable';
declare function asyncForEach<T>(callback: (value: T, i: number) => void): (iterable: AsyncWrappable<T>) => Promise<void>;
declare function asyncForEach<T>(callback: (value: T, i: number) => void, iterable: AsyncWrappable<T>): Promise<void>;
export { asyncForEach };