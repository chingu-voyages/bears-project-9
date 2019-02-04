import React, { Fragment, PureComponent } from 'react';
import Spinner from "../Spinner/Spinner";
import "./Cart.scss";

class Cart extends PureComponent {

  render() {
    const {
      addOneToQty,
      cartData,
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
      <Fragment>
        <div className="cart" style={cartStyle}>
          <button
            className="cart__close-btn"
            onClick={toggleCart}
          >
            &times;
        </button>
          <h2>Here's the cart!</h2>
          {Object.keys(cartData).map((key, index) => {
            total += (cartData[key].quantity * cartData[key].price);
            return (
              <div className="cart__item" key={index}>
                <div>
                  <img src={cartData[key].image400} />
                </div>
                <div className="cart__item-data">
                  <h3>{cartData[key].brand} - {cartData[key].name}</h3>
                  <div className="cart__item-qty">
                    <p>Qty: {cartData[key].quantity}</p>
                    {cartLoading
                      ? <Spinner style={{ height: "15px", width: "15px", marginLeft: "10px" }} />
                      : (
                        <Fragment>
                          <button disabled={cartLoading} className="cart__qty-btn" onClick={() => addOneToQty(cartData[key].id)}>+</button>
                          <button disabled={cartLoading} className="cart__qty-btn" onClick={() => subtractOneFromQty(cartData[key].id)}>-</button>
                        </Fragment>
                      )
                    }
                  </div>
                  <h4>Price: ${cartData[key].quantity * cartData[key].price}</h4>
                </div>
                <button className="cart__remove-btn" onClick={() => removeFromCart(cartData[key].id)}>remove</button>
              </div>
            )
          })}
          <h3>Total: ${total}</h3>
        </div>
        {this.props.children}
      </Fragment>
    );
  }
}

export default Cart;