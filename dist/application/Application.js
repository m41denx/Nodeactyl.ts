"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const NodeactylRequest_1 = require("../utils/NodeactylRequest");
class Application extends NodeactylRequest_1.NodeactylRequest {
    constructor(host, applicationKey) {
        super(host, applicationKey);
    }
    async getAllUsers() {
        return this.request({ endpoint: '/api/application/users' });
    }
    async getUser(userId) {
        return this.request({ endpoint: `/api/application/users/${userId}` });
    }
    async createUser(email, username, firstName, lastName) {
        return this.request({
            endpoint: '/api/application/users',
            method: 'POST',
            data: { email, username, first_name: firstName, last_name: lastName }
        });
    }
    async updateUser(userId, data) {
        return this.request({
            endpoint: `/api/application/users/${userId}`,
            method: 'PATCH',
            data
        });
    }
    async deleteUser(userId) {
        return this.request({
            endpoint: `/api/application/users/${userId}`,
            method: 'DELETE'
        });
    }
    async getAllServers() {
        return this.request({ endpoint: '/api/application/servers' });
    }
    async getServer(serverId) {
        return this.request({ endpoint: `/api/application/servers/${serverId}` });
    }
    async createServer(options) {
        return this.request({
            endpoint: '/api/application/servers',
            method: 'POST',
            data: options
        });
    }
    async suspendServer(serverId) {
        return this.request({
            endpoint: `/api/application/servers/${serverId}/suspend`,
            method: 'POST'
        });
    }
    async unsuspendServer(serverId) {
        return this.request({
            endpoint: `/api/application/servers/${serverId}/unsuspend`,
            method: 'POST'
        });
    }
    async deleteServer(serverId) {
        return this.request({
            endpoint: `/api/application/servers/${serverId}`,
            method: 'DELETE'
        });
    }
}
exports.Application = Application;
