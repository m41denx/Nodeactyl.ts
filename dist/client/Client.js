"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const NodeactylRequest_1 = require("../utils/NodeactylRequest");
class Client extends NodeactylRequest_1.NodeactylRequest {
    constructor(host, clientKey) {
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
    async getServerDetails(serverId) {
        return this.request({ endpoint: `/api/client/servers/${serverId}` });
    }
    async getServerPowerState(serverId) {
        return this.request({ endpoint: `/api/client/servers/${serverId}/resources` });
    }
    async setServerPowerState(serverId, state) {
        return this.request({
            endpoint: `/api/client/servers/${serverId}/power`,
            method: 'POST',
            data: { signal: state }
        });
    }
    async sendServerCommand(serverId, command) {
        return this.request({
            endpoint: `/api/client/servers/${serverId}/command`,
            method: 'POST',
            data: { command }
        });
    }
}
exports.Client = Client;
