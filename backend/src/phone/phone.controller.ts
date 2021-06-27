import {Controller, Get} from "@nestjs/common";
import {PhoneService} from "./phone.service";
import {ReadPhoneDto} from "./dto/read-phone.dto";
import {Phone} from "./interfaces/phone.interface";

@Controller('phones')
export class PhoneController {

    constructor(private readonly phoneService: PhoneService) {
    }

    @Get()
    async getPhones():Promise<ReadPhoneDto[]> {
        const phones: Phone[] = await this.phoneService.getPhones()
        return phones.map(ReadPhoneDto.toReadDto) ;
    }
}