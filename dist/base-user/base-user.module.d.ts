import { DynamicModule } from "@nestjs/common";
import { BaseUserController } from "./base-user.controller";
export declare class BaseUserModule {
    static register(userModelClass?: unknown, controller?: typeof BaseUserController, userCollectionName?: string): DynamicModule;
}
//# sourceMappingURL=base-user.module.d.ts.map