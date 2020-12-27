import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import {
  createParamDecorator,
  Inject,
  Injectable,
} from '@nestjs/common';
import { BaseUserModel, BaseUserService } from '../base-user';
import { Document } from 'mongoose';

export const AuthUser = createParamDecorator((data, req) => {
  return req.args[0].user;
});

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject('JwtSecret') jwtSecret: string,
    @Inject('UserService') public userService: BaseUserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtSecret,
    });
  }

  async validate(payload: BaseUserModel & Document) {
    const foundUser = await this.userService.findOneById(payload._id);
    return foundUser;
  }
}
