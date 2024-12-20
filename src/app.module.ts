import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from './modules';

@Module({
  imports: [UsersModule, AuthModule, ConfigModule],
})
export class AppModule {}
