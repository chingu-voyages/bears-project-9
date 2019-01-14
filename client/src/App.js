import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About/About";
import Wishlist from "./pages/Wishlist/Wishlist";
import "./styles/App.sass";
import axios from 'axios';

const BASE_URL = "http://localhost:3001";
class App extends Component {
  constructor() {
    super();
    this.state = {
      watchData: []
    };
  }

  async fetchWatches() {
    const resp = await axios.get(`${BASE_URL}/watches`);
    this.setState({ watchData: resp.data });
    console.log(this.state.watchData);
    return resp.data;
  }

  async componentDidMount() {
    await this.fetchWatches();
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
