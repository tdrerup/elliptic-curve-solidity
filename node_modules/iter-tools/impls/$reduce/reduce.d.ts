import { Wrappable } from '../../types/iterable';
declare function reduce<T>(reducer: (result: T, value: T, i: number) => T): (iterable: Wrappable<T>) => T;
declare function reduce<O, T>(reducer: (result: O, value: T, i: number) => O): (iterable: Wrappable<T>) => O;
declare function reduce<O, T>(initial: O, reducer: (result: O, value: T, i: number) => O): (iterable: Wrappable<T>) => O;
declare function reduce<T>(reducer: (result: T, value: T, i: number) => T, iterable: Wrappable<T>): T;
declare function reduce<O, T>(reducer: (result: O, value: T, i: number) => O, iterable: Wrappable<T>): O;
declare function reduce<O, T>(initial: O, reducer: (result: O, value: T, i: number) => O, iterable: Wrappable<T>): O;
export { reduce };