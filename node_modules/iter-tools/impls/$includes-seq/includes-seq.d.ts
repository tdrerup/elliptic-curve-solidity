import { Wrappable } from '../../types/iterable';
declare function includesSeq(same: (a: any, b: any) => boolean, seq: Wrappable<any>): (iterable: Wrappable<any>) => boolean;
declare function includesSeq(same: (a: any, b: any) => boolean, seq: Wrappable<any>, iterable: Wrappable<any>): boolean;
declare function includesSeq(seq: Wrappable<any>, iterable: Wrappable<any>): boolean;
export { includesSeq };