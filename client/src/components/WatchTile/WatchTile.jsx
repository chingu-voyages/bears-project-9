import React from "react";
import "./WatchTile.scss";

const WatchTile = props => {
  const {
    addToCart,
    addToWishlist,
    productId,
    productName,
    productPrice,
    productURL
  } = props;
  return (
    <div className="watchTile">
      <img className="watchURL" alt="watch" src={productURL} />
      <div>
        <h3>{productName}</h3>
        <p>${productPrice}</p>
      </div>
      <div>
        <button onClick={() => addToCart(productId)}>Add to Cart</button>
        <button onClick={() => addToWishlist(productId)}>
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};

export default WatchTile;
