import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from './modules';
import { FeedsModule } from './modules/feeds/feeds.module';
import { InterestsModule } from './modules/interests/interests.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    ConfigModule,
    FeedsModule,
    InterestsModule,
  ],
})
export class AppModule {}
