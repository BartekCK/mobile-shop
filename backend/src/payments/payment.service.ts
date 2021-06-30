import { Injectable } from '@nestjs/common';
import { PaymentClient } from './client/payment.client';
import { Stripe } from 'stripe';
import { IProduct } from './interfaces/product.interface';

@Injectable()
export class PaymentService {
  constructor(private readonly paymentClient: PaymentClient) {}

  async createSession(
    products: IProduct[],
  ): Promise<Stripe.Response<Stripe.Checkout.Session>> {
    const items = products.map(
      ({ count, price, id, path, brand, phoneModel }) => ({
        amount: price * 100,
        quantity: count,
        currency: 'USD',
        name: `${brand} ${phoneModel}`,
        images: [`${process.env.BACKEND_RESOURCES_URL}/${path}`],
      }),
    );

    return this.paymentClient.client.checkout.sessions.create({
      success_url: `${process.env.FRONTEND_STRIPE_SUCCESS_URL}/?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: process.env.FRONTEND_STRIPE_CANCEL_URL,
      payment_method_types: ['card'],
      line_items: items,
      mode: 'payment',
    });
  }
}
