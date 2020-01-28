import React, { Component } from "react";
import { getRestaurants } from "../../services/restaurantService";
import Restaurant from "../Restaurant/Restaurant";
import FilterBar from '../FilterBar/FilterBar'

class HomePage extends Component {
  state = {
    restaurants: getRestaurants()
  };

  filterCuisine = (cuisine) => {
    this.setState({
      restaurants: cuisine === "all" ? getRestaurants() : getRestaurants().filter(element => cuisine === element.cuisine.name)
    });
  }

  render() {
    const { restaurants } = this.state;
    return (
      <div className="container-fluid">
        <div className="row">
          <FilterBar onFilter={(cuisine) => this.filterCuisine(cuisine)} />
        </div>
        <div className="row">
          {restaurants.map(restaurant => (
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 d-flex" key={restaurant._id}>
              <Restaurant details={restaurant} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default HomePage;
