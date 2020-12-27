import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model, Schema } from 'mongoose';
import { BaseUserModel } from './models/base-user.model';
import * as bcrypt from 'bcrypt';
import { ModelRepo } from '../core/services/model.repo';

@Injectable()
export class BaseUserService<T = BaseUserModel> extends ModelRepo<T> {
  constructor(
    @InjectModel('user') public userModel: Model<T & Document>,
  ) {
    super(userModel);
  }

  async createUser(user: T): Promise<T & Document> {
    return this.create({
      ...(user as any),
      password: this.hashPassword(user['password']),
    });
  }

  async updateUser(user: T & Document): Promise<T & Document> {
    return this.updateOne(user._id, user);
  }

  public async findByEmail(email: string) {
    try {
      return await this.findOne({ email: email } as any);
    } catch (e) {
      throw new Error(`Couldn't find user with email "${email}"`);
    }
  }

  private hashPassword(password: string): string {
    return bcrypt.hashSync(password, 10);
  }

  public comparePassword(password: string, hash: string): boolean {
    return bcrypt.compareSync(password, hash);
  }
}
