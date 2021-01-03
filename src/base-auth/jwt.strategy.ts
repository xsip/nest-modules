import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import {
  createParamDecorator,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
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
export const AdminAuthUser = createParamDecorator(function (
  data,
  req,
) {
  const user: BaseUserModel = req.args[0].user;
  if (user.role !== BaseUserRole.ADMIN) {
    throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
  }
  return user;
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
