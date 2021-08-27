import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';
declare function asyncRoundRobin<T>(...sources: Array<AsyncWrappable<T>>): AsyncIterableIterator<T>;
declare function asyncRoundRobin<T>(step: number, ...sources: Array<AsyncWrappable<T>>): AsyncIterableIterator<T>;
declare function asyncRoundRobin<T>(start: number, step: number, ...sources: Array<AsyncWrappable<T>>): AsyncIterableIterator<T>;
declare function asyncRoundRobin<T>(options: {
  start?: number;
  step?: number;
}, ...sources: Array<AsyncWrappable<T>>): AsyncIterableIterator<T>;
declare function asyncRoundRobin(step: number): <T>(...sources: Array<AsyncWrappable<T>>) => AsyncIterableIterator<T>;
declare function asyncRoundRobin(start: number, step: number): <T>(...sources: Array<AsyncWrappable<T>>) => AsyncIterableIterator<T>;
declare function asyncRoundRobin(options: {
  start?: number;
  step?: number;
}): <T>(...sources: Array<AsyncWrappable<T>>) => AsyncIterableIterator<T>;
export { asyncRoundRobin };