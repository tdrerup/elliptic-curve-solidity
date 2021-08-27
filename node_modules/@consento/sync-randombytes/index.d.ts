declare module '@consento/sync-randombytes' {
  import { Buffer } from 'buffer'

  export default function <T extends Uint8Array | Buffer>(input: T): T;
}
