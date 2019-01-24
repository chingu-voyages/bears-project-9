import React, { PureComponent } from "react";
// import Modal from "../../components/Modal/Modal";
// import WishlistItemModal from "../../components/WishlistItem/WishlistItemModal";
import "./WishlistItem.sass";

class WishlistItem extends PureComponent {

  itemModal = () => {
    const { item } = this.props;
    this.props.setModal({
      body: (
        <img
          className="wishlist-img-modal"
          alt="wishlist-watch"
          src={item.productURL400}
        />
      ),
      buttons: <button onClick={this.addToCart}>Add to cart</button>
      // style: {
      //   width: "500px",
      //   color: "#850000"
      // }
    });
  }

  addToCart = () => {
    // TODO
    alert(
      "<added to cart message - maybe tooltip?>. Replace this button with 'add to cart' button component"
    );
  };

  deleteItem = id => {
    let row = document.getElementById(id);
    row.parentNode.removeChild(row);
  };

  render() {
    const { item } = this.props;
    const id = "wishlist" + item.productId;

    return (
      <div className="wishlist-item" id={id}>
        {/* <Modal>
          {modalProps => (
            <WishlistItemModal
              {...modalProps}
              productURL30={item.productURL30}
              productURL400={item.productURL400}
            />
          )}
        </Modal> */}

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
        <button className="add-to-cart" onClick={this.addToCart}>
          Add to cart
        </button>
      </div>
    );
  }
}

export default WishlistItem;
