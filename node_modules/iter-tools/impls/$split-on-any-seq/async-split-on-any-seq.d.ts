import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';
declare function asyncSplitOnAnySeq(same: (a: any, b: any) => boolean, separatorSeqs: Array<AsyncWrappable<any>>): <T>(source: AsyncWrappable<T>) => AsyncIterableIterator<AsyncIterableIterator<T>>;
declare function asyncSplitOnAnySeq<T>(same: (a: any, b: any) => boolean, separatorSeqs: Array<AsyncWrappable<any>>, source: AsyncWrappable<T>): AsyncIterableIterator<AsyncIterableIterator<T>>;
declare function asyncSplitOnAnySeq<T>(separatorSeqs: Array<AsyncWrappable<any>>, source: AsyncWrappable<T>): AsyncIterableIterator<AsyncIterableIterator<T>>;
export { asyncSplitOnAnySeq };