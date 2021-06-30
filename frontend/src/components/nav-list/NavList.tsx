import React from 'react';

// components
import Item from './item/Item';
import Modal from '../modal';
import CredentialForm from '../../containers/credential-form';

// store
import { useSelector } from 'react-redux';
import { Product } from '../../core/store/selectors';

import { Api } from '../../core/api';
// styles
import './styles.scss';
import { loadStripe } from '@stripe/stripe-js/pure';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY || '');

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

  const handleClick = async (): Promise<void> => {
    const data:any = await Api.postSession(products);
    const stripe = await stripePromise;

    if(!stripe){
      throw new Error('Payment public key error');
    }

    await stripe.redirectToCheckout({sessionId: data.id})
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
