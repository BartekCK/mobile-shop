import {Phone} from "../interfaces/phone.interface";

export class ReadPhoneDto{
    brand: string;
    model: string
    price: number

    static toReadDto(phone: Phone): ReadPhoneDto {
        return {...phone}
    }
}