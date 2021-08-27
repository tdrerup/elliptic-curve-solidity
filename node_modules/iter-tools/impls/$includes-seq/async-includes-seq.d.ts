import { AsyncWrappable } from '../../types/async-iterable';
declare function asyncIncludesSeq(same: (a: any, b: any) => boolean, seq: AsyncWrappable<any>): (iterable: AsyncWrappable<any>) => Promise<boolean>;
declare function asyncIncludesSeq(same: (a: any, b: any) => boolean, seq: AsyncWrappable<any>, iterable: AsyncWrappable<any>): Promise<boolean>;
declare function asyncIncludesSeq(seq: AsyncWrappable<any>, iterable: AsyncWrappable<any>): Promise<boolean>;
export { asyncIncludesSeq };