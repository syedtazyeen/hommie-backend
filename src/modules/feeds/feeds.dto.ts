import { ApiProperty } from '@nestjs/swagger';

export class FeedUserResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  imageUrl: string;

  @ApiProperty()
  distance: number;

  @ApiProperty()
  matchPercent: number;

  @ApiProperty()
  matchTags: string[];
}
