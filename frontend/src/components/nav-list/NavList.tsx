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

  const totalPrice: number = React.useMemo(() => {
    if(!products.length) return 0;

    return products.reduce((prev, curr) => curr.price * curr.count + prev,0)
  },[products])

  return (
    <div className={`nav-list--wrapper ${isOpen ? 'visible' : ''}`}>
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
      <div className="footer">
        <span className="total-price">Total price: {totalPrice.toFixed(2)} $</span>
        <button type="button" className="btn btn-secondary" disabled={totalPrice === 0}>
          Pay now
        </button>
      </div>
    </div>
  );
};

export default NavList;
