import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';
declare function asyncConcat<T>(...sources: Array<AsyncWrappable<T>>): AsyncIterableIterator<T>;
export { asyncConcat };