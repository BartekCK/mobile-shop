import { Stripe } from 'stripe';

export class PaymentClient {
  private readonly _client: Stripe;

  constructor(apiKey: string) {
    this._client = new Stripe(apiKey, { apiVersion: '2020-08-27' });
  }

  get client(): Stripe {
    return this._client;
  }
}
