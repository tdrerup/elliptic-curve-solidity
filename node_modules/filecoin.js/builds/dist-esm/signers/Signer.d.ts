import { SignedMessage, Message } from '../providers/Types';
export interface Signer {
    sign(message: Message, password?: string): Promise<SignedMessage | undefined>;
}
//# sourceMappingURL=Signer.d.ts.map