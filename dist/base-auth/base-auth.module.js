"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var BaseAuthModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseAuthModule = void 0;
const common_1 = require("@nestjs/common");
const base_auth_service_1 = require("./base-auth.service");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const jwt_strategy_1 = require("./jwt.strategy");
const role_guard_1 = require("./role.guard");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const core_1 = require("@nestjs/core");
let BaseAuthModule = BaseAuthModule_1 = class BaseAuthModule {
    static register(userService, UserModule, jwtSecret, doubleCheck, expiresIn = '10h') {
        return {
            module: BaseAuthModule_1,
            providers: [
                base_auth_service_1.BaseAuthService,
                { provide: 'UserService', useClass: userService },
                { provide: 'JwtSecret', useValue: jwtSecret },
                { provide: 'DoubleCheck', useValue: doubleCheck },
                jwt_strategy_1.JwtStrategy,
                {
                    provide: core_1.APP_GUARD,
                    useClass: role_guard_1.RoleGuardService,
                },
            ],
            imports: [
                UserModule,
                passport_1.PassportModule,
                jwt_1.JwtModule.register({
                    secret: jwtSecret,
                    signOptions: { expiresIn },
                }),
            ],
            exports: [base_auth_service_1.BaseAuthService, jwt_strategy_1.JwtStrategy, UserModule],
        };
    }
};
BaseAuthModule = BaseAuthModule_1 = __decorate([
    common_1.Module({})
], BaseAuthModule);
exports.BaseAuthModule = BaseAuthModule;
//# sourceMappingURL=base-auth.module.js.map