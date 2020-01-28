import React from 'react';
import './SortBySelect.css';

function SortBySelect(props) {
    return (
        <div className="form-inline">
            <label className="mr-3">Sort by: </label>
            <select className="form-control btn-primary" id="exampleFormControlSelect1" onChange={(event) => props.handleClick(event.target.value)}>
                <option>Restaurant Name</option>
                <option>Average Price</option>
            </select>
        </div>
    )
}

export default SortBySelect;