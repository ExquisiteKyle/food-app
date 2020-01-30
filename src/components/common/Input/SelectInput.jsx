import React from "react";

function SelectInput({ name, label, options, onChange, defaultValue }) {
  return (
    <div className="form-group">
      <label htmlFor={`${name}-input`}>{label}</label>
      <select
        className="custom-select"
        id={`${name}-input`}
        name={name}
        onChange={onChange}
      >
        <option key="default">Choose one</option>
        {options.map(option => (
          option._id === defaultValue ?
            <option value={option._id} key={`${option._id}`} selected>
              {option.name}
            </option> :
            <option value={option._id} key={`${option._id}`}>
              {option.name}
            </option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
