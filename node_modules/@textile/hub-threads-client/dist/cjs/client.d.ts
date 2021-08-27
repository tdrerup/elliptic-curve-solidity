import { Context } from '@textile/context';
import { KeyInfo, UserAuth } from '@textile/security';
import { Client } from '@textile/threads-client';
interface GetThreadResponse {
    id: string;
    name?: string;
}
declare module '@textile/threads-client' {
    interface Client {
        getThread(name: string, ctx?: Context): Promise<GetThreadResponse>;
        listThreads(ctx?: Context): Promise<Array<GetThreadResponse>>;
    }
}
/**
 * Clients is a web-gRPC wrapper client for communicating with the web-gRPC enabled Threads API.
 */
export { Client, GetThreadResponse, KeyInfo, UserAuth };
