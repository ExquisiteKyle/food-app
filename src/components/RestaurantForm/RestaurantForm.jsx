import React, { Component } from "react";
import { getCuisines } from "../../services/cuisineService";
import { getRestaurant, saveRestaurant } from "../../services/restaurantService";
import Input from "../common/Input/Input";
import TimeInput from "../common/Input/TimeInput";
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
            },
        };
    }

    componentDidMount() {
        if (this.props.match.params.id !== undefined) {
            this.setState({
                data: getRestaurant(this.props.match.params.id)
            });
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const { cuisineId, averagePrice } = this.state.data
        const cuisine = getCuisines().find(cuisine => cuisine._id === cuisineId);

        const restaurant = { ...this.state.data };
        delete restaurant.cuisineId;
        restaurant.cuisine = cuisine
        restaurant.averagePrice = parseFloat(averagePrice)
        saveRestaurant(restaurant);
        //this.props.history.replace(this.props.returnPath);
    };

    handleChange = ({ currentTarget: input }) => {
        const data = { ...this.state.data };
        data[input.name] = input.value;
        this.setState({ data });
    };

    render() {
        const { cuisines } = this.state;
        const { name, address, openingTime, closingTime, cuisine, imageUrl, averagePrice } = { ...this.state.data };
        return (
            <div data-testid="create-page">
                <h3>{this.state.restaurant ? "Edit Restaurant" : "New Restaurant"}</h3>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        name="name"
                        label="Name"
                        onChange={this.handleChange}
                        defaultValue={name}
                    />
                    <Input
                        name="address"
                        label="Address"
                        onChange={this.handleChange}
                        defaultValue={address}
                    />
                    <TimeInput
                        name="openingTime"
                        label="Opening Time"
                        onChange={this.handleChange}
                        defaultValue={openingTime}
                    />
                    <TimeInput
                        name="closingTime"
                        label="Closing Time"
                        onChange={this.handleChange}
                        defaultValue={closingTime}
                    />
                    <SelectInput
                        name="cuisineId"
                        label="Cuisine"
                        options={cuisines}
                        onChange={this.handleChange}
                        defaultValue={cuisine ? cuisine._id : ""}
                    />
                    <Input
                        name="averagePrice"
                        label="Average Price"
                        type="number"
                        onChange={this.handleChange}
                        defaultValue={averagePrice}
                    />
                    <Input
                        name="imageUrl"
                        label="Image URL"
                        onChange={this.handleChange}
                        defaultValue={imageUrl}
                    />
                    <button className="btn btn-primary btn-sm">Save</button>
                </form>
            </div>
        );
    }
}

export default RestaurantForm;
