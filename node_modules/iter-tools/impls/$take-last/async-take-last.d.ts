import { AsyncWrappable } from '../../types/async-iterable';
declare function asyncTakeLast<T>(iterable: AsyncWrappable<T>): Promise<T | undefined>;
export { asyncTakeLast };