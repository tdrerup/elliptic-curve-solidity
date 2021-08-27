import { Wrappable, IteratorResult, NonIterableIterator } from '../../types/iterable';
export interface ForkeratorIterator<T> {
  next(): IteratorResult<T>;
  return(): IteratorResult<T>;
  [Symbol.iterator](): NonIterableIterator<T>;
}
interface ForkeratorBase<T> {
  readonly index: number;
  advance(): Forkerator<T>;
  return(): Forkerator<T>;
  fork(): ForkeratorIterator<T>;
  asIterator(): ForkeratorIterator<T>;
}
interface DoneForkerator<T> extends ForkeratorBase<T> {
  readonly current: {
    done: true;
    value: undefined;
  };
  readonly done: true;
  readonly value: undefined;
}
interface ValueForkerator<T> extends ForkeratorBase<T> {
  readonly current: {
    done: false;
    value: T;
  };
  readonly done: false;
  readonly value: T;
}
export type Forkerator<T> = DoneForkerator<T> | ValueForkerator<T>;
declare function forkerate<T>(source: Wrappable<T>): Forkerator<T>;
export { forkerate };