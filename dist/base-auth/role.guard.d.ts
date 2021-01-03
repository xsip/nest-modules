import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { BaseUserRole } from '../base-user/models';
export declare const RoleGuard: (role: BaseUserRole) => import("@nestjs/common").CustomDecorator<string>;
export declare class RoleGuardService implements CanActivate {
    private readonly reflector;
    constructor(reflector: Reflector);
    canActivate(context: ExecutionContext): boolean;
}
//# sourceMappingURL=role.guard.d.ts.map