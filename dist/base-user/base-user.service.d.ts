import { Document, Model } from 'mongoose';
import { BaseUserModel } from './models/base-user.model';
import { BaseModelRepo } from '../core/base-services/base-model.repo';
export declare class BaseUserService<T = BaseUserModel> extends BaseModelRepo<T> {
    userModel: Model<T & Document>;
    constructor(userModel: Model<T & Document>);
    createUser(user: T): Promise<T & Document>;
    updateUser(user: T & Document): Promise<T & Document>;
    findByEmail(email: string): Promise<T & Document<any>>;
    private hashPassword;
    comparePassword(password: string, hash: string): boolean;
}
//# sourceMappingURL=base-user.service.d.ts.map