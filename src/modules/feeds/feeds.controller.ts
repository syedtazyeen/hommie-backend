import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { FeedsService } from './feeds.service';
import { AuthGuard } from '@/src/common/guards';
import { RequestWithUser } from '@/src/common/types';
import { SwaggerTag } from './feeds.swagger';

@Controller('feeds')
@UseGuards(AuthGuard)
export class FeedsController {
  constructor(private readonly feedsService: FeedsService) {}

  @Get('/me')
  @SwaggerTag.getFeedForUser()
  async findMe(@Req() req: RequestWithUser) {
    const userId = req.user.sub;
    return this.feedsService.findByTags(userId);
  }
}
