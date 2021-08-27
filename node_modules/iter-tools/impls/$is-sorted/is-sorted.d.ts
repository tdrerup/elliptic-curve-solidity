import { Wrappable } from '../../types/iterable';
declare function isSorted(iterable: Wrappable<any>): boolean;
declare function isSorted<T>(compare: (a: T, b: T) => number, iterable: Wrappable<T>): boolean;
export { isSorted };