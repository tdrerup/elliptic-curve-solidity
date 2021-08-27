import { Wrappable, IteratorResult, NonIterableIterator } from '../../types/iterable';
export interface PeekeratorIterator<T> {
  next(): IteratorResult<T>;
  return(): IteratorResult<T>;
  [Symbol.iterator](): NonIterableIterator<T>;
}
interface PeekeratorBase<T> {
  readonly index: number;
  advance(): Peekerator<T>;
  return(): Peekerator<T>;
  asIterator(): PeekeratorIterator<T>;
}
interface DonePeekerator<T> extends PeekeratorBase<T> {
  readonly current: {
    done: true;
    value: undefined;
  };
  readonly done: true;
  readonly value: undefined;
}
interface ValuePeekerator<T> extends PeekeratorBase<T> {
  readonly current: {
    done: false;
    value: T;
  };
  readonly done: false;
  readonly value: T;
}
export type Peekerator<T> = DonePeekerator<T> | ValuePeekerator<T>;
declare function peekerate<T>(source: Wrappable<T>): Peekerator<T>;
export { peekerate };