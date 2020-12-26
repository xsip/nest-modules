import { DynamicModule, Module, Type } from "@nestjs/common";
import { BaseUserService } from "./base-user.service";
import { MongooseModule, SchemaFactory } from "@nestjs/mongoose";
import { BaseUserModel } from "./models/base-user.model";

@Module({})
export class BaseUserModule {
  static register(
    userModelClass: unknown = BaseUserModel,
    userCollectionName = "user"
  ): DynamicModule {
    return {
      module: BaseUserModule,
      providers: [BaseUserService],
      imports: [
        MongooseModule.forFeature([
          {
            name: "user",
            schema: SchemaFactory.createForClass(userModelClass as Type),
          },
        ]),
      ],
      exports: [BaseUserService, MongooseModule],
    };
  }
}
