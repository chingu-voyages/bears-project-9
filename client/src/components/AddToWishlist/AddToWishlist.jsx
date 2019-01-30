import React from "react";
import "./AddToWishlist.scss";

function AddToWishlist(props) {
  const { children, productId, addToWishlist, removeFromWishlist } = props;
  const dark = "fas fa-heart wishlist-dark";
  const white = "fas fa-heart wishlist-white";
  let className = props.inWishlist ? dark : white;

  const handleClick = () => {
    if (className === white) {
      addToWishlist(productId);
      className = dark;
    } else {
      removeFromWishlist(productId);
      className = white;
    }
  };

  return (
    <div className="add-to-wishlist">
      <span onClick={handleClick}>
        <i className={className} />
      </span>
      {children}
    </div>
  );
}

export default AddToWishlist;
