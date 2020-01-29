import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { getRestaurants } from "./services/restaurantService";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import OrderPage from "./components/OrderPage/OrderPage";
import AdminPage from "./components/AdminPage/AdminPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: getRestaurants(),
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <main className="container">
            <Switch>
              <Route path="/orders" component={OrderPage} />
              <Route path="/admin" render={() => <AdminPage restaurants={JSON.parse(JSON.stringify(this.state.restaurants))} />} />
              <Route path="/" component={HomePage} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
