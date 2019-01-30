import React from "react";
import ProductGrid from "../components/ProductGrid/ProductGrid";

const Landing = props => {
  return (
    <div>
      <ProductGrid
        addToCart={props.addToCart}
        addToWishlist={props.addToWishlist}
        removeFromWishlist={props.removeFromWishlist}
        watchData={props.watchData}
        wishlist={props.wishlist}
        loggedIn={props.loggedIn}
      />
    </div>
  );
};

export default Landing;
