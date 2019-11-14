/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ProductOption from "./productOption.js";

const ProductOptionList = ({ productOptions, updateChoice }) => (
  <div className="productOptions">
    {productOptions.map((option, idx) => (
      <ProductOption
        optionName={option.optionName}
        choices={option.choices}
        key={idx}
        optionNumber={idx}
        updateChoice={updateChoice}
      />
    ))}
  </div>
);

export default ProductOptionList;
