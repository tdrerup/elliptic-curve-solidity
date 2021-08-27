import { AsyncWrappable } from '../../types/async-iterable';
declare function asyncFirstOr<E, T>(whenEmpty: E, iterable: AsyncWrappable<T>): Promise<T | E>;
export { asyncFirstOr };