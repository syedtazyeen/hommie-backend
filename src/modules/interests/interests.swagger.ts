import { applyDecorators } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiQuery,
  ApiResponse,
} from '@nestjs/swagger';
import {
  CreateInterestRequest,
  UpdateInterestRequest,
  InterestResponse,
} from './interests.dto';

export const SwaggerTag = {
  createInterest: () =>
    applyDecorators(
      ApiBearerAuth(),
      ApiOperation({
        summary: 'Create a new interest',
      }),
      ApiBody({ type: CreateInterestRequest }),
      ApiResponse({
        status: 201,
        description: 'Successfully created a new interest',
        type: InterestResponse,
      }),
    ),
  getInterests: () =>
    applyDecorators(
      ApiBearerAuth(),
      ApiOperation({
        summary: 'Retrieve all interests',
      }),
      ApiQuery({
        name: 'userId',
        required: false,
        description: 'Filter interests by user ID',
      }),
      ApiResponse({
        status: 200,
        description: 'Successfully retrieved all interests',
        type: [InterestResponse],
      }),
    ),
  getInterestById: () =>
    applyDecorators(
      ApiBearerAuth(),
      ApiOperation({
        summary: 'Retrieve a specific interest by ID',
      }),
      ApiResponse({
        status: 200,
        description: 'Successfully retrieved the interest',
        type: InterestResponse,
      }),
    ),
  updateInterest: () =>
    applyDecorators(
      ApiBearerAuth(),
      ApiOperation({
        summary: 'Update an existing interest',
      }),
      ApiBody({ type: UpdateInterestRequest }),
      ApiResponse({
        status: 200,
        description: 'Successfully updated the interest',
        type: InterestResponse,
      }),
    ),
  deleteInterest: () =>
    applyDecorators(
      ApiBearerAuth(),
      ApiOperation({
        summary: 'Delete an interest',
      }),
      ApiResponse({
        status: 200,
        description: 'Successfully deleted the interest',
      }),
    ),
};
