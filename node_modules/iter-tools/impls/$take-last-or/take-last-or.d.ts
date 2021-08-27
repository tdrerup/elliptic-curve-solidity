import { Wrappable } from '../../types/iterable';
declare function takeLastOr<E, T>(whenEmpty: E, iterable: Wrappable<T>): T | E;
export { takeLastOr };