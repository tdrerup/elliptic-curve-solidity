import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';
declare function asyncWrap<T>(source: AsyncWrappable<T>): AsyncIterableIterator<T>;
export { asyncWrap };