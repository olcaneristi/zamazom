import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const CustomModal = ({
  isOpen,
  onRequestClose,
  contentLabel,
  className,
  overlayClassName,
  children,
}) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel={contentLabel}
        className={className || 'modal'}
        overlayClassName={overlayClassName || 'modal__overlay'}
        closeTimeoutMS={500}
      >
        {children}
      </Modal>
    </>
  );
};

export default CustomModal;
