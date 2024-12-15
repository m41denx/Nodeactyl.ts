import { NodeactylRequest } from '../utils/NodeactylRequest';
import { ServerBuildOptions } from '../types';

export class Application extends NodeactylRequest {
  constructor(host: string, applicationKey: string) {
    super(host, applicationKey);
  }

  async getAllUsers() {
    return this.request({ endpoint: '/api/application/users' });
  }

  async getUser(userId: number) {
    return this.request({ endpoint: `/api/application/users/${userId}` });
  }

  async createUser(email: string, username: string, firstName: string, lastName: string) {
    return this.request({
      endpoint: '/api/application/users',
      method: 'POST',
      data: { email, username, first_name: firstName, last_name: lastName }
    });
  }

  async updateUser(userId: number, data: any) {
    return this.request({
      endpoint: `/api/application/users/${userId}`,
      method: 'PATCH',
      data
    });
  }

  async deleteUser(userId: number) {
    return this.request({
      endpoint: `/api/application/users/${userId}`,
      method: 'DELETE'
    });
  }

  async getAllServers() {
    return this.request({ endpoint: '/api/application/servers' });
  }

  async getServer(serverId: number) {
    return this.request({ endpoint: `/api/application/servers/${serverId}` });
  }

  async createServer(options: ServerBuildOptions) {
    return this.request({
      endpoint: '/api/application/servers',
      method: 'POST',
      data: options
    });
  }

  async suspendServer(serverId: number) {
    return this.request({
      endpoint: `/api/application/servers/${serverId}/suspend`,
      method: 'POST'
    });
  }

  async unsuspendServer(serverId: number) {
    return this.request({
      endpoint: `/api/application/servers/${serverId}/unsuspend`,
      method: 'POST'
    });
  }

  async deleteServer(serverId: number) {
    return this.request({
      endpoint: `/api/application/servers/${serverId}`,
      method: 'DELETE'
    });
  }
}
