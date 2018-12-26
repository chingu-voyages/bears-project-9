import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About/About";
import Wishlist from "./pages/Wishlist/Wishlist";
import "./styles/App.sass";

class App extends Component {
  constructor() {
    super();
    this.state = {
      watchData: [
        {
          productId: 1,
          productName: "Vesper",
          productPrice: 499.0,
          productURL: "https://via.placeholder.com/600/92c952",
          productBrand: "Cartier",
          productGender: "Unisex"
        },
        {
          productId: 2,
          productName: "Kensington",
          productPrice: 399.0,
          productURL: "https://via.placeholder.com/600/771796",
          productBrand: "Omega",
          productGender: "Male"
        },
        {
          productId: 3,
          productName: "Arrow",
          productPrice: 199.0,
          productURL: "https://via.placeholder.com/600/24f355",
          productBrand: "Rolex",
          productGender: "Female"
        },
        {
          productId: 4,
          productName: "Porter",
          productPrice: 499.0,
          productURL: "https://via.placeholder.com/600/d32776",
          productBrand: "Tag Heuer",
          productGender: "Female"
        },
        {
          productId: 5,
          productName: "Gatsby",
          productPrice: 299.0,
          productURL: "https://via.placeholder.com/600/e34776",
          productBrand: "Rolex",
          productGender: "Unisex"
        },
        {
          productId: 6,
          productName: "Eleanor",
          productPrice: 699.0,
          productURL: "https://via.placeholder.com/600/d89776",
          productBrand: "Cartier",
          productGender: "Female"
        }
      ]
    };
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            {routeProps => (
              <Landing
                {...routeProps}
                // other props can be added here this will allow login/logout logic to live in this component
                // along with whatever other functionality and the relevant data we want to live in state in this component
                watchData={this.state.watchData}
              />
            )}
          </Route>
          <Route exact path="/about">
            {routeProps => (
              <About
                {...routeProps}
                // other props can be added here this will allow login/logout logic to live in this component
                // along with whatever other functionality and the relevant data we want to live in state in this component
              />
            )}
          </Route>
          <Route exact path="/wishlist">
            {routeProps => (
              <Wishlist
                {...routeProps}
                // other props can be added here this will allow login/logout logic to live in this component
                // along with whatever other functionality and the relevant data we want to live in state in this component
              />
            )}
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
