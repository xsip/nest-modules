import { Strategy } from 'passport-jwt';
import { BaseUserModel, BaseUserService } from '../base-user';
import { Document } from 'mongoose';
export declare const AuthUser: (...dataOrPipes: any[]) => ParameterDecorator;
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private doubleCheck;
    userService: BaseUserService;
    constructor(jwtSecret: string, doubleCheck: string, userService: BaseUserService);
    validate(payload: BaseUserModel & Document): Promise<BaseUserModel & Document<any>>;
}
export {};
//# sourceMappingURL=jwt.strategy.d.ts.map