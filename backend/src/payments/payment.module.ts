import { Module } from '@nestjs/common';
import { PaymentClient } from './client/payment.client';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';

@Module({
  providers: [
    {
      provide: PaymentClient,
      useFactory: () => new PaymentClient(process.env.STRIPE_SECRET_KEY),
    },
    PaymentService,
  ],
  controllers: [PaymentController],
})
export class PaymentModule {}
