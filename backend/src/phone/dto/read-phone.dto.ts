import { Phone } from '../interfaces/phone.interface';

export class ReadPhoneDto {
  id: string;
  brand: string;
  phoneModel: string;
  price: number;

  static toReadDto(phone: Phone): ReadPhoneDto {
    return { ...phone };
  }
}
