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
        brandFilterValue={props.brandFilterValue}
        genderFilterValue={props.genderFilterValue}
        priceFilterValue={props.priceFilterValue}
      />
    </div>
  );
};

export default Landing;
