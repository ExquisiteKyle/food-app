import React from "react";
import TimeField from "react-simple-timefield";

function TimeInput({ name, label, onChange, defaultValue }) {
  return (
    <div className="form-group">
      <label htmlFor={`${name}-input`}>{label}</label>
      <TimeField
        value={defaultValue}
        onChange={value =>
          onChange({ currentTarget: { name: name, value: value } })
        }
        input={
          <input
            type="text"
            className="form-control"
            id={`${name}-input`}
            name={name}
          />
        }
      />
    </div>
  );
}

export default TimeInput;
