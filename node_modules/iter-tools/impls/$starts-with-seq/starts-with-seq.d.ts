import { Wrappable } from '../../types/iterable';
declare function startsWithSeq(same: (a: any, b: any) => boolean, seq: Wrappable<any>): (iterable: Wrappable<any>) => boolean;
declare function startsWithSeq(same: (a: any, b: any) => boolean, seq: Wrappable<any>, iterable: Wrappable<any>): boolean;
declare function startsWithSeq(seq: Wrappable<any>, iterable: Wrappable<any>): boolean;
export { startsWithSeq };