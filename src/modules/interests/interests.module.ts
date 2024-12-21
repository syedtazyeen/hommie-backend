import { Module } from '@nestjs/common';
import { InterestsService } from './interests.service';
import { InterestsController } from './interests.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Interest, InterestSchema } from './interests.schema';
import { AuthService } from '../auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Interest.name, schema: InterestSchema },
    ]),
    UsersModule,
  ],
  controllers: [InterestsController],
  providers: [InterestsService, AuthService, JwtService],
})
export class InterestsModule {}
