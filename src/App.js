import React, { Component } from "react";
import HomePage from "./components/HomePage/HomePage";
import OrderPage from "./components/OrderPage/OrderPage";
import AdminPage from "./components/AdminPage/AdminPage";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route path="/orders" component={OrderPage} />
            <Route path="/admin" component={AdminPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default App;
