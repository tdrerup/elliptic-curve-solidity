import { Wrappable } from '../../types/iterable';
declare function startsWith(same: (a: any, b: any) => boolean, value: any): (iterable: Wrappable<any>) => boolean;
declare function startsWith(same: (a: any, b: any) => boolean, value: any, iterable: Wrappable<any>): boolean;
declare function startsWith(value: any, iterable: Wrappable<any>): boolean;
export { startsWith };