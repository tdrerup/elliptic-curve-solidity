import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';
declare function asyncCompress<T>(source: AsyncWrappable<T>, included: AsyncWrappable<boolean>): AsyncIterableIterator<T>;
export { asyncCompress };