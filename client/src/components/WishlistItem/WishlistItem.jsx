import React, { PureComponent } from "react";
import "./WishlistItem.sass";

class WishlistItem extends PureComponent {

  itemModal = () => {
    const { addToCart, item } = this.props;
    this.props.setModal({
      body: (
        <img
          className="wishlist-img-modal"
          alt="wishlist-watch"
          src={item.productURL400}
        />
      ),
      buttons: <button onClick={() => addToCart(item.productId)}>Add to cart</button>
    });
  }

  deleteItem = id => {
    let row = document.getElementById(id);
    row.parentNode.removeChild(row);
  };

  render() {
    const { addToCart, item } = this.props;
    const id = "wishlist" + item.productId;

    return (
      <div className="wishlist-item" id={id}>
        <div className="wishlist-img-container">
          <img
            className="wishlist-img"
            alt="wishlist-watch"
            src={item.productURL30}
            onClick={this.itemModal}
          />
        </div>

        <div className="wishlist-description">
          {item.productName} - {item.productGender}
        </div>
        <div className="wishlist-price">${item.productPrice}</div>
        <button
          className="wishlist-delete"
          onClick={this.deleteItem.bind(this, id)}
        >
          &times;
        </button>
        <button className="add-to-cart" onClick={() => addToCart(item.productId)}>
          Add to cart
        </button>
      </div>
    );
  }
}

export default WishlistItem;
