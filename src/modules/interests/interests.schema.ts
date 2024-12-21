import { Document, Types } from 'mongoose';
import {
  HobbyTags,
  PartyModeTags,
  ProfessionTags,
  SleepTags,
} from '@/src/common/enums';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from '../users/users.schema';

export type InterestDocument = Interest & Document;

@Schema({ timestamps: true })
export class Interest {
  @Prop({ type: Types.ObjectId, ref: User.name, required: true })
  userId: Types.ObjectId;

  @Prop({ enum: SleepTags })
  sleep: string;

  @Prop({ enum: ProfessionTags })
  profession: string;

  @Prop({ enum: PartyModeTags })
  partyMode: string;

  @Prop({ enum: HobbyTags })
  hobby: string;
}

export const InterestSchema = SchemaFactory.createForClass(Interest);

InterestSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret) => {
    ret.id = ret._id.toString();
    delete ret._id;
  },
});
