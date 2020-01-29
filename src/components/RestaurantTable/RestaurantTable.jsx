import React, { Component } from 'react';

function RestaurantTable(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Opening Hours</th>
                    <th scope="col">Cuisine</th>
                    <th scope="col">Average Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.restaurants.restaurants.sort((a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase())).map(element => {
                        return (
                            <tr>
                                <td>
                                    {element.name}
                                </td>
                                <td>
                                    {element.address}}
                                </td>
                                <td>
                                    {element.openingTime} - {element.closingTime}
                                </td>
                                <td>
                                    {element.cuisine.name}
                                </td>
                                <td>
                                    ${element.averagePrice.toFixed(2)}
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table >
    )
}

export default RestaurantTable;