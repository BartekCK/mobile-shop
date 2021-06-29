import React from 'react';

// types
import { IPhone } from '../../core/types';

// api
import { ApiResourcesURL } from '../../core/api';

// styles
import './styles.scss';
import { useDispatch } from 'react-redux';
import { Product } from '../../core/store/actions';

type Props = {
  phone: IPhone;
};

const Card: React.FC<Props> = ({ phone }: Props) => {
  const { id, brand, phoneModel, price, path } = phone;

  const dispatch = useDispatch();

  const handleClick = (): void => {
    dispatch(Product.addProduct({ id, brand, phoneModel, price, path, count: 1 }));
  };

  return (
    <section className="card--wrapper">
      <header className="header">{brand}</header>
      <figure className="img--container">
        <img className="image" src={`${ApiResourcesURL}/${path}`} alt={`${brand} ${phoneModel}`} />
        <figcaption className="model">Model: {phoneModel}</figcaption>
      </figure>
      <footer className="footer--container">
        <span className="price">{price} USD</span>
        <button className="btn" type="button" onClick={handleClick}>
          ADD +
        </button>
      </footer>
    </section>
  );
};

export default Card;
