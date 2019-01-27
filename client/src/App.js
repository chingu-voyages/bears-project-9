import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageWrapper from "./components/PageWrapper/PageWrapper";
import Landing from "./pages/Landing";
import About from "./pages/About/About";
import Wishlist from "./pages/Wishlist/Wishlist";
import Authenticate from "./pages/Authenticate/Authenticate";
import { API } from "./utils";
import "./styles/App.sass";
import axios from 'axios';

const BASE_URL = "http://localhost:3001";
class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: {},
      watchData: [],
      loggedIn: false,
      showCart: false,
      wishlist: {},
      user: {}
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

  login = async userData => {
    const res = await API.login(userData);
    const { token, user } = res.data;
    let cart = {};
    let wishlist = {};
    if (user.cart) cart = JSON.parse(user.cart);
    if (user.wishlist) wishlist = JSON.parse(user.wishlist);
    // add logic here to reconcile guest cart, held in localStorage
    // with user cart, held in db
    this.setState({
      cart,
      loggedIn: true,
      user,
      wishlist
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

  toggleCart = () => {
    this.setState({ showCart: !this.state.showCart });
  }

  addToCart = id => {
    const { cart, user, watchData } = this.state;
    const watch = watchData.filter(watch => watch.id === id);
    let quantity;
    if (cart[id]) quantity = cart[id].quantity + 1;
    else quantity = 1;
    const newCart = {
      ...cart,
      [id]: {
        ...watch[0],
        quantity
      }
    }
    localStorage.setItem('horology-cart', JSON.stringify(newCart));

    if (this.state.loggedIn) {
      API.updateUser(user.id, { cart: JSON.stringify(newCart) });
    }

    this.setState({ cart: newCart });
  }

  removeFromCart = id => {
    const { cart, user } = this.state;
    const newCart = {
      ...cart,
    }
    delete newCart[id];
    localStorage.setItem('horology-cart', JSON.stringify(newCart));

    if (this.state.loggedIn) {
      API.updateUser(user.id, { cart: JSON.stringify(newCart) });
    }

    this.setState({ cart: newCart });
  }

  render() {
    return (
      <Router>
        <PageWrapper
          cart={this.state.cart}
          loggedIn={this.state.loggedIn}
          logout={this.logout}
          removeFromCart={this.removeFromCart}
          showCart={this.state.showCart}
          toggleCart={this.toggleCart}
        >
          <Switch>
            <Route exact path="/">
              {routeProps => (
                <Landing
                  {...routeProps}
                  addToCart={this.addToCart}
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
                  addToCart={this.addToCart}
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
        </PageWrapper>
      </Router>
    );
  }
}

export default App;
