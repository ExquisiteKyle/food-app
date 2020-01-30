import React from "react";

function Input(props) {
    const numberInputProps = { min: "1", step: "0.1" };
    const textProps = { ...props }

    let myProps;

    if (props.type === "text") {
        myProps = textProps;
    } else {
        myProps = { ...textProps, ...numberInputProps };
    }

    return (
        <div className="form-group">
            <label>{props.label}</label>
            <input {...myProps} className="form-control" />

            {/* {props.type === "text" ? (
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
                )} */}
        </div>
    );
}

export default Input;