import React from "react";

function SelectInput(props) {
    return (
        <div className="form-group">
            <label>{props.label}</label>
            <select
                defaultValue=""
                className="custom-select"
                name={props.name}
                onChange={props.onChange}
            >
                <option key="default">Choose one</option>
                {props.options.map(option => (
                    <option value={option._id} key={`${option._id}`}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default SelectInput;