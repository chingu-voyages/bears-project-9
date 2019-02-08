import React from "react";
import Modal from "../../components/Modal/Modal";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import WishlistItem from "../../components/WishlistItem/WishlistItem";
import "./Wishlist.scss";

function Wishlist(props) {
  const { addToCart, removeFromWishlist, sharedProps, wishlist } = props;
  return (
    <PageWrapper {...sharedProps}>
      <div className="wishlist">
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
    </PageWrapper>
  );
}

export default Wishlist;
