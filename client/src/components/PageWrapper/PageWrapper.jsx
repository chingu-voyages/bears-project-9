import React, { Component } from 'react';
import NavBar from "../NavBar/NavBar";
import Cart from "../Cart/Cart";
import "./PageWrapper.scss";

class PageWrapper extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <NavBar
          loggedIn={this.props.loggedIn}
          logout={this.props.logout}
          toggleCart={this.props.toggleCart}
        />

        <Cart
          addOneToQty={this.props.addOneToQty}
          cart={this.props.cart}
          cartLoading={this.props.cartLoading}
          removeFromCart={this.props.removeFromCart}
          showCart={this.props.showCart}
          subtractOneFromQty={this.props.subtractOneFromQty}
          toggleCart={this.props.toggleCart}
        />

        {this.props.children}

      </div>
    );
  }
}

export default PageWrapper;