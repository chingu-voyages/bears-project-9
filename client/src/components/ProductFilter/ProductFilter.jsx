import React from "react";
import "./ProductFilter.scss";

class ProductFilter extends React.Component {
  state = {
    value: this.props.categoryName
  };

  handleChange = evt => {
    const value = evt.target.value;
    let categoryName = this.props.categoryName.toLowerCase();
    let catAndVal = {};
    catAndVal[categoryName] = value;
    this.setState({ value });
    this.props.filterHandler(catAndVal);
  };

  render() {
    const { categoryName, options } = this.props;
    const optionsList = options.map(opt => (
      <option key={opt} value={opt}>
        {opt}
      </option>
    ));

    return (
      <select
        name={categoryName}
        className="selectBox"
        onChange={this.handleChange}
        value={this.state.value}
      >
        <option value="">{categoryName}</option>
        {optionsList}
      </select>
    );
  }
}

export default ProductFilter;
