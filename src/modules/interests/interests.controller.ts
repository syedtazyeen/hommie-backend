import { AuthGuard } from '@/src/common/guards';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreateInterestRequest, UpdateInterestRequest } from './interests.dto';
import { InterestsService } from './interests.service';
import { SwaggerTag } from './interests.swagger';

@Controller('interests')
@UseGuards(AuthGuard)
export class InterestsController {
  constructor(private readonly interestsService: InterestsService) {}

  @Post()
  @SwaggerTag.createInterest()
  create(@Body() body: CreateInterestRequest) {
    return this.interestsService.create(body);
  }

  @Get(':id')
  @SwaggerTag.getInterestById()
  findOne(@Param('id') id: string) {
    return this.interestsService.findOne(id);
  }

  @Patch(':id')
  @SwaggerTag.updateInterest()
  update(
    @Param('id') id: string,
    @Body() updateInterestDto: UpdateInterestRequest,
  ) {
    return this.interestsService.update(id, updateInterestDto);
  }

  @Delete(':id')
  @SwaggerTag.deleteInterest()
  remove(@Param('id') id: string) {
    return this.interestsService.remove(id);
  }
}
