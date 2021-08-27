import { AsyncWrappable } from '../../types/async-iterable';
declare function asyncIncludes(same: (a: any, b: any) => boolean, value: any): (iterable: AsyncWrappable<any>) => Promise<boolean>;
declare function asyncIncludes(same: (a: any, b: any) => boolean, value: any, iterable: AsyncWrappable<any>): Promise<boolean>;
declare function asyncIncludes(value: any, iterable: AsyncWrappable<any>): Promise<boolean>;
export { asyncIncludes };