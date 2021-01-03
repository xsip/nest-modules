import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import {
  createParamDecorator,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  SetMetadata,
} from '@nestjs/common';
import {
  BaseUserModel,
  BaseUserRole,
  BaseUserService,
} from '../base-user';
import { Document } from 'mongoose';

export const AuthUser = createParamDecorator((data, req) => {
  return req.args[0].user;
});

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject('JwtSecret') jwtSecret: string,
    @Inject('DoubleCheck') private doubleCheck: string,
    @Inject('UserService') public userService: BaseUserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtSecret,
    });
  }

  async validate(payload: BaseUserModel & Document) {
    if (this.doubleCheck) {
      const foundUser = await this.userService.findOneById(
        payload._id,
      );
      return foundUser;
    }
    return payload;
  }
}
