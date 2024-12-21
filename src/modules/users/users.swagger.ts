import { applyDecorators } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiQuery,
  ApiResponse,
} from '@nestjs/swagger';
import {
  UpdateUserRequest,
  UpdateUserStatusRequest,
  UserResponse,
} from './users.dto';

export const SwaggerTag = {
  findAll: () =>
    applyDecorators(
      ApiBearerAuth(),
      ApiOperation({
        summary: 'Get all users',
      }),
      ApiQuery({
        name: 'projectId',
        required: false,
      }),
      ApiQuery({
        name: 'searchQuery',
        required: false,
      }),
      ApiResponse({
        status: 200,
        description: 'Successfully retrieved list of users',
        type: [UserResponse],
      }),
    ),
  findone: () =>
    applyDecorators(
      ApiBearerAuth(),
      ApiOperation({
        summary: 'Get a user',
      }),
      ApiResponse({
        status: 200,
        description: 'Successfully retrieved list of users',
        type: UserResponse,
      }),
    ),
  findme: () =>
    applyDecorators(
      ApiBearerAuth(),
      ApiOperation({
        summary: 'Get current user',
      }),
      ApiResponse({
        status: 200,
        description: 'Successfully retrieved current user',
        type: UserResponse,
      }),
    ),
  update: () =>
    applyDecorators(
      ApiBearerAuth(),
      ApiOperation({
        summary: 'Update a user',
      }),
      ApiBody({ type: UpdateUserRequest }),
      ApiResponse({
        status: 200,
        description: 'Successfully Updated a user',
      }),
    ),
  verifyUser: () =>
    applyDecorators(
      ApiBearerAuth(),
      ApiOperation({
        summary: 'Update verify user verify status',
      }),
      ApiQuery({
        name: 'isVerified',
        type: Boolean,
      }),
      ApiResponse({
        status: 200,
        description: 'Successfully Updated a user verify status',
      }),
    ),
  updateStatus: () =>
    applyDecorators(
      ApiBearerAuth(),
      ApiOperation({
        summary: 'Update a user status',
      }),
      ApiBody({
        type: UpdateUserStatusRequest,
      }),
      ApiResponse({
        status: 200,
        description: 'Successfully Updated a user status',
      }),
    ),
  delete: () =>
    applyDecorators(
      ApiBearerAuth(),
      ApiOperation({
        summary: 'Delete user',
      }),
      ApiResponse({
        status: 200,
        description: 'Successfully deleted a user',
      }),
    ),
};
