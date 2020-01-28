import React from 'react';

function FilterBar(props) {
    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            <button onClick={() => props.onFilter("all")} className="btn btn-primary">All</button>
            <button onClick={() => props.onFilter("Western")} className="btn btn-outline-primary">Western</button>
            <button onClick={() => props.onFilter("Japanese")} className="btn btn-outline-primary">Japanese</button>
            <button onClick={() => props.onFilter("Thai")} className="btn btn-outline-primary">Thai</button>
            <button onClick={() => props.onFilter("Chinese")} className="btn btn-outline-primary">Chinese</button>
        </div>
    )
}

export default FilterBar;