import React from 'react';

const Button = ({ buttonType, className, type, onClick, disabled, style, children }) => {
  switch (buttonType) {
    case 'secondary':
      buttonType = 'button__secondary';
      break;
    case 'outline':
      buttonType = 'button__outline';
      break;
    case 'disabled':
      buttonType = 'button__disabled';
      break;
    case 'text':
      buttonType = 'button__only__text';
      break;
    case 'unset':
      buttonType = 'button__unset';
      break;
    default:
  }

  return (
    <button
      className={
        `${buttonType === 'button__unset' ? '' : 'button'} ${buttonType ? buttonType : ''}` +
        (className ? ` ${className}` : '')
      }
      type={type || 'button'}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
