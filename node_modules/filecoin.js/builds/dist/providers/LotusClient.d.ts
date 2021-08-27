import { Connector } from '../connectors/Connector';
import { JsonRpcStateMethodGroup } from './method-groups/state';
import { JsonRpcChainMethodGroup } from './method-groups/chain';
import { JsonRpcAuthMethodGroup } from './method-groups/auth';
import { JsonRpcClientMethodGroup } from './method-groups/client';
import { JsonRpcCommonMethodGroup } from './method-groups/common';
import { JsonRpcMinerMethodGroup } from './method-groups/miner';
import { JsonRpcPaychMethodGroup } from './method-groups/paych';
import { JsonRpcMPoolMethodGroup } from './method-groups/mpool';
import { JsonRpcNetMethodGroup } from './method-groups/net';
import { JsonRpcMsigMethodGroup } from './method-groups/msig';
import { JsonRpcSyncMethodGroup } from './method-groups/sync';
import { JsonRpcGasMethodGroup } from './method-groups/gasEstimate';
import { JsonRpcWalletMethodGroup } from './method-groups/wallet';
export declare class LotusClient {
    conn: Connector;
    chain: JsonRpcChainMethodGroup;
    state: JsonRpcStateMethodGroup;
    auth: JsonRpcAuthMethodGroup;
    client: JsonRpcClientMethodGroup;
    common: JsonRpcCommonMethodGroup;
    miner: JsonRpcMinerMethodGroup;
    paych: JsonRpcPaychMethodGroup;
    mpool: JsonRpcMPoolMethodGroup;
    net: JsonRpcNetMethodGroup;
    msig: JsonRpcMsigMethodGroup;
    sync: JsonRpcSyncMethodGroup;
    gasEstimate: JsonRpcGasMethodGroup;
    wallet: JsonRpcWalletMethodGroup;
    constructor(connector: Connector);
    release(): Promise<any>;
}
//# sourceMappingURL=LotusClient.d.ts.map