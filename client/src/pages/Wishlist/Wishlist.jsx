import React from "react";
import Modal from "../../components/Modal/Modal";
import WishlistItem from "../../components/WishlistItem/WishlistItem";
import "./Wishlist.sass";

class Wishlist extends React.Component {
  state = {
    wishlistData: [
      {
        productId: 1,
        productName: "Vesper",
        productPrice: 499.0,
        productURL30: "https://via.placeholder.com/30",
        productURL400: "https://via.placeholder.com/400",
        productBrand: "Cartier",
        productGender: "Unisex"
      },
      {
        productId: 2,
        productName: "Kensington test longer name",
        productPrice: 399.0,
        productURL30: "https://via.placeholder.com/30",
        productURL400: "https://via.placeholder.com/400",
        productBrand: "Omega",
        productGender: "Male"
      },
      {
        productId: 3,
        productName: "Arrow",
        productPrice: 199.0,
        productURL30: "https://via.placeholder.com/30",
        productURL400: "https://via.placeholder.com/400",
        productBrand: "Rolex",
        productGender: "Female"
      }
    ]
  };

  componentWillMount() {
    // TODO:   ajax fetch  Wishlist Data then this.setState(<with the fetched data>)
    // ***** OR **** delete state from this page and gather wishlist data by filtering the fetched data from App.js. for 'isWishlist:true' property *********
  }

  render() {
    // const items = this.state.wishlistData.map((item, i) => (
    //   <WishlistItem item={item} key={i} />
    // ));

    return (
      <div className="wishlist">
        <Modal>
          {modalProps => (
            <section className="wishlist-section">
              <div className="wishlist-card">
                <h2 className="wishlist-title">Wishlist</h2>
                {this.state.wishlistData.map((item, i) => (
                  <WishlistItem
                    {...modalProps}
                    addToCart={this.props.addToCart}
                    item={item}
                    key={i}
                  />
                ))}
              </div>
            </section>
          )}
        </Modal>
      </div>
    );
  }
}

export default Wishlist;
