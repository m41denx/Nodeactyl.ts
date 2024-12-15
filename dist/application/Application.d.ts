import { NodeactylRequest } from '../utils/NodeactylRequest';
import { ServerBuildOptions } from '../types';
export declare class Application extends NodeactylRequest {
    constructor(host: string, applicationKey: string);
    getAllUsers(): Promise<any>;
    getUser(userId: number): Promise<any>;
    createUser(email: string, username: string, firstName: string, lastName: string): Promise<any>;
    updateUser(userId: number, data: any): Promise<any>;
    deleteUser(userId: number): Promise<any>;
    getAllServers(): Promise<any>;
    getServer(serverId: number): Promise<any>;
    createServer(options: ServerBuildOptions): Promise<any>;
    suspendServer(serverId: number): Promise<any>;
    unsuspendServer(serverId: number): Promise<any>;
    deleteServer(serverId: number): Promise<any>;
}
