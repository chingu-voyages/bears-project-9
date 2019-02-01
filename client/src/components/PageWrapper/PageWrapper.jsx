import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import Cart from "../Cart/Cart";
import "./PageWrapper.scss";

class PageWrapper extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <NavBar
          isAdmin={this.props.isAdmin}
          loggedIn={this.props.loggedIn}
          logout={this.props.logout}
          toggleCart={this.props.toggleCart}
          wishlistCount={this.props.wishlistCount}
          cartCount={this.props.cartCount}
          resetProductFilter={this.props.resetProductFilter}
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
