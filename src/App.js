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
      dummyData: [
        {
          "productId": 1,
          "productName": "Vesper",
          "productPrice": 499.00,
          "productURL": "https://via.placeholder.com/600/92c952"
        },
        {
          "productId": 2,
          "productName": "Kensington",
          "productPrice": 399.00,
          "productURL": "https://via.placeholder.com/600/771796"
        },
        {
          "productId": 3,
          "productName": "Arrow",
          "productPrice": 199.00,
          "productURL": "https://via.placeholder.com/600/24f355"
        },
        {
          "productId": 4,
          "productName": "Porter",
          "productPrice": 499.00,
          "productURL": "https://via.placeholder.com/600/d32776"
        }
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
