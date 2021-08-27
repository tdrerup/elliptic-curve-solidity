import { AsyncWrappable } from '../../types/async-iterable';
declare function asyncStartsWith(same: (a: any, b: any) => boolean, value: any): (iterable: AsyncWrappable<any>) => Promise<boolean>;
declare function asyncStartsWith(same: (a: any, b: any) => boolean, value: any, iterable: AsyncWrappable<any>): Promise<boolean>;
declare function asyncStartsWith(value: any, iterable: AsyncWrappable<any>): Promise<boolean>;
export { asyncStartsWith };