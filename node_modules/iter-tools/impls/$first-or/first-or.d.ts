import { Wrappable } from '../../types/iterable';
declare function firstOr<E, T>(whenEmpty: E, iterable: Wrappable<T>): T | E;
export { firstOr };