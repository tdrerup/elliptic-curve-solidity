import { AsyncWrappable } from '../../types/async-iterable';
declare function asyncStr(strings: AsyncWrappable<string>): Promise<string>;
declare function asyncStr(strings: AsyncWrappable<{
  toString(): string;
}>): Promise<string>;
export { asyncStr };