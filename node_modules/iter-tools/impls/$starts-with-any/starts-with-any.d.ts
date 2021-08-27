import { Wrappable } from '../../types/iterable';
declare function startsWithAny(same: (a: any, b: any) => boolean, values: Array<any>): (iterable: Wrappable<any>) => boolean;
declare function startsWithAny(same: (a: any, b: any) => boolean, values: Array<any>, iterable: Wrappable<any>): boolean;
declare function startsWithAny(values: Array<any>, iterable: Wrappable<any>): boolean;
export { startsWithAny };