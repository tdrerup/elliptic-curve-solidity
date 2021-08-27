import { Wrappable } from '../../types/iterable';
declare function includesAnySeq(same: (a: any, b: any) => boolean, value: Array<Wrappable<any>>): (iterable: Wrappable<any>) => boolean;
declare function includesAnySeq(same: (a: any, b: any) => boolean, value: Array<Wrappable<any>>, iterable: Wrappable<any>): boolean;
declare function includesAnySeq(value: Array<Wrappable<any>>, iterable: Wrappable<any>): boolean;
export { includesAnySeq };