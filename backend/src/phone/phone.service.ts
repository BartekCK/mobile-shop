import {Injectable} from "@nestjs/common";
import {Phone} from "./interfaces/phone.interface";

@Injectable()
export class PhoneService{
    async getPhones(): Promise<Phone[]>{

        return []
    }
}