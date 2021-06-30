import { ApiInstance } from './ApiInstance';
import { Route } from './routes';
import { IProduct } from '../types';

const getPhone = async (phoneId?: string) => {
  const { data } = await ApiInstance.get(Route.getPhones(phoneId));

  return data;
};

const postSession = async (products: IProduct[]) => {
  const { data } = await ApiInstance.post(Route.postPurchase(), { products });

  return data;
};

export const Api = { getPhone, postSession };
