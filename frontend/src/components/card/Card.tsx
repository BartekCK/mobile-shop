import React from 'react';

// types
import { IPhone } from '../../core/types';

// styles
import './styles.scss';
import { ApiResourcesURL } from '../../core/api';

type Props = {
  phone: IPhone;
};

const Card: React.FC<Props> = ({ phone }: Props) => {
  const { id, brand, phoneModel, price, path } = phone;

  return (
    <section className="card--wrapper">
      <header>{brand}</header>
      <figure>
        <img src={`${ApiResourcesURL}/${path}`} alt={`${brand} ${phoneModel}`} />
        <figcaption>Model: {phoneModel}</figcaption>
      </figure>
      <footer>
        {price} USD
        <button type="button">ADD +</button>
      </footer>
    </section>
  );
};

export default Card;
