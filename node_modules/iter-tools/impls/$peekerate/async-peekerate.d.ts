import { AsyncWrappable, AsyncIteratorResult, AsyncNonIterableIterator } from '../../types/async-iterable';
export interface AsyncPeekeratorIterator<T> {
  next(): AsyncIteratorResult<T>;
  return(): AsyncIteratorResult<T>;
  [Symbol.asyncIterator](): AsyncNonIterableIterator<T>;
}
interface AsyncPeekeratorBase<T> {
  readonly index: number;
  advance(): Promise<AsyncPeekerator<T>>;
  return(): Promise<AsyncPeekerator<T>>;
  asIterator(): AsyncPeekeratorIterator<T>;
}
interface AsyncDonePeekerator<T> extends AsyncPeekeratorBase<T> {
  readonly current: {
    done: true;
    value: undefined;
  };
  readonly done: true;
  readonly value: undefined;
}
interface AsyncValuePeekerator<T> extends AsyncPeekeratorBase<T> {
  readonly current: {
    done: false;
    value: T;
  };
  readonly done: false;
  readonly value: T;
}
export type AsyncPeekerator<T> = AsyncDonePeekerator<T> | AsyncValuePeekerator<T>;
declare function asyncPeekerate<T>(source: AsyncWrappable<T>): Promise<AsyncPeekerator<T>>;
export { asyncPeekerate };