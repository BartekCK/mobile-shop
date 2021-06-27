import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Phone as PhoneInterface } from '../interfaces/phone.interface';

export type PhoneDocument = Phone & Document;

@Schema()
export class Phone {
  @Prop()
  brand: string;

  @Prop()
  phoneModel: string;

  @Prop()
  price: number;

  @Prop()
  path: string;

  toClient: () => PhoneInterface;
}

export const PhoneSchema = SchemaFactory.createForClass(Phone);

PhoneSchema.method('toClient', function (): PhoneInterface {
  const obj = this.toObject();

  obj.id = obj._id;
  delete obj._id;
  delete obj.__v;

  return { ...obj } as PhoneInterface;
});
