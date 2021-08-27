import { Wrappable } from '../../types/iterable';
declare function size<Iter extends Wrappable<any>>(iterable: Iter): Iter extends any[] ? Iter['length'] : number;
export { size };