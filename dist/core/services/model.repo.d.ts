import { Document, FilterQuery, Model, ObjectId } from 'mongoose';
export declare class ModelRepo<T> {
    model: Model<T & Document>;
    constructor(model: Model<T & Document>);
    findOne(query: Partial<T> | FilterQuery<T>): Promise<T & Document>;
    findOneById(id: ObjectId): Promise<T & Document>;
    findMany(query: FilterQuery<T>): Promise<(T & Document)[]>;
    updateOne(id: ObjectId, model: T): Promise<T & Document>;
    create(model: T & Document): Promise<T & Document>;
}
//# sourceMappingURL=model.repo.d.ts.map