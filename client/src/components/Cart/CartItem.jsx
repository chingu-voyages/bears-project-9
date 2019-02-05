import React, { PureComponent, Fragment } from 'react';
import Spinner from "../Spinner/Spinner";

export class CartItem extends PureComponent {
  render() {
    const {
      addOneToQty,
      cartData,
      cartLoading,
      id,
      index,
      removeFromCart,
      subtractOneFromQty
    } = this.props;
    return (
      <div className="cart__item" key={index}>
        <div>
          <img src={cartData[id].image400} />
        </div>
        <div className="cart__item-data">
          <h3>{cartData[id].brand} - {cartData[id].name}</h3>
          <div className="cart__item-qty">
            <p>Qty: {cartData[id].quantity}</p>
            {cartLoading
              ? (
                <Spinner
                  style={{
                    height: "15px",
                    width: "15px",
                    marginLeft: "10px"
                  }} />
              ) : (
                <Fragment>
                  <button
                    disabled={cartLoading}
                    className="cart__qty-btn"
                    onClick={() => addOneToQty(cartData[id].id)}
                  >
                    +
                  </button>
                  <button
                    disabled={cartLoading}
                    className="cart__qty-btn"
                    onClick={() => subtractOneFromQty(cartData[id].id)}
                  >
                    -
                  </button>
                </Fragment>
              )
            }
          </div>
          <h4>Price: ${cartData[id].quantity * cartData[id].price}</h4>
        </div>
        <button
          className="cart__remove-btn"
          onClick={() => removeFromCart(cartData[id].id)}
        >
          remove
        </button>
      </div>
    );
  }
}