import React from 'react'
import './Restaurant.css'

function Restaurant(props) {
    return (
        <div className="card">
            <img className="card-img-top" src={props.imageUrl} alt="food-source" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.cuisine.name}</p>
                <p className="card-text">{props.openingTime} - {props.closingTime}</p>
            </div>
            <div className="card-footer">
                <a href="#" className="btn btn-primary">Order</a>
            </div>
        </div>
    )
}

export default Restaurant;

//https://thoughtworks-jumpstart.gitbook.io/book/v/second-edition/frontend-application-development/react/react-tutorial-overview/lab1
//https://github.com/thoughtworks-jumpstart/food-app
//https://thoughtworks-jumpstart.gitbook.io/book/front-end-web-development/react/react-tutorial-overview/your-first-react-application