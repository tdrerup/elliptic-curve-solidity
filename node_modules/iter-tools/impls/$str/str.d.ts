import { Wrappable } from '../../types/iterable';
declare function str(strings: Wrappable<string>): string;
declare function str(strings: Wrappable<{
  toString(): string;
}>): string;
export { str };