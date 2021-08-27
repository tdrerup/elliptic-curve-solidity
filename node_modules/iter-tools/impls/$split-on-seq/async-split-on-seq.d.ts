import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';
declare function asyncSplitOnSeq(same: (a: any, b: any) => boolean, separatorSeq: AsyncWrappable<any>): <T>(source: AsyncWrappable<T>) => AsyncIterableIterator<AsyncIterableIterator<T>>;
declare function asyncSplitOnSeq<T>(same: (a: any, b: any) => boolean, separatorSeq: AsyncWrappable<any>, source: AsyncWrappable<T>): AsyncIterableIterator<AsyncIterableIterator<T>>;
declare function asyncSplitOnSeq<T>(separatorSeq: AsyncWrappable<any>, source: AsyncWrappable<T>): AsyncIterableIterator<AsyncIterableIterator<T>>;
export { asyncSplitOnSeq };