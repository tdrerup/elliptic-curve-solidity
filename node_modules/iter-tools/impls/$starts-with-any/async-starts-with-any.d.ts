import { AsyncWrappable } from '../../types/async-iterable';
declare function asyncStartsWithAny(same: (a: any, b: any) => boolean, values: Array<any>): (iterable: AsyncWrappable<any>) => Promise<boolean>;
declare function asyncStartsWithAny(same: (a: any, b: any) => boolean, values: Array<any>, iterable: AsyncWrappable<any>): Promise<boolean>;
declare function asyncStartsWithAny(values: Array<any>, iterable: AsyncWrappable<any>): Promise<boolean>;
export { asyncStartsWithAny };