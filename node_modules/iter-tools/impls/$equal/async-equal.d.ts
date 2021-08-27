import { AsyncWrappable } from '../../types/async-iterable';
declare function asyncEqual(same: (a: any, b: any) => boolean): (...seqs: Array<AsyncWrappable<any>>) => (iterable: AsyncWrappable<any>) => Promise<boolean>;
declare function asyncEqual(same: (a: any, b: any) => boolean, ...seqs: Array<AsyncWrappable<any>>): (iterable: AsyncWrappable<any>) => Promise<boolean>;
declare function asyncEqual(...seqs: Array<AsyncWrappable<any>>): (iterable: AsyncWrappable<any>) => Promise<boolean>;
export { asyncEqual };