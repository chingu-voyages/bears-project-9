import React, { Fragment, PureComponent } from 'react';
import { CartItem } from "./CartItem";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import "./Cart.scss";

class Cart extends PureComponent {

  render() {
    const {
      addOneToQty,
      cartData,
      cartLoading,
      emptyCart,
      removeFromCart,
      subtractOneFromQty,
      toggleCart
    } = this.props;
    let cartStyle;
    if (this.props.showCart) cartStyle = {};
    else cartStyle = { transform: "translateX(100%)" };
    let total = 0;
    return (
      <Fragment>
        <div className="cart" style={cartStyle}>
          <button
            className="cart__close-btn"
            onClick={toggleCart}
          >
            &times;
          </button>
          <h2>Shopping Cart</h2>
          {Object.keys(cartData).map((key, index) => {
            total += (cartData[key].quantity * cartData[key].price);
            return (
              <CartItem
                addOneToQty={addOneToQty}
                key={key}
                index={index}
                cartData={cartData}
                id={key}
                cartLoading={cartLoading}
                removeFromCart={removeFromCart}
                subtractOneFromQty={subtractOneFromQty}
              />
            )
          })}
          <h3>Total: ${total}</h3>
          <StripeProvider apiKey="pk_test_9VTkopDgBtPIVwjIxCWDm8gA">
            <div className="card-info">
              
              <Elements>
                <CheckoutForm total={total} emptyCart={emptyCart} />
              </Elements>
            </div>
          </StripeProvider>
        </div>
        {this.props.children}
      </Fragment>
    );
  }
}

export default Cart;
