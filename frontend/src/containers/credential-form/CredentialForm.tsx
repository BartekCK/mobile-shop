import React from 'react';

// styles
import './styles.scss';
import { IProduct } from '../../core/types';

type Props = {
    totalPrice: number;
    products: IProduct[]
};

const CredentialForm: React.FC<Props> = (props: Props) => {
  return <div className="credential--wrapper">
      <input type="text"/>
  </div>;
};

export default CredentialForm;
