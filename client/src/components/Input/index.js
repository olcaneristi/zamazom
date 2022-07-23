import React from 'react';

const Input = ({ type, name, onChange, htmlFor, placeholder, notRequired, value, readOnly }) => {
  return (
    <div className="field">
      <input
        type={type || 'text'}
        className="field__input"
        name={name}
        value={value}
        onChange={onChange}
        required={notRequired || true}
        readOnly={readOnly || false}
      />
      <label htmlFor={htmlFor} className="field__label">
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
