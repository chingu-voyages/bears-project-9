import React, { PureComponent } from "react";
import NavBar from "../NavBar/NavBar";
import Cart from "../Cart/Cart";
import "./PageWrapper.scss";

class PageWrapper extends PureComponent {
  render() {
    const { props } = this;
    return (
      <div className="page-wrapper">
        <NavBar
          isAdmin={props.isAdmin}
          loggedIn={props.loggedIn}
          logout={props.logout}
          toggleCart={props.toggleCart}
          wishlistCount={props.wishlistCount}
          cartCount={props.cartCount}
          resetProductFilter={props.resetProductFilter}
        />

        {props.children}

        <Cart
          addOneToQty={props.addOneToQty}
          cartData={props.cartData}
          cartLoading={props.cartLoading}
          removeFromCart={props.removeFromCart}
          showCart={props.showCart}
          subtractOneFromQty={props.subtractOneFromQty}
          toggleCart={props.toggleCart}
        />
      </div>
    );
  }
}

export default PageWrapper;
