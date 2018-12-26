import React, { Component } from "react";
import Modal from "../../components/Modal/Modal";
import WishlistItemModal from "../../components/WishlistItem/WishlistItemModal";
import "./WishlistItem.sass";

class WishlistItem extends Component {
  addToCart = () => {
    // TODO
    alert(
      "<added to cart message - maybe tooltip?>. Replace this button with 'add to cart' button component"
    );
  };

  render() {
    const { item, deleteWishlistItem } = this.props;

    return (
      <div className="wishlist-item" id={item.productId}>
        <Modal>
          {modalProps => (
            <WishlistItemModal
              {...modalProps}
              productURL30={item.productURL30}
              productURL400={item.productURL400}
            />
          )}
        </Modal>
        <div className="wishlist-description">
          {item.productName} - {item.productGender}
        </div>
        <div className="wishlist-price">${item.productPrice}</div>
        <button className="wishlist-delete" onClick={deleteWishlistItem}>
          &times;
        </button>
        <button className="add-to-cart" onClick={this.addToCart}>
          Add to cart
        </button>
      </div>
    );
  }
}

export default WishlistItem;
