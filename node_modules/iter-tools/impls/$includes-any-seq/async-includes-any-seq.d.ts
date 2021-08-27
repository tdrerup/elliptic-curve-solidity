import { AsyncWrappable } from '../../types/async-iterable';
declare function asyncIncludesAnySeq(same: (a: any, b: any) => boolean, value: Array<AsyncWrappable<any>>): (iterable: AsyncWrappable<any>) => Promise<boolean>;
declare function asyncIncludesAnySeq(same: (a: any, b: any) => boolean, value: Array<AsyncWrappable<any>>, iterable: AsyncWrappable<any>): Promise<boolean>;
declare function asyncIncludesAnySeq(value: Array<AsyncWrappable<any>>, iterable: AsyncWrappable<any>): Promise<boolean>;
export { asyncIncludesAnySeq };