import { AsyncWrappable } from '../../types/async-iterable';
declare function asyncFirst<T>(iterable: AsyncWrappable<T>): Promise<T | undefined>;
export { asyncFirst };