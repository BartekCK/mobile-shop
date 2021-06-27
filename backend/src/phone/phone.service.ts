import { Injectable } from '@nestjs/common';
import { Phone } from './interfaces/phone.interface';
import { Phone as PhoneModel, PhoneDocument } from './schemas/phone.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PhoneService {
  constructor(
    @InjectModel(PhoneModel.name)
    private phoneModel: Model<PhoneDocument>,
  ) {}

  async getPhones(): Promise<Phone[]> {
    const phones = await this.phoneModel.find();

    return phones.map((el) => el.toClient());
  }
}
