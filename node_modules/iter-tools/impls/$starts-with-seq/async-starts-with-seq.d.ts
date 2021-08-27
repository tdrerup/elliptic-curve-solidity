import { AsyncWrappable } from '../../types/async-iterable';
declare function asyncStartsWithSeq(same: (a: any, b: any) => boolean, seq: AsyncWrappable<any>): (iterable: AsyncWrappable<any>) => Promise<boolean>;
declare function asyncStartsWithSeq(same: (a: any, b: any) => boolean, seq: AsyncWrappable<any>, iterable: AsyncWrappable<any>): Promise<boolean>;
declare function asyncStartsWithSeq(seq: AsyncWrappable<any>, iterable: AsyncWrappable<any>): Promise<boolean>;
export { asyncStartsWithSeq };