import React, { PureComponent } from "react";
import "./ProductFilter.scss";

class ProductFilter extends PureComponent {
  render() {
    let { categoryName } = this.props;
    const { filterHandler, options, value } = this.props;

    function handleChange(evt) {
      const value = evt.target.value;
      categoryName = categoryName.toLowerCase();
      let catAndVal = {};
      catAndVal[categoryName] = value;
      filterHandler(catAndVal);
    }

    const optionsList = options.map((opt, i) => {
      return i === 0 ? (
        <option key={opt} value="">
          {opt}
        </option>
      ) : (
          <option key={opt} value={opt}>
            {opt}
          </option>
        );
    });

    return (
      <select
        name={categoryName}
        className="selectBox"
        onChange={handleChange}
        value={value}
      >
        {optionsList}
      </select>
    );
  }
};

export default ProductFilter;
