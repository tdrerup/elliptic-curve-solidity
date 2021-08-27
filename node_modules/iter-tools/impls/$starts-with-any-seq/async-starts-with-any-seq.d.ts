import { AsyncWrappable } from '../../types/async-iterable';
declare function asyncStartsWithAnySeq(same: (a: any, b: any) => boolean, seqs: Array<AsyncWrappable<any>>): (iterable: AsyncWrappable<any>) => Promise<boolean>;
declare function asyncStartsWithAnySeq(same: (a: any, b: any) => boolean, seqs: Array<AsyncWrappable<any>>, iterable: AsyncWrappable<any>): Promise<boolean>;
declare function asyncStartsWithAnySeq(seqs: Array<AsyncWrappable<any>>, iterable: AsyncWrappable<any>): Promise<boolean>;
export { asyncStartsWithAnySeq };