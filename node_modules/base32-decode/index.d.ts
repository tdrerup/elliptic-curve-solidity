type Variant = 'RFC3548' | 'RFC4648' | 'RFC4648-HEX' | 'Crockford'
declare function base32Decode(input: string, variant: Variant): ArrayBuffer
export = base32Decode
