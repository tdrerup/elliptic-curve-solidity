import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';
declare function asyncCycle<T>(source: AsyncWrappable<T>): AsyncIterableIterator<T>;
export { asyncCycle };