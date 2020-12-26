import { DynamicModule, Module, Type } from "@nestjs/common";
import { BaseUserService } from "./base-user.service";
import { MongooseModule, SchemaFactory } from "@nestjs/mongoose";
import { BaseUserModel } from "./models/base-user.model";
import { BaseUserController } from "./base-user.controller";

@Module({})
export class BaseUserModule {
  static register(
    userModelClass: unknown = BaseUserModel,
    controller = BaseUserController,
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
      controllers: [BaseUserController],
      exports: [BaseUserService, MongooseModule],
    };
  }
}
