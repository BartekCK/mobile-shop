import React from 'react';

// styles
import './styles.scss';
import NavList from '../../components/nav-list';

type Props = {};

const Navigation: React.FC<Props> = () => {
  const [isOpen, setOpen] = React.useState<boolean>(false);

  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navigation--wrapper">
      <div className="basket--btn" ref={ref}>
        <i className="fas fa-shopping-basket" onClick={() => setOpen((prev) => !prev)} />
        <NavList isOpen={isOpen} />
      </div>
    </nav>
  );
};

export default Navigation;
