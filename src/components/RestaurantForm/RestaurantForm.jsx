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
                name: "",
                address: "",
                openingTime: "",
                closingTime: "",
                cuisineId: "",
                averagePrice: "",
                imageUrl: ""
            }
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        const { cuisineId, averagePrice } = this.state.data
        const cuisine = getCuisines().find(cuisine => cuisine._id === cuisineId);

        const restaurant = { ...this.state.data };
        delete restaurant.cuisineId;
        restaurant.cuisine = cuisine
        restaurant.averagePrice = parseFloat(averagePrice)

        saveRestaurant(restaurant);
        this.props.history.replace(this.props.returnPath);
    };

    handleChange = ({ currentTarget: input }) => {
        const data = { ...this.state.data };
        data[input.name] = input.value;
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