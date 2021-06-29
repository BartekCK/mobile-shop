import React from 'react';

// types
import { IPhone } from '../../core/types';

// api
import { ApiResourcesURL } from '../../core/api';

// styles
import './styles.scss';

type Props = {
  phone: IPhone;
};

const Card: React.FC<Props> = ({ phone }: Props) => {
  const { id, brand, phoneModel, price, path } = phone;

  return (
    <section className="card--wrapper">
      <header className="header">{brand}</header>
      <figure className="img--container">
        <img className="image" src={`${ApiResourcesURL}/${path}`} alt={`${brand} ${phoneModel}`} />
        <figcaption className="model">Model: {phoneModel}</figcaption>
      </figure>
      <footer className="footer--container">
          <span className="price">{price} USD</span>
        <button className="btn" type="button">
          ADD +
        </button>
      </footer>
    </section>
  );
};

export default Card;
