import { UserStatus } from '@/src/common/enums';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional } from 'class-validator';

export class UserResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty({ required: false })
  imageUrl: string;

  @ApiProperty({ enum: UserStatus })
  status: string;

  @ApiProperty()
  isVerified: boolean;
}

export class UpdateUserRequest {
  @ApiProperty({ required: false })
  @IsOptional()
  email: string;

  @ApiProperty({ required: false })
  @IsOptional()
  name: string;

  @ApiProperty({ required: false })
  @IsOptional()
  imageUrl: string;
}

export class UpdateUserStatusRequest {
  @ApiProperty({ enum: UserStatus })
  @IsOptional()
  @IsEnum(UserStatus)
  status: UserStatus;
}
