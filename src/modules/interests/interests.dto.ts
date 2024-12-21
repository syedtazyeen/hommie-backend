import { IsEnum, IsOptional } from 'class-validator';
import {
  HobbyTags,
  PartyModeTags,
  ProfessionTags,
  SleepTags,
} from '@/src/common/enums';
import { ApiProperty } from '@nestjs/swagger';

export class CreateInterestRequest {
  @ApiProperty({ enum: SleepTags, description: 'Sleep preference' })
  @IsEnum(SleepTags)
  sleep: SleepTags;

  @ApiProperty({ enum: ProfessionTags, description: 'Profession' })
  @IsEnum(ProfessionTags)
  profession: ProfessionTags;

  @ApiProperty({ enum: PartyModeTags, description: 'Party mode preference' })
  @IsEnum(PartyModeTags)
  partyMode: PartyModeTags;

  @ApiProperty({ enum: HobbyTags, description: 'Hobby' })
  @IsEnum(HobbyTags)
  hobby: HobbyTags;
}

export class InterestResponse {
  @ApiProperty({
    description: 'ID of the interest',
    example: '60b8d6f5f5c6f2f91d3c5678',
  })
  id: string;

  @ApiProperty({ enum: SleepTags, description: 'Sleep preference' })
  sleep: SleepTags;

  @ApiProperty({ enum: ProfessionTags, description: 'Profession' })
  profession: ProfessionTags;

  @ApiProperty({ enum: PartyModeTags, description: 'Party mode preference' })
  partyMode: PartyModeTags;

  @ApiProperty({ enum: HobbyTags, description: 'Hobby' })
  hobby: HobbyTags;
}

export class UpdateInterestRequest {
  @ApiProperty({
    enum: SleepTags,
    description: 'Sleep preference',
    required: false,
  })
  @IsOptional()
  @IsEnum(SleepTags)
  sleep?: SleepTags;

  @ApiProperty({
    enum: ProfessionTags,
    description: 'Profession',
    required: false,
  })
  @IsOptional()
  @IsEnum(ProfessionTags)
  profession?: ProfessionTags;

  @ApiProperty({
    enum: PartyModeTags,
    description: 'Party mode preference',
    required: false,
  })
  @IsOptional()
  @IsEnum(PartyModeTags)
  partyMode?: PartyModeTags;

  @ApiProperty({ enum: HobbyTags, description: 'Hobby', required: false })
  @IsOptional()
  @IsEnum(HobbyTags)
  hobby?: HobbyTags;

  @ApiProperty({ description: 'Timestamp when the interest was created' })
  createdAt: Date;

  @ApiProperty({ description: 'Timestamp when the interest was last updated' })
  updatedAt: Date;
}
