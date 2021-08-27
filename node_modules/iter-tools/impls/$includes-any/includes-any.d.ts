import { Wrappable } from '../../types/iterable';
declare function includesAny(same: (a: any, b: any) => boolean, values: Array<any>): (iterable: Wrappable<any>) => boolean;
declare function includesAny(same: (a: any, b: any) => boolean, values: Array<any>, iterable: Wrappable<any>): boolean;
declare function includesAny(values: Array<any>, iterable: Wrappable<any>): boolean;
export { includesAny };