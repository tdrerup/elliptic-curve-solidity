import { Message, SignedMessage } from '../providers/Types';
import { Signer } from './Signer';
export declare class LedgerSigner implements Signer {
    private path;
    private transport;
    private wasm;
    constructor(path?: string);
    connect(): Promise<void>;
    sign(message: Message): Promise<SignedMessage>;
    getDefaultAccount(): Promise<string>;
    private messageToSigner;
}
//# sourceMappingURL=LedgerSigner.d.ts.map