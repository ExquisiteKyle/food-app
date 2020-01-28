import React from 'react'
import Restaurant from '../Restaurant/Restaurant'
import { getRestaurants } from '../../services/restaurantService'
import './HomePage.css'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: getRestaurants()
        }
    }

    GenerateRestaurants = () => {
        return this.state.restaurants.slice().map(element => {
            return <Restaurant id={element.id} name={element.name} cuisine={element.cuisine} openingTime={element.openingTime} closingTime={element.closingTime} imageUrl={element.imageUrl} />
        });
    }

    render() {
        return (
            <div className="restaurant-container">
                <this.GenerateRestaurants />
            </div>
        )
    }
}

export default HomePage;