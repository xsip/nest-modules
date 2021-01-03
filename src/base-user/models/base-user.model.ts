import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { enumForSwagger } from '../../core/base-helpers';

export enum BaseUserRole {
  ADMIN = 'Admin',
  USER = 'User',
}

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
  firstName?: string;

  @ApiProperty()
  @Prop()
  lastName?: string;

  @ApiProperty()
  @Prop()
  email?: string;

  @ApiProperty()
  @Prop()
  password?: string;

  @ApiProperty()
  @Prop()
  verificationCode?: string;

  @ApiProperty()
  @Prop()
  isVerified?: boolean;

  @ApiProperty()
  @Prop()
  verificationEmailSent?: boolean;

  @ApiProperty()
  @Prop()
  verificationDate?: Date;

  @ApiProperty()
  @Prop()
  createdAt?: Date;

  @ApiProperty()
  @Prop()
  updatedAt?: Date;

  @ApiProperty(enumForSwagger(BaseUserRole, 'BaseUserRole'))
  @Prop()
  role?: BaseUserRole;
}
