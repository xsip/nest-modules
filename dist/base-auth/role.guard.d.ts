import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { BaseUserRole } from '../base-user/models';
import { BaseUserService } from '../base-user';
import { JwtService } from '@nestjs/jwt';
export declare const RoleGuard: (role: BaseUserRole, doubleCheck?: boolean) => import("@nestjs/common").CustomDecorator<string>;
export declare class RoleGuardService implements CanActivate {
    private readonly reflector;
    private userService;
    private jwtService;
    constructor(reflector: Reflector, userService: BaseUserService, jwtService: JwtService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
//# sourceMappingURL=role.guard.d.ts.map