import { Document, FilterQuery, Model, ObjectId } from 'mongoose';

export class ModelRepo<T> {
  constructor(public model: Model<T & Document>) {}

  async findOne(query: Partial<T> | FilterQuery<T>): Promise<T> {
    return this.model.findOne(query as any).exec();
  }

  async findOneById(id: ObjectId): Promise<T> {
    return this.model.findById(id).exec();
  }

  async findMany(query: FilterQuery<T>): Promise<T[]> {
    return this.model.find(query as any).exec();
  }

  async updateOne(id: ObjectId, model: T): Promise<T> {
    return this.model.findByIdAndUpdate(id, model).exec();
  }

  async create(model: T & Document): Promise<T> {
    return this.model.create(model as T & Document);
  }
}
