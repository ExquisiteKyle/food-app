import React, { Component } from 'react';
import { getCuisines } from "../../services/cuisineService";
import { saveRestaurant } from "../../services/restaurantService";
import Input from "../common/Input/Input";
import SelectInput from "../common/Input/SelectInput";

class RestaurantForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cuisines: getCuisines(),
            data: {
                name: null,
                address: null,
                openingTime: null,
                closingTime: null,
                cuisineId: null,
                averagePrice: null,
                imageUrl: null
            }
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const cuisineId = this.state.data.cuisineId;
        const cuisine = this.state.cuisines.find(cuisine => cuisine._id === cuisineId);
        const restaurant = { ...this.state.data };
        restaurant.cuisine = cuisine
        restaurant.averagePrice = parseFloat(restaurant.averagePrice)
        saveRestaurant(restaurant);
    };

    handleChange = (event) => {
        const data = { ...this.state.data };
        data[event.currentTarget.name] = event.currentTarget.value;
        this.setState({ data });
    };

    render() {
        const { cuisines } = this.state;
        return (
            <div>
                <h3>New Restaurant</h3>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        name="name"
                        label="Name"
                        type="text"
                        onChange={this.handleChange}
                    />
                    <Input
                        name="address"
                        label="Address"
                        type="text"
                        onChange={this.handleChange}
                    />
                    <Input
                        name="openingTime"
                        label="Opening Time"
                        type="text"
                        onChange={this.handleChange}
                    />
                    <Input
                        name="closingTime"
                        label="Closing Time"
                        type="text"
                        onChange={this.handleChange}
                    />
                    <SelectInput
                        name="cuisineId"
                        label="Cuisine"
                        options={cuisines}
                        onChange={this.handleChange}
                    />
                    <Input
                        name="averagePrice"
                        label="Average Price"
                        type="number"
                        onChange={this.handleChange}
                    />
                    <Input
                        name="imageUrl"
                        label="Image URL"
                        type="text"
                        onChange={this.handleChange}
                    />
                    <button className="btn btn-primary btn-sm">Save</button>
                </form>
            </div>
        )
    }

}

export default RestaurantForm;