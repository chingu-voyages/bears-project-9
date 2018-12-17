import React from "react";
import "./ProductGrid.scss";
import WatchTile from "../WatchTile/WatchTile"

const ProductGrid = ({ watchData }) => (
  <div className="productGrid">
      <div className="selectField">
        <select name="Brand" className="selectBox">
          <option value="Brand" disabled selected>Brand</option>
          <option value="Cartier">Cartier</option>
          <option value="Omega">Omega</option>
          <option value="Rolex">Rolex</option>
          <option value="Tag Heuer">Tag Heuer</option>
        </select>

        <select name="Gender" className="selectBox">
          <option value="Gender" disabled selected>Gender</option>
          <option value="Unisex">Unisex</option>
          <option value="Women's">Women's</option>
          <option value="Men's">Men's</option>
        </select>

        <select name="Price" className="selectBox">
          <option value="Price" disabled selected>Price</option>
          <option value="Below $200">Below $200</option>
          <option value="$201-$500">$201-$500</option>
          <option value="$501-$1000">$501-$1000</option>
          <option value="$1000+">$1000+</option>
        </select>
    </div>

    <div className="watchGrid">
      {
        watchData.map((watch, i) => {
          return(
            <WatchTile
              productId={watchData[i].productId}
              productName={watchData[i].productName}
              productPrice={watchData[i].productPrice}
              productURL={watchData[i].productURL}
              key={i}
            />
          );
        })

      }
    </div>
  </div>
);

export default ProductGrid;
