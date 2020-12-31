import { BaseUserService } from '../base-user';
import { JwtService } from '@nestjs/jwt';
export declare class BaseAuthService {
    userService: BaseUserService;
    private jwtService;
    constructor(userService: BaseUserService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
//# sourceMappingURL=base-auth.service.d.ts.map