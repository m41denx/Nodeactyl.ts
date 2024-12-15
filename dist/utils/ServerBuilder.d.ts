import { ServerBuildOptions } from '../types';
export declare class ServerBuilder {
    private options;
    constructor();
    setName(name: string): this;
    setUser(userId: number): this;
    setEgg(eggId: number): this;
    setDockerImage(image: string): this;
    setStartup(startup: string): this;
    setEnvironment(environment: Record<string, string>): this;
    setLimits(memory: number, swap: number, disk: number, io: number, cpu: number): this;
    setFeatureLimits(databases: number, backups: number, allocations: number): this;
    setAllocation(defaultId: number, additional?: number[]): this;
    build(): ServerBuildOptions;
}
