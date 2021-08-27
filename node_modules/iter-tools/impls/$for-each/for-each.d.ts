import { Wrappable } from '../../types/iterable';
declare function forEach<T>(callback: (value: T, i: number) => void): (iterable: Wrappable<T>) => void;
declare function forEach<T>(callback: (value: T, i: number) => void, iterable: Wrappable<T>): void;
export { forEach };