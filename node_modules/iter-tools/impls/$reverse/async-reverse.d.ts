import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';
declare function asyncReverse<T>(source: AsyncWrappable<T>): AsyncIterableIterator<T>;
export { asyncReverse };