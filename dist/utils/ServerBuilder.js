"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerBuilder = void 0;
class ServerBuilder {
    constructor() {
        this.options = {};
    }
    setName(name) {
        this.options.name = name;
        return this;
    }
    setUser(userId) {
        this.options.user = userId;
        return this;
    }
    setEgg(eggId) {
        this.options.egg = eggId;
        return this;
    }
    setDockerImage(image) {
        this.options.docker_image = image;
        return this;
    }
    setStartup(startup) {
        this.options.startup = startup;
        return this;
    }
    setEnvironment(environment) {
        this.options.environment = environment;
        return this;
    }
    setLimits(memory, swap, disk, io, cpu) {
        this.options.limits = { memory, swap, disk, io, cpu };
        return this;
    }
    setFeatureLimits(databases, backups, allocations) {
        this.options.feature_limits = { databases, backups, allocations };
        return this;
    }
    setAllocation(defaultId, additional) {
        this.options.allocation = { default: defaultId, additional };
        return this;
    }
    build() {
        if (!this.options.name || !this.options.user || !this.options.egg || !this.options.docker_image ||
            !this.options.startup || !this.options.environment || !this.options.limits ||
            !this.options.feature_limits || !this.options.allocation) {
            throw new Error('Missing required server build options');
        }
        return this.options;
    }
}
exports.ServerBuilder = ServerBuilder;
