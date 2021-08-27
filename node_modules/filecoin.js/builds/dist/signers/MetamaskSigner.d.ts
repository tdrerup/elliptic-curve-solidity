import { Message, SignedMessage } from '../providers/Types';
import { Signer } from './Signer';
import { FilecoinSnapApi } from '@nodefactory/filsnap-types';
export declare class MetamaskSigner implements Signer {
    private filecoinApi;
    constructor(filecoinApi: FilecoinSnapApi);
    sign(message: Message): Promise<SignedMessage>;
    getDefaultAccount(): Promise<string>;
    private messageToSigner;
    private messageFromSigner;
}
//# sourceMappingURL=MetamaskSigner.d.ts.map