import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import {
  BaseUserModel,
  BaseUserRole,
} from './models/base-user.model';
import * as bcrypt from 'bcrypt';
import { BaseModelRepo } from '../core/base-services/base-model.repo';
import { v4 as uuidV4 } from 'uuid';

@Injectable()
export class BaseUserService<
  T = BaseUserModel
> extends BaseModelRepo<T> {
  constructor(
    @InjectModel('user') public userModel: Model<T & Document>,
  ) {
    super(userModel);
  }

  async createUser(user: T): Promise<T & Document> {
    const userCopy: BaseUserModel = user;
    userCopy.verificationCode = uuidV4();
    userCopy.verificationEmailSent = false;
    userCopy.role = BaseUserRole.USER;
    return this.create({
      ...(userCopy as any),
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
