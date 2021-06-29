import { IAction, IProduct } from '../../types';
import { Type } from '../types';

const countAction = (value: 1 | -1, id: string) => (product: IProduct) =>
  product.id === id ? { ...product, count: product.count + value } : product;


const productReducer = (state: IProduct[] = [], action: IAction<IProduct>) => {
  const { payload } = action;

  switch (action.type) {
    case Type.AddProduct:
      const existProduct = state.find((product) => product.id === payload.id);

      if (!existProduct) {
        return [...state, payload];
      }

      return [...state.map(countAction(1, payload.id))];

    case Type.RemoveProduct:
      const forRemove = state.find((product) => product.id === payload.id);

      if (!forRemove) {
        throw new Error('Product should exist');
      }

      if (forRemove.count > 1) {
        return [...state.map(countAction(-1, payload.id))];
      }
      return [...state.filter((product) => product.id !== payload.id)];

    default:
      return state;
  }
};

export default productReducer;
