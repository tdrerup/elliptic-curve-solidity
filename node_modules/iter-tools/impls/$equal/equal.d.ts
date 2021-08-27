import { Wrappable } from '../../types/iterable';
declare function equal(same: (a: any, b: any) => boolean): (...seqs: Array<Wrappable<any>>) => (iterable: Wrappable<any>) => boolean;
declare function equal(same: (a: any, b: any) => boolean, ...seqs: Array<Wrappable<any>>): (iterable: Wrappable<any>) => boolean;
declare function equal(...seqs: Array<Wrappable<any>>): (iterable: Wrappable<any>) => boolean;
export { equal };