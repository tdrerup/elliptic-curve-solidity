import { AsyncWrappable } from '../../types/async-iterable';
declare function asyncIncludesAny(same: (a: any, b: any) => boolean, values: Array<any>): (iterable: AsyncWrappable<any>) => Promise<boolean>;
declare function asyncIncludesAny(same: (a: any, b: any) => boolean, values: Array<any>, iterable: AsyncWrappable<any>): Promise<boolean>;
declare function asyncIncludesAny(values: Array<any>, iterable: AsyncWrappable<any>): Promise<boolean>;
export { asyncIncludesAny };