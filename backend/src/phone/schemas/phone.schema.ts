import {Prop, SchemaFactory} from "@nestjs/mongoose";

export type PhoneDocument = Phone & Document;

export class Phone {
    @Prop()
    brand: string;

    @Prop()
    model: string

    @Prop()
    price: number
}

export const PhoneSchema = SchemaFactory.createForClass(Phone)