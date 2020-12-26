import { BaseUserService } from "./base-user.service";
import { BaseUserModel } from "./models";
export declare class BaseUserController<T = BaseUserModel> {
    userService: BaseUserService<T>;
    constructor(userService: BaseUserService<T>);
    private createUser;
}
//# sourceMappingURL=base-user.controller.d.ts.map