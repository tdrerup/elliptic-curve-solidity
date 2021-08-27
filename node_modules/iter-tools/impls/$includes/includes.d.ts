import { Wrappable } from '../../types/iterable';
declare function includes(same: (a: any, b: any) => boolean, value: any): (iterable: Wrappable<any>) => boolean;
declare function includes(same: (a: any, b: any) => boolean, value: any, iterable: Wrappable<any>): boolean;
declare function includes(value: any, iterable: Wrappable<any>): boolean;
export { includes };