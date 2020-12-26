import { Document, Model } from "mongoose";
import { BaseUserModel } from "./models/base-user.model";
export declare class BaseUserService<T = BaseUserModel> {
    userModel: Model<T & Document>;
    constructor(userModel: Model<T & Document>);
    createUser(user: T): Promise<T>;
    findByEmail(email: string): Promise<T & Document<any>>;
    private hashPassword;
    comparePassword(password: string, hash: string): boolean;
}
//# sourceMappingURL=base-user.service.d.ts.map