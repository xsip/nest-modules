import { Document } from 'mongoose';
export declare enum BaseUserRole {
    ADMIN = "Admin",
    USER = "User"
}
export declare type BaseUserDocument = BaseUserModel & Document;
export interface CreateUserDto {
    name: string;
    email: string;
    password: string;
}
export declare class BaseUserModel {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    verificationCode?: string;
    isVerified?: boolean;
    verificationEmailSent?: boolean;
    verificationDate?: Date;
    createdAt?: Date;
    updatedAt?: Date;
    role?: BaseUserRole;
}
//# sourceMappingURL=base-user.model.d.ts.map