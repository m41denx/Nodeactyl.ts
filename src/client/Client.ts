import { NodeactylRequest } from '../utils/NodeactylRequest';

export class Client extends NodeactylRequest {
  constructor(host: string, clientKey: string) {
    super(host, clientKey);
  }

  async getAccountDetails() {
    return this.request({ endpoint: '/api/client/account' });
  }

  async getAccountPermissions() {
    return this.request({ endpoint: '/api/client' });
  }

  async getServers() {
    return this.request({ endpoint: '/api/client' });
  }

  async getServerDetails(serverId: string) {
    return this.request({ endpoint: `/api/client/servers/${serverId}` });
  }

  async getServerPowerState(serverId: string) {
    return this.request({ endpoint: `/api/client/servers/${serverId}/resources` });
  }

  async setServerPowerState(serverId: string, state: 'start' | 'stop' | 'restart' | 'kill') {
    return this.request({
      endpoint: `/api/client/servers/${serverId}/power`,
      method: 'POST',
      data: { signal: state }
    });
  }

  async sendServerCommand(serverId: string, command: string) {
    return this.request({
      endpoint: `/api/client/servers/${serverId}/command`,
      method: 'POST',
      data: { command }
    });
  }
}
