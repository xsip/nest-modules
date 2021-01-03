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
exports.BaseAuthService = void 0;
const common_1 = require("@nestjs/common");
const base_user_1 = require("../base-user");
const jwt_1 = require("@nestjs/jwt");
let BaseAuthService = class BaseAuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async validateUser(email, pass) {
        const user = await this.userService.findByEmail(email);
        if (!user) {
            return null;
        }
        if (this.userService.comparePassword(pass, user.password) &&
            user.isVerified) {
            // const { password, ...result } = user;
            delete user.password;
            return user.toJSON();
        }
        return null;
    }
    async login(user) {
        return {
            access_token: this.jwtService.sign(Object.assign({}, user)),
        };
    }
};
BaseAuthService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('UserService')),
    __metadata("design:paramtypes", [base_user_1.BaseUserService,
        jwt_1.JwtService])
], BaseAuthService);
exports.BaseAuthService = BaseAuthService;
//# sourceMappingURL=base-auth.service.js.map