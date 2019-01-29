import React, { Fragment, PureComponent } from 'react';
import Spinner from "../Spinner/Spinner";
import "./Cart.scss";

class Cart extends PureComponent {

  render() {
    const {
      addOneToQty,
      cart,
      cartLoading,
      removeFromCart,
      subtractOneFromQty,
      toggleCart
    } = this.props;
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
              <div className="cart__item-data">
                <h3>{cart[key].brand} - {cart[key].name}</h3>
                <div className="cart__item-qty">
                  <p>Qty: {cart[key].quantity}</p>
                  {cartLoading
                    ? <Spinner style={{ height: "15px", width: "15px", marginLeft: "10px" }} />
                    : (
                      <Fragment>
                        <button disabled={cartLoading} className="cart__qty-btn" onClick={() => addOneToQty(cart[key].id)}>+</button>
                        <button disabled={cartLoading} className="cart__qty-btn" onClick={() => subtractOneFromQty(cart[key].id)}>-</button>
                      </Fragment>
                    )
                  }
                </div>
                <h4>Price: ${cart[key].quantity * cart[key].price}</h4>
              </div>
              <button className="cart__remove-btn" onClick={() => removeFromCart(cart[key].id)}>remove</button>
            </div>
          )
        })}
        <h3>Total: ${total}</h3>
      </div >
    );
  }
}

export default Cart;