import { Inject, Injectable } from '@nestjs/common';
import { BaseUserModel, BaseUserService } from '../base-user';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class BaseAuthService {
  constructor(
    @Inject('UserService') public userService: BaseUserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    pass: string,
  ): Promise<null | BaseUserModel> {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      return null;
    }
    if (
      this.userService.comparePassword(pass, user.password) &&
      user.isVerified
    ) {
      // const { password, ...result } = user;
      delete user.password;
      return user.toJSON();
    }
    return null;
  }

  async login(user: any) {
    return {
      access_token: this.jwtService.sign({ ...user }),
    };
  }
}
