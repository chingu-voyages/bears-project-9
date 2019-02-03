import React from "react";
import "./ProductGrid.scss";
import WatchTile from "../WatchTile/WatchTile";
import AddToWishlist from "../AddToWishlist/AddToWishlist";
import ProductFilter from "../ProductFilter/ProductFilter";

const ProductGrid = props => {
  const {
    loggedIn,
    filteredData,
    wishlist,
    addToWishlist,
    removeFromWishlist,
    addToCart,
    handleProductFilter,
    brandFilterValue,
    genderFilterValue,
    priceFilterValue
  } = props;

  const brandOptions = filteredData
    .map(watch => watch.brand)
    .reduce((opts, brands) => {
      if (!opts.includes(brands)) opts.push(brands);
      return opts;
    }, []);
  brandOptions.unshift("Brand");
  const genderOptions = filteredData
    .map(watch => watch.gender)
    .reduce((opts, genders) => {
      if (!opts.includes(genders)) opts.push(genders);
      return opts;
    }, []);
  genderOptions.unshift("Gender");
  const priceOptions = filteredData
    .map(watch => watch.price)
    .reduce((opts, prices) => {
      if (!opts.includes(prices)) opts.push(prices);
      return opts;
    }, []);
  priceOptions.unshift("Price");

  return (
    <div className="productGrid">
      <div className="selectField">
        <ProductFilter
          categoryName="Brand"
          filterHandler={handleProductFilter}
          options={brandOptions}
          value={brandFilterValue}
        />
        <ProductFilter
          categoryName="Gender"
          filterHandler={handleProductFilter}
          options={genderOptions}
          value={genderFilterValue}
        />
        <ProductFilter
          categoryName="Price"
          filterHandler={handleProductFilter}
          options={priceOptions}
          value={priceFilterValue}
        />
      </div>

      <div className="watchGrid">
        {loggedIn
          ? filteredData.map(watch => {
              const inWishlist = wishlist[watch.id] ? true : false;
              return (
                <AddToWishlist
                  addToWishlist={addToWishlist}
                  removeFromWishlist={removeFromWishlist}
                  inWishlist={inWishlist}
                  productId={watch.id}
                  key={watch.id}
                >
                  <WatchTile
                    addToCart={addToCart}
                    productId={watch.id}
                    productName={watch.name}
                    productDescription={watch.description}
                    productPrice={watch.price}
                    productURL={watch.image400}
                    productBrand={watch.brand}
                    productGender={watch.gender}
                    key={watch.id}
                  />
                </AddToWishlist>
              );
            })
          : filteredData.map(watch => {
              return (
                <WatchTile
                  addToCart={addToCart}
                  productId={watch.id}
                  productName={watch.name}
                  productDescription={watch.description}
                  productPrice={watch.price}
                  productURL={watch.image400}
                  productBrand={watch.brand}
                  productGender={watch.gender}
                  key={watch.id}
                />
              );
            })}
      </div>
    </div>
  );
};

export default ProductGrid;
