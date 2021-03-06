"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseModelRepo = void 0;
class BaseModelRepo {
    constructor(model) {
        this.model = model;
    }
    async findOne(query) {
        return this.model.findOne(query).exec();
    }
    async findOneById(id) {
        return this.model.findById(id).exec();
    }
    async findMany(query) {
        return this.model.find(query).exec();
    }
    async updateOne(id, model) {
        return this.model.findByIdAndUpdate(id, model).exec();
    }
    async create(model) {
        return this.model.create(model);
    }
}
exports.BaseModelRepo = BaseModelRepo;
//# sourceMappingURL=base-model.repo.js.map