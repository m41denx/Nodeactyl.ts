import { AxiosInstance } from 'axios';
import { NodeactylRequestOptions } from '../types';
export declare class NodeactylRequest {
    protected host: string;
    protected key: string;
    protected axios: AxiosInstance;
    constructor(host: string, key: string);
    protected request<T = any>({ endpoint, method, data, headers }: NodeactylRequestOptions): Promise<T>;
}
