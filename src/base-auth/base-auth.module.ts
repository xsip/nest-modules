import { DynamicModule, Module } from '@nestjs/common';
import { BaseAuthService } from './base-auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { RoleGuardService } from './role.guard';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { APP_GUARD } from '@nestjs/core';

@Module({})
export class BaseAuthModule {
  static register(
    userService: any,
    UserModule: any,
    jwtSecret: string,
    doubleCheck?: boolean,
    expiresIn = '10h',
  ): DynamicModule {
    return {
      module: BaseAuthModule,
      providers: [
        BaseAuthService,
        { provide: 'UserService', useClass: userService },
        { provide: 'JwtSecret', useValue: jwtSecret },
        { provide: 'DoubleCheck', useValue: doubleCheck },
        JwtStrategy,
        {
          provide: APP_GUARD,
          useClass: RoleGuardService,
        },
      ],
      imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
          secret: jwtSecret,
          signOptions: { expiresIn },
        }),
      ],
      exports: [BaseAuthService, JwtStrategy, UserModule],
    };
  }
}
