import { Inject, Injectable } from '@nestjs/common';
import { BaseUserService } from '../base-user';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class BaseAuthService {
  constructor(
    @Inject('UserService') public userService: BaseUserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (this.userService.comparePassword(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    return {
      access_token: this.jwtService.sign({ ...user }),
    };
  }
}
