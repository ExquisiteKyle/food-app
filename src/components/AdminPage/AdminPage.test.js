import "jest-dom/extend-expect";
import "@testing-library/react/cleanup-after-each";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AdminPage from "./AdminPage";
import * as RestaurantService from "../../services/restaurantService";

beforeEach(() => {
  let sampleData = [
    {
      _id: "5c342ac9fc13ae39f8000000",
      name: "Burger Bar by Fatboy's Concepts (Boat Quay)",
      address: "35 Boat Quay, 049824 Singapore",
      openingTime: "11:00 AM",
      closingTime: "10:30 PM",
      cuisine: { _id: "5c3430ecfc13ae122d000000", name: "Western" },
      imageUrl: "images/restaurants/5c342ac9fc13ae39f8000000.jpg",
      averagePrice: 25
    },
    {
      _id: "5c342ac9fc13ae39f8000003",
      name: "Ramen Champion",
      address:
        "#03-89, 6 Eu Tong Sen Street, The Central, Clarke Quay, Lower Central, 059817 Singapore",
      openingTime: "11:00 AM",
      closingTime: "10:00 PM",
      cuisine: { _id: "5c3430ecfc13ae122d000001", name: "Japanese" },
      imageUrl: "images/restaurants/5c342ac9fc13ae39f8000003.jpg",
      averagePrice: 20
    }
  ];

  jest
    .spyOn(RestaurantService, "getRestaurants")
    .mockImplementation(() => sampleData);
  jest.spyOn(RestaurantService, "deleteRestaurant").mockImplementation(id => {
    sampleData = sampleData.filter(item => item._id !== id);
  });
});

afterEach(() => {
  RestaurantService.getRestaurants.mockRestore();
});

test("displays list of two restaurants on load", () => {
  const { getAllByText } = render(<AdminPage />);

  expect(RestaurantService.getRestaurants).toHaveBeenCalledTimes(1);
  expect(getAllByText("Delete").length).toEqual(2);
});

test("when the delete button is clicked the restaurant row will be removed from the table", () => {
  const { getAllByText, queryByText } = render(<AdminPage />);
  const firstDeleteBtn = getAllByText("Delete")[0];
  fireEvent.click(firstDeleteBtn);
  expect(
    queryByText(/Burger Bar by Fatboy's Concepts/i)
  ).not.toBeInTheDocument();
});

test("when the page is first loaded restaurants are sorted by name", () => {
  const { getAllByTestId } = render(<AdminPage />);

  expect(getAllByTestId("restaurant-table-row").length).toEqual(2);
  const first = getAllByTestId("restaurant-table-row")[0];
  const second = getAllByTestId("restaurant-table-row")[1];

  expect(first).toHaveTextContent(/Burger Bar by Fatboy/i);
  expect(second).toHaveTextContent(/Ramen Champion/i);
});
