/* Fall back from Symbol.asyncIterator to Symbol.iterator to a new symbol. */
const prop = Object.getOwnPropertyDescriptor((Symbol as any), "asyncIterator")
if (!prop) {
  (Symbol as any).asyncIterator = Symbol.iterator || Symbol.for("Symbol.asyncIterator")
}
