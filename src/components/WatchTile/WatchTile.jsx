import React from "react";
import "./WatchTile.scss";

const WatchTile = ({ productURL, productName, productPrice }) => (
  <div className="WatchTile">
    <img alt='watch' src={productURL} />
    <div>
      <h3>{productName}</h3>
      <p>{productPrice}</p>
    </div>
  </div>
);

export default WatchTile;
