import { ServerBuildOptions } from '../types';

export class ServerBuilder {
  private options: Partial<ServerBuildOptions>;

  constructor() {
    this.options = {};
  }

  setName(name: string): this {
    this.options.name = name;
    return this;
  }

  setUser(userId: number): this {
    this.options.user = userId;
    return this;
  }

  setEgg(eggId: number): this {
    this.options.egg = eggId;
    return this;
  }

  setDockerImage(image: string): this {
    this.options.docker_image = image;
    return this;
  }

  setStartup(startup: string): this {
    this.options.startup = startup;
    return this;
  }

  setEnvironment(environment: Record<string, string>): this {
    this.options.environment = environment;
    return this;
  }

  setLimits(memory: number, swap: number, disk: number, io: number, cpu: number): this {
    this.options.limits = { memory, swap, disk, io, cpu };
    return this;
  }

  setFeatureLimits(databases: number, backups: number, allocations: number): this {
    this.options.feature_limits = { databases, backups, allocations };
    return this;
  }

  setAllocation(defaultId: number, additional?: number[]): this {
    this.options.allocation = { default: defaultId, additional };
    return this;
  }

  build(): ServerBuildOptions {
    if (!this.options.name || !this.options.user || !this.options.egg || !this.options.docker_image ||
        !this.options.startup || !this.options.environment || !this.options.limits ||
        !this.options.feature_limits || !this.options.allocation) {
      throw new Error('Missing required server build options');
    }
    return this.options as ServerBuildOptions;
  }
}
