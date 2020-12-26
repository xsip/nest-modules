import { Body, Controller, Post } from "@nestjs/common";
import { BaseUserService } from "./base-user.service";
import { BaseUserModel } from "./models";

@Controller("user")
export class BaseUserController<T = BaseUserModel> {
  constructor(private userService: BaseUserService<T>) {}

  @Post("/create")
  private async createUser(@Body() user: T) {
    return await this.userService.createUser(user);
  }
}
