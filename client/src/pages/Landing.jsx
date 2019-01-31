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
        filteredData={props.filteredData}
        wishlist={props.wishlist}
        loggedIn={props.loggedIn}
        handleProductFilter={props.handleProductFilter}
      />
    </div>
  );
};

export default Landing;
