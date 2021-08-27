import { Connector } from '../../connectors/Connector';
import { Message } from '../Types';
export declare class JsonRpcGasMethodGroup {
    private conn;
    constructor(conn: Connector);
    /**
   * estimate gas fee cap
   * @param message
   * @param nblocksincl
   */
    feeCap(message: Message, nblocksincl: number): Promise<string>;
    /**
    * estimate gas limit, it fails if message fails to execute.
    * @param message
    */
    gasLimit(message: Message): Promise<number>;
    /**
    * estimate gas to succesufully send message, and have it likely be included in the next nblocksincl blocks
    * @param nblocksincl
    * @param sender
    * @param gasLimit
    */
    gasPremium(nblocksincl: number, sender: string, gasLimit: number): Promise<string>;
    /**
     * estimate gas to succesufully send message, and have it included in the next 10 blocks
     * @param message
     */
    messageGas(message: Message): Promise<Message>;
}
//# sourceMappingURL=gasEstimate.d.ts.map