import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About/About";
import Wishlist from "./pages/Wishlist/Wishlist";
import Authenticate from "./pages/Authenticate/Authenticate";
import { API } from "./utils";
import "./styles/App.sass";
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      watchData: [],
      loggedIn: false,
      user: ''
    };
  }

  fetchWatches = async () => {
    const resp = await API.getWatches();
    this.setState({
      watchData: resp.data
    });
  }

  async componentDidMount() {
    await this.fetchWatches();
  }

  login = async userData => {
    const token = await API.login(userData);
    console.log(token)
    this.setState({
      loggedIn: true,
      user: ''
    });
  }

  logout = () => {
    // remove token, destroy session, etc.
    this.setState({ loggedIn: false, user: '' });
  }

  signup = async userData => {
    const user = await API.signup(userData);
    console.log(user)
    this.setState({
      loggedIn: true,
      user: user.data
    });
  }


  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            {routeProps => (
              <Landing
                {...routeProps}
                loggedIn={this.state.loggedIn}
                logout={this.logout}
                watchData={this.state.watchData}
              />
            )}
          </Route>

          <Route exact path="/about">
            {routeProps => (
              <About
                {...routeProps}
                loggedIn={this.state.loggedIn}
                logout={this.logout}
              />
            )}
          </Route>

          <Route exact path="/wishlist">
            {routeProps => (
              <Wishlist
                {...routeProps}
                loggedIn={this.state.loggedIn}
                logout={this.logout}
              />
            )}
          </Route>

          <Route exact path="/signin">
            {routeProps => (
              <Authenticate
                {...routeProps}
                loggedIn={this.state.loggedIn}
                login={this.login}
                logout={this.logout}
                signup={this.signup}
              />
            )}
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
