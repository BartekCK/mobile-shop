import React from 'react';

// components
import Item from './item/Item';
import Modal from '../modal';

// store
import { useSelector } from 'react-redux';
import { Product } from '../../core/store/selectors';

// styles
import './styles.scss';
import CredentialForm from '../../containers/credential-form';

type Props = {
  isOpen: boolean;
};

const NavList: React.FC<Props> = (props: Props) => {
  const { isOpen } = props;

  const [isModalVisible, setModalVisible] = React.useState<boolean>(false);

  const products = useSelector(Product.getProducts);

  const totalPrice: number = React.useMemo(() => {
    if (!products.length) return 0;

    return products.reduce((prev, curr) => curr.price * curr.count + prev, 0);
  }, [products]);

  const handleClick = (): void => {
    setModalVisible(true);
  };

  return (
    <React.Fragment>
      <div className={`nav-list--wrapper ${isOpen ? 'visible' : ''}`}>
        {products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
        <div className="footer">
          <span className="total-price">Total price: {totalPrice.toFixed(2)} $</span>
          <button type="button" className="btn btn-secondary" disabled={totalPrice === 0} onClick={handleClick}>
            Pay now
          </button>
        </div>
      </div>
      <Modal isVisible={isModalVisible} onClose={() => setModalVisible(false)}>
        <CredentialForm totalPrice={totalPrice} products={products} />
      </Modal>
    </React.Fragment>
  );
};

export default NavList;
