import React, { PureComponent } from "react";
import "./WishlistItem.sass";

class WishlistItem extends PureComponent {
  itemModal = () => {
    const { addToCart, watch } = this.props;
    const { id, image400 } = watch;

    this.props.setModal({
      body: (
        <img
          className="wishlist-img-modal"
          alt="wishlist-watch"
          src={image400}
        />
      ),
      buttons: <button onClick={() => addToCart(id)}>Add to cart</button>
    });
  };

  render() {
    const { addToCart, removeFromWishlist, watch } = this.props;
    console.log(watch)
    const { id, name, price, gender, image30 } = watch;
    const altDesc = `${name} - ${gender}`;
    const imageURL = image30
      ? image30
      : "https://via.placeholder.com/30/92c952";

    return (
      <div className="wishlist-item" id={id}>
        <div className="wishlist-img-container">
          <img
            className="wishlist-img"
            alt={altDesc}
            src={imageURL}
            onClick={this.itemModal}
          />
        </div>

        <div className="wishlist-description">
          {name} - {gender}
        </div>
        <div className="wishlist-price">${price}</div>
        <button
          className="wishlist-delete"
          onClick={() => removeFromWishlist(id)}
        >
          &times;
        </button>
        <button className="add-to-cart" onClick={() => addToCart(id)}>
          Add to cart
        </button>
      </div>
    );
  }
}

export default WishlistItem;
