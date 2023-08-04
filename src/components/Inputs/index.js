import React, { useState } from 'react';
import './inputsModules.css';

const Inputs = ({ type, label, name, value, handleOnChange, placeholder, required, icon, multiple }) => {
  return (
    <div className="inputs-sections">
      <label htmlFor={name} className="titulo-label">
        {label}
      </label>
      <div className="inputs-style">
        {icon && <span className="input-icon">{icon}</span>}
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={handleOnChange}
          placeholder={placeholder}
          required={required}
          className="input-style"
          {...(multiple ? { multiple } : '')} 
        />
      </div>
    </div>
  );
};

export default Inputs;
