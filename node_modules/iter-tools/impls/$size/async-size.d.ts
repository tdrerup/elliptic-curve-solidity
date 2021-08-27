import { AsyncWrappable } from '../../types/async-iterable';
declare function asyncSize<Iter extends AsyncWrappable<any>>(iterable: Iter): Promise<Iter extends any[] ? Iter['length'] : number>;
export { asyncSize };