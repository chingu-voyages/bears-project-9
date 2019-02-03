import React from "react";

import "./WatchTile.scss";

const WatchTile = props => {
  const { addToCart, productId, productName, productPrice, productURL } = props;
  return (
    <div className="watchTile">
      <img alt="watch" src={productURL} />
      <div>
        <h3>{productName}</h3>
        <p>${productPrice}</p>
      </div>
      <div>
        <button onClick={() => addToCart(productId)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default WatchTile;
