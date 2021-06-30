import React from 'react';

// styles
import './styles.scss';

// assets
import SuccessImg from './success.gif';
import useTimeoutHook from '../../hooks/useTimeoutHook';

const SuccessPage: React.FC = () => {
  const leftTime = useTimeoutHook(10);

  return (
    <div className="success--page">
      <header className="title">Your payment was accepted</header>
      <img className="success-img" src={SuccessImg} alt="success" />
        <p className="redirect-inf">You will redirected to home page <span>{leftTime}</span> ...</p>
    </div>
  );
};

export default SuccessPage;
