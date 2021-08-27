import { Connector } from '../../connectors/Connector';
import { Permission } from '../Types';
/**
 * The Auth method group is used to manage the authorization tokens.
 */
export declare class JsonRpcAuthMethodGroup {
    private conn;
    constructor(conn: Connector);
    /**
     * list the permissions for a given authorization token
     * @param token
     */
    verify(token: string): Promise<Permission[]>;
    /**
     * generate a new authorization token for a given permissions list
     * @param permissions
     */
    new(permissions: Permission[]): Promise<string>;
}
//# sourceMappingURL=auth.d.ts.map