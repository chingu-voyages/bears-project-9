import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About/About";
import Wishlist from "./pages/Wishlist/Wishlist";
import Authenticate from "./pages/Authenticate/Authenticate";
import Admin from "./pages/Admin/Admin";
import { API, utils } from "./utils";

class App extends Component {
  state = {
    cart: {},
    cartData: {},
    cartLoading: false,
    watchData: [],
    filteredData: [],
    loggedIn: false,
    isAdmin: false,
    showCart: false,
    wishlist: {},
    token: "",
    user: {},
    filterFor: { brand: "", gender: "", price: "" }
  };

  fetchWatches = async () => {
    const resp = await API.getWatches();
    this.setState({
      watchData: resp.data,
      filteredData: resp.data
    });
    return resp.data;
  };

  async componentDidMount() {
    await this.fetchWatches();

    if (localStorage.getItem("token")) {
      this.setState({
        loggedIn: true,
        token: localStorage.getItem("token")
      });

      await this.getCurrentUser();
    }
  }

  buildHeaders() {
    const { token } = this.state;

    return {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
  }

  async getCurrentUser() {
    const { watchData } = this.state;
    try {
      const headers = this.buildHeaders();
      const resp = await API.currentuser(headers);
      console.log(resp.data);
      console.log(resp.data.user);
      const user = resp.data.user;
      let cart = {};
      let wishlist = {};
      let cartData = {};

      if (user.cart) {
        const oldCart = JSON.parse(user.cart);
        cart = utils.checkCartItems(watchData, oldCart);
        cartData = utils.parseCartData(watchData, cart);
      }
      if (user.wishlist) wishlist = JSON.parse(user.wishlist);

      this.setState({
        isAdmin: user.admin,
        loggedIn: true,
        cart,
        cartData,
        wishlist,
        user
      });
    } catch (e) {
      console.log(e);
    }
  }

  login = async userData => {
    const res = await API.login(userData);
    const { token, user } = res.data;
    const { watchData } = this.state;
    let cart = {};
    let wishlist = {};
    let cartData = {};

    if (user.cart) {
      const oldCart = JSON.parse(user.cart);
      cart = utils.checkCartItems(watchData, oldCart);
      cartData = utils.parseCartData(watchData, cart);
    }

    if (user.wishlist) wishlist = JSON.parse(user.wishlist);
    // if we want to allow guest shopping carts,
    // add logic here to reconcile guest cart, held in localStorage
    // with user cart, held in db
    this.setState({
      isAdmin: user.admin,
      cart,
      cartData,
      loggedIn: true,
      user,
      wishlist
    });
    localStorage.setItem("token", token);
  };

  logout = () => {
    this.setState({ isAdmin: false, loggedIn: false, user: "" });
    localStorage.removeItem("token");
  };

  signup = async userData => {
    const res = await API.signup(userData);
    const { token, user } = res.data;
    console.log(user);
    this.setState({
      isAdmin: user.admin,
      loggedIn: true,
      token,
      user: user
    });
    localStorage.setItem("token", token);
  };

  toggleCart = () => {
    this.setState({ showCart: !this.state.showCart });
  };

  addToCart = async id => {
    await this.setState({ cartLoading: true });
    const { user, watchData } = this.state;

    let quantity;
    if (this.state.cart[id]) quantity = this.state.cart[id].quantity + 1;
    else quantity = 1;

    const cart = { ...this.state.cart };
    cart[id] = { id, quantity };

    const oldCartData = { ...this.state.cartData };
    const cartData = utils.parseCartData(watchData, cart, oldCartData);

    localStorage.setItem("horology-cart", JSON.stringify(cart));

    if (this.state.loggedIn)
      await API.updateUser(user.id, { cart: JSON.stringify(cart) });
    // setting a timeout to prevent the UI loading element from flashing too quickly
    // which might make it appear like a glitch rather than a loading indicator
    setTimeout(
      () => this.setState({ cart, cartData, cartLoading: false }),
      500
    );
  };

  removeFromCart = async id => {
    await this.setState({ cartLoading: true });

    const cart = { ...this.state.cart };
    delete cart[id];

    const cartData = { ...this.state.cartData };
    delete cartData[id];

    localStorage.setItem("horology-cart", JSON.stringify(cart));

    if (this.state.loggedIn)
      await API.updateUser(this.state.user.id, { cart: JSON.stringify(cart) });
    // setting a timeout to prevent the UI loading element from flashing too quickly
    // whicm might make it appear like a glitch rather than a loading indicator
    setTimeout(
      () => this.setState({ cart, cartData, cartLoading: false }),
      500
    );
  };

  addOneToQty = async id => {
    await this.setState({ cartLoading: true });

    const cart = { ...this.state.cart };
    cart[id].quantity = cart[id].quantity + 1;

    const cartData = { ...this.state.cartData };
    cartData[id].quantity = cartData[id].quantity + 1;

    localStorage.setItem("horology-cart", JSON.stringify(cart));

    if (this.state.loggedIn)
      await API.updateUser(this.state.user.id, { cart: JSON.stringify(cart) });
    // setting a timeout to prevent the UI loading element from flashing too quickly
    // whicm might make it appear like a glitch rather than a loading indicator
    setTimeout(
      () => this.setState({ cart, cartData, cartLoading: false }),
      500
    );
  };

  subtractOneFromQty = async id => {
    await this.setState({ cartLoading: true });

    if (this.state.cart[id].quantity === 1) return this.removeFromCart(id);

    const quantity = this.state.cart[id].quantity - 1;

    const cart = { ...this.state.cart };
    cart[id].quantity = quantity;

    const cartData = { ...this.state.cartData };
    cartData[id].quantity = quantity;

    localStorage.setItem("horology-cart", JSON.stringify(cart));

    if (this.state.loggedIn)
      await API.updateUser(this.state.user.id, { cart: JSON.stringify(cart) });
    // setting a timeout to prevent the UI loading element from flashing too quickly
    // whicm might make it appear like a glitch rather than a loading indicator
    setTimeout(
      () => this.setState({ cart, cartData, cartLoading: false }),
      500
    );
  };

  addToWishlist = id => {
    const { wishlist, user, watchData } = this.state;
    const watch = watchData.filter(watch => watch.id === id);

    const newWishlist = { ...wishlist, [id]: { ...watch[0] } };

    if (this.state.loggedIn) {
      API.updateUser(user.id, { wishlist: JSON.stringify(newWishlist) });
    }

    this.setState({ wishlist: newWishlist });
  };

  removeFromWishlist = id => {
    const { wishlist, user } = this.state;
    const newWishlist = { ...wishlist };
    delete newWishlist[id];

    if (this.state.loggedIn) {
      API.updateUser(user.id, { wishlist: JSON.stringify(newWishlist) });
    }
    this.setState({ wishlist: newWishlist });
  };

  handleProductFilter = obj => {
    const categories = ["brand", "gender", "price"];
    const filterFor = { ...this.state.filterFor, ...obj };
    let filteredData = [...this.state.watchData];

    categories.forEach(cat => {
      if (filterFor[cat]) {
        filteredData = filteredData.filter(watch => {
          return watch[cat].toString() === filterFor[cat].toString();
        });
      }
    });
    this.setState({ filterFor, filteredData });
  };

  resetProductFilter = () => {
    const filteredData = [...this.state.watchData];
    const filterFor = { brand: "", gender: "", price: "" };
    this.setState({ filteredData, filterFor });
  };

  render() {
    const cartCount = Object.keys(this.state.cart).reduce((qty, watchId) => {
      return !watchId ? qty : qty + this.state.cart[watchId]["quantity"];
    }, 0);

    const wishlistCount = Object.keys(this.state.wishlist).length;

    const sharedProps = {
      addOneToQty: this.addOneToQty,
      cartCount,
      cartData: this.state.cartData,
      cartLoading: this.state.cartLoading,
      isAdmin: this.state.isAdmin,
      loggedIn: this.state.loggedIn,
      logout: this.logout,
      removeFromCart: this.removeFromCart,
      resetProductFilter: this.resetProductFilter,
      showCart: this.state.showCart,
      subtractOneFromQty: this.subtractOneFromQty,
      toggleCart: this.toggleCart,
      wishlistCount
    };

    return (
      <Router>
        <Switch>
          <Route exact path="/">
            {routeProps => (
              <Landing
                {...routeProps}
                addToCart={this.addToCart}
                addToWishlist={this.addToWishlist}
                brandFilterValue={this.state.filterFor.brand}
                filteredData={this.state.filteredData}
                genderFilterValue={this.state.filterFor.gender}
                handleProductFilter={this.handleProductFilter}
                priceFilterValue={this.state.filterFor.price}
                removeFromWishlist={this.removeFromWishlist}
                sharedProps={sharedProps}
                watchData={this.state.watchData}
                wishlist={this.state.wishlist}
              />
            )}
          </Route>

          <Route exact path="/about">
            {routeProps => <About {...routeProps} sharedProps={sharedProps} />}
          </Route>

          <Route exact path="/wishlist">
            {routeProps =>
              this.state.loggedIn ? (
                <Wishlist
                  {...routeProps}
                  addToCart={this.addToCart}
                  removeFromWishlist={this.removeFromWishlist}
                  sharedProps={sharedProps}
                  watchData={this.state.watchData}
                  wishlist={this.state.wishlist}
                />
              ) : (
                <Redirect to="/" />
              )
            }
          </Route>

          <Route exact path="/signin">
            {routeProps => (
              <Authenticate
                {...routeProps}
                login={this.login}
                sharedProps={sharedProps}
                signup={this.signup}
              />
            )}
          </Route>

          <Route exact path="/admin">
            {routeProps =>
              this.state.isAdmin ? (
                <Admin
                  {...routeProps}
                  fetchWatches={this.fetchWatches}
                  sharedProps={sharedProps}
                  watchData={this.state.watchData}
                />
              ) : (
                <Redirect to="/" />
              )
            }
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
