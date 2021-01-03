import {
  CanActivate,
  ExecutionContext,
  Injectable,
  SetMetadata,
} from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Reflector } from '@nestjs/core';
import { BaseUserModel, BaseUserRole } from '../base-user/models';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const RoleGuard = (role: BaseUserRole) =>
  SetMetadata('role', role);

@Injectable()
export class RoleGuardService implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const role = this.reflector.get<BaseUserRole>(
      'role',
      context.getHandler(),
    );
    if (!role) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user: BaseUserModel = request.args[0].user;
    return user && user.role && user.role === role;
  }
}
