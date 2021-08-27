import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';
declare function asyncJoin<T>(source: AsyncWrappable<AsyncWrappable<T>>): AsyncIterableIterator<T>;
export { asyncJoin };