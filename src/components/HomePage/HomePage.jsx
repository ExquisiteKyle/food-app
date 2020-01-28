import React, { Component } from "react";
import { getRestaurants } from "../../services/restaurantService";
import { getCuisines, getDefaultCuisine } from "../../services/cuisineService";
import Restaurant from "../Restaurant/Restaurant";
import FilterBar from "../FilterBar/FilterBar";
import SortBySelect from '../SortBySelect/SortBySelect';

class HomePage extends Component {
  state = {
    restaurants: getRestaurants(),
    cuisines: [getDefaultCuisine(), ...getCuisines()],
    selectedCuisine: null,
    selectedSort: null,
  };

  handleCuisineSelect = cuisine => {
    const finalCuisine = cuisine.name === "All" ? null : cuisine;
    this.setState({
      selectedCuisine: finalCuisine
    });
  };

  // Lab 3
  handleCuisineSort = sort => {
    this.setState({
      selectedSort: sort
    });
  }

  render() {
    const { restaurants, cuisines, selectedCuisine, selectedSort } = this.state;
    const filteredRestaurantList =
      selectedCuisine && selectedCuisine._id
        ? restaurants.filter(res => res.cuisine._id === selectedCuisine._id)
        : restaurants;

    const sortedRestaurantList = selectedSort === "Average Price" ?
      filteredRestaurantList.sort((a, b) => a.averagePrice - b.averagePrice).map(element => element) :
      filteredRestaurantList.sort((a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase())).map(element => element)

    return (
      <div className="container">
        <div className="row">
          <div className="col-4 mx-auto mt-3">
            <FilterBar
              cuisines={cuisines}
              selected={selectedCuisine}
              handleClick={this.handleCuisineSelect}
            />
          </div>
          <div className="col-4 mx-auto mt-3">
            <SortBySelect handleClick={this.handleCuisineSort} />
          </div>
        </div>

        <div className="row">
          {sortedRestaurantList.map(restaurant => (
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
