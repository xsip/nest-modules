import { Strategy } from "passport-jwt";
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor(jwtSecret: string);
    validate(payload: any): Promise<{
        userId: any;
        username: any;
    }>;
}
export {};
//# sourceMappingURL=jwt.strategy.d.ts.map