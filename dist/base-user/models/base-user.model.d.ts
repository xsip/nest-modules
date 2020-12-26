import { Document } from "mongoose";
export declare type BaseUserDocument = BaseUserModel & Document;
export interface CreateUserDto {
    name: string;
    email: string;
    password: string;
}
export declare class BaseUserModel {
    name: string;
    email: string;
    password: string;
}
//# sourceMappingURL=base-user.model.d.ts.map