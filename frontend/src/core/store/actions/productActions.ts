import { IAction, IProduct } from '../../types';
import { Type } from '../types';

export const addProduct = (item: IProduct): IAction<IProduct> => ({ type: Type.AddProduct, payload: item });

export const removeProduct = (id: string): IAction<{ id: string }> => ({ type: Type.RemoveProduct, payload: { id } });

