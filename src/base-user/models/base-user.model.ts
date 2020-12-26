import { Prop, Schema } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { ApiProperty } from "@nestjs/swagger";

export type BaseUserDocument = BaseUserModel & Document;
export interface CreateUserDto {
  name: string;
  email: string;
  password: string;
}
@Schema()
export class BaseUserModel {
  @ApiProperty()
  @Prop()
  name: string;
  @ApiProperty()
  @Prop()
  email: string;
  @ApiProperty()
  @Prop()
  password: string;
}
