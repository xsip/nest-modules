import { DynamicModule, Module } from "@nestjs/common";
import { BaseAuthService } from "./base-auth.service";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { JwtStrategy } from "./jwt.strategy";
import { MongooseModule } from "@nestjs/mongoose";

@Module({})
export class BaseAuthModule {
  static register(
    userService: any,
    jwtSecret: string,
    expiresIn = "10h"
  ): DynamicModule {
    return {
      module: BaseAuthModule,
      providers: [
        BaseAuthService,
        { provide: "UserService", useClass: userService },
        { provide: "JwtSecret", useValue: jwtSecret },
        JwtStrategy,
      ],
      imports: [
        MongooseModule,
        PassportModule,
        JwtModule.register({
          secret: jwtSecret,
          signOptions: { expiresIn },
        }),
      ],
      exports: [BaseAuthService, JwtStrategy, MongooseModule],
    };
  }
}
