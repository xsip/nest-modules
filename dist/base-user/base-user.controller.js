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
exports.BaseUserController = void 0;
const common_1 = require("@nestjs/common");
const base_user_service_1 = require("./base-user.service");
let BaseUserController = class BaseUserController {
    constructor(userService) {
        this.userService = userService;
    }
    async createUser(user) {
        return await this.userService.createUser(user);
    }
};
__decorate([
    common_1.Post("/create"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BaseUserController.prototype, "createUser", null);
BaseUserController = __decorate([
    common_1.Controller("user"),
    __metadata("design:paramtypes", [base_user_service_1.BaseUserService])
], BaseUserController);
exports.BaseUserController = BaseUserController;
//# sourceMappingURL=base-user.controller.js.map