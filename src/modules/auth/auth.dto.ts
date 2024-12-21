import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { UserResponse } from '../users/users.dto';

export class CheckEmailAuthRequest {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;
}

export class CheckEmailAuthResponse {
  @ApiProperty()
  value: true;
}

export class LoginAuthRequest {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;
}

export class LoginAuthResponse {
  @ApiProperty()
  accessToken: string;

  @ApiProperty()
  user: UserResponse;
}

export class RegisterAuthRequest {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;
}
