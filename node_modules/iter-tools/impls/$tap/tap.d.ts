import { Wrappable, IterableIterator } from '../../types/iterable';
declare function tap<T>(callback: (value: T, i: number) => any): (source: Wrappable<T>) => IterableIterator<T>;
declare function tap<T>(callback: (value: T, i: number) => any, source: Wrappable<T>): IterableIterator<T>;
export { tap };