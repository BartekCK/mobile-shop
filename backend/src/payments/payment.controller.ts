import { Body, Controller, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}
  @Post('session')
  async verifyProductsWithSession(@Body() createPaymentDto: CreatePaymentDto) {
    const { products } = createPaymentDto;

    return this.paymentService.createSession(products);
  }
}
