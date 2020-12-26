"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var BaseUserModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseUserModule = void 0;
const common_1 = require("@nestjs/common");
const base_user_service_1 = require("./base-user.service");
const mongoose_1 = require("@nestjs/mongoose");
const base_user_model_1 = require("./models/base-user.model");
let BaseUserModule = BaseUserModule_1 = class BaseUserModule {
    static register(userModelClass = base_user_model_1.BaseUserModel, userCollectionName = "user") {
        return {
            module: BaseUserModule_1,
            providers: [base_user_service_1.BaseUserService],
            imports: [
                mongoose_1.MongooseModule.forFeature([
                    {
                        name: "user",
                        schema: mongoose_1.SchemaFactory.createForClass(userModelClass),
                    },
                ]),
            ],
            exports: [base_user_service_1.BaseUserService, mongoose_1.MongooseModule],
        };
    }
};
BaseUserModule = BaseUserModule_1 = __decorate([
    common_1.Module({})
], BaseUserModule);
exports.BaseUserModule = BaseUserModule;
//# sourceMappingURL=base-user.module.js.map