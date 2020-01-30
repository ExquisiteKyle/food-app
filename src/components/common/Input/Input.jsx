import React from "react";

function Input(props) {
    return (
        <div className="form-group">
            <label>{props.label}</label>
            {props.type === "text" ? (
                <input
                    type="text"
                    className="form-control"
                    name={props.name}
                    onChange={props.onChange}
                />
            ) : (
                    <input
                        type="number"
                        min="1"
                        step="0.1"
                        className="form-control"
                        name={props.name}
                        onChange={props.onChange}
                    />
                )}
        </div>
    );
}

export default Input;