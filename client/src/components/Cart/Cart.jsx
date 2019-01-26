import React, { PureComponent } from 'react';
import "./Cart.scss";

class Cart extends PureComponent {

  render() {
    let cartStyle;
    if (this.props.showCart) cartStyle = {};
    else cartStyle = { transform: "translateX(100%)" };
    return (
      <div className="cart" style={cartStyle}>
        <button
          className="cart__close-btn"
          onClick={this.props.toggleCart}
        >
          &times;
        </button>
        <h2>Here's the cart!</h2>
      </div >
    );
  }
}

export default Cart;