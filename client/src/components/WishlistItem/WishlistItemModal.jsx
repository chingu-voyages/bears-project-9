import React from "react";
import "./WishlistItemModal.sass";

const WishlistItemModal = props => {
  // TODO: add to cart button functionality
  const addToCart = () => {
    props.closeModal();
    alert(
      "<added to cart message - maybe tooltip?>. Replace this button with 'add to cart' button component"
    );
  };

  const testModal = () => {
    props.setModal({
      body: (
        <img
          className="wishlist-img-modal"
          alt="wishlist-watch"
          src={props.productURL400}
        />
      ),
      buttons: <button onClick={addToCart}>Add to cart</button>,
      style: {
        width: "500px",
        color: "#850000"
      }
    });
  };

  return (
    <div className="wishlist-img-container">
      <img
        className="wishlist-img"
        alt="wishlist-watch"
        src={props.productURL30}
        onClick={testModal}
      />
    </div>
  );
};

export default WishlistItemModal;
