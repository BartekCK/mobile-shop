import { Type } from '../store/types';

export interface IPhone {
  readonly id: string;
  readonly brand: string;
  readonly phoneModel: string;
  readonly price: number;
  readonly path: string;
}

export interface IAction<T = Partial<IProduct>> {
  type: Type;
  payload: T;
}

export interface IStore {
  products: IProduct[];
}

export interface IProduct {
  readonly id: string;
  readonly brand: string;
  readonly phoneModel: string;
  readonly path: string;
  readonly price: number;
  readonly count: number;
}
