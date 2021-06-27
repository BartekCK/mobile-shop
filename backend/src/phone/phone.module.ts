import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {Phone, PhoneSchema} from "./schemas/phone.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Phone.name, schema: PhoneSchema }])],
  controllers: [],
  providers: [],
})
export class PhoneModule {}
