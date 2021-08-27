import { Message, SignedMessage } from '../providers/Types';
import { Signer } from './Signer';
import { Keystore } from '../utils/keystore';
export declare class LightWalletSigner implements Signer {
    private keystore;
    constructor(keystore: Keystore);
    sign(message: Message, password?: string): Promise<SignedMessage>;
    private messageToSigner;
}
//# sourceMappingURL=LightWalletSigner.d.ts.map