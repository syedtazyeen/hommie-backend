import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../users/users.schema';
import { Model } from 'mongoose';

@Injectable()
export class FeedsService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findByTags(userId : string) {
    const user = await this.userModel.findById(userId)

    
  }
}
