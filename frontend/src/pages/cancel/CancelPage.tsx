import React from 'react';

// hooks
import useTimeoutHook from '../../hooks/useTimeoutHook';

// styles
import './styles.scss'

// assets
import CancelImg from './cancel.gif'

const CancelPage: React.FC = () => {

  const leftTime = useTimeoutHook(10);

  return (
    <div className="cancel--page">
      <header className="title">Something went wrong</header>
      <img className="cancel-img" src={CancelImg} alt="cancel" />
      <p className="redirect-inf">
        You will redirected to home page <span>{leftTime}</span> ...
      </p>
    </div>
  );
};

export default CancelPage;
