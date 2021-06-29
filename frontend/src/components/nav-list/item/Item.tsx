import React from 'react';

// store
import { useDispatch } from 'react-redux';
import { Product } from '../../../core/store/actions';

// api
import { ApiResourcesURL } from '../../../core/api';

// types
import { IProduct } from '../../../core/types';

// styles
import './styles.scss';

type Props = {
  product: IProduct;
};

const Item: React.FC<Props> = ({ product }: Props) => {
  const { id, brand, phoneModel, price, path, count } = product;

  const dispatch = useDispatch();

  const handleAdd = (): void => {
    dispatch(Product.addProduct(product));
  };

  const handleRemove = (): void => {
    dispatch(Product.removeProduct(id));
  };

  const result = price * count;

  return (
    <div className="item--container">
      <img className="avatar" src={`${ApiResourcesURL}/${path}`} alt={brand} />
      <span className="title">
        {brand} {phoneModel}
      </span>
      <span className="count">Quantity: {count}</span>
      <span className="price">{result.toFixed(2)} $</span>
      <div className="btn--container">
        <button type="button" className="btn btn-secondary" onClick={handleAdd}>
          +
        </button>
        <button type="button" className="btn btn-dangerous" onClick={handleRemove}>
          -
        </button>
      </div>
    </div>
  );
};

export default Item;
