import { AsyncWrappable } from '../../types/async-iterable';
declare function asyncToObject<V>(iterable: AsyncWrappable<[string, V]>, proto?: any): Promise<{
  [key: string]: V;
}>;
export { asyncToObject };