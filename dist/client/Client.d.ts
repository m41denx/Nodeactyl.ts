import { NodeactylRequest } from '../utils/NodeactylRequest';
export declare class Client extends NodeactylRequest {
    constructor(host: string, clientKey: string);
    getAccountDetails(): Promise<any>;
    getAccountPermissions(): Promise<any>;
    getServers(): Promise<any>;
    getServerDetails(serverId: string): Promise<any>;
    getServerPowerState(serverId: string): Promise<any>;
    setServerPowerState(serverId: string, state: 'start' | 'stop' | 'restart' | 'kill'): Promise<any>;
    sendServerCommand(serverId: string, command: string): Promise<any>;
}
