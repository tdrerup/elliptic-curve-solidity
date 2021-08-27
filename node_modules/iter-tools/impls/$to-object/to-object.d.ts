import { Wrappable } from '../../types/iterable';
declare function toObject<V>(iterable: Wrappable<[string, V]>, proto?: any): {
  [key: string]: V;
};
export { toObject };