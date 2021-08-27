import { Wrappable } from '../../types/iterable';
declare function some<T>(func: (value: T, i: number) => boolean): (iterable: Wrappable<T>) => boolean;
declare function some<T>(func: (value: T, i: number) => boolean, iterable: Wrappable<T>): boolean;
export { some };