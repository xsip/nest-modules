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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseUserModel = exports.BaseUserRole = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const base_helpers_1 = require("../../core/base-helpers");
var BaseUserRole;
(function (BaseUserRole) {
    BaseUserRole["ADMIN"] = "Admin";
    BaseUserRole["USER"] = "User";
})(BaseUserRole = exports.BaseUserRole || (exports.BaseUserRole = {}));
let BaseUserModel = class BaseUserModel {
};
__decorate([
    swagger_1.ApiProperty(),
    mongoose_1.Prop(),
    __metadata("design:type", String)
], BaseUserModel.prototype, "firstName", void 0);
__decorate([
    swagger_1.ApiProperty(),
    mongoose_1.Prop(),
    __metadata("design:type", String)
], BaseUserModel.prototype, "lastName", void 0);
__decorate([
    swagger_1.ApiProperty(),
    mongoose_1.Prop(),
    __metadata("design:type", String)
], BaseUserModel.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty(),
    mongoose_1.Prop(),
    __metadata("design:type", String)
], BaseUserModel.prototype, "password", void 0);
__decorate([
    swagger_1.ApiProperty(),
    mongoose_1.Prop(),
    __metadata("design:type", Date)
], BaseUserModel.prototype, "createdAt", void 0);
__decorate([
    swagger_1.ApiProperty(),
    mongoose_1.Prop(),
    __metadata("design:type", Date)
], BaseUserModel.prototype, "updatedAt", void 0);
__decorate([
    swagger_1.ApiProperty(base_helpers_1.enumForSwagger(BaseUserRole, 'BaseUserRole')),
    mongoose_1.Prop(),
    __metadata("design:type", String)
], BaseUserModel.prototype, "role", void 0);
BaseUserModel = __decorate([
    mongoose_1.Schema({ timestamps: true })
], BaseUserModel);
exports.BaseUserModel = BaseUserModel;
//# sourceMappingURL=base-user.model.js.map