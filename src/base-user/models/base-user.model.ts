import { Prop, Schema } from '@nestjs/mongoose';
import { Document, SchemaDefinition } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type BaseUserDocument = BaseUserModel & Document;
export interface CreateUserDto {
  name: string;
  email: string;
  password: string;
}
@Schema({ timestamps: true })
export class BaseUserModel {
  @ApiProperty()
  @Prop()
  firstName: string;

  @ApiProperty()
  @Prop()
  lastName: string;

  @ApiProperty()
  @Prop()
  email: string;

  @ApiProperty()
  @Prop()
  password: string;

  @ApiProperty()
  @Prop()
  createdAt: Date;

  @ApiProperty()
  @Prop()
  updatedAt: Date;
}
