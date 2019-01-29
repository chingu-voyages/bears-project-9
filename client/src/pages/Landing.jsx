import React from "react";
import ProductGrid from "../components/ProductGrid/ProductGrid";


const Landing = props => {

  return (
    // <div>
      <ProductGrid
        addToCart={props.addToCart}
        watchData={props.watchData}
      />
    // </div>
  );

}

export default Landing;
