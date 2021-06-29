import React from 'react';

// styles
import './styles.scss';

type Props = {
  isOpen: boolean;
};

const NavList: React.FC<Props> = (props: Props) => {
  const { isOpen } = props;

  return <div className={`nav-list--wrapper ${isOpen ? 'visible' : ''}`}></div>;
};

export default NavList;
