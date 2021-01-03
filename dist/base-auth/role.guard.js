"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleGuardService = exports.RoleGuard = void 0;
const common_1 = require("@nestjs/common");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const core_1 = require("@nestjs/core");
const base_user_1 = require("../base-user");
const jwt_1 = require("@nestjs/jwt");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const RoleGuard = (role, doubleCheck = true) => common_1.SetMetadata('role', role);
exports.RoleGuard = RoleGuard;
let RoleGuardService = class RoleGuardService {
    constructor(reflector, userService, jwtService) {
        this.reflector = reflector;
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async canActivate(context) {
        var _a;
        const role = this.reflector.get('role', context.getHandler());
        if (!role) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const jwt = (_a = request.headers.authorization) === null || _a === void 0 ? void 0 : _a.replace('Bearer ', '');
        if (!jwt) {
            return false;
        }
        const user = this.jwtService.decode(jwt);
        const foundUser = await this.userService.findOneById(user._id);
        return foundUser && foundUser.role && foundUser.role === role;
    }
};
RoleGuardService = __decorate([
    common_1.Injectable(),
    __param(1, common_1.Inject('UserService')),
    __metadata("design:paramtypes", [core_1.Reflector,
        base_user_1.BaseUserService,
        jwt_1.JwtService])
], RoleGuardService);
exports.RoleGuardService = RoleGuardService;
//# sourceMappingURL=role.guard.js.map