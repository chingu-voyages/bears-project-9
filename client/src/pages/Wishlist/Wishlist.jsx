import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Modal from "../../components/Modal/Modal";
import WishlistItem from "../../components/WishlistItem/WishlistItem";
import "./Wishlist.sass";

function Wishlist(props) {
  const { addToCart, removeFromWishlist, wishlist } = props;
  return (
    <div className="wishlist">
      {/* <NavBar
        loggedIn={this.props.loggedIn}
        logout={this.props.logout}
      /> */}

      <Modal>
        {modalProps => (
          <section className="wishlist-section">
            <div className="wishlist-card">
              <h2 className="wishlist-title">Wishlist</h2>
              {Object.keys(wishlist).map(key => (
                <WishlistItem
                  {...modalProps}
                  addToCart={addToCart}
                  removeFromWishlist={removeFromWishlist}
                  watch={wishlist[key]}
                  key={key}
                />
              ))}
            </div>
          </section>
        )}
      </Modal>
    </div>
  );
}

export default Wishlist;
