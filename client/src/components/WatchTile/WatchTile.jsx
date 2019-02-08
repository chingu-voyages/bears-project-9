import React, { PureComponent } from "react";

import "./WatchTile.scss";

class WatchTile extends PureComponent {
  render() {
    const {
      addToCart,
      productId,
      productName,
      productPrice,
      productURL
    } = this.props;
    return (
      <div className="watchTile">
        <div>
          <img alt="watch" src={productURL} />
        </div>
        <div>
          <h3>{productName}</h3>
          <p>${productPrice}</p>
        </div>
        <div>
          <button onClick={() => addToCart(productId)}>Add to Cart</button>
        </div>
      </div>
    );
  }
}

export default WatchTile;
