import { DynamicModule, Module } from '@nestjs/common';
import { BaseAuthService } from './base-auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

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
      ],
      imports: [
        PassportModule,
        JwtModule.register({
          secret: jwtSecret,
          signOptions: { expiresIn },
        }),
      ],
      exports: [BaseAuthService, JwtStrategy],
    };
  }
}
