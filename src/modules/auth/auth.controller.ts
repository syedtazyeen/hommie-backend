import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SwaggerTag } from './auth.swagger';
import { CheckEmailAuthRequest, LoginAuthRequest, RegisterAuthRequest } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('validate')
  @HttpCode(200)
  @SwaggerTag.validateEmail()
  async validate(@Body() checkEmailDto: CheckEmailAuthRequest) {
    return this.authService.validateEmail(checkEmailDto.email);
  }

  @Post('login')
  @HttpCode(200)
  @SwaggerTag.login()
  async login(@Body() loginDto: LoginAuthRequest) {
    return this.authService.login(loginDto);
  }

  @Post('register')
  @HttpCode(201)
  @SwaggerTag.register()
  async register(@Body() registerDto: RegisterAuthRequest) {
    await this.authService.register(registerDto);
    return;
  }
}
