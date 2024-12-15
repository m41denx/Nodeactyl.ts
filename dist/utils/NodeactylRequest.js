"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeactylRequest = void 0;
const axios_1 = __importDefault(require("axios"));
class NodeactylRequest {
    constructor(host, key) {
        this.host = host.endsWith('/') ? host.slice(0, -1) : host;
        this.key = key;
        this.axios = axios_1.default.create({
            baseURL: this.host,
            timeout: 30000,
            headers: {
                'Authorization': `Bearer ${this.key}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
    }
    async request({ endpoint, method = 'GET', data, headers }) {
        try {
            const response = await this.axios({
                method,
                url: endpoint,
                data,
                headers
            });
            return response.data;
        }
        catch (error) {
            if (error.response) {
                throw new Error(`Request failed with status ${error.response.status}: ${JSON.stringify(error.response.data)}`);
            }
            throw error;
        }
    }
}
exports.NodeactylRequest = NodeactylRequest;
