import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About/About";
// import NavBar from "./components/NavBar/NavBar";
import "./styles/App.sass";

class App extends Component {
  constructor() {
    super()
    this.state = {
      watchData: [
        {
          productId: 1,
          productName: "Vesper",
          productPrice: 499.00,
          productURL: "https://via.placeholder.com/600/92c952"
        },
        {
          productId: 2,
          productName: "Kensington",
          productPrice: 399.00,
          productURL: "https://via.placeholder.com/600/771796"
        },
        {
          productId: 3,
          productName: "Arrow",
          productPrice: 199.00,
          productURL: "https://via.placeholder.com/600/24f355"
        },
        {
          productId: 4,
          productName: "Porter",
          productPrice: 499.00,
          productURL: "https://via.placeholder.com/600/d32776"
        },
        {
          productId: 5,
          productName: "Gatsby",
          productPrice: 299.00,
          productURL: "https://via.placeholder.com/600/e34776"
        },
        {
          productId: 6,
          productName: "Eleanor",
          productPrice: 699.00,
          productURL: "https://via.placeholder.com/600/d89776"
        },
      ]
      }
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
                watchData = {this.state.watchData}
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
        </Switch>
      </Router>
    );
  }
}

export default App;
