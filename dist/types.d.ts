export interface NodeactylRequestOptions {
    endpoint: string;
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    data?: any;
    headers?: Record<string, string>;
}
export interface ServerBuildOptions {
    name: string;
    user: number;
    egg: number;
    docker_image: string;
    startup: string;
    environment: Record<string, string>;
    limits: {
        memory: number;
        swap: number;
        disk: number;
        io: number;
        cpu: number;
    };
    feature_limits: {
        databases: number;
        backups: number;
        allocations: number;
    };
    allocation: {
        default: number;
        additional?: number[];
    };
}
