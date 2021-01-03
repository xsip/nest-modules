import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  SetMetadata,
} from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Reflector } from '@nestjs/core';
import { BaseUserModel, BaseUserRole } from '../base-user/models';
import { BaseUserService } from '../base-user';
import { JwtService } from '@nestjs/jwt';
import { Document } from 'mongoose';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const RoleGuard = (role: BaseUserRole, doubleCheck = true) =>
  SetMetadata('role', role);

@Injectable()
export class RoleGuardService implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    @Inject('UserService') private userService: BaseUserService,
    private jwtService: JwtService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const role = this.reflector.get<BaseUserRole>(
      'role',
      context.getHandler(),
    );
    if (!role) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const jwt = request.headers.authorization?.replace('Bearer ', '');
    if (!jwt) {
      return false;
    }
    const user: BaseUserModel & Document = this.jwtService.decode(
      jwt,
    ) as BaseUserModel & Document;
    const foundUser: BaseUserModel &
      Document = await this.userService.findOneById(user._id);

    return foundUser && foundUser.role && foundUser.role === role;
  }
}
