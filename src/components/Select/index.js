// Select.js

import React from 'react';
import './selectModules.css';

const Select = ({ label, name, value, options, onChange, required }) => {
  return (
    <div className="select-sections">
      <label className="titulo-label" htmlFor={name}>
        {label}
      </label>
      <div className="selects-styles">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="select-style"
        >
          <option value="">Filtrar</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
