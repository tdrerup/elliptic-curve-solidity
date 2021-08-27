import {Readable} from "stream"
import {EventIterator, EventIteratorOptions} from "./event-iterator"

export function stream(this: Readable, evOptions?: EventIteratorOptions) {
  return new EventIterator<Buffer>(
    (push, stop, fail) => {
      this.addListener("data", push)
      this.addListener("end", stop)
      this.addListener("error", fail)
    },

    (push, stop, fail) => {
      this.removeListener("data", push)
      this.removeListener("end", stop)
      this.removeListener("error", fail)

      /* We are no longer interested in any data; attempt to close the stream. */
      if (this.destroy) {
        this.destroy()
      } else if (typeof (this as any).close == "function") {
        (this as any).close()
      }
    },

    evOptions,
  )
}

export {EventIterator}
export default EventIterator
