import { AsyncWrappable } from '../../types/async-iterable';
declare function asyncToArray<T>(source: AsyncWrappable<T>): Promise<Array<T>>;
export { asyncToArray };