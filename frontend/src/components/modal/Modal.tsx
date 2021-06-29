import React, { MouseEventHandler } from 'react';

// components
import Portal from '../portal';

// styles
import './styles.scss';

type Props = {
  isVisible: boolean;
  children: React.ReactNode;
  onClose: () => void;
};

const Modal: React.FC<Props> = (props: Props) => {
  const { isVisible, children, onClose } = props;

  const handleClickOutside = (event: any): void => {
    onClose();
  };

  return (
    <Portal>
      <div className={`modal--wrapper ${isVisible ? 'visible' : ''}`} onClick={handleClickOutside}>
        <div className="modal-container" onClick={(event) => event.stopPropagation()}>
          <button className="close" onClick={onClose}>
            <i className="far fa-window-close" />
          </button>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
