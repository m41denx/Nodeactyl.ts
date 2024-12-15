import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { NodeactylRequestOptions } from '../types';

export class NodeactylRequest {
  protected host: string;
  protected key: string;
  protected axios: AxiosInstance;

  constructor(host: string, key: string) {
    this.host = host.endsWith('/') ? host.slice(0, -1) : host;
    this.key = key;
    this.axios = axios.create({
      baseURL: this.host,
      timeout: 30000,
      headers: {
        'Authorization': `Bearer ${this.key}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
  }

  protected async request<T = any>({ endpoint, method = 'GET', data, headers }: NodeactylRequestOptions): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axios({
        method,
        url: endpoint,
        data,
        headers
      });
      return response.data;
    } catch (error: any) {
      if (error.response) {
        throw new Error(`Request failed with status ${error.response.status}: ${JSON.stringify(error.response.data)}`);
      }
      throw error;
    }
  }
}
