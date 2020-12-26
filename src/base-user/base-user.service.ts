import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Document, Model } from "mongoose";
import { BaseUserModel } from "./models/base-user.model";
import * as bcrypt from "bcrypt";

@Injectable()
export class BaseUserService<T = BaseUserModel> {
  constructor(@InjectModel("user") public userModel: Model<T & Document>) {}

  async createUser(user: T): Promise<T> {
    return this.userModel.create({
      ...(user as any),
      password: this.hashPassword(user["password"]),
    } as T & Document);
  }

  public async findByEmail(email: string) {
    try {
      return await this.userModel.findOne({ email: email } as any);
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
