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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleGuardService = exports.RoleGuard = void 0;
const common_1 = require("@nestjs/common");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const core_1 = require("@nestjs/core");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const RoleGuard = (role) => common_1.SetMetadata('role', role);
exports.RoleGuard = RoleGuard;
let RoleGuardService = class RoleGuardService {
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        const role = this.reflector.get('role', context.getHandler());
        if (!role) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const user = request.args[0].user;
        return user && user.role && user.role === role;
    }
};
RoleGuardService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object])
], RoleGuardService);
exports.RoleGuardService = RoleGuardService;
//# sourceMappingURL=role.guard.js.map