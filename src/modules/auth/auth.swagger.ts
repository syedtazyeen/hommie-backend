import { ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { applyDecorators } from '@nestjs/common';
import { CheckEmailAuthRequest, CheckEmailAuthResponse, LoginAuthRequest, LoginAuthResponse, RegisterAuthRequest } from './auth.dto';

export const SwaggerTag = {
  validateEmail: () =>
    applyDecorators(
      ApiOperation({
        summary: 'Validate a user email',
        deprecated: true,
      }),
      ApiBody({
        description: 'Check email for logging in',
        type: CheckEmailAuthRequest,
      }),
      ApiResponse({
        status: 200,
        description: 'Validate email for user',
        type: CheckEmailAuthResponse,
      }),
      ApiResponse({
        status: 404,
        description: 'User not found',
      }),
    ),
  login: () =>
    applyDecorators(
      ApiOperation({
        summary: 'Log in a user',
      }),
      ApiBody({
        description: 'Credentials for logging in',
        type: LoginAuthRequest,
      }),
      ApiResponse({
        status: 200,
        description: 'Successfully logged in a user',
        type: LoginAuthResponse,
      }),
      ApiResponse({
        status: 401,
        description: 'Invalid credentials',
      }),
    ),
  register: () =>
    applyDecorators(
      ApiOperation({
        summary: 'Register a new user',
      }),
      ApiBody({
        description: 'Details for registering a new user',
        type: RegisterAuthRequest,
      }),
      ApiResponse({
        status: 201,
        description: 'Successfully registered a user',
      }),
      ApiResponse({
        status: 400,
        description: 'Bad request (validation errors)',
      }),
    ),
};
