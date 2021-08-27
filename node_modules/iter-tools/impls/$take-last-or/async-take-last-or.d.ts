import { AsyncWrappable } from '../../types/async-iterable';
declare function asyncTakeLastOr<E, T>(whenEmpty: E, iterable: AsyncWrappable<T>): Promise<T | E>;
export { asyncTakeLastOr };