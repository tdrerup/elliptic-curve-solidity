import { Wrappable } from '../../types/iterable';
declare function every<T>(predicate: (value: T) => boolean): (iterable: Wrappable<T>) => boolean;
declare function every<T>(predicate: (value: T) => boolean, iterable: Wrappable<T>): boolean;
export { every };