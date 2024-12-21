import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Interest, InterestDocument } from './interests.schema';

@Injectable()
export class InterestsService {
  constructor(
    @InjectModel(Interest.name) private interestModel: Model<InterestDocument>,
  ) {}

  async create(payload: Partial<Interest>) {
    const obj = new this.interestModel(payload);
    return await obj.save();
  }

  findAll() {
    return `This action returns all interests`;
  }

  async findOne(id: string) {
    return await this.interestModel.findById(id).exec();
  }

  async update(id: string, payload: Partial<Interest>) {
    return await this.interestModel
      .findByIdAndUpdate(id, payload, { new: true })
      .exec();
  }

  async remove(id: string) {
    return await this.interestModel.findByIdAndDelete(id).exec();
  }
}
