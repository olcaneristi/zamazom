import React from 'react';

const Input = ({ type, className, name, onChange, placeholder, htmlFor, labelText }) => {
  return (
    <label htmlFor={htmlFor}>
      {labelText}
      <input
        placeholder={placeholder}
        type={type}
        className={className || 'input'}
        name={name}
        onChange={onChange}
      />
    </label>
  );
};

export default Input;
