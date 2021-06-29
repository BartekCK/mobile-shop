import React from 'react';

// components
import Item from './item/Item';

// store
import { useSelector } from 'react-redux';
import { Product } from '../../core/store/selectors';

// styles
import './styles.scss';

type Props = {
  isOpen: boolean;
};

const NavList: React.FC<Props> = (props: Props) => {
  const { isOpen } = props;

  const products = useSelector(Product.getProducts);

  return (
    <div className={`nav-list--wrapper ${isOpen ? 'visible' : ''}`}>
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default NavList;
