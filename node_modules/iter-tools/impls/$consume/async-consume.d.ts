import { AsyncWrappable } from '../../types/async-iterable';
declare function asyncConsume<T>(iterable: AsyncWrappable<T>): Promise<void>;
export { asyncConsume };