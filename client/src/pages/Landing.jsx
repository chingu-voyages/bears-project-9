import React from "react";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import ProductGrid from "../components/ProductGrid/ProductGrid";

const Landing = props => {
  return (
    <PageWrapper {...props.sharedProps}>
      <ProductGrid
        addToCart={props.addToCart}
        addToWishlist={props.addToWishlist}
        brandFilterValue={props.brandFilterValue}
        filteredData={props.filteredData}
        genderFilterValue={props.genderFilterValue}
        handleProductFilter={props.handleProductFilter}
        resetProductFilter={props.sharedProps.resetProductFilter}
        loggedIn={props.sharedProps.loggedIn}
        priceFilterValue={props.priceFilterValue}
        removeFromWishlist={props.removeFromWishlist}
        watchData={props.watchData}
        wishlist={props.wishlist}
      />
    </PageWrapper>
  );
};

export default Landing;
