import { Body, Controller, Post } from "@nestjs/common";

import { ApiResponse } from "@nestjs/swagger";
import { BaseUserService } from "./base-user.service";
import { BaseUserModel } from "./models";

@Controller("user")
export class BaseUserController<T = BaseUserModel> {
  constructor(public userService: BaseUserService<T>) {}

  @Post("/create")
  private async createUser(@Body() user: T) {
    return await this.userService.createUser(user);
  }
}
