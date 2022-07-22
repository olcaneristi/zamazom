import React from 'react';

const Input = ({ type, name, onChange, htmlFor, placeholder, notRequired, value }) => {
  return (
    <div className="field">
      <input
        type={type}
        className="field__input"
        name={name}
        value={value}
        onChange={onChange}
        required={notRequired || true}
      />
      <label htmlFor={htmlFor} className="field__label">
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
