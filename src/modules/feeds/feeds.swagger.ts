import { applyDecorators } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FeedUserResponse } from './feeds.dto';

export const SwaggerTag = {
  getFeedForUser: () =>
    applyDecorators(
      ApiBearerAuth(),
      ApiOperation({
        summary: 'Retrieve user recommedations',
      }),
      ApiResponse({
        status: 200,
        description: 'Successfully retrieved recommedations for a user',
        type: [FeedUserResponse],
      }),
    ),
};
