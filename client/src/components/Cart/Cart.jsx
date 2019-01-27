import React, { PureComponent } from 'react';
import "./Cart.scss";

class Cart extends PureComponent {

  render() {
    const { cart, removeFromCart, toggleCart } = this.props;
    let cartStyle;
    if (this.props.showCart) cartStyle = {};
    else cartStyle = { transform: "translateX(100%)" };
    let total = 0;
    return (
      <div className="cart" style={cartStyle}>
        <button
          className="cart__close-btn"
          onClick={toggleCart}
        >
          &times;
        </button>
        <h2>Here's the cart!</h2>
        {Object.keys(cart).map((key, index) => {
          total += (cart[key].quantity * cart[key].price);
          return (
            <div className="cart__item" key={index}>
              <img src={cart[key].image} />
              <div className="cart__item_item-data">
                <h3>{cart[key].brand} - {cart[key].name}</h3>
                <p>Qty: {cart[key].quantity}</p>
                <h4>Price: ${cart[key].quantity * cart[key].price}</h4>
              </div>
              <button onClick={() => removeFromCart(cart[key].id)}>remove</button>
            </div>
          )
        })}
        <h3>Total: ${total}</h3>
      </div >
    );
  }
}

export default Cart;