import React from 'react';
import ReactDOM from 'react-dom';

type Props = {
  children: React.ReactNode;
};

const Portal: React.FC<Props> = ({ children }: Props) => {
  const root = document.querySelector('#root');

  if (!root) return null;

  return ReactDOM.createPortal(children, root);
};

export default Portal;
